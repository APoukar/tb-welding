import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Responsive Design - Desktop', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('should display full navigation on desktop', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');

    await expect(homePage.menuServices).toBeVisible();
    await expect(homePage.menuAbout).toBeVisible();
    await expect(homePage.menuQualifications).toBeVisible();
    await expect(homePage.menuContacts).toBeVisible();
    await expect(homePage.ctaButton).toBeVisible();
  });

  test('should display hero section properly', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');

    await expect(homePage.heroImage).toBeVisible();
    await expect(page.getByRole('heading', { name: 'KONTROLA SVARŮ A NDT ZKOUŠKY' })).toBeVisible();
  });

  test('should display services with larger images', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');
    await homePage.navigateToServices();
    await homePage.waitForAnimations();

    const serviceImage = page.getByAltText('Ultrazvuková kontrola');
    await expect(serviceImage).toBeVisible();

    const box = await serviceImage.boundingBox();
    // On desktop (1280px width), image should be at least 200px tall
    expect(box?.height).toBeGreaterThanOrEqual(200);
  });
});

test.describe('Responsive Design - Tablet', () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  test('should adapt layout for tablet', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');

    await homePage.menuServices.scrollIntoViewIfNeeded();
    await expect(homePage.menuServices).toBeVisible();
    await expect(homePage.welcomeHeading).toBeVisible();
  });

  test('navigation should remain functional', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');

    await homePage.navigateToContacts();
    await homePage.waitForAnimations();

    await expect(homePage.contactsHeading).toBeInViewport();
  });
});

test.describe('Responsive Design - Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should display content on mobile', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');

    await expect(homePage.welcomeHeading).toBeVisible();
  });

  test('should display hamburger menu instead of desktop menu', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');

    // Hamburger should be visible, desktop menu should be hidden
    await expect(homePage.hamburgerButton).toBeVisible();
    await expect(homePage.menuServices).not.toBeVisible();
    await expect(homePage.ctaButton).not.toBeVisible();
  });

  test('should open mobile drawer with menu items', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');

    await homePage.openMobileDrawer();
    await expect(homePage.drawerMenuServices).toBeVisible();
    await expect(homePage.drawerMenuAbout).toBeVisible();
    await expect(homePage.drawerMenuQualifications).toBeVisible();
    await expect(homePage.drawerMenuContacts).toBeVisible();
  });

  test('should allow scrolling to all sections via drawer', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');

    // Navigate to contacts section via mobile drawer
    await homePage.navigateToContacts();
    await homePage.waitForAnimations();

    await expect(homePage.contactsHeading).toBeInViewport();
    await expect(homePage.phoneLink).toBeVisible();
  });

  test('contact links should be accessible on mobile', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');
    await homePage.navigateToContacts();
    await homePage.waitForAnimations();

    await expect(homePage.phoneLink).toBeEnabled();
    await expect(homePage.emailLink).toBeEnabled();
  });
});
