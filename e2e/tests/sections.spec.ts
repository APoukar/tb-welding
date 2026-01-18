import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Welcome Section', () => {
  test('should display hero content', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');

    await expect(homePage.welcomeHeading).toBeVisible();
    await expect(page.getByRole('heading', { name: 'KONTROLA SVARŮ A NDT ZKOUŠKY' })).toBeVisible();
    await expect(page.getByText('UT • MT • VT')).toBeVisible();
    await expect(homePage.heroImage).toBeVisible();
  });
});

test.describe('Services Section', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');
    await homePage.navigateToServices();
    await homePage.waitForAnimations();
  });

  test('should display services heading', async () => {
    await expect(homePage.servicesHeading).toBeVisible();
  });

  test('should display UT service', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'UT – Ultrazvuková kontrola' })).toBeVisible();
    await expect(page.getByAltText('Ultrazvuková kontrola')).toBeVisible();
  });

  test('should display MT service', async ({ page }) => {
    test.setTimeout(45000); // Longer timeout for scroll animation tests
    // Scroll progressively to trigger MT section animations
    await page.evaluate(() => window.scrollTo(0, 800));
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 1500));
    await page.waitForTimeout(600);

    const mtHeading = page.getByRole('heading', { name: 'MT – Magnetická prášková metoda' });
    await expect(mtHeading).toBeVisible({ timeout: 10000 });
    await expect(page.getByAltText('Magnetická prášková metoda')).toBeVisible();
  });

  test('should display VT service', async ({ page }) => {
    test.setTimeout(45000); // Longer timeout for scroll animation tests
    // Scroll progressively to trigger all animations before VT
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(600);
    await page.evaluate(() => window.scrollTo(0, 2000));
    await page.waitForTimeout(600);
    await page.evaluate(() => window.scrollTo(0, 3000));
    await page.waitForTimeout(600);

    const vtHeading = page.getByRole('heading', { name: 'VT – Vizuální kontrola' });
    await expect(vtHeading).toBeVisible({ timeout: 10000 });
    await expect(page.getByAltText('Vizuální kontrola')).toBeVisible();
  });

  test('should display welding service', async ({ page }) => {
    test.setTimeout(45000); // Longer timeout for scroll animation tests
    // Scroll progressively through the page to trigger all animations
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 2000));
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 3000));
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 4000));
    await page.waitForTimeout(500);
    // Scroll to bottom of page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(800);

    const weldingHeading = page.getByRole('heading', { name: 'Svářečské práce' });
    await expect(weldingHeading).toBeVisible({ timeout: 15000 });
    await expect(page.getByAltText('Svařování')).toBeVisible();
  });
});

test.describe('About Me Section', () => {
  test('should display personal information', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');
    await homePage.navigateToAbout();
    await homePage.waitForAnimations();

    await expect(homePage.aboutHeading).toBeVisible();
    await expect(page.getByText('Tomáš Bičej').first()).toBeVisible();
  });
});

test.describe('Qualification Section', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
    await page.waitForLoadState('networkidle');
    await homePage.navigateToQualifications();
    await homePage.waitForAnimations();
  });

  test('should display qualification heading', async () => {
    await expect(homePage.qualificationHeading).toBeVisible();
  });

  test('should display NDT certifications', async ({ page }) => {
    await expect(page.getByText('EN ISO 9712').first()).toBeVisible();
  });

  test('should display welding qualifications', async ({ page }) => {
    const weldingQual = page.getByText('EN ISO 9606').first();
    await weldingQual.scrollIntoViewIfNeeded();
    await expect(weldingQual).toBeVisible();
  });
});
