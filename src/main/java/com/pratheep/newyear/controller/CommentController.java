package com.pratheep.newyear.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.pratheep.newyear.model.Comment;
import com.pratheep.newyear.repository.CommentRepository;

@Controller
public class CommentController {

    @Autowired
    private CommentRepository commentRepo;

    @PostMapping("/comment")
    public String postComment(@RequestParam String name,
                              @RequestParam String relation,
                              @RequestParam String message) {

        Comment c = new Comment();
        c.setName(name);
        c.setRelation(relation);
        c.setMessage(message);

        commentRepo.save(c);

        return "redirect:/wish?name=" + name + "&relation=" + relation;
    }
}

