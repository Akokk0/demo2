// 获取dom元素
function $(id){
    return document.getElementById(id);
}

// 立即执行函数
(function () {
    $('cardCode').addEventListener('blur', () => {
        checkCardCode()
    })

    $('password').addEventListener('blur', () => {
        checkPwd()
    })

    $('password2').addEventListener('blur', () => {
        checkPwdDB()
    })

    $('btn').addEventListener('click', () => {
        login()
    })

})()

// 检查校园卡号
function checkCardCode() {
    // 获取错误框
    let error = $('error')
    // 将错误框文本内容置空
    error.innerText = "";
    // 获取卡号dom对象
    let cardCode = $("cardCode").value;
    // 1.判断校园卡号是否为空
    if(cardCode == "" || cardCode == null) {
        error.innerText = "校园卡号不能为空";
        // 为空或为空字符串直接返回
        return;
    }
    // 2.长度必须为4——20位
    if(cardCode.length < 4 || cardCode.length > 20) {
        error.innerText = "长度在4~20之间";
        // 遇到错误就终止，返回
        return;
    }
    // 3.以英文字母开头，只能包含英文字母、数字、下划线
    // /^[a-zA-Z][a-zA-Z0-9_]*$/正则表达式
    let codeMatch = /^[a-zA-Z][a-zA-Z0-9_]*$/
    if(!cardCode.match(codeMatch)) {
        error.innerText = "只能以英文字母开头，包含英文字母、数字、下划线";
        return;
    }
    // 返回成功
    return cardCode;
}

function checkPwd() {
    // 检查口令
    let error = $('error')
    // 将错误框内容置空
    error.innerText ="";
    // 获取密码输入dom
    let userPwd = $("password").value;
    // 1.不能为空
    if(userPwd == "" || userPwd == null){
        error.innerText = "密码不能为空";
        // 遇到错误就终止，返回
        return;
    }
    // 2.长度必须为8——25位
    if(userPwd.length < 8 || userPwd.length > 25){
        error.innerText = "密码长度为8~25位";
        // 遇到错误就终止，返回
        return;
    }
}

// 检查二次口令
function checkPwdDB() {
    // 获取错误框
    let error = $('error')
    // 获取输入的卡号
    let userPwd = $("password").value;
    let userPwdDB = $("password2").value;
    // 将错误框内容置空
    error.innerText = "";
    // 判断密码是否为空或者为空字符串
    if(userPwdDB == "" || userPwdDB == null){
        error.innerText = "确认密码不能为空";
        // 密码为空直接返回
        return;
    }
    // 判断两次密码是否一致
    if(userPwdDB != userPwd){
        error.innerText = "输入的两次密码不一致";
        // 密码不一致直接返回
        return;
    }
    // 返回成功
    return userPwdDB;
}

function login() {
    // 再次校验
    let cardCode = checkCardCode()
    let password = checkPwdDB()
    // 判断用户名密码是否校验成功
    if (cardCode && password) {
        // 判断用户名和密码是否正确
        if (cardCode === 'suser' || cardCode === 'admin' && password === '12345678') {
            // 跳转到成功页面
            location.href = `success.html?username=${cardCode}&password=${password}`
        } else {
            // 获取错误框对象
            $('error').innerText = '密码或卡号错误！'
        }
    }
}
