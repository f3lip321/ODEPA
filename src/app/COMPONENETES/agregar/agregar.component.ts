import { Component, OnInit } from '@angular/core';
import {Formulario, FormularioService, Region} from '../../SERVICE/formulario.service';
import {Router} from '@angular/router';
import { RegionService } from 'src/app/SERVICE/region.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  //variable
  ListarRegion: Region[] | undefined;

  formulario: Formulario={
    email:'',
    region:{id:0,name:''},
    comentario:''
  };
  constructor(private FormularioService:FormularioService, private regionService:RegionService ,private router:Router) { }

  ngOnInit(): void {
    this.listarRegion();
  }

  agregar(){
    this.FormularioService.saveFormulario(this.formulario).subscribe();
    this.router.navigate(['/inicio']);
  }

  listarRegion()
  {
    this.regionService.getRegiones().subscribe(
      res=>{console.log(res);
      this.ListarRegion=<any>res;
      },
      err=>console.log(err)
    );
  }

}
