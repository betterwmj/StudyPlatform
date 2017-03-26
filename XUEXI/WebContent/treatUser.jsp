<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page contentType="text/html;charset=gbk"%>

<%@page import="java.util.*"%>
<jsp:useBean id="db" class="com.wmj.dao.OperatorUser" scope="session" />
<html>
<body>
	<%
		request.setCharacterEncoding("gbk");
		response.setContentType("text/html;charset=gbk");
		String action = request.getParameter("action");
		System.out.println(action);
        if (action.equals("register")) {
			String name = request.getParameter("user").trim();
			String password = request.getParameter("password").trim();
			String passwords = request.getParameter("password1").trim();
			String email = request.getParameter("email").trim();
			String rank=request.getParameter("denger");
			int dnumber;
			if(rank==null)
				out.println("请选择学生或者教师");
			else if(!password.equals(passwords))
				 out.println("密码不一致");
			else{
				dnumber= Integer.parseInt(rank);
				//Person user = new Person();
		   		// user.setName(name);
		    	//user.setPassword(password);
			//	user.setRank(dnumber);
		   		//user.setEmail(email);
		   		 //if(db.insertUser(user)){
					out.println("注册成功");
		   		 %><a href="login.html" target=_red>返回登录页面</a><%
				//}else{
					//out.println("改用户名已被注册，请重新注册");
				//}
			}
		 }
		if(action.equals("denglu")) {
			String dname = request.getParameter("name").trim();
			String dpassword = request.getParameter("password").trim();
			int dnumber = Integer.parseInt(request.getParameter("denger"));
			System.out.println(dname+" "+dpassword+" "+dnumber);
			if (dname.equals("") || dname == null || dpassword == null
					|| dpassword.equals(""))
				out.println("用户名或者密码不能为空");
			else {
				//String userNames=db.isUserPasswordCorrect(dname, dpassword, dnumber);
				
				//if(userNames.equals("") ){
					//out.println("该用户不存在或身份验证失败");
					session.setAttribute("isLogin", false);
				//}else{
				//验证成功根据权限不同进入不同页面
			      switch(dnumber){
			      case 0:
			    	  %><jsp:forward page="student.jsp"/><% 
			    	  break;
			      case 1:
			    	  %><jsp:forward page="teacher.jsp"/><% 
			    	  break;
			      case 2:
			    	  %><jsp:forward page="admin.jsp"/><% 
			    	  break;
			      }
				session.setAttribute("isLogin", true);	
			}

		}
	 // }
	%>
</body>
</html>