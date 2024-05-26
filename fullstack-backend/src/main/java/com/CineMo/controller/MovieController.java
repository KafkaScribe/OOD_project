package com.CineMo.controller;

import com.CineMo.exception.MovieNotFoundException;
import com.CineMo.model.Movie;
import com.CineMo.repository.MovieRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class MovieController {

    @Autowired
    private MovieRepository userRepository;

    @PostMapping("/user")
    Movie newUser(@RequestBody Movie newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<Movie> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    Movie getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new MovieNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    Movie updateUser(@RequestBody Movie newUser, @PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(() -> new MovieNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new MovieNotFoundException(id);
        }
        userRepository.deleteById(id);
        return  "User with id "+id+" has been deleted success.";
    }



}
