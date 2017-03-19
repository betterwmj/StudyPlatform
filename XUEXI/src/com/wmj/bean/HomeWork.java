package com.wmj.bean;

import java.util.Date;
public class HomeWork {
   private int homeId;
   private  Date time;
   private int userId;
   private int subjectId;
   private int classId;
   private Date finishTime;
   private int status;
	public int getHomeId() {
		return homeId;
	}
	public void setHomeId(int homeId) {
		this.homeId = homeId;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
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
	public Date getFinishTime() {
		return finishTime;
	}
	public void setFinishTime(Date finishTime) {
		this.finishTime = finishTime;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	} 
}
