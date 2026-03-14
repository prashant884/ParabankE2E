export class loginpara {

    constructor(page) {
        this.page     = page;
        this.username = this.page.locator('input[name="username"]');
        this.password = this.page.locator('input[name="password"]');
        this.button   = this.page.locator('input[value="Log In"]');
    }

    async login(username, password) {
        await this.page.goto("https://parabank.parasoft.com/");
        await this.username.fill(username);
        await this.password.fill(password);
        await this.button.click();
    }
}



