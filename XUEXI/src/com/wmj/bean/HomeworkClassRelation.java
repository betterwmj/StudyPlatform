package com.wmj.bean;
/*
 * 作业-班级关系实体类
 */
public class HomeworkClassRelation {
    private int id;
    private int homeWorkId;
    private int classId;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getHomeWorkId() {
		return homeWorkId;
	}
	public void setHomeWorkId(int homeWorkId) {
		this.homeWorkId = homeWorkId;
	}
	public int getClassId() {
		return classId;
	}
	public void setClassId(int classId) {
		this.classId = classId;
	}
    
}
