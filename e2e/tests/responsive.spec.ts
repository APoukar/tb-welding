import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

// Helper function to check if two boxes overlap
function boxesOverlap(
  box1: { x: number; y: number; width: number; height: number } | null,
  box2: { x: number; y: number; width: number; height: number } | null
): boolean {
  if (!box1 || !box2) return false;

  return !(
    box1.x + box1.width < box2.x ||   // box1 is left of box2
    box2.x + box2.width < box1.x ||   // box2 is left of box1
    box1.y + box1.height < box2.y ||  // box1 is above box2
    box2.y + box2.height < box1.y     // box2 is above box1
  );
}

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

test.describe('Heading Overlap Tests', () => {
  const viewportWidths = [375, 600, 768, 900, 1024, 1280, 1440];

  for (const width of viewportWidths) {
    test(`hero headings should not overlap at ${width}px width`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Use specific text to target only the hero headings
      const h1 = page.getByRole('heading', { name: /KONTROLA SVARŮ/ });
      const h2 = page.getByRole('heading', { name: 'UT • MT • VT' });

      await expect(h1).toBeVisible();
      await expect(h2).toBeVisible();

      const h1Box = await h1.boundingBox();
      const h2Box = await h2.boundingBox();

      expect(boxesOverlap(h1Box, h2Box)).toBe(false);
    });
  }
});
