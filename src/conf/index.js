const config = {
    baseURL :"http://10.198.20.93:10000",
    
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
    urlUpload:"/api/v1/admin/Upload",
    // resume
    urlGetResume :"/api/v1/resume/QueryResume",
    urlGetResumes :"/api/v1/resume/QueryResumes",
    urlAddResume :"/api/v1/resume/AddResume",
    urlDeleteResume :"/api/v1/resume/DeleteResume",
    urlUpdateResume :"/api/v1/resume/UpdateResume",

}

export default config;