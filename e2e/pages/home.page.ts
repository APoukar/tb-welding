import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  // Desktop Navigation
  readonly menuServices: Locator;
  readonly menuAbout: Locator;
  readonly menuQualifications: Locator;
  readonly menuContacts: Locator;
  readonly ctaButton: Locator;

  // Mobile Navigation
  readonly hamburgerButton: Locator;
  readonly mobileDrawer: Locator;
  readonly drawerCloseButton: Locator;
  readonly drawerMenuServices: Locator;
  readonly drawerMenuAbout: Locator;
  readonly drawerMenuQualifications: Locator;
  readonly drawerMenuContacts: Locator;

  // Section Headings
  readonly welcomeHeading: Locator;
  readonly servicesHeading: Locator;
  readonly aboutHeading: Locator;
  readonly qualificationHeading: Locator;
  readonly contactsHeading: Locator;

  // Contact Links
  readonly phoneLink: Locator;
  readonly emailLink: Locator;

  // Images
  readonly heroImage: Locator;

  constructor(page: Page) {
    this.page = page;

    // Desktop navigation locators (visible on sm and above, >= 600px)
    this.menuServices = page.getByRole('button', { name: 'Služby' }).first();
    this.menuAbout = page.getByRole('button', { name: 'O mně' }).first();
    this.menuQualifications = page.getByRole('button', { name: 'Kvalifikace' }).first();
    this.menuContacts = page.getByRole('button', { name: 'Kontakt' }).first();
    this.ctaButton = page.getByRole('link', { name: 'Napište mi' });

    // Mobile navigation locators (visible on xs, < 600px)
    // MUI IconButton renders as button with img inside
    this.hamburgerButton = page.locator('.MuiIconButton-root').first();
    this.mobileDrawer = page.locator('.MuiDrawer-root');
    this.drawerCloseButton = this.mobileDrawer.locator('.MuiIconButton-root');
    this.drawerMenuServices = this.mobileDrawer.getByRole('button', { name: 'Služby' });
    this.drawerMenuAbout = this.mobileDrawer.getByRole('button', { name: 'O mně' });
    this.drawerMenuQualifications = this.mobileDrawer.getByRole('button', { name: 'Kvalifikace' });
    this.drawerMenuContacts = this.mobileDrawer.getByRole('button', { name: 'Kontakt' });

    // Section heading locators (use exact: true to avoid matching substrings)
    this.welcomeHeading = page.getByText('TB Welding').first();
    this.servicesHeading = page.getByRole('heading', { name: 'Služby', exact: true });
    this.aboutHeading = page.getByRole('heading', { name: 'O mně', exact: true });
    this.qualificationHeading = page.getByRole('heading', { name: 'Kvalifikace', exact: true });
    this.contactsHeading = page.getByRole('heading', { name: 'Kontakt', exact: true });

    // Contact links
    this.phoneLink = page.getByRole('link', { name: '+420 775 492 685' });
    this.emailLink = page.getByRole('link', { name: 'tbwelding@seznam.cz' });

    // Images
    this.heroImage = page.getByAltText('welding');
  }

  async goto() {
    await this.page.goto('/');
  }

  async isMobileViewport(): Promise<boolean> {
    return await this.hamburgerButton.isVisible();
  }

  async openMobileDrawer() {
    await this.hamburgerButton.click();
    await this.mobileDrawer.waitFor({ state: 'visible' });
  }

  async closeMobileDrawer() {
    if (await this.mobileDrawer.isVisible()) {
      await this.drawerCloseButton.click();
      await this.mobileDrawer.waitFor({ state: 'hidden' });
    }
  }

  async navigateToServices() {
    if (await this.isMobileViewport()) {
      await this.openMobileDrawer();
      await this.drawerMenuServices.click();
    } else {
      await this.menuServices.scrollIntoViewIfNeeded();
      await this.menuServices.click({ force: true });
    }
  }

  async navigateToAbout() {
    if (await this.isMobileViewport()) {
      await this.openMobileDrawer();
      await this.drawerMenuAbout.click();
    } else {
      await this.menuAbout.scrollIntoViewIfNeeded();
      await this.menuAbout.click({ force: true });
    }
  }

  async navigateToQualifications() {
    if (await this.isMobileViewport()) {
      await this.openMobileDrawer();
      await this.drawerMenuQualifications.click();
    } else {
      await this.menuQualifications.scrollIntoViewIfNeeded();
      await this.menuQualifications.click({ force: true });
    }
  }

  async navigateToContacts() {
    if (await this.isMobileViewport()) {
      await this.openMobileDrawer();
      await this.drawerMenuContacts.click();
    } else {
      await this.menuContacts.scrollIntoViewIfNeeded();
      await this.menuContacts.click({ force: true });
    }
  }

  async waitForAnimations() {
    // Wait for MUI Grow animations to complete
    await this.page.waitForTimeout(500);
  }
}
