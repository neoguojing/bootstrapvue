export default class LoginData {
    account: string;
    password: string;
    type: number;
    isRemember: number;

    constructor() {
        this.account = "";
        this.password = "";
        this.type = 0;
        this.isRemember = 0;
    }
}