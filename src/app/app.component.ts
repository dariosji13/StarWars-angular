import { Component } from '@angular/core';
import { CharacterComponent } from './components/character/character.component'; 


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CharacterComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SWAPI Frontend';
  
}
