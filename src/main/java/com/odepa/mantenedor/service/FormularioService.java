package com.odepa.mantenedor.service;

import com.odepa.mantenedor.model.Formulario;
import com.odepa.mantenedor.repository.FormularioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormularioService {

    @Autowired
    private FormularioRepository repo;

    public List<Formulario> listFormulario(){
        return (List<Formulario>) repo.findAll();
    }

    public Formulario save(Formulario formulario){
        return repo.save(formulario);
    }

    public Formulario findById(String email){
        return repo.findById(email).orElse(null);
    }

    public void delete(String email){
        repo.deleteById(email);
    }

    /*
    public Optional<Product> getById(int id){
        return repo.findById(id);
    }

    public List<Product> findByTitleContaining(String name){
        List<Product> products = repo.findByTitleContaining(name);
        return products;
    }

    public List<Product> findByProductCategory(int id){
        List<Product> productsCategory = repo.findByProductCategory(id);
        return productsCategory;
    }

     */
}
