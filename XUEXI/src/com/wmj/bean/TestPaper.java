package com.wmj.bean;
/*
 * 试卷
 */
public class TestPaper {
   private int testpaperID;
   private String testName;
   private int subjectID;
   private int userId;
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
