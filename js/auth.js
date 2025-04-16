// 简单的加密函数
function encrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return btoa(result);
}

// 简单的解密函数
function decrypt(text, key) {
    text = atob(text);
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}

// 检查登录状态
function checkAuth() {
    const token = localStorage.getItem('auth_token');
    if (!token) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// 登录函数
function login(username, password) {
    // 这里可以设置多个用户账号
    const validUsers = {
        'admin': 'panex2024',
        'user1': 'password1'
    };

    if (validUsers[username] === password) {
        const token = encrypt(username + Date.now(), 'panex-secret');
        localStorage.setItem('auth_token', token);
        localStorage.setItem('last_login', Date.now());
        return true;
    }
    return false;
}

// 登出函数
function logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('last_login');
    window.location.href = 'login.html';
}

// 会话超时检查
function checkSessionTimeout() {
    const lastLogin = localStorage.getItem('last_login');
    if (lastLogin) {
        const timeoutDuration = 30 * 60 * 1000; // 30分钟超时
        if (Date.now() - parseInt(lastLogin) > timeoutDuration) {
            logout();
            return false;
        }
    }
    return true;
} 