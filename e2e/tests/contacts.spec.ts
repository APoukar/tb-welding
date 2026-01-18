import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Contact Section', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
    // Wait for React app to fully hydrate
    await page.waitForLoadState('networkidle');
    await homePage.navigateToContacts();
    await homePage.waitForAnimations();
  });

  test('should display contact heading', async () => {
    await expect(homePage.contactsHeading).toBeVisible();
  });

  test('should display business name', async ({ page }) => {
    await expect(page.getByText('TB Welding - Tomáš Bičej')).toBeVisible();
  });

  test('should display location', async ({ page }) => {
    await expect(page.getByText('Ostrava – Poruba')).toBeVisible();
  });

  test('should display phone number', async () => {
    await expect(homePage.phoneLink).toBeVisible();
  });

  test('should display email address', async () => {
    await expect(homePage.emailLink).toBeVisible();
  });

  test('should have correct phone link href', async () => {
    const href = await homePage.phoneLink.getAttribute('href');
    expect(href).toBe('tel:+420775492685');
  });

  test('should have correct email link href', async () => {
    const href = await homePage.emailLink.getAttribute('href');
    expect(href).toBe('mailto:tbwelding@seznam.cz');
  });

  test('should display service area information', async ({ page }) => {
    await expect(page.getByText('Zakázky po celé ČR')).toBeVisible();
  });

  test('phone link should be clickable', async () => {
    await expect(homePage.phoneLink).toBeEnabled();
  });

  test('email link should be clickable', async () => {
    await expect(homePage.emailLink).toBeEnabled();
  });
});
