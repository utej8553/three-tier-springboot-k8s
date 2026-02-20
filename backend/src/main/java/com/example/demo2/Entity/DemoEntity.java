package com.example.demo2.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "demo")
public class DemoEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    String demo;

    public DemoEntity(String demo) {
        this.demo = demo;
    }

    public DemoEntity() {

    }


    public String getDemo() {
        return demo;
    }

    public void setDemo(String demo) {
        this.demo = demo;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

}
