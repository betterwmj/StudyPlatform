package com.wmj.servlet;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import com.wmj.bean.ApiResult;
import com.wmj.dao.OperatorSubject;

/**
 * Servlet implementation class GetTitle
 */
@WebServlet("/GetTitle")
public class GetTitle extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetTitle() {
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
		String subject= request.getParameter("subject");
	    String type= request.getParameter("type");
	    try {
			List<Map> list =  OperatorSubject.getTitle(subject, type);
			ApiResult result = new ApiResult();
			result.setCode(0);
			result.setData(list);
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

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
