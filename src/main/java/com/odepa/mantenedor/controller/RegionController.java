package com.odepa.mantenedor.controller;

import com.odepa.mantenedor.model.Region;
import com.odepa.mantenedor.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/region")
public class RegionController {

    @Autowired
    private RegionService service;

    //listar
    @GetMapping("/listar")
    public List<Region> listar(){
        return service.listRegion();
    }


}
