import { test, expect } from '@playwright/test';
import { CharacterSearchPage } from '../pages/CharacterSearchPage';

test('Validar datos del personaje Yoda sin vehiculos', async ({ page }) => {
  const listDateFill = ['Peso: 17 kg', 'Altura: 66 cm', 'Color de cabello: white', 'Color de piel: green'];
  const characterSearchPage = new CharacterSearchPage(page);

  await characterSearchPage.goToPage('yoda');

  for (let index = 0; index < listDateFill.length; index++) {
    expect(await characterSearchPage.goToReturnDateConfirm(listDateFill[index])).toMatch(listDateFill[index]);
  }
});


test('Validar datos del personaje Yoda con vehiculos', async ({ page }) => {
  const listDateFill = ['Peso: 84 kg', 'Altura: 188 cm','Color de cabello: blond', 'Color de piel: fair','Zephyr-G swoop bike','XJ-6 airspeeder'];
  const characterSearchPage = new CharacterSearchPage(page);

  await characterSearchPage.goToPage('anakin');

  for (let index = 0; index < listDateFill.length; index++) {
    expect(await characterSearchPage.goToReturnDateConfirm(listDateFill[index])).toMatch(listDateFill[index]);
  }
});