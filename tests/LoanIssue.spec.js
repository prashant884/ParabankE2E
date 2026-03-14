import {test,expect} from '@playwright/test';
import {loginpara} from '../pages/login.js';
test(' Bill Pay', async ({ page }) => {

    const loginpage = new loginpara(page);
    await loginpage.login("testparticipant1203","1234567");
    await page.getByText('Request Loan').click();
   await page.locator('#amount').fill('50');
await page.locator('#downPayment').fill('5');
    await page.getByRole('button', { name: 'Apply Now' }).click();
    
    await expect(page.getByText("Loan Request Processed")).toBeVisible();
await page.screenshot({path:"Loanissue.png"});


})