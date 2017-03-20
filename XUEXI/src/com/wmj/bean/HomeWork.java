package com.wmj.bean;

import java.util.Date;
public class HomeWork {
   private int homeId;
   private String homeWorkName;
   private  String time;
   private int userId;
   private int subjectId;
   private int classId;
   private String finishTime;
   private int status;
	public String getHomeWorkName() {
		return homeWorkName;
	}
	public void setHomeWorkName(String homeWorkName) {
		this.homeWorkName = homeWorkName;
	}

	public int getHomeId() {
		return homeId;
	}
	public void setHomeId(int homeId) {
		this.homeId = homeId;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getSubjectId() {
		return subjectId;
	}
	public void setSubjectId(int subjectId) {
		this.subjectId = subjectId;
	}
	public int getClassId() {
		return classId;
	}
	public void setClassId(int classId) {
		this.classId = classId;
	}
	public String getFinishTime() {
		return finishTime;
	}
	public void setFinishTime(String finishTime) {
		this.finishTime = finishTime;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	} 
}
