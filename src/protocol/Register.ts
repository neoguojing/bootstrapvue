export default class RegisterData {
    userName: string;
    password: string;
    gender: number;
    pic: object|null;
    email: string;
    tel: string
    birthday: string

    constructor() {
        this.userName = "";
        this.password = "";
        this.gender = 0;
        this.pic = null;
        this.email = "";
        this.tel = "";
        this.birthday = "1988-10-11";
    }
}