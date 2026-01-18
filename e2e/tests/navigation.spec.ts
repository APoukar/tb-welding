import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Navigation - Desktop Menu', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');
  });

  test('should display all desktop navigation menu items', async () => {
    // Skip on mobile viewports where hamburger menu is used
    test.skip(await homePage.isMobileViewport(), 'Desktop menu not visible on mobile');

    await expect(homePage.menuServices).toBeVisible();
    await expect(homePage.menuAbout).toBeVisible();
    await expect(homePage.menuQualifications).toBeVisible();
    await expect(homePage.menuContacts).toBeVisible();
    await expect(homePage.ctaButton).toBeVisible();
  });

  test('should have CTA button with correct mailto href', async () => {
    // Skip on mobile viewports where CTA is not visible
    test.skip(await homePage.isMobileViewport(), 'CTA button not visible on mobile');

    const href = await homePage.ctaButton.getAttribute('href');
    expect(href).toContain('mailto:tbwelding@seznam.cz');
    expect(href).toContain('subject=');
  });
});

test.describe('Navigation - Mobile Menu', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');
  });

  test('should display hamburger menu on mobile', async () => {
    // Skip on desktop viewports
    test.skip(!(await homePage.isMobileViewport()), 'Hamburger menu only visible on mobile');

    await expect(homePage.hamburgerButton).toBeVisible();
  });

  test('should open drawer when clicking hamburger', async () => {
    // Skip on desktop viewports
    test.skip(!(await homePage.isMobileViewport()), 'Hamburger menu only visible on mobile');

    await homePage.openMobileDrawer();
    await expect(homePage.mobileDrawer).toBeVisible();
    await expect(homePage.drawerMenuServices).toBeVisible();
    await expect(homePage.drawerMenuAbout).toBeVisible();
    await expect(homePage.drawerMenuQualifications).toBeVisible();
    await expect(homePage.drawerMenuContacts).toBeVisible();
  });

  test('should close drawer when clicking close button', async () => {
    // Skip on desktop viewports
    test.skip(!(await homePage.isMobileViewport()), 'Hamburger menu only visible on mobile');

    await homePage.openMobileDrawer();
    await expect(homePage.mobileDrawer).toBeVisible();
    await homePage.closeMobileDrawer();
    await expect(homePage.mobileDrawer).not.toBeVisible();
  });
});

test.describe('Navigation - Section Scrolling', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');
  });

  test('should scroll to Services section when clicking Služby', async () => {
    await homePage.navigateToServices();
    await homePage.waitForAnimations();
    await expect(homePage.servicesHeading).toBeInViewport({ timeout: 10000 });
  });

  test('should scroll to About section when clicking O mně', async () => {
    await homePage.navigateToAbout();
    await homePage.waitForAnimations();
    await expect(homePage.aboutHeading).toBeInViewport({ timeout: 10000 });
  });

  test('should scroll to Qualification section when clicking Kvalifikace', async () => {
    await homePage.navigateToQualifications();
    await homePage.waitForAnimations();
    await expect(homePage.qualificationHeading).toBeInViewport({ timeout: 10000 });
  });

  test('should scroll to Contacts section when clicking Kontakt', async () => {
    await homePage.navigateToContacts();
    await homePage.waitForAnimations();
    await expect(homePage.contactsHeading).toBeInViewport({ timeout: 10000 });
  });
});
