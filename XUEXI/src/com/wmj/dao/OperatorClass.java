package com.wmj.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.wmj.bean.Classes;
import com.wmj.bean.students;
import com.wmj.util.JDBCUtil;

public class OperatorClass {
	/*
	 * 获取所有学生信息
	 */
	public static List<students> getStudent(){
		Connection conn = null;
		List<students> list = new ArrayList<students>();
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		PreparedStatement pmt = null; 
		String sql = "";
		sql="select * from students where classid is NULL ";
		try {
			ResultSet rs = null;
			pmt=JDBCUtil.getPreparedStatement(conn, sql);
			rs = pmt.executeQuery();
			 while (rs.next()) { 
			   students student=new students();
			   student.setUserID(rs.getInt("UserID"));
			   student.setName(rs.getString("RealName"));
               list.add(student);
	         }
			 
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
	return list;
 }
	/*
	 * 老师获取该班级所有学生信息
	 */
	public static List<students> getClassStudent(int classid){
		Connection conn = null;
		List<students> list = new ArrayList<students>();
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
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
			   students student=new students();
			   student.setUserID(rs.getInt("UserID"));
			   student.setName(rs.getString("RealName"));
			   student.setStudentNo(rs.getString("StudentNo"));
			   student.setSchool(rs.getString("school"));
			   student.setClassNum(rs.getString("class"));
			   student.setTelephone(rs.getString("telephone"));
               list.add(student);
	         }
			 
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
	return list;
 }
	/*
	 * 获取所有班级信息
	 */
	public static List<Classes> getClasses(int teacherId){
		Connection conn = null;
		List<Classes> list = new ArrayList<Classes>();
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		PreparedStatement pmt = null; 
		String sql = "";
		sql="select * from Classes where UserID=? ";
		try {
			ResultSet rs = null;
			pmt=JDBCUtil.getPreparedStatement(conn, sql);
			pmt.setInt(1, teacherId);
			rs = pmt.executeQuery();
			 while (rs.next()) { 
				 Classes classes=new Classes();
				 classes.setClassId(rs.getInt("ClassID"));
				 classes.setClassName(rs.getString("ClassName"));
                 list.add(classes);
	         }
			 
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
	return list;
}
	/*
	 * 更新学生班级id
	 */
	public static boolean updateClassId(List<students> list,int classId){
		
		Connection conn = null;
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		PreparedStatement pmt = null; 
		String sql = "";
		int resultCount = 0;
		try {
			ResultSet rs = null;
			
			for(int i=0;i<list.size();i++){
				students student=list.get(i);
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
		} finally {
			
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
     return false;
}
	/*
	 * 老师创建班级
	 */
	public static boolean insertClass(String className,int UserID){
		boolean result=false;
		 //数据库连接的获取的操作，对用的是自己封装的一个util包中的类进行的操作
		Connection conn = null;
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
	    
		PreparedStatement pmt = null; 
		try {
		
			String sql="insert into classes (ClassName,UserID) values(?,?)";
			pmt=JDBCUtil.getPreparedStatement(conn, sql); 	
			pmt.setString(1, className);
			pmt.setInt(2, UserID);
			if(pmt.executeUpdate()>0){
				return true;
			}else{
				return false;
			}
			 
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
		return result;
	}
}
