package com.odepa.mantenedor.model;

import javax.persistence.*;

@Entity
@Table(name = "formulario")
public class Formulario {

    @Id
    private String email;
    @ManyToOne(optional = false, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "region", nullable = false)
    private Region region;
    private String comentario;

    public Formulario() {
    }

    public Formulario(String email, Region region, String comentario) {
        this.email = email;
        this.region = region;
        this.comentario = comentario;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Region getRegion() {
        return region;
    }

    public void setRegion(Region region) {
        this.region = region;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }
}
