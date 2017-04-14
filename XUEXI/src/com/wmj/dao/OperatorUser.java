package com.wmj.dao;
import java.sql.*;
import java.util.HashMap;
import java.util.Map;

import com.wmj.bean.Students;
import com.wmj.bean.Teachers;
import com.wmj.util.JDBCUtil;

/*
 * 对用户信息进行操作的数据库类
 */
public class OperatorUser {
	/*
	 * 查询用户名是否重复，返回true，否则返回false //user为需要插入的用户
	 */
	public static Object getUserInfo(String userName,int type) throws Exception{
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
            String sql=null;
			if(type==0)
				sql ="select * from students where userName = ? ";
			else 
				sql ="select * from teachers where userName = ? ";
			ResultSet rs = null;
			pmt=JDBCUtil.getPreparedStatement(conn, sql);
			pmt.setString(1, userName);
			rs = pmt.executeQuery();
			 if (rs.next()) {
				if(type==0){
					Students student=new Students();
					student.setUserID(rs.getInt("UserID"));
					student.setUserName(rs.getString("userName"));
					student.setRealName(rs.getString("RealName"));
					student.setSchool(rs.getString("school"));
					student.setTelephone(rs.getString("telephone"));
					student.setClassId(rs.getInt("classid"));
					return student;
				}		
				else {
					Teachers teacher=new Teachers();
					teacher.setUserID(rs.getInt("UserID"));
					teacher.setUserName(rs.getString("userName"));
					teacher.setRealName(rs.getString("RealName"));
					teacher.setSubjectId(rs.getInt("subjectID"));
					return teacher;
					
				}
					
			 }
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		} finally {
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
		return null;
	}
	/*
	 * 学生用户的插入，若插入成功，返回true，否则返回false //user为需要插入的用户
	 */
	public static boolean insertStudent(Students student) throws Exception{
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
			
            String sql="insert into students (userName,RealName,password,school,telephone) values(?,?,?,?,?)";
			pmt=JDBCUtil.getPreparedStatement(conn, sql); 
			pmt.setString(1, student.getUserName());
			pmt.setString(2, student.getRealName());
			pmt.setString(3, student.getPass());
			pmt.setString(4, student.getSchool());
			pmt.setString(5, student.getTelephone());
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
	public static boolean insertTeacher (Teachers teacher) throws Exception{
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
		
            String sql="insert into teachers (userName,RealName,password,subjectID) values(?,?,?,?)";
			pmt=JDBCUtil.getPreparedStatement(conn, sql); 
			//System.out.print("operatorUser"+subjectName+subjectId);
			pmt.setString(1, teacher.getUserName());
			pmt.setString(2, teacher.getRealName());
			pmt.setString(3, teacher.getPassword());
			pmt.setInt(4, teacher.getSubjectId());
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
	// 判断用户名密码是否正确，如果正确，返回用户姓名。number标志是老师还是学生
	public static Map<String,String> isUserPasswordCorrect(String userName, String userPassword,int number) throws Exception {
		 //数据库连接的获取的操作，对用的是自己封装的一个util包中的类进行的操作
		Connection conn = null;
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			throw e1;
		}
		String result = "";
		Map<String,String> userInfo = new HashMap<>();
		ResultSet rs = null;
		//pmt对象
        PreparedStatement pmt = null; 
		try {
			/* 设置所需变量 */
			String sql="";
			System.out.println("teacher or students"+number+userName);
			if(number==0)
				sql ="select * from students where userName = ? and password = ?";
			else 
				sql ="select * from teachers where userName = ? and password = ?";
			/* 完成查询 */
			pmt=JDBCUtil.getPreparedStatement(conn, sql);   
			pmt.setString(1, userName);
			pmt.setString(2, userPassword);
			
			rs = pmt.executeQuery();

			/* 如果查询结果不为空，则登陆成功；否则，登陆失败 */
			if (rs.next()) {
				
				userInfo.put("id", rs.getInt("UserID")+"");
				userInfo.put("userName", rs.getString("userName"));
				userInfo.put("type", number+"");
				if(number==0)
				   userInfo.put("classId", rs.getInt("classid")+"");
				if(number==1)
				   userInfo.put("subjectId", rs.getInt("subjectID")+"");
			}
			System.out.println(result);
		} catch (SQLException e) {
			// 数据库操作出错
			e.printStackTrace();
			throw e;
		} finally {
			
			//资源的释放的操作
	        JDBCUtil.close(conn, pmt, rs);
		}
		return userInfo;
	}
	
	// 老师个人中心修改个人信息
	public static boolean updateTeacher(Teachers teacher) throws Exception{
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
			
           String sql="update teachers set userName=? ,realName=?,password=? , subjectID=? where userID=?";
			pmt=JDBCUtil.getPreparedStatement(conn, sql); 
			pmt.setString(1, teacher.getUserName());
			pmt.setString(2, teacher.getRealName());
			pmt.setString(3, teacher.getPassword());
			pmt.setInt(4, teacher.getSubjectId());
			pmt.setInt(5, teacher.getUserID());
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
	// 学生个人中心修改个人信息
	public static boolean updateStudent(Students student) throws Exception{
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
		
            String sql="update students set userName=? ,RealName=?,password=?,school=?,telephone=? where UserID=?";
			pmt=JDBCUtil.getPreparedStatement(conn, sql); 
			pmt.setString(1, student.getUserName());
			pmt.setString(2, student.getRealName());
			pmt.setString(3, student.getPass());
			pmt.setString(4, student.getSchool());
			pmt.setString(5, student.getTelephone());
			pmt.setInt(6, student.getUserID());
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
