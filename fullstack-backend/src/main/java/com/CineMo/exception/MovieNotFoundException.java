package com.CineMo.exception;
/* Created by Arjun Gautam */

public class MovieNotFoundException extends RuntimeException{
    public MovieNotFoundException(Long id){
        super("Could not found the user with id "+ id);
    }
}
