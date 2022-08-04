import { Component, OnInit } from '@angular/core';
import {Formulario, FormularioService, Region} from '../../SERVICE/formulario.service';
import {Router, ActivatedRoute} from '@angular/router';
import { RegionService } from 'src/app/SERVICE/region.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  //variable
  ListarRegion: Region[] | undefined;

  formulario: Formulario={
    email:'',
    region:{id:0,name:''},
    comentario:''
  };
  constructor(private FormularioService:FormularioService, 
    private regionService:RegionService ,
    private router:Router,
    private activeRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.listarRegion();
    const id_entrada = <string>this.activeRoute.snapshot.params['id'];
    console.log('id de entrada' + id_entrada)
  }

  if (id_entrada: string) {
    this.FormularioService.getUnFormulario(id_entrada).subscribe(
      res=>{
        this.formulario = res[0];
        console.log(res[0]);
      },
      err=>console.log(err)
    );
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

  modificar(){

    this.FormularioService.editFormulario(this.formulario.email, this.formulario).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );
    
    this.router.navigate(['/inicio']);
  }

}
