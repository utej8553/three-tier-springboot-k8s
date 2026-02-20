package com.example.demo2.Controller;

import com.example.demo2.Entity.DemoEntity;
import com.example.demo2.Repository.DemoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/demo")
@CrossOrigin(origins = "*")
public class DemoController {
    DemoRepository demoRepository;
    DemoController(DemoRepository demoRepository){
        this.demoRepository = demoRepository;
    }
    @PostMapping("")
    public ResponseEntity<?> func(@RequestBody String demo){
        DemoEntity newDemoEntity = new DemoEntity(demo);
        demoRepository.save(newDemoEntity);
        return ResponseEntity.ok("saved in db!");
    }
    @GetMapping("")
    public ResponseEntity<?> getStrings(){
        return ResponseEntity.ok(demoRepository.findAll());
    }
}
