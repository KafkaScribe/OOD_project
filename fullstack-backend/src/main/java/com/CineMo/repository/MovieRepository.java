package com.CineMo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.CineMo.model.Movie;

public interface MovieRepository extends JpaRepository<Movie,Long> {
}
