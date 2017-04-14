package com.wmj.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.wmj.bean.OnlineAnswer;
import com.wmj.bean.OnlineQuestion;
import com.wmj.util.JDBCUtil;

public class OperatorOnline {
	/*
	 *根据老师id或者学生id获取
	 */
	public static List<OnlineQuestion> getOnlineQuestion(int userId ,int typeId) throws Exception{
		Connection conn = null;
		List<OnlineQuestion> list = new ArrayList<OnlineQuestion>();
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			throw e1;
		}
		PreparedStatement pmt = null; 
		String sql = "";
		if(typeId==0){
			sql="select * from online_question where student_id =? ";
			
		}else{
			sql="select * from online_question where answer_id =? ";
		}
		try {
			ResultSet rs = null;
			pmt=JDBCUtil.getPreparedStatement(conn, sql);
			pmt.setInt(1, userId);
			rs = pmt.executeQuery();
			 while (rs.next()) { 
			   OnlineQuestion question=new OnlineQuestion();
			   question.setId(rs.getInt("id"));
			   question.setStudentId(rs.getInt("student_id"));
			   question.setQuestionTitle(rs.getString("questiontitle"));
			   question.setQuestionContent(rs.getString("questioncontent"));
			   question.setAnswerId(rs.getInt("answer_id"));
			   question.setCreateTime(rs.getTimestamp("createtime"));
               list.add(question);
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
	 * 学生提问，若提交成功，返回true，否则返回false 
	 */
	public static boolean insertQuestion(OnlineQuestion question) throws Exception{
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
			
            String sql="insert into online_question (student_id,questiontitle,questioncontent,answer_id,createtime) values(?,?,?,?,?)";
			pmt=JDBCUtil.getPreparedStatement(conn, sql); 
			pmt.setInt(1, question.getStudentId());
			pmt.setString(2, question.getQuestionTitle());
			pmt.setString(3, question.getQuestionContent());
			pmt.setInt(4, question.getAnswerId());
			pmt.setTimestamp(5, question.getCreateTime());
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
	 * 在线答疑，若提交成功，返回true，否则返回false 
	 */
	public static boolean insertAnswer(OnlineAnswer answers) throws Exception{
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
			
            String sql="insert into online_answer (online_question_id,answer_id,answer,answertime) values(?,?,?,?)";
			pmt=JDBCUtil.getPreparedStatement(conn, sql); 
			pmt.setInt(1, answers.getOnlineQuestionId());
			pmt.setInt(2, answers.getAnswerId());
			pmt.setString(3, answers.getAnswer());
			pmt.setTimestamp(4, answers.getAnswerTime());
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
