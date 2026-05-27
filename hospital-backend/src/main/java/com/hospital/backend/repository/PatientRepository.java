package com.hospital.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.backend.entity.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
    List<Patient> findByFirstNameContainingOrLastNameContaining(String firstName, String lastName);
    boolean existsByEmail(String email);
}