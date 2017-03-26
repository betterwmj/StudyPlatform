package com.wmj.bean;

import java.util.Date;

/*
 * 试卷
 */
public class Paper {
   private int testpaperID;
   private String testName;
   private int subjectID;
   private int userId;
   private int status;
   private Date createTime;
	public int getStatus() {
	return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	public int getTestpaperID() {
		return testpaperID;
	}
	public void setTestpaperID(int testpaperID) {
		this.testpaperID = testpaperID;
	}
	public String getTestName() {
		return testName;
	}
	public void setTestName(String testName) {
		this.testName = testName;
	}
	public int getSubjectID() {
		return subjectID;
	}
	public void setSubjectID(int subjectID) {
		this.subjectID = subjectID;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
   
}
