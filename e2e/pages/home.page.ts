import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  // Navigation
  readonly menuServices: Locator;
  readonly menuAbout: Locator;
  readonly menuQualifications: Locator;
  readonly menuContacts: Locator;
  readonly ctaButton: Locator;

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

    // Navigation locators
    this.menuServices = page.getByRole('button', { name: 'Služby' });
    this.menuAbout = page.getByRole('button', { name: 'O mně' });
    this.menuQualifications = page.getByRole('button', { name: 'Kvalifikace' });
    this.menuContacts = page.getByRole('button', { name: 'Kontakt' });
    this.ctaButton = page.getByRole('link', { name: 'Napište mi' });

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

  async navigateToServices() {
    await this.menuServices.scrollIntoViewIfNeeded();
    await this.menuServices.click({ force: true });
  }

  async navigateToAbout() {
    await this.menuAbout.scrollIntoViewIfNeeded();
    await this.menuAbout.click({ force: true });
  }

  async navigateToQualifications() {
    await this.menuQualifications.scrollIntoViewIfNeeded();
    await this.menuQualifications.click({ force: true });
  }

  async navigateToContacts() {
    await this.menuContacts.scrollIntoViewIfNeeded();
    await this.menuContacts.click({ force: true });
  }

  async waitForAnimations() {
    // Wait for MUI Grow animations to complete
    await this.page.waitForTimeout(500);
  }
}
