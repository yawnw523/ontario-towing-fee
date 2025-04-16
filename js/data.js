// 使用简单加密存储价格数据
const _0x5f2d = [
    'base64',
    'prices',
    'zones',
    'decrypt',
    'parse',
    'getPrice',
    'toUpperCase',
    'find',
    'city',
    'baseRate',
    'zone'
];

const _0x3b4c = function(key) {
    return _0x5f2d[key - 0];
};

// 加密后的价格数据（示例）
const _0x2e1a = {
    _data: 'EnCrYpTeD_DaTa_HeRe==', // 这里将是您的实际加密数据
    _key: 'panex-secret',
    
    getPriceData: function() {
        const decrypted = decrypt(this._data, this._key);
        return JSON.parse(decrypted);
    },
    
    findPrice: function(cityName) {
        const data = this.getPriceData();
        const city = cityName.toUpperCase();
        return data.prices.find(p => p.city === city);
    },
    
    getZone: function(cityName) {
        const price = this.findPrice(cityName);
        return price ? price.zone : null;
    }
};

// 导出加密后的接口
window.PriceData = {
    getPrice: function(city) {
        return _0x2e1a.findPrice(city);
    },
    getZone: function(city) {
        return _0x2e1a.getZone(city);
    }
};