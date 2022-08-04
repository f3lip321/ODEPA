package com.odepa.mantenedor.service;

import com.odepa.mantenedor.model.Region;
import com.odepa.mantenedor.repository.RegionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegionService {

    @Autowired
    private RegionRepository repo;

    public List<Region> listRegion(){
        return (List<Region>) repo.findAll();
    }

    public Region findById(Integer id){
        return repo.findById(id).orElse(null);
    }
}
