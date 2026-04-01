import { test, expect, Page } from '@playwright/test';
//Import Page Objects
import { LoginPageObjects } from '../pageObjects/loginPage.Objects.ts';
import { SignUpObjects } from '../pageObjects/SignUpPage.Objects.ts';
//import test Data
import { Project_Common } from '../utils/project_common';
import { loginData } from '../data_files/Login.Data.ts'
import { signUpData } from '../data_files/signUp.Data.ts';

test.describe('Signup Functionality @WEB', () => {

    for (const data of signUpData) {
        test(`User able to signup with ${data.title}`, async ({ page }) => {
            const signUpPage = new SignUpObjects(page);
            await signUpPage.fillsfromLoginpagetoSignUppage(data.name, data.email);

            if (data.expectedToPass) {
                await expect(page).toHaveURL(`${Project_Common.BaseURL}signup`);
                //assertions can be added here based on the expected outcome after form submission
                await expect(signUpPage.page).toHaveTitle(/Automation Exercise - Signup/);
                //assertions by H2 element
                await expect(signUpPage.page.getByText('Enter Account Information')).toBeVisible();
                await expect(signUpPage.page.getByText('Address Information')).toBeVisible();
                //Name and Email already exist assertion
                await expect(signUpPage.nameInput).toBeVisible();
                await expect(signUpPage.nameInput).toHaveValue(data.name);
                await expect(signUpPage.emailInput).toBeVisible();
                await expect(signUpPage.nameInput).toBeEditable();
                await expect(signUpPage.emailInput).toHaveValue(data.email);
                await expect(signUpPage.emailInput).toBeDisabled();

                //front elements assertions
                await expect(signUpPage.mrRadio).not.toBeChecked();
                await expect(signUpPage.mrsRadio).not.toBeChecked();

                //dropdowns for date of birth
                await expect(signUpPage.dayDropdown).toBeVisible();
                await expect(signUpPage.monthDropdown).toBeVisible();
                await expect(signUpPage.yearDropdown).toBeVisible();

                //newsleters and offers checkboxes assertions
                await expect(signUpPage.newsletterCheckbox).not.toBeChecked();
                await expect(signUpPage.specialOffersCheckbox).not.toBeChecked();
            } else {
                await expect(page).toHaveURL(`${Project_Common.BaseURL}login`);
                await expect(signUpPage.BtnsignUp).toBeVisible();
            }
        });
    }

});