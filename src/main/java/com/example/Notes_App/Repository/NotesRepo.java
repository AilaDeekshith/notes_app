package com.example.Notes_App.Repository;

import com.example.Notes_App.Model.Note;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotesRepo extends MongoRepository<Note,Integer> {
}
