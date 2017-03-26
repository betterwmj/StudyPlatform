package com.wmj.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


import com.wmj.bean.Students;
import com.wmj.bean.Teachers;
import com.wmj.dao.OperatorUser;
public class treatUser  extends HttpServlet{
	 /**
	 * 登录注册判断
	 */
	private static final long serialVersionUID = 1L;
	public void doGet(HttpServletRequest request,
			   HttpServletResponse response)throws IOException, ServletException
			    {
		            request.setCharacterEncoding("utf-8");
				    response.setContentType("text/html;charset=utf-8");
					String url=null;
					PrintWriter out=response.getWriter();
			        HttpSession session = request.getSession();
			        session.removeAttribute("user");
					String action=request.getParameter("action");
					System.out.println(action);
					OperatorUser db=new OperatorUser();
					 if(action.equals("denglu")) {
						    String dname = request.getParameter("name").trim();
							String dpassword = request.getParameter("password").trim();
							int dnumber = Integer.parseInt(request.getParameter("denger"));
							System.out.println(dname+" "+dpassword+" "+dnumber);
							if (dname.equals("") || dname == null || dpassword == null|| dpassword.equals(""))
								out.println("用户名或者密码不能为空");
							else {
								Map<String,String> userInfo=db.isUserPasswordCorrect(dname, dpassword,dnumber);
								if(userInfo.isEmpty() ){
									out.println("该用户不存在或身份验证失败");
									
								}else{
								//验证成功根据权限不同进入不同页面
							      switch(dnumber){
							      case 0:
							    	  url ="/student.jsp";
							    	  break;
							      case 1:
							    	  url="/teacher.jsp";
							    	  break;
							      }
								session.setAttribute("userInfo", userInfo);	
							}

						}
					  }
					
			        if(action.equals("studentregister"))
			        {
							
					     boolean result=false;
						 String name = request.getParameter("user").trim();
						 String password = request.getParameter("password").trim();
						 String passwords = request.getParameter("password1").trim();
						 String studentNo=request.getParameter("studentNo").trim();
						 String school=request.getParameter("school").trim();
						 String classes=request.getParameter("classes").trim();
						 String telephone=request.getParameter("telephone").trim();
						 System.out.print("treatUser--班级:"+classes);
						 if(!password.equals(passwords))
							 out.println("密码不一致");
						 else{
							 Students student = null;
							 student = new Students();
							 student.setUserName(name);
							 student.setPass(password);
							
							 student.setSchool(school);
							
							 student.setTelephone(telephone);
							// result=db.insertStudent(student);
							 if(result){
								out.println("注册成功");
								out.println("<a href='../login.html' target=_red>返回登录页面</a>");
							}else{
								out.println("改用户名已被注册，请重新注册");
							}
						 }
						 
					 }
			        if(action.equals("teacheregister")){
			        	 boolean result=false;
						 String tname = request.getParameter("tuser").trim();
						 String tpassword = request.getParameter("tpassword").trim();
						 String tpasswords = request.getParameter("tpassword1").trim();
						 String Subject=request.getParameter("Subject").trim();
						 if(!tpassword.equals(tpasswords))
							 out.println("密码不一致");
						 else{
							 Teachers teacher = null;
							 teacher = new Teachers();
							 teacher.setUserName(tname);
							 teacher.setPassword(tpassword);
							
							 //teacher.setSubject(Subject);
							// result=db.insertTeacher(teacher);
							 if(result){
									out.println("注册成功");
									out.println("<a href='../login.html' target=_red>返回登录页面</a>");
							}else{
									out.println("改用户名已被注册，请重新注册");
							}
						 
					 
			   		 
				}
		       
		     
	       }
			       
				 ServletContext sc = getServletContext();
				 RequestDispatcher rd = sc.getRequestDispatcher(url);
				 if(rd!=null)
				    rd.forward(request, response); 
				 }
			  
				public void doPost(HttpServletRequest request,
			                      HttpServletResponse response)
			        throws IOException, ServletException
			    {
			        doGet(request, response);
			    }
}
