package com.odepa.mantenedor.repository;

import com.odepa.mantenedor.model.Formulario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormularioRepository extends CrudRepository<Formulario, String> {
/*
    @Query("select c from Product c where c.name like %?1%")
    List<Product> findByTitleContaining(String chars);

    //Listar Productos por Category
    @Query("select p from Product p inner join Category c on p.category.id = c.id where p.category.id = ?1")
    List<Product> findByProductCategory(int id);
  */
}
