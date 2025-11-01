import { Component, OnInit } from '@angular/core';
import { MenustatebyrolService } from '../servicios/menustatebyrol.service';


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  rol?: string[];
  id?: number;

  constructor(private permService: MenustatebyrolService) { }

  ngOnInit(): void {
    this.rol=this.permService.getUserRoles();
    this.id=this.permService.getId();
  }

}
