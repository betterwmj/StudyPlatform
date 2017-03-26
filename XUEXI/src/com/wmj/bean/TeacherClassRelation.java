package com.wmj.bean;
/*
 * 老师班级关系实体类
 */
public class TeacherClassRelation {
   private int id;
   private int classId;
   private int teacherId;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getClassId() {
		return classId;
	}
	public void setClassId(int classId) {
		this.classId = classId;
	}
	public int getTeacherId() {
		return teacherId;
	}
	public void setTeacherId(int teacherId) {
		this.teacherId = teacherId;
	}
	   
   
}
