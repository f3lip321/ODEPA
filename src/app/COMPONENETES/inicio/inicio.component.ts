import { Component, OnInit } from '@angular/core';
import { Formulario, FormularioService } from 'src/app/SERVICE/formulario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //variable
  ListarFormulario: Formulario[] | undefined;


  constructor(private formularioService: FormularioService, private router:Router) { }

  ngOnInit(): void {
    this.listarFormularios();
  }

  listarFormularios()
  {
    this.formularioService.getFormularios().subscribe(
      res=>{console.log(res);
      this.ListarFormulario=<any>res;
      },
      err=>console.log(err)
    );
  }

  eliminar(email:string)
  {
    this.formularioService.deleteFormulario(email).subscribe(
      res=>{
        console.log('equipo eliminado');
        this.listarFormularios();
      },
      err=> console.log(err)
    );
  }

  modificar(email:string)
  {
    this.router.navigate(['/edit/'+email]);
  }

}
