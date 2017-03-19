package com.wmj.servlet;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.wmj.dao.OperatorClass;

/**
 * Servlet implementation class CreateClass
 */
@WebServlet("/CreateClass")
public class CreateClass extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CreateClass() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		 String cname = request.getParameter("className").trim();
		 HttpSession session = request.getSession();
	     Map<String,String> userInfo=(Map<String, String>) session.getAttribute("userInfo");	
	     String userid= userInfo.get("id");
	     int id=Integer.parseInt(userid);
	     boolean result=OperatorClass.insertClass(cname, id);
	 	response.getWriter().write(result+"");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
