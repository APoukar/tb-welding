import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Accessibility', () => {
  test('all images should have alt text', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    // Scroll through the page to load all images
    await homePage.navigateToServices();
    await homePage.waitForAnimations();
    await homePage.navigateToContacts();
    await homePage.waitForAnimations();

    // Go back to top
    await homePage.goto();

    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt, `Image ${i} should have alt text`).toBeTruthy();
    }
  });

  test('navigation should be keyboard accessible', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    // Tab to first menu item
    await page.keyboard.press('Tab');

    // Continue tabbing to find interactive elements
    for (let i = 0; i < 10; i++) {
      const focused = page.locator(':focus');
      const tagName = await focused.evaluate(el => el.tagName.toLowerCase()).catch(() => null);

      if (tagName === 'button' || tagName === 'a') {
        await expect(focused).toBeVisible();
        break;
      }
      await page.keyboard.press('Tab');
    }
  });

  test('links should have descriptive text', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.navigateToContacts();
    await homePage.waitForAnimations();

    // Phone link should have readable phone number
    const phoneText = await homePage.phoneLink.textContent();
    expect(phoneText).toMatch(/\d/);

    // Email link should have readable email
    const emailText = await homePage.emailLink.textContent();
    expect(emailText).toContain('@');
  });

  test('page should have main heading', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    const h1 = page.getByRole('heading', { level: 1 });
    await expect(h1.first()).toBeVisible();
  });

  test('section headings should be present', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    // Check that section headings exist (use exact match to avoid duplicates)
    await expect(page.getByRole('heading', { name: 'Služby', exact: true })).toBeAttached();
    await expect(page.getByRole('heading', { name: 'O mně', exact: true })).toBeAttached();
    await expect(page.getByRole('heading', { name: 'Kvalifikace', exact: true })).toBeAttached();
    await expect(page.getByRole('heading', { name: 'Kontakt', exact: true })).toBeAttached();
  });

  test('interactive elements should be focusable', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    // Navigation buttons should be focusable
    await homePage.menuServices.focus();
    await expect(homePage.menuServices).toBeFocused();

    await homePage.ctaButton.focus();
    await expect(homePage.ctaButton).toBeFocused();
  });
});
