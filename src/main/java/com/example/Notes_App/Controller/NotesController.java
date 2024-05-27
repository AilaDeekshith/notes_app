package com.example.Notes_App.Controller;

import com.example.Notes_App.Model.Note;
import com.example.Notes_App.Repository.NotesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class NotesController {

    @Autowired
    NotesRepo notesRepo;

    @GetMapping("/")
    public String start(){
        return "Hello world";
    }

    @GetMapping("/notes")
    public List<Note> getAll(){
        return notesRepo.findAll();
    }

    @PostMapping("/note")
    public void add(@RequestBody Note note){
        notesRepo.save(note);
    }
    @DeleteMapping("/deleteNote/{title}")
    public void deleteByTitle(@PathVariable String title){
        notesRepo.deleteByTitle(title);
    }
}
