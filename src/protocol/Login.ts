export default class LoginData {
    Account: string;
    Password: string;
    Type: number;
    IsRemember: number;

    constructor() {
        this.Account = "";
        this.Password = "";
        this.Type = 0;
        this.IsRemember = 0;
    }
}