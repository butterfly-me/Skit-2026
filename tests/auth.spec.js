const { test, expect } = require('@playwright/test');

test('Успешна најава на корисник на SauceDemo', async ({ page }) => {
    // 1. Оди на сајтот (Playwright сам отвара прелистувач)
    await page.goto('https://www.saucedemo.com/');

    // 2. Лоцирај ги полињата и внеси податоци
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // 3. Кликни на копчето за најава
    await page.locator('[data-test="login-button"]').click();

    // 4. Провери дали успешно сме пренасочени на страницата со производи (URL проверка)
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // 5. Провери дали се гледа главниот наслов "Products" на продавницата
    const title = page.locator('.title');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('Products');
});