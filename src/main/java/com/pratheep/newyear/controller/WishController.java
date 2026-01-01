package com.pratheep.newyear.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.pratheep.newyear.model.Wish;
import com.pratheep.newyear.repository.WishRepository;

@Controller
public class WishController {

    @Autowired
    private WishRepository repo;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @PostMapping("/submit")
    public String submit(@RequestParam String name,
                         @RequestParam String mobile,
                         @RequestParam String relation) {

        Wish w = new Wish();
        w.setName(name);
        w.setMobile(mobile);
        w.setRelation(relation);

        repo.save(w);

        return "redirect:/wish?name=" + name + "&relation=" + relation;
    }

    @GetMapping("/wish")
    public String wishPage(@RequestParam String name,
                           @RequestParam String relation,
                           Model model) {

        model.addAttribute("name", name);
        model.addAttribute("relation", relation);
        return "wish";
    }
}
