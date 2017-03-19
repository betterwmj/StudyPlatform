package com.wmj.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.wmj.bean.PaperTitle;
import com.wmj.bean.Person;
import com.wmj.bean.TestPaper;
import com.wmj.bean.students;
import com.wmj.bean.teachers;
import com.wmj.util.JDBCUtil;

public class OperatorSubject {
	/*
	 * 根据学科和题目类型从数据库获取相应的题目
	 */
	public static List<Map> getTitle(String subject,String type){
		Connection conn = null;
		List<Map> list = new ArrayList<Map>();
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		PreparedStatement pmt = null; 
		String sql = "";
		if( type.equals("选择题") ){
			sql="select a.ItemID,a.title,a.optionA,a.optionB,a.optionC,a.optionD,a.answer from choicetitle as a,subjects as b  where a.SubjectID=b.SubjectID and SubjectName= ?";
			try {
				ResultSet rs = null;
				pmt=JDBCUtil.getPreparedStatement(conn, sql);
				pmt.setString(1, subject);
				rs = pmt.executeQuery();
				 while (rs.next()) { 
				   Map<String,String> title = new HashMap<String,String>();
				   title.put("itemId", rs.getInt("ItemID")+"");
				   title.put("title", rs.getString("title"));
				   title.put("optionA", rs.getString("optionA"));
				   title.put("optionB", rs.getString("optionB"));
				   title.put("optionC", rs.getString("optionC"));
				   title.put("optionD", rs.getString("optionD"));
				   title.put("answer", rs.getString("answer"));
	               list.add(title);
		         }
				 
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				// 关闭连接
				JDBCUtil.close(conn, pmt);
			}
		}
		if( type.equals("判断题") ){
			sql="select a.ItemID,a.title,a.answer from truefalsetitle as a,subjects as b  where a.SubjectID=b.SubjectID and SubjectName= ?";
			try {
				ResultSet rs = null;
				pmt=JDBCUtil.getPreparedStatement(conn, sql);
				pmt.setString(1, subject);
				rs = pmt.executeQuery();
				 while (rs.next()) { 
				   Map<String,String> title = new HashMap<String,String>();
				   title.put("itemId", rs.getInt("ItemID")+"");
				   title.put("title", rs.getString("title"));
				   title.put("answer", rs.getString("answer"));
	               list.add(title);
		         }
				 
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				// 关闭连接
				JDBCUtil.close(conn, pmt);
			}
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
	 * 添加试卷到数据库,type为题目类型，选择题还是判断题
	 */
	public static boolean insertTestPaper(List<PaperTitle> list,TestPaper paper){
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
			ResultSet rs = null;
			String sql="insert into testpaper (TestName,SubjectID,UserID) values(?,?,?)";
			pmt=JDBCUtil.getPreparedStatement(conn, sql); 	
			pmt.setString(1, paper.getTestName());
			pmt.setInt(2, paper.getSubjectID());
			pmt.setInt(3, paper.getUserId());
			if(pmt.executeUpdate()>0){
				for(int i=0;i<list.size();i++){
					PaperTitle paperTitle=list.get(i);
					String sqls="insert into papertitle (TitleID,Type,TestpaperID) values(?,?,?)";
					pmt.setInt(1, paperTitle.getTitleId());
					pmt.setString(2, paperTitle.getType());
					pmt.setInt(3, paper.getTestpaperID());
					pmt=JDBCUtil.getPreparedStatement(conn, sqls); 
					if(pmt.executeUpdate()>0){
					    result = true;
					}
			  }
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
