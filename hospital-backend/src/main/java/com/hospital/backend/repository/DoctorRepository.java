package com.hospital.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.backend.entity.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    List<Doctor> findBySpecialization(String specialization);
    List<Doctor> findByAvailableTrue();
    boolean existsByEmail(String email);
}
