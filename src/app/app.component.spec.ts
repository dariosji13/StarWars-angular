import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { SwapiService } from './services/swapi.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CharacterComponent],
      providers: [SwapiService],
    }).compileComponents();
  });

  it('debería crear la aplicación', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Debería tener el título 'Frontend de SWAPI'.`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SWAPI Frontend'); // <--- corregido
  });

  it('Debería mostrar el título "Star Wars Explorer" en un h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Star Wars Explorer'); // <--- corregido
  });
});
