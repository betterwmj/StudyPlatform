package com.wmj.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.wmj.bean.Paper;
import com.wmj.bean.PaperDetail;
import com.wmj.util.JDBCUtil;

public class OperatorSubject {
	/*
	 * 根据学科id(默认为老师的学科id)和题目类型从数据库获取相应的题目
	 */
	public static List<Map> getTitle(int subjectId,int type) throws Exception{
		Connection conn = null;
		List<Map> list = new ArrayList<Map>();
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			throw e1;
		}
		PreparedStatement pmt = null; 
		String sql = "";
		try {
			    sql="select ItemID,title,optionA,optionB,optionC,optionD,answer from title where SubjectID=? and type=?";
				ResultSet rs = null;
				pmt=JDBCUtil.getPreparedStatement(conn, sql);
				pmt.setInt(1, subjectId);
				pmt.setInt(2, type);
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
			throw e;
		} finally {
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
		
//		if( type.equals("判断题") ){
//			sql="select a.ItemID,a.title,a.answer from truefalsetitle as a,subjects as b  where a.SubjectID=b.SubjectID and a.SubjectID= ?";
//			try {
//				ResultSet rs = null;
//				pmt=JDBCUtil.getPreparedStatement(conn, sql);
//				pmt.setInt(1, subjectId);
//				rs = pmt.executeQuery();
//				 while (rs.next()) { 
//				   Map<String,String> title = new HashMap<String,String>();
//				   title.put("itemId", rs.getInt("ItemID")+"");
//				   title.put("title", rs.getString("title"));
//				   title.put("answer", rs.getString("answer"));
//	               list.add(title);
//		         }
//				 
//			} catch (SQLException e) {
//				e.printStackTrace();
//				throw e;
//			} finally {
//				// 关闭连接
//				JDBCUtil.close(conn, pmt);
//			}
//		}
		
		return list;
	}
	
	/*
	 * 得到对应专业所有学科下拉框
	 */
	public static  List<Map> getSubject(int spencialtiesId) throws Exception{
		
		 //数据库连接的获取的操作，对用的是自己封装的一个util包中的类进行的操作
		Connection conn = null;
		List<Map> list = new ArrayList<Map>();
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
			String sqlSelect="select a.SubjectID,SubjectName from subjects as a,subject_spencialities_relationship as b where a.SubjectID=b.subjectId and b.Spencialities_id=?";
			pmt=JDBCUtil.getPreparedStatement(conn, sqlSelect); 
			pmt.setInt(1, spencialtiesId);
			rs = pmt.executeQuery();
			 while (rs.next()) {
			   Map<String,String> title = new HashMap<String,String>();
			   title.put("SubjectName", rs.getString("SubjectName"));
			   title.put("SubjectID", rs.getString("SubjectID"));
               list.add(title);
          
	         }
			 
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} finally {
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
		System.out.print("operatorsubject"+list.size());
		return list;
	}
	/*
	 * 得到所有专业下拉框
	 */
	public static  List<Map> getSpecities() throws Exception{
		
		 //数据库连接的获取的操作，对用的是自己封装的一个util包中的类进行的操作
		Connection conn = null;
		List<Map> list = new ArrayList<Map>();
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
			String sqlSelect="select * from specialities";
			pmt=JDBCUtil.getPreparedStatement(conn, sqlSelect); 
			rs = pmt.executeQuery();
			 while (rs.next()) {
			   Map<String,String> title = new HashMap<String,String>();
			   title.put("specialitiesId", rs.getString("id"));
			   title.put("specialitiesName", rs.getString("name"));
               list.add(title);
          
	         }
			 
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} finally {
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
		System.out.print("operatorspecialities"+list.size());
		return list;
	}
	/*
	 * 添加试卷到数据库,type为题目类型，选择题还是判断题
	 */
	public static boolean insertTestPaper(List<PaperDetail> list,Paper paper) throws Exception{
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
			int testpaperID = 0;
			ResultSet rs = null;
			String sql="insert into paper (TestName,SubjectID,UserID,status,create_time) values(?,?,?,0,?)";
			pmt=JDBCUtil.getPreparedStatement(conn, sql,Statement.RETURN_GENERATED_KEYS); 	
			pmt.setString(1, paper.getTestName());
			pmt.setInt(2, paper.getSubjectID());
			pmt.setInt(3, paper.getUserId());
			pmt.setTimestamp(4, paper.getCreateTime());
			//pmt.setDate(4, (Date) paper.getCreateTime());
			if(pmt.executeUpdate()>0){
				rs = pmt.getGeneratedKeys(); //获取结果   
				if (rs.next()) {
					testpaperID = rs.getInt(1);//取得ID
				} else {
					result = false;
					return result;
				}
				int resultCount = 0;
				for(int i=0;i<list.size();i++){
					PaperDetail paperTitle=list.get(i);
					String sqls="insert into paper_detail (TitleID,TestpaperID,score) values(?,?,?)";
					pmt=JDBCUtil.getPreparedStatement(conn, sqls); 
					pmt.setInt(1, paperTitle.getTitleId());;
					pmt.setInt(2, testpaperID);
					pmt.setInt(3, paperTitle.getScore());
					if(pmt.executeUpdate()>0){
						resultCount++;
					}
				}
				if( resultCount == list.size() ){
					return true;
				}else{
					return false;
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
