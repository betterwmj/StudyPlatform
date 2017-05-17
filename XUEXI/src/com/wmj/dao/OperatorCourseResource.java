package com.wmj.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.wmj.bean.CourseRescoure;
import com.wmj.util.JDBCUtil;

public class OperatorCourseResource {
	public static List<CourseRescoure> getRecource(int currentpage,int pageItems) throws Exception{
		Connection conn = null;
		List<CourseRescoure> list = new ArrayList<CourseRescoure>();
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			throw e1;
		}
		int start=(currentpage-1)*pageItems;
		int end=pageItems;
		PreparedStatement pmt1 = null; 
		PreparedStatement pmt2 = null; 
		String sql1 = "";
		String sql2 = "";		
		sql1 ="select * from course_resource order by upload_time desc";	
		sql2=sql1+" limit "+start+","+end+" ";
		try {
			ResultSet rs = null;
			pmt1=JDBCUtil.getPreparedStatement(conn, sql1);
			rs = pmt1.executeQuery();
			int count=0;
			while(rs.next()){
				count++;
			}
			pmt2=JDBCUtil.getPreparedStatement(conn, sql2);
			rs = pmt2.executeQuery();
			 while (rs.next()) { 
			   CourseRescoure course =new CourseRescoure();
			   course.setId(rs.getInt("id"));
			   course.setFileName(rs.getString("file_name"));
			   course.setUploadId(rs.getInt("uploader_id"));
			   course.setCreateTime(rs.getTimestamp("upload_time"));
			   course.setFileUrl(rs.getString("file_url"));
			   course.setUpload_name(rs.getString("upload_name"));
			   course.setCount(count);
               list.add(course);
	         }
			 
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} finally {
			// 关闭连接
			JDBCUtil.close(conn, pmt1);
		}
	return list;
   }

	public static boolean insertRecource(CourseRescoure course) throws Exception{
		boolean result = false;
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
			
            String sql="insert into course_resource (file_name,uploader_id,upload_name,upload_time,file_url) values(?,?,?,?,?)";
			pmt=JDBCUtil.getPreparedStatement(conn, sql); 
			pmt.setString(1, course.getFileName());
			pmt.setInt(2, course.getUploadId());
			pmt.setString(3, course.getUpload_name());
			pmt.setTimestamp(4, course.getCreateTime());
			pmt.setString(5, course.getFileUrl());
			
			if(pmt.executeUpdate()>0)
			   result = true;
		    
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
