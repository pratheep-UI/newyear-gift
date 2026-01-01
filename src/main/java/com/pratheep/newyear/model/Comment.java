package com.pratheep.newyear.model;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String relation;

    @Column(length = 500)
    private String message;

    @Column(name = "created_at", insertable = false, updatable = false)
    private Timestamp createdAt;

    // ✅ GETTERS
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getRelation() {
        return relation;
    }

    public String getMessage() {
        return message;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    // ✅ SETTERS (THIS FIXES RED ERRORS)
    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRelation(String relation) {
        this.relation = relation;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

