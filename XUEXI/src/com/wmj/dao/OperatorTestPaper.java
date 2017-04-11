package com.wmj.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import com.wmj.bean.Paper;
import com.wmj.bean.Title;
import com.wmj.util.JDBCUtil;
public class OperatorTestPaper {
	/*
	 * 获取该老师所创建的所有试卷
	 */
	public static  List<Paper> getTestPaperByTeacherId(int teacherId) throws Exception{
		
		 //数据库连接的获取的操作，对用的是自己封装的一个util包中的类进行的操作
		Connection conn = null;
		List<Paper> list = new ArrayList<Paper>();
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			throw e1;
		}
		PreparedStatement pmt = null; 
		try {
			ResultSet rs = null;
			String sql="select * from  paper where UserID=?";
			pmt=JDBCUtil.getPreparedStatement(conn, sql); 
			pmt.setInt(1, teacherId);
			rs = pmt.executeQuery();
			 while (rs.next()) {
			   Paper paper=new Paper();
			   paper.setTestpaperID(rs.getInt("TestpaperID"));
			   paper.setTestName(rs.getString("TestName"));
			   paper.setSubjectID(rs.getInt("SubjectID"));
			   paper.setUserId(rs.getInt("UserID"));
			   paper.setStatus(rs.getInt("status"));
			   paper.setCreateTime(rs.getTimestamp("create_time"));
               list.add(paper);
         
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
	 * 获取该科目的所有试卷
	 */
	public static  List<Paper> getTestPaperBySubjectId(int subjectId) throws Exception{
		
		 //数据库连接的获取的操作，对用的是自己封装的一个util包中的类进行的操作
		Connection conn = null;
		List<Paper> list = new ArrayList<Paper>();
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			throw e1;
		}
		PreparedStatement pmt = null; 
		try {
			ResultSet rs = null;
			String sql="select * from  paper where SubjectID=? and status=1";
			pmt=JDBCUtil.getPreparedStatement(conn, sql); 
			pmt.setInt(1, subjectId);
			rs = pmt.executeQuery();
			 while (rs.next()) {
			   Paper paper=new Paper();
			   paper.setTestpaperID(rs.getInt("TestpaperID"));
			   paper.setTestName(rs.getString("TestName"));
			   paper.setSubjectID(rs.getInt("SubjectID"));
			   paper.setUserId(rs.getInt("UserID"));
			   paper.setStatus(rs.getInt("status"));
			   paper.setCreateTime(rs.getTimestamp("create_time"));  
               list.add(paper);
         
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
	   * 发布试卷，更新试卷状态为1
	   */
	  public static  boolean updatePaper(int paperID) throws Exception{
	    
	     //数据库连接的获取的操作，对用的是自己封装的一个util包中的类进行的操作
	    boolean result=false;
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
	      ResultSet rs = null;
	      String sql="update paper set status=1 where TestpaperID=?";
	      pmt=JDBCUtil.getPreparedStatement(conn, sql); 
	      pmt.setInt(1, paperID);
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
	  /*
	   * 获取试卷详情
	   */
	  public static  List<Title> getPaperDetail(int paperID) throws Exception{
		    
		     //数据库连接的获取的操作，对用的是自己封装的一个util包中的类进行的操作
		    Connection conn = null;
		    List<Title> list = new ArrayList<Title>();
		    try {
		      conn = JDBCUtil.getConnection();
		    } catch (SQLException e1) {
		      // TODO Auto-generated catch block
		      e1.printStackTrace();
		      throw e1;
		    }
		    PreparedStatement pmt = null; 
		    try {
		      ResultSet rs = null;
		      String sql="select a.score,b.* from paper_detail as a,title as b  where a.TitleID=b.ItemID and a.TestpaperID=?;";
		      pmt=JDBCUtil.getPreparedStatement(conn, sql); 
		      pmt.setInt(1, paperID);
		      rs = pmt.executeQuery();
		       while (rs.next()) {
		         Title title=new Title();
		         title.setItemId(rs.getInt("ItemID"));
		         title.setTitle(rs.getString("title"));
		         title.setType(rs.getInt("type"));
		         title.setOptionA(rs.getString("optionA"));
		         title.setOptionB(rs.getString("optionB"));
		         title.setOptionC(rs.getString("optionC"));
		         title.setOptionD(rs.getString("optionD"));
		         title.setAnswer(rs.getString("answer"));
		         title.setSubjectId(rs.getInt("SubjectID"));
		         title.setTeacherId(rs.getInt("teacherid"));
		         title.setScore(rs.getInt("score"));
		         list.add(title);
		        
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
}
