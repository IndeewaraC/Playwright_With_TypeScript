import { Locator, Page } from "@playwright/test";

export class Project_Common {

    readonly page: Page;
    readonly logInLink: Locator;
    readonly EmailAddress: Locator;
    readonly Password: Locator;
    static BaseURL: string = "https://automationexercise.com/";

    constructor(page: Page) {
        this.page = page;
        this.logInLink = page.getByRole('link', { name: ' Signup / Login' });
        this.EmailAddress = page.getByPlaceholder('Email Address');
        this.Password = page.getByPlaceholder('Password');
    }

    async gotoHomePage() {
        await this.page.goto(Project_Common.BaseURL);
    }
    async gotoLoginPage() {
        await this.gotoHomePage();
        await this.logInLink.click();
    }

}