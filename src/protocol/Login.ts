export default class LoginData {
    account: string;
    password: string;
    isRemember: number;

    constructor() {
        this.account = "";
        this.password = "";
        this.isRemember = 0;
    }
}