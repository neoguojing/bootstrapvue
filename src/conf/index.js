const config = {
    baseURL :"http://172.22.42.177:10000",
    
    //无需登录
    urlLogin :"/api/v1/Login",
    urlLookBackPassWord :"/api/v1/LookBackPassWord",
    urlRegister :"/api/v1/Register",
    //需要登录
    urlGetUserInfo :"/api/v1/admin/QueryUserInfo",
    urlRefreshToken :"/api/v1/admin/RefreshToken",
    urlQueryUserInfos :"/api/v1/admin/QueryUserInfos",
    urlResetPassword :"/api/v1/admin/ResetPassword",
    urlLogout :"/api/v1/admin/Logout",
    urlUpdateUserInfo:"/api/v1/admin/UpdateUserInfo",
}

export default config;