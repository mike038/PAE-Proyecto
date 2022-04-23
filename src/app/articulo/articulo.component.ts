import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.sass']
})
export class ArticuloComponent implements OnInit {
  @Input() imgSource: string ='';
  @Input() titulo: string ='';
  @Input() precio: string;
  @Input() descripcion: string ='';
  @Input() descuento: string;
  
 
  constructor() { }

  ngOnInit(): void {
  }

}
