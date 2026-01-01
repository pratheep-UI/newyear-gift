package com.pratheep.newyear.model;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "wishes")
public class Wish {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String mobile;
    private String relation;

    @Column(name = "created_at", insertable = false, updatable = false)
    private Timestamp createdAt;

    // ✅ GETTERS
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getMobile() {
        return mobile;
    }

    public String getRelation() {
        return relation;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    // ✅ SETTERS (THIS FIXES RED ERRORS)
    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public void setRelation(String relation) {
        this.relation = relation;
    }
}
