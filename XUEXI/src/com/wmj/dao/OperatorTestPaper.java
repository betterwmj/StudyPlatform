package com.wmj.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import com.wmj.bean.Paper;
import com.wmj.util.JDBCUtil;
public class OperatorTestPaper {
	/*
	 * 获取该老师所创建的所有试卷
	 */
	public static  List<Paper> getTestPaper(int teacherId){
		
		 //数据库连接的获取的操作，对用的是自己封装的一个util包中的类进行的操作
		Connection conn = null;
		List<Paper> list = new ArrayList<Paper>();
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		PreparedStatement pmt = null; 
		try {
			ResultSet rs = null;
			String sql="select TestName from  paper where UserID=?";
			pmt=JDBCUtil.getPreparedStatement(conn, sql); 
			pmt.setInt(1, teacherId);
			rs = pmt.executeQuery();
			 while (rs.next()) {
			   Paper paper=new Paper();
			   paper.setTestName(rs.getString("TestName"));
               list.add(paper);
         
	         }
			 
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
		return list;
	}
	
}
