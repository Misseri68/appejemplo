import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { filter, from, map, take, toArray } from 'rxjs';
import { Personaje } from './personaje.interface';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrl: './ejemplo.css'
})
export class EjemploComponent {

  personajes: Personaje[];
  personajesFiltrados: String[] = [];

  constructor(private _http: HttpClient) {
    this.personajes = [];
  }

  ngOnInit() {
    this.getPersonajes();
  }

  getPersonajes() {
    var url = 'https://rickandmortyapi.com/api/character';
    this._http.get<any>(url).subscribe(data => {
      this.personajes = data.results;
    });
  }


  //TODO aquí debes mostrar una lista:
  /**
   1- * Debes filtar de la lista de personajes el character.status === 'Alive'
   2- Debes tomar sólo el nombre del personaje
   3- Ahora mostrarás solo los 5 primeros personajes
   4- Lo convertiras en un array.
   */


  filtrarPersonajes() {
    from(this.personajes).pipe(

    ).subscribe(personajesFiltrados => {
      this.personajesFiltrados = personajesFiltrados;
    });
  }
}
