package com.iamneo.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LeaveDetails {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int leave_id;
	private String start_date;
	private String end_date;
	private int stu_id;
	private String stu_name;
	private int teacher_id;
	private String teacher_name;
}


