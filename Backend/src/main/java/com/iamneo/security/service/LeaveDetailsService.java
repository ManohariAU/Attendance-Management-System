package com.iamneo.security.service;

import com.iamneo.security.entity.LeaveDetails;
import com.iamneo.security.repository.LeaveDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LeaveDetailsService {

    private final LeaveDetailsRepository leaveDetailsRepository;

    @Autowired
    public LeaveDetailsService(LeaveDetailsRepository leaveDetailsRepository) {
        this.leaveDetailsRepository = leaveDetailsRepository;
    }

    public List<LeaveDetails> getAllLeaveDetails() {
        return leaveDetailsRepository.findAll();
    }

    public LeaveDetails getLeaveDetailsById(int id) {
        Optional<LeaveDetails> leaveDetailsOptional = leaveDetailsRepository.findById(id);
        return leaveDetailsOptional.orElse(null);
    }

    public LeaveDetails addLeaveDetails(LeaveDetails leaveDetails) {
        return leaveDetailsRepository.save(leaveDetails);
    }

    public LeaveDetails updateLeaveDetails(int id, LeaveDetails updatedLeaveDetails) {
        Optional<LeaveDetails> leaveDetailsOptional = leaveDetailsRepository.findById(id);
        if (leaveDetailsOptional.isPresent()) {
            LeaveDetails leaveDetails = leaveDetailsOptional.get();
            leaveDetails.setStart_date(updatedLeaveDetails.getStart_date());
            leaveDetails.setEnd_date(updatedLeaveDetails.getEnd_date());
            leaveDetails.setStu_id(updatedLeaveDetails.getStu_id());
            leaveDetails.setStu_name(updatedLeaveDetails.getStu_name());
            leaveDetails.setTeacher_id(updatedLeaveDetails.getTeacher_id());
            leaveDetails.setTeacher_name(updatedLeaveDetails.getTeacher_name());
            return leaveDetailsRepository.save(leaveDetails);
        }
        return null;
    }

    public boolean deleteLeaveDetails(int id) {
        try {
            leaveDetailsRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
