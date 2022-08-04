package com.odepa.mantenedor.controller;

import com.odepa.mantenedor.model.Formulario;
import com.odepa.mantenedor.service.FormularioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/formulario")
public class FormularioController {

    @Autowired
    private FormularioService service;

    //listar
    @GetMapping("/listar")
    public List<Formulario> listar(){
        return service.listFormulario();
    }

    //guardar
    @PostMapping("/formularios")
    public Formulario guardar(@RequestBody Formulario formulario){
        return service.save(formulario);
    }

    //obtener un formulario
    @GetMapping("/formularios/{email}")
    public Formulario getFormulario(@PathVariable String email){
        return service.findById(email);
    }

    //Modificar
    @PutMapping("/formularios/{email}")
    public Formulario modificar(@RequestBody Formulario formulario, @PathVariable String email){
        Formulario formularioActual = service.findById(email);
        formularioActual.setEmail(formulario.getEmail());
        formularioActual.setRegion(formulario.getRegion());
        formularioActual.setComentario(formulario.getComentario());

        return service.save(formularioActual);
    }

    //eliminar
    @DeleteMapping("/formularios/{email}")
    public void eliminar(@PathVariable String email){
        service.delete(email);
    }
}
