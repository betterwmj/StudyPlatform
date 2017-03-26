package com.wmj.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.wmj.bean.ApiResult;
import com.wmj.bean.Students;
import com.wmj.dao.OperatorUser;

import net.sf.json.JSONArray;

/**
 * Servlet implementation class StudentRegister
 */
@WebServlet("/StudentRegister")
public class StudentRegister extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public StudentRegister() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String name=request.getParameter("userName");
		String realName=request.getParameter("realName");
		String password=request.getParameter("password");
		String school=request.getParameter("school");
		String phone=request.getParameter("phone");
		Students student=new Students();
		student.setUserName(name);
		student.setRealName(realName);
		student.setPass(password);
		student.setSchool(school);
		student.setTelephone(phone);
		try {
			boolean resultCode=OperatorUser.insertStudent(student);
			ApiResult result = new ApiResult();
			result.setCode(0);
			result.setData(resultCode);
			response.getWriter().append(JSONArray.fromObject(result).toString());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ApiResult result = new ApiResult();
			result.setCode(-1);
			result.setMessage(e.getMessage());
			response.getWriter().append(JSONArray.fromObject(result).toString());
		}
		
	}

}
