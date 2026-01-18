import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Full User Journey', () => {
  test('complete site navigation flow', async ({ page }) => {
    const homePage = new HomePage(page);

    // 1. Load the page
    await homePage.goto();
    await page.waitForLoadState('networkidle');

    // 2. Verify hero is visible
    await expect(homePage.welcomeHeading).toBeVisible();
    await expect(page.getByRole('heading', { name: 'KONTROLA SVARŮ A NDT ZKOUŠKY' })).toBeVisible();

    // 3. Navigate through all sections
    await homePage.navigateToServices();
    await homePage.waitForAnimations();
    await expect(homePage.servicesHeading).toBeInViewport();

    await homePage.navigateToAbout();
    await homePage.waitForAnimations();
    await expect(homePage.aboutHeading).toBeInViewport();

    await homePage.navigateToQualifications();
    await homePage.waitForAnimations();
    await expect(homePage.qualificationHeading).toBeInViewport();

    await homePage.navigateToContacts();
    await homePage.waitForAnimations();
    await expect(homePage.contactsHeading).toBeInViewport();

    // 4. Verify contact methods are available
    await expect(homePage.phoneLink).toBeVisible();
    await expect(homePage.emailLink).toBeVisible();
  });

  test('should load without JavaScript errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));

    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');

    // Navigate through all sections to trigger any lazy-loaded errors
    await homePage.navigateToServices();
    await homePage.waitForAnimations();
    await homePage.navigateToAbout();
    await homePage.waitForAnimations();
    await homePage.navigateToQualifications();
    await homePage.waitForAnimations();
    await homePage.navigateToContacts();
    await homePage.waitForAnimations();

    expect(errors).toHaveLength(0);
  });

  test('page should load within acceptable time', async ({ page }) => {
    const startTime = Date.now();

    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');

    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(10000); // 10 seconds max for CI environments
  });

  test('all service images should load', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');
    await homePage.navigateToServices();
    await homePage.waitForAnimations();

    // Check UT image
    const utImage = page.getByAltText('Ultrazvuková kontrola');
    await expect(utImage).toBeVisible();

    // Scroll to MT - scroll incrementally to trigger animations
    await page.evaluate(() => window.scrollBy(0, 800));
    await homePage.waitForAnimations();
    const mtImage = page.getByAltText('Magnetická prášková metoda');
    await mtImage.scrollIntoViewIfNeeded();
    await homePage.waitForAnimations();
    await expect(mtImage).toBeVisible();

    // Scroll to VT
    await page.evaluate(() => window.scrollBy(0, 800));
    await homePage.waitForAnimations();
    const vtImage = page.getByAltText('Vizuální kontrola');
    await vtImage.scrollIntoViewIfNeeded();
    await homePage.waitForAnimations();
    await expect(vtImage).toBeVisible();

    // Scroll to Welding
    await page.evaluate(() => window.scrollBy(0, 800));
    await homePage.waitForAnimations();
    const weldingImage = page.getByAltText('Svařování');
    await weldingImage.scrollIntoViewIfNeeded();
    await homePage.waitForAnimations();
    await expect(weldingImage).toBeVisible();
  });

  test('CTA email link should have proper mailto format', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');

    // Scroll CTA button into view on mobile
    await homePage.ctaButton.scrollIntoViewIfNeeded();
    const href = await homePage.ctaButton.getAttribute('href');

    expect(href).toContain('mailto:tbwelding@seznam.cz');
    expect(href).toContain('subject=');
    // Verify subject is URL encoded
    expect(href).toMatch(/subject=.+/);
  });
});

test.describe('Error Handling', () => {
  test('should handle navigation gracefully', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');

    // Rapidly click through navigation
    await homePage.navigateToServices();
    await homePage.navigateToAbout();
    await homePage.navigateToQualifications();
    await homePage.navigateToContacts();

    // Page should still be functional
    await homePage.waitForAnimations();
    await expect(homePage.contactsHeading).toBeInViewport();
  });
});
