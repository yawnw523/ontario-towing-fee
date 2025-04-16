// DOM元素
const destinationInput = document.getElementById('destinationCity');
const suggestionsList = document.getElementById('citySuggestions');
const queryForm = document.getElementById('queryForm');
const resultCard = document.getElementById('resultCard');
const resultCity = document.getElementById('resultCity');
const resultBaseRate = document.getElementById('resultBaseRate');
const resultFsc = document.getElementById('resultFsc');
const resultTotalRate = document.getElementById('resultTotalRate');
const resultZone = document.getElementById('resultZone');
const searchStatus = document.getElementById('searchStatus');
const clearInputBtn = document.getElementById('clearInput');
const searchHistory = document.getElementById('searchHistory');
const historyTags = document.querySelector('.history-tags');
const waitingTimeInfo = document.getElementById('waitingTimeInfo');
const waitingTimeDetails = document.getElementById('waitingTimeDetails');
const fscRow = document.getElementById('fscRow');

// 常量
const MAX_HISTORY = 5;
const FSC_RATE = 0.25; // 25% 燃油附加费
const WAITING_TIME_RATE = 65; // 每小时等时费用

// 初始化
let searchHistoryData = JSON.parse(localStorage.getItem('searchHistory') || '[]');
updateSearchHistory();

// 计算费用
function calculateRates(city, moveType) {
    let baseRate = city.rate;
    let fsc = 0;
    let totalRate = baseRate;
    
    // 根据区域和拖柜模式计算费用
    if (city.zone === 'ZONE1' || city.zone === 'ZONE2') {
        // ZONE1和ZONE2的价格固定
        baseRate = city.zone === 'ZONE1' ? 415 : 515;
        totalRate = baseRate;
    } else {
        // 其他城市
        if (moveType === 'drop') {
            baseRate = city.rate * 2;
        }
        // 计算燃油附加费
        fsc = baseRate * FSC_RATE;
        totalRate = baseRate + fsc;
    }
    
    return {
        baseRate,
        fsc,
        totalRate
    };
}

// 获取等时费用说明
function getWaitingTimeDescription(zone) {
    if (zone === 'ZONE1' || zone === 'ZONE2') {
        return `前1小时免费，之后每小时 $${WAITING_TIME_RATE}`;
    } else {
        return `前2小时免费，之后每小时 $${WAITING_TIME_RATE}`;
    }
}

// 搜索城市
function searchCities(query) {
    query = query.toUpperCase();
    
    // 支持拼音和部分匹配
    return cityData
        .filter(city => {
            const cityName = city.city.toUpperCase();
            return cityName.includes(query) || 
                   (query.length >= 2 && cityName.split(' ').some(part => part.startsWith(query)));
        })
        .slice(0, 10);
}

// 显示搜索状态
function toggleSearchStatus(show) {
    searchStatus.classList.toggle('d-none', !show);
}

// 显示城市建议
function showSuggestions(matches) {
    suggestionsList.innerHTML = '';
    if (matches.length > 0) {
        matches.forEach(city => {
            const li = document.createElement('li');
            li.className = 'list-group-item suggestion-item';
            li.innerHTML = city.city;
            if (city.zone) {
                li.innerHTML += ` <span class="badge badge-${city.zone.toLowerCase()}">${city.zone}</span>`;
            }
            li.addEventListener('click', () => selectCity(city));
            suggestionsList.appendChild(li);
        });
        suggestionsList.classList.remove('d-none');
    } else {
        suggestionsList.classList.add('d-none');
    }
}

// 选择城市
function selectCity(city) {
    destinationInput.value = city.city;
    suggestionsList.classList.add('d-none');
    showResult(city);
    addToHistory(city);
}

// 显示查询结果
function showResult(city) {
    const moveType = document.querySelector('input[name="moveType"]:checked').value;
    const rates = calculateRates(city, moveType);
    
    resultCity.textContent = city.city;
    resultBaseRate.textContent = `$${rates.baseRate.toFixed(2)}`;
    
    // 显示或隐藏燃油附加费
    if (city.zone === 'ZONE1' || city.zone === 'ZONE2') {
        fscRow.classList.add('d-none');
    } else {
        fscRow.classList.remove('d-none');
        resultFsc.textContent = `$${rates.fsc.toFixed(2)}`;
    }
    
    resultTotalRate.textContent = `$${rates.totalRate.toFixed(2)}`;
    
    // 设置区域标签样式
    const zoneText = city.zone || 'other';
    resultZone.textContent = zoneText;
    resultZone.className = `badge badge-${zoneText.toLowerCase()}`;
    
    // 显示等时费用说明
    waitingTimeDetails.textContent = getWaitingTimeDescription(city.zone);
    waitingTimeInfo.classList.remove('d-none');
    
    resultCard.classList.remove('d-none');
}

// 添加到搜索历史
function addToHistory(city) {
    const index = searchHistoryData.findIndex(item => item.city === city.city);
    if (index !== -1) {
        searchHistoryData.splice(index, 1);
    }
    searchHistoryData.unshift(city);
    if (searchHistoryData.length > MAX_HISTORY) {
        searchHistoryData.pop();
    }
    localStorage.setItem('searchHistory', JSON.stringify(searchHistoryData));
    updateSearchHistory();
}

// 更新搜索历史显示
function updateSearchHistory() {
    if (searchHistoryData.length > 0) {
        historyTags.innerHTML = searchHistoryData
            .map(city => `
                <span class="history-tag" data-city="${city.city}">
                    ${city.city}
                </span>
            `)
            .join('');
        searchHistory.classList.remove('d-none');
    } else {
        searchHistory.classList.add('d-none');
    }
}

// 事件监听器
destinationInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query.length >= 1) {
        toggleSearchStatus(true);
        setTimeout(() => {
            const matches = searchCities(query);
            showSuggestions(matches);
            toggleSearchStatus(false);
        }, 300);
    } else {
        suggestionsList.classList.add('d-none');
    }
});

clearInputBtn.addEventListener('click', () => {
    destinationInput.value = '';
    suggestionsList.classList.add('d-none');
    destinationInput.focus();
});

queryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = destinationInput.value.trim().toUpperCase();
    const city = cityData.find(c => c.city === query);
    
    if (city) {
        showResult(city);
        addToHistory(city);
    } else {
        alert('未找到该城市，请重新输入');
    }
});

// 搜索历史点击事件
historyTags.addEventListener('click', (e) => {
    if (e.target.classList.contains('history-tag')) {
        const cityName = e.target.dataset.city;
        const city = cityData.find(c => c.city === cityName);
        if (city) {
            selectCity(city);
        }
    }
});

// 点击页面其他地方时隐藏建议列表
document.addEventListener('click', (e) => {
    if (!e.target.matches('#destinationCity') && 
        !e.target.matches('.suggestion-item') && 
        !e.target.closest('#citySuggestions')) {
        suggestionsList.classList.add('d-none');
    }
}); 