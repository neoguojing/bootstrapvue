const config = {
    baseURL :"http://172.25.159.128:8000",
    
    //无需登录
    urlLogin :"/api/v1/anon/Login",
    urlLookBackPassWord :"/api/v1/anon/LookBackPassWord",
    urlRegister :"/api/v1/anon/Register",
    //需要登录
    urlGetLoginInfo :"/api/v1/admin/QueryUserInfo",
    urlRefreshToken :"/api/v1/admin/RefreshToken",
    urlQueryUserInfos :"/api/v1/admin/QueryUserInfos",
    urlResetPassword :"/api/v1/admin/ResetPassword",
    urlLogout :"/api/v1/admin/Logout",
}

export default config;