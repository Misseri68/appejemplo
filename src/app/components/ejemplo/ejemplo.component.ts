import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styles: ['']
})
export class EjemploComponent {

  constructor(private _http: HttpClient) {

   }

   ngOnInit(){

   }
}
