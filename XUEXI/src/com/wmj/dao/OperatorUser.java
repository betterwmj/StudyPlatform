package com.wmj.dao;
import java.sql.*;
import java.util.HashMap;
import java.util.Map;

import com.wmj.bean.Person;
import com.wmj.bean.students;
import com.wmj.bean.teachers;
import com.wmj.util.JDBCUtil;

/*
 * 对用户信息进行操作的数据库类
 */
public class OperatorUser {
	public ResultSet queryData(Connection con, String sSQL) {

		ResultSet rResult = null;
		try {

			Statement stmt = con.createStatement();
			rResult = stmt.executeQuery(sSQL);
		} catch (Exception e) {

		} finally {
			return rResult;
		}
	}

	/*
	 * 用户的插入，若插入成功，返回true，否则返回false //user为需要插入的用户
	 */
	public boolean insertStudent(students student){
		boolean result = false;
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
			String studentNo=student.getStudentNo();
			String sqlstudentSelect="select * from students where StudentNo='"+studentNo+"'";
			pmt=JDBCUtil.getPreparedStatement(conn, sqlstudentSelect);
			rs = pmt.executeQuery();
			 if (rs.next()) {
				result = false;
			 }else{
	            String sql="insert into students (RealName,password,StudentNo,school,class,telephone) values(?,?,?,?,?,?)";
				pmt=JDBCUtil.getPreparedStatement(conn, sql); 
				System.out.print("operatorUser--班级:"+student.getClassNum());
				pmt.setString(1, student.getName());
				pmt.setString(2, student.getPassword());
				pmt.setString(3, student.getStudentNo());
				pmt.setString(4, student.getSchool());
				pmt.setString(5, student.getClassNum());
				pmt.setString(6, student.getTelephone());
				if(pmt.executeUpdate()>0)
				   result = true;
		    }
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
		return result;
	}
	public boolean insertTeacher(teachers teacher){
		boolean result = false;
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
			int subjectId = 0;
			String subjectName=teacher.getSubject();
			String teacherName=teacher.getName();
			String sqlteacherSelect="select * from teachers where RealName='"+teacherName+"'";
			pmt=JDBCUtil.getPreparedStatement(conn, sqlteacherSelect); 
			rs = pmt.executeQuery();
			 if (rs.next()) {
				result = false;
			 }else{
					System.out.print("学科"+subjectName);
					rs = pmt.executeQuery();
					String sqlsubjectSelect="select SubjectID from subjects where SubjectName='"+subjectName+"'";
					String sqlsubjectInsert="insert into subjects(SubjectName) values('"+subjectName+"')";
					pmt=JDBCUtil.getPreparedStatement(conn, sqlsubjectSelect); 
					rs = pmt.executeQuery();
					if (rs.next()) {
						subjectId = rs.getInt(1);
					}else{
						pmt=JDBCUtil.getPreparedStatement(conn, sqlsubjectInsert); 
						pmt.executeUpdate();
						String sqlsubjectSelects="select SubjectID from subjects where SubjectName='"+subjectName+"'";
						pmt=JDBCUtil.getPreparedStatement(conn, sqlsubjectSelects);
						rs = pmt.executeQuery();
						if (rs.next()) {
							subjectId = rs.getInt(1);
						}
					}
		            String sql="insert into teachers (RealName,password,subjectID) values(?,?,?)";
					pmt=JDBCUtil.getPreparedStatement(conn, sql); 
					System.out.print("operatorUser"+subjectName+subjectId);
					pmt.setString(1, teacher.getName());
					pmt.setString(2, teacher.getPassword());
					pmt.setInt(3, subjectId);
					if(pmt.executeUpdate()>0)
					   result = true;
			 }
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			// 关闭连接
			JDBCUtil.close(conn, pmt);
		}
		return result;
	}
	// 判断用户名密码是否正确，如果正确，返回用户姓名。number标志是老师还是学生
	public Map<String,String> isUserPasswordCorrect(String userName, String userPassword,int number) {
		 //数据库连接的获取的操作，对用的是自己封装的一个util包中的类进行的操作
		Connection conn = null;
		try {
			conn = JDBCUtil.getConnection();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
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
				sql ="select * from students where RealName = ? and password = ?";
			else 
				sql ="select * from teachers where RealName = ? and password = ?";
			/* 完成查询 */
			pmt=JDBCUtil.getPreparedStatement(conn, sql);   
			pmt.setString(1, userName);
			pmt.setString(2, userPassword);
			
			rs = pmt.executeQuery();

			/* 如果查询结果不为空，则登陆成功；否则，登陆失败 */
			if (rs.next()) {
				
				userInfo.put("id", rs.getInt("id")+"");
				userInfo.put("userName", rs.getString("RealName"));
				userInfo.put("type", number+"");
				userInfo.put("subjectId", rs.getInt("subjectID")+"");
			}
			System.out.println(result);
		} catch (SQLException e) {
			// 数据库操作出错
			e.printStackTrace();
		} finally {
			
			//资源的释放的操作
	        JDBCUtil.close(conn, pmt, rs);
		}
		return userInfo;
	}

	/* 根据用户姓名获得用户的信息。 */
	public Person getUserByName(String userName) {
		Person user = new Person();
		/* 设置所需变量 */
		Connection con = null;
		ResultSet rs = null;
		PreparedStatement pmt = null;
		try {
			String url = "jdbc:mysql://localhost:3306/xipt";
			String users = "root";
			String userpassword = "123456";
			/* 建立连接 */
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection(url, users, userpassword);

			/* 完成查询 */
			pmt = con.prepareStatement("select * from userinfo where name= ?");
			pmt.setString(1, userName);
			rs = pmt.executeQuery();

			/* 如果查询结果不为空，设置用户信息 */
			if (rs.next()) {
				user.setName(rs.getString(1));
				user.setPassword(rs.getString(2));
				//user.setEmail(rs.getString(3));
				
			}
		} catch (ClassNotFoundException e) {
			// 声明驱动程序时报错
			e.printStackTrace();
		} catch (SQLException e) {
			// 数据库操作出错
			e.printStackTrace();
		} finally {
			// 关闭连接
			try {
				if (rs != null)
					rs.close();
				if (pmt != null)
					pmt.close();
				if (con != null)
					con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return user;
	}

	// 修改用户信息
	public int updata(String sql) {
		Connection con = null;
		Statement smt = null;
		int result = 0;
		try {
			String url = "jdbc:sqlserver://127.0.0.1:1433;DatabaseName=DYP";
			String users = "sa";
			String userpassword = "9659";
			/* 建立连接 */
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection(url, users, userpassword);
			smt = con.createStatement();
			result = smt.executeUpdate(sql);

		} catch (ClassNotFoundException e) {
			// 声明驱动程序时报错
			e.printStackTrace();
		} catch (SQLException e) {
			// 数据库操作出错
			e.printStackTrace();
		} finally {
			// 关闭连接
			try {

				if (smt != null)
					smt.close();
				if (con != null)
					con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return result;
	}
}
