package com.wmj.bean;
/*
 * 老师发布作业实体类
 */
public class HomeWork {
   private int homeId;
   private String homeWorkName;
   private  String time;
   private int teacherId;
   private int subjectId;
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
	public int getTeacherId() {
		return teacherId;
	}
	public void setTeacherId(int teacherId) {
		this.teacherId = teacherId;
	}
	public int getSubjectId() {
		return subjectId;
	}
	public void setSubjectId(int subjectId) {
		this.subjectId = subjectId;
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
