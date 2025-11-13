import { Locator, Page } from '@playwright/test';

export class CharacterSearchPage {
  readonly page: Page;
  public readonly searchButton: Locator;
  public readonly searchPerson: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.getByRole('button', { name: 'Buscar' });
    this.searchPerson = page.getByRole('textbox', { name: 'Ej: Luke Skywalker' });
  }

  async goToPage(a: string) {
    await this.page.goto('https://dariosji13.github.io/StarWars-angular/');
    await this.goToSearchPerson(a);
    await this.searchButton.click();
  }

  async goToSearchPerson(person: string) {
    return await this.searchPerson.fill(person);
  }

  async goToReturnDateConfirm(a: string) {
    return (await this.page.getByText(a).textContent())?.trim();
  }
}