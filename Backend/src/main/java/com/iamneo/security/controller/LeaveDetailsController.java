package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.LeaveDetails;
import com.iamneo.security.service.LeaveDetailsService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/auth/leave-details")
public class LeaveDetailsController {

    private final LeaveDetailsService leaveDetailsService;

    @Autowired
    public LeaveDetailsController(LeaveDetailsService leaveDetailsService) {
        this.leaveDetailsService = leaveDetailsService;
    }

    @GetMapping
    public List<LeaveDetails> getAllLeaveDetails() {
        return leaveDetailsService.getAllLeaveDetails();
    }

    @GetMapping("/{id}")
    public ResponseEntity<LeaveDetails> getLeaveDetailsById(@PathVariable int id) {
        LeaveDetails leaveDetails = leaveDetailsService.getLeaveDetailsById(id);
        if (leaveDetails != null) {
            return ResponseEntity.ok(leaveDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<LeaveDetails> addLeaveDetails(@RequestBody LeaveDetails leaveDetails) {
        try {
            LeaveDetails addedLeaveDetails = leaveDetailsService.addLeaveDetails(leaveDetails);
            return ResponseEntity.status(HttpStatus.CREATED).body(addedLeaveDetails);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<LeaveDetails> updateLeaveDetails(@PathVariable int id, @RequestBody LeaveDetails leaveDetails) {
        LeaveDetails updatedLeaveDetails = leaveDetailsService.updateLeaveDetails(id, leaveDetails);
        if (updatedLeaveDetails != null) {
            return ResponseEntity.ok(updatedLeaveDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLeaveDetails(@PathVariable int id) {
        boolean isDeleted = leaveDetailsService.deleteLeaveDetails(id);
        if (isDeleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
