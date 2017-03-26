package com.wmj.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.wmj.bean.Classes;
import com.wmj.bean.HomeWork;
import com.wmj.bean.HomeWorkDetail;

import com.wmj.util.JDBCUtil;

public class OperatorHomeWork {
	/*
	 * 添加作业到数据库,type为题目类型，选择题还是判断题
	 */
	public static boolean insertHomeWork(List<HomeWorkDetail> list,HomeWork home){
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
			int homeworkID = 0;
			ResultSet rs = null;
			String sql="insert into homeworks (homeworkname,time,teacherID,SubjectID,Finishtime) values(?,?,?,?,?)";
			pmt=JDBCUtil.getPreparedStatement(conn, sql,Statement.RETURN_GENERATED_KEYS); 	
			pmt.setString(1, home.getHomeWorkName());
			pmt.setString(2, home.getTime());
			pmt.setInt(3, home.getTeacherId());
			pmt.setInt(4, home.getSubjectId());
			pmt.setString(5, home.getFinishTime());
			if(pmt.executeUpdate()>0){
				rs = pmt.getGeneratedKeys(); //获取结果   
				if (rs.next()) {
					homeworkID = rs.getInt(1);//取得ID
				} else {
					result = false;
					return result;
				}
				int resultCount = 0;
				for(int i=0;i<list.size();i++){
					HomeWorkDetail homeTitle=list.get(i);
					String sqls="insert into homeworks_detail (ItemID,ItemType,HomeworkID) values(?,?,?)";
					pmt=JDBCUtil.getPreparedStatement(conn, sqls); 
					pmt.setInt(1, homeTitle.getItemId());
					pmt.setString(2, homeTitle.getItemType());
					pmt.setInt(3, homeworkID);
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
		} finally {
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
		return result;
	}
	/*
	 * 学生界面获取该学生所有应写的作业
	 */
	public static List<HomeWork> getHomeWork(int classId){
		Connection conn = null;
		List<HomeWork> list = new ArrayList<HomeWork>();
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		PreparedStatement pmt = null; 
		String sql = "";
		sql="select homeworkname from homeworks where ClassID=? ";
		try {
			ResultSet rs = null;
			pmt=JDBCUtil.getPreparedStatement(conn, sql);
			pmt.setInt(1, classId);
			rs = pmt.executeQuery();
			 while (rs.next()) { 
				 HomeWork homework=new HomeWork();
				 homework.setHomeId(rs.getInt("HomeworkID"));
				 homework.setHomeWorkName(rs.getString("homeworkname"));
                 list.add(homework);
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
