import {test,expect,Locator, Page} from "@playwright/test";
import {Project_Common} from "../utils/project_common.ts";

export class LoginPageObjects{

    page: Page;
    BtnLogin : Locator;

//constructor 
constructor(page : Page)
{
    this.page = page;
    this.BtnLogin = page.getByRole('button', { name: 'Login' });
}

async loginfunctionality(email: string, password: string)
{
    await this.page.goto(Project_Common.BaseURL);

}
}