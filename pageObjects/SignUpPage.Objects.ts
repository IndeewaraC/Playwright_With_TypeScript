import { Page, test, expect, Locator } from "@playwright/test";
import { Project_Common } from "../utils/project_common.ts";

export class SignUpObjects extends Project_Common {
    BtnsignUp: Locator;
    initialNameInput: Locator;
    initialEmailInput: Locator;

    //signup page locators
    nameInput: Locator;
    emailInput: Locator;
    mrRadio: Locator;
    mrsRadio: Locator;
    dayDropdown: Locator;
    monthDropdown: Locator;
    yearDropdown: Locator;
    newsletterCheckbox: Locator;
    specialOffersCheckbox: Locator;
    createAccountBtn: Locator;
    passwordInput: Locator;
    firstNameInput: Locator;


    //constructor
    constructor(page: Page) {
        super(page);
        //login page specific locators

        this.BtnsignUp = page.getByRole('button', { name: 'Signup' });
        this.initialNameInput = page.getByPlaceholder('Name');
        this.initialEmailInput = page.locator('[data-qa="signup-email"]');

        //signupPage specific locators

        this.nameInput = page.locator('[data-qa="name"]');
        this.emailInput = page.locator('[data-qa="email"]');
        this.mrRadio = page.locator('#id_gender1');
        this.mrsRadio = page.locator('#id_gender2');
        this.dayDropdown = page.locator('[data-qa="days"]');
        this.monthDropdown = page.locator('[data-qa="months"]');
        this.yearDropdown = page.locator('[data-qa="years"]');
        this.newsletterCheckbox = page.locator('#newsletter');
        this.specialOffersCheckbox = page.locator('#optin');
        this.createAccountBtn = page.locator('[data-qa="create-account"]');
        this.passwordInput = page.locator('[data-qa="password"]');
        this.firstNameInput = page.locator('[data-qa="first_name"]');
    }

    async fillsfromLoginpagetoSignUppage(name: string, email: string) {
        await this.gotoLoginPage();
        await this.initialNameInput.fill(name);
        await this.initialEmailInput.fill(email);
        await this.BtnsignUp.click();
        
    }


}