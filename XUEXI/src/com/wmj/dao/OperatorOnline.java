package com.wmj.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

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

}
