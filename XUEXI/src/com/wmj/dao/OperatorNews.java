package com.wmj.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.wmj.bean.SchoolNews;
import com.wmj.util.JDBCUtil;

public class OperatorNews {
	public static List<SchoolNews> getNews(int currentpage,int pageItems) throws Exception{
		Connection conn = null;
		List<SchoolNews> list = new ArrayList<SchoolNews>();
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
		sql1 ="select * from school_news";	
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
			   SchoolNews news=new SchoolNews();
			   news.setId(rs.getInt("id"));
			   news.setNewsTitle(rs.getString("news_title"));
			   news.setNewsContent(rs.getString("news_content"));
			   news.setCreatTime(rs.getTimestamp("createtime"));
			   news.setImg(rs.getString("img"));
			   news.setCount(count);
               list.add(news);
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
}
