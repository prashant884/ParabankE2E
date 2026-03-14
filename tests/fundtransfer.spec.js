import { test , expect} from '@playwright/test';
import {loginpara} from '../pages/login';
import {fundtransfer} from '../utills/testdata';
test(' fund transfer', async ({ page }) => {

    const loginpage = new loginpara (page);

    await page.goto("https://parabank.parasoft.com/");
    await loginpage.login("testparticipant1203","1234567");
    await expect(page.getByText("Welcome")).toBeVisible();
    await page.screenshot({ path: 'login.png' });
    await page.getByText("Transfer Funds").click();
    await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/transfer.htm");
    await page.screenshot({ path: 'fund.png' });
    await page.getByText("Amount: $").click();
    await page.locator('input[id="amount"]').fill("6000");
//     await page.selectOption('#fromAccountId', { index: 1 });
//    await page.selectOption('#toAccountId', { index: 1 });
     await page.getByRole('button', { name: 'Transfer' }).click();
    await expect(page.getByText("Transfer Complete")).toBeVisible();
    await page.screenshot({path: 'fundtransferreddd.png'});



})