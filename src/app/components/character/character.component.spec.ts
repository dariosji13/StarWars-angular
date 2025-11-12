import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { CharacterComponent } from './character.component';
import { SwapiService } from '../../services/swapi.service';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let swapiServiceSpy: jasmine.SpyObj<SwapiService>;

  beforeEach(async () => {
    
    const spy = jasmine.createSpyObj('SwapiService', ['getCharacterByName']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: SwapiService, useValue: spy }],
    }).compileComponents();

    swapiServiceSpy = TestBed.inject(SwapiService) as jasmine.SpyObj<SwapiService>;
    component = new CharacterComponent(swapiServiceSpy);
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería establecer el carácter cuando searchCharacter() tenga éxito.', () => {
    const mockCharacter = { name: 'Luke Skywalker' };
    swapiServiceSpy.getCharacterByName.and.returnValue(of(mockCharacter));

    component.searchName = 'Luke Skywalker';
    component.searchCharacter();

    expect(swapiServiceSpy.getCharacterByName).toHaveBeenCalledWith('Luke Skywalker');
    expect(component.character).toEqual(mockCharacter);
    expect(component.error).toBe('');
    expect(component.loading).toBeFalse();
  });

  it('Debería generarse un error cuando no se encuentre el carácter.', () => {
    swapiServiceSpy.getCharacterByName.and.returnValue(of(null));

    component.searchName = 'Unknown Character';
    component.searchCharacter();

    expect(swapiServiceSpy.getCharacterByName).toHaveBeenCalledWith('Unknown Character');
    expect(component.character).toBeNull();
    expect(component.error).toBe('No se encontró ningún personaje con ese nombre.');
    expect(component.loading).toBeFalse();
  });

  it('Debería generarse un error cuando falle la llamada a la API.', () => {
    swapiServiceSpy.getCharacterByName.and.returnValue(throwError(() => new Error('API error')));

    component.searchName = 'Luke Skywalker';
    component.searchCharacter();

    expect(component.character).toBeNull();
    expect(component.error).toBe('Ocurrió un error al consultar la API.');
    expect(component.loading).toBeFalse();
  });
});
