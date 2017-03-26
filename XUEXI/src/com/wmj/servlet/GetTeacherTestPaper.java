package com.wmj.servlet;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.wmj.bean.Classes;
import com.wmj.bean.Paper;
import com.wmj.bean.Students;
import com.wmj.dao.OperatorClass;
import com.wmj.dao.OperatorTestPaper;

import net.sf.json.JSONArray;

/**
 * Servlet implementation class GetStudentTestPaper
 */
@WebServlet("/GetStudentTestPaper")
public class GetTeacherTestPaper extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetTeacherTestPaper() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String teacherId=request.getParameter("teacherId");
		int id=Integer.parseInt(teacherId);
		List<Paper> list = OperatorTestPaper.getTestPaper(id);
	    response.getWriter().append(JSONArray.fromObject(list).toString());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
