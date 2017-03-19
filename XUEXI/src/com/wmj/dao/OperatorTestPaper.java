package com.wmj.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.wmj.bean.TestPaper;
import com.wmj.util.JDBCUtil;

public class OperatorTestPaper {
	/*
	 * 获取该老师所创建的所有试卷
	 */
	public static  List<TestPaper> getTestPaper(int teacherId){
		
		 //数据库连接的获取的操作，对用的是自己封装的一个util包中的类进行的操作
		Connection conn = null;
		List<TestPaper> list = new ArrayList<TestPaper>();
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		PreparedStatement pmt = null; 
		try {
			ResultSet rs = null;
			String sql="select TestName from  testpaper where UserID=?";
			pmt=JDBCUtil.getPreparedStatement(conn, sql); 
			pmt.setInt(1, teacherId);
			rs = pmt.executeQuery();
			 while (rs.next()) {
			   TestPaper paper=new TestPaper();
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
