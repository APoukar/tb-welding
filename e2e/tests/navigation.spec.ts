import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Navigation', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('should display all navigation menu items', async () => {
    await expect(homePage.menuServices).toBeVisible();
    await expect(homePage.menuAbout).toBeVisible();
    await expect(homePage.menuQualifications).toBeVisible();
    await expect(homePage.menuContacts).toBeVisible();
    await expect(homePage.ctaButton).toBeVisible();
  });

  test('should scroll to Services section when clicking Služby', async () => {
    await homePage.navigateToServices();
    await homePage.waitForAnimations();
    await expect(homePage.servicesHeading).toBeInViewport();
  });

  test('should scroll to About section when clicking O mně', async () => {
    await homePage.navigateToAbout();
    await homePage.waitForAnimations();
    await expect(homePage.aboutHeading).toBeInViewport();
  });

  test('should scroll to Qualification section when clicking Kvalifikace', async () => {
    await homePage.navigateToQualifications();
    await homePage.waitForAnimations();
    await expect(homePage.qualificationHeading).toBeInViewport();
  });

  test('should scroll to Contacts section when clicking Kontakt', async () => {
    await homePage.navigateToContacts();
    await homePage.waitForAnimations();
    await expect(homePage.contactsHeading).toBeInViewport();
  });

  test('should have CTA button with correct mailto href', async () => {
    const href = await homePage.ctaButton.getAttribute('href');
    expect(href).toContain('mailto:tbwelding@seznam.cz');
    expect(href).toContain('subject=');
  });
});
