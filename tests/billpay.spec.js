import {test,expect} from '@playwright/test';
import {loginpara} from '../pages/login.js';
test(' Bill Pay', async ({ page }) => {

const loginpage = new loginpara(page);
await loginpage.login("testparticipant1203","1234567");
await expect(page.getByText("Welcome")).toBeVisible();
await page.getByRole('link', { name: 'Bill Pay' }).click();
await page.locator('input[name="payee.name"]').fill("Tejas Kumar");
await page.locator('input[name="payee.address.street"]').fill("Bokaro");
await page.locator('input[name="payee.address.city"]').fill("Ranchi");
await page.locator('input[name="payee.address.state"]').fill("Jharkhand");
await page.locator('input[name="payee.address.zipCode"]').fill("122001");
await page.locator('input[name="payee.phoneNumber"]').fill("7549487004");
await page.locator('input[name="payee.accountNumber"]').fill("123445678");
await page.locator('input[name="verifyAccount"]').fill("123445678");
await page.locator('input[name="amount"]').fill("785768");
await page.getByRole('button',{name :'SEND PAYMENT'}).click()
await page.screenshot({path:'billpay.png'});

})
