import { TestBed } from '@angular/core/testing';
import { SwapiService } from './swapi.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SwapiService', () => {
  let service: SwapiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SwapiService]
    });
    service = TestBed.inject(SwapiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería instanciarse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería buscar un personaje por nombre sin vehículos', () => {
    const mockResponse = {
      results: [
        {
          name: 'Yoda',
          vehicles: [],
          height: '66',
          mass: '17'
        }
      ]
    };

    service.getCharacterByName('Yoda').subscribe(character => {
      expect(character).toBeTruthy();
      expect(character.name).toBe('Yoda');
      expect(character.vehicles.length).toBe(0);
    });

    const req = httpMock.expectOne('https://swapi.dev/api/people/?search=Yoda');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('debería buscar un personaje por nombre con vehículos', () => {
    const mockResponse = {
      results: [
        {
          name: 'Han Solo',
          vehicles: ['https://swapi.dev/api/vehicles/14/']
        }
      ]
    };

    const mockVehicle = { name: 'Snowspeeder', model: 't-47 airspeeder' };

    service.getCharacterByName('Han').subscribe(character => {
      expect(character).toBeTruthy();
      expect(character.name).toBe('Han Solo');
      expect(character.vehicles.length).toBe(1);
      expect(character.vehicles[0].name).toBe('Snowspeeder');
    });

    const req = httpMock.expectOne('https://swapi.dev/api/people/?search=Han');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);

    const vehicleReq = httpMock.expectOne('https://swapi.dev/api/vehicles/14/');
    expect(vehicleReq.request.method).toBe('GET');
    vehicleReq.flush(mockVehicle);
  });

  it('debería retornar null si no se encuentra el personaje', () => {
    const mockResponse = { results: [] };

    service.getCharacterByName('Unknown').subscribe(character => {
      expect(character).toBeNull();
    });

    const req = httpMock.expectOne('https://swapi.dev/api/people/?search=Unknown');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});


