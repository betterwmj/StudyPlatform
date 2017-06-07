package com.wmj.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.wmj.bean.ApiResult;
import com.wmj.bean.SchoolNews;
import com.wmj.dao.OperatorNews;

import net.sf.json.JSONObject;

/**
 * Servlet implementation class GetNews
 */
@WebServlet("/GetNews")
public class GetNews extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetNews() {
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
        String currentPage=request.getParameter("currentPage");
        int currentpage=Integer.parseInt(currentPage);
        String PageItems=request.getParameter("pageItems");
        int pageItems=Integer.parseInt(PageItems);
        try {
			List<SchoolNews> list = OperatorNews.getNews(currentpage,pageItems);
			ApiResult result = new ApiResult();
			result.setCode(0);
			result.setData(list);
			response.getWriter().append(JSONObject.fromObject(result).toString());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ApiResult result = new ApiResult();
			result.setCode(-1);
			result.setMessage(e.getMessage());
			response.getWriter().append(JSONObject.fromObject(result).toString());
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
