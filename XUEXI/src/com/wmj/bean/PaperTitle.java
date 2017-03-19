package com.wmj.bean;
/*
 * 试卷题目，包含题目id,题目类型(选择题或判断题),所属试卷id
 */
public class PaperTitle {
  private int titleId;
  private String type;
  private int testpaperID;
	public int getTitleId() {
		return titleId;
	}
	public void setTitleId(int titleId) {
		this.titleId = titleId;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getTestpaperID() {
		return testpaperID;
	}
	public void setTestpaperID(int testpaperID) {
		this.testpaperID = testpaperID;
	}
  
}
