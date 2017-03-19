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
		sql="select * from students where classid=null ";
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
	 * 得到所有学科下拉框
	 */
	public static  List<Map> getSubject(){
		
		 //数据库连接的获取的操作，对用的是自己封装的一个util包中的类进行的操作
		Connection conn = null;
		List<Map> list = new ArrayList<Map>();
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		PreparedStatement pmt = null; 
		try {
			ResultSet rs = null;
			String sqlSelect="select SubjectID,SubjectName from subjects";
			pmt=JDBCUtil.getPreparedStatement(conn, sqlSelect); 
			rs = pmt.executeQuery();
			 while (rs.next()) {
			   Map<String,String> title = new HashMap<String,String>();
			   title.put("SubjectName", rs.getString("SubjectName"));
			   title.put("SubjectID", rs.getString("SubjectID"));
               list.add(title);
          
	         }
			 
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
		System.out.print("operatorsubject"+list.size());
		return list;
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
		
			String sql="insert into classes (ClassName,UserID) values(?,?,?)";
			pmt=JDBCUtil.getPreparedStatement(conn, sql,Statement.RETURN_GENERATED_KEYS); 	
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
