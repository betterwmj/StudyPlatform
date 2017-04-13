package com.wmj.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;


import com.wmj.bean.Classes;
import com.wmj.bean.Students;
import com.wmj.util.JDBCUtil;

public class OperatorClass {
	/*
	 * 获取所有未分配班级学生信息
	 */
	public static List<Students> getStudent() throws Exception{
		Connection conn = null;
		List<Students> list = new ArrayList<Students>();
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			throw e1;
		}
		PreparedStatement pmt = null; 
		String sql = "";
		sql="select * from students where classid is NULL ";
		try {
			ResultSet rs = null;
			pmt=JDBCUtil.getPreparedStatement(conn, sql);
			rs = pmt.executeQuery();
			 while (rs.next()) { 
			   Students student=new Students();
			   student.setUserID(rs.getInt("UserID"));
			   student.setUserName(rs.getString("userName"));
			   student.setRealName(rs.getString("RealName"));
               list.add(student);
	         }
			 
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} finally {
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
	return list;
 }
	/*
	 * 老师获取该班级所有学生信息
	 */
	public static List<Students> getClassStudent(int classid) throws Exception{
		Connection conn = null;
		List<Students> list = new ArrayList<Students>();
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			throw e1;
		}
		PreparedStatement pmt = null; 
		String sql = "";
		sql="select * from students where classid=? ";
		try {
			ResultSet rs = null;
			pmt=JDBCUtil.getPreparedStatement(conn, sql);
			pmt.setInt(1, classid);
			rs = pmt.executeQuery();
			 while (rs.next()) { 
			   Students student=new Students();
			   student.setUserID(rs.getInt("UserID"));
			   student.setUserName(rs.getString("userName"));
			   student.setRealName(rs.getString("RealName"));
			   student.setSchool(rs.getString("school"));
			   student.setTelephone(rs.getString("telephone"));
               list.add(student);
	         }
			 
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} finally {
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
	return list;
 }
	/*
	 * 根据专业id获取所有班级信息
	 */
	public static List<Classes> getClasses(int spencialitiesID) throws Exception{
		Connection conn = null;
		List<Classes> list = new ArrayList<Classes>();
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			throw e1;
		}
		PreparedStatement pmt = null; 
		String sql = "";
		sql="select * from classes where Spencialities_id=? ";
		try {
			ResultSet rs = null;
			pmt=JDBCUtil.getPreparedStatement(conn, sql);
			pmt.setInt(1, spencialitiesID);
			rs = pmt.executeQuery();
			 while (rs.next()) { 
				 Classes classes=new Classes();
				 classes.setClassId(rs.getInt("ClassID"));
				 classes.setClassName(rs.getString("ClassName"));
				 classes.setSpencialities_id(rs.getInt("Spencialities_id"));
                 list.add(classes);
	         }
			 
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} finally {
			
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
	return list;
}
	/*
	 * 更新学生班级id(老师给学生分班)
	 */
	public static boolean updateClassId(List<Students> list,int classId) throws Exception{
		
		Connection conn = null;
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			throw e1;
		}
		PreparedStatement pmt = null; 
		String sql = "";
		int resultCount = 0;
		try {
			
			for(int i=0;i<list.size();i++){
				Students student=list.get(i);
				sql="update students set classid=? where UserID=? ";
				pmt=JDBCUtil.getPreparedStatement(conn, sql);
				pmt.setInt(1, classId);
				pmt.setInt(2, student.getUserID());
				if(pmt.executeUpdate()>0){
					resultCount++;
				}
			}
			if( resultCount == list.size() ){
				return true;
			}else{
				return false;
			}
		
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} finally {
			
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
}
	/*
	 * 老师创建班级
	 */
	public static boolean insertClass(Classes classes,int teacherID) throws Exception{
		boolean result=false;
		 //数据库连接的获取的操作，对用的是自己封装的一个util包中的类进行的操作
		Connection conn = null;
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			throw e1;
		}
	    
		PreparedStatement pmt = null; 
		try {
			
			String sql="select * from classes where ClassName = ? and Spencialities_id=?";
			pmt=JDBCUtil.getPreparedStatement(conn, sql); 	
			pmt.setString(1, classes.getClassName());
			pmt.setInt(2, classes.getSpencialities_id());
			ResultSet rs=null;
			rs = pmt.executeQuery();
			if(rs.next()){
				return false;
			}else{
				int classId=0;
				String sql2="insert into classes (ClassName,Spencialities_id) values(?,?)";
				pmt=JDBCUtil.getPreparedStatement(conn, sql2,Statement.RETURN_GENERATED_KEYS); 
				pmt.setString(1, classes.getClassName());
				pmt.setInt(2, classes.getSpencialities_id());
				if(pmt.executeUpdate()>0){
					rs = pmt.getGeneratedKeys(); //获取结果   
					if (rs.next()) {
						classId = rs.getInt(1);//取得ID
						String sql3="insert into teacherclass_relation (classID,teacherId) values(?,?)";
						pmt=JDBCUtil.getPreparedStatement(conn, sql3); 
						pmt.setInt(1, classId);
						pmt.setInt(2, teacherID);
						if(pmt.executeUpdate()>0){
							result=true;
						}
						 
					} else {
						result = false;
						
					}
					
				}
			}
			
			 
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} finally {
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
		return result;
	}
}
