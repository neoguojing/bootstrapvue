export default class RegisterData {
    UserName: string;
    Password: string;
    Gender: number;
    Pic: object|null;
    Email: string;
    Tel: string
    Birthday: string

    constructor() {
        this.UserName = "";
        this.Password = "";
        this.Gender = 0;
        this.Pic = null;
        this.Email = "";
        this.Tel = "";
        this.Birthday = "1988-10-11";
    }
}