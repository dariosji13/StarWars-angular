/* import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-character',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character: any;
  characterId = 1;

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter() {
    this.swapiService.getCharacter(this.characterId).subscribe(data => {
      this.character = data;
    });
  }
} */

import { Component } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  character: any;
  searchName = '';
  loading = false;
  error = '';

  constructor(private swapiService: SwapiService) {}

  searchCharacter() {
    this.loading = true;
    this.error = '';
    this.character = null;

    this.swapiService.getCharacterByName(this.searchName).subscribe({
      next: (data) => {
        this.loading = false;
        if (data) {
          this.character = data;
        } else {
          this.error = 'No se encontró ningún personaje con ese nombre.';
        }
      },
      error: () => {
        this.loading = false;
        this.error = 'Ocurrió un error al consultar la API.';
      }
    });
  }
}



