package com.wmj.servlet;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Timestamp;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import com.wmj.bean.ApiResult;
import com.wmj.bean.BaseUrl;
import com.wmj.bean.CourseRescoure;
import com.wmj.dao.OperatorCourseResource;

import net.sf.json.JSONObject;

/**
 * Servlet implementation class UploadImage
 */
@WebServlet("/UploadFile")
public class UploadFile extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public UploadFile() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession();
        Map<String,String> userInfo=(Map<String, String>) session.getAttribute("userInfo");
        String userId= userInfo.get("id");
        String realName= userInfo.get("realName");
        int userid=Integer.parseInt(userId);
		try {

			// 1、创建工厂类：DiskFileItemFactory
			DiskFileItemFactory factory = new DiskFileItemFactory();
			String tempDir = getServletContext().getRealPath("/WEB-INF/tempFile");
			factory.setRepository(new File(tempDir));// 设置临时文件存放目录
			// 2、创建核心解析类：ServletFileUpload
			ServletFileUpload upload = new ServletFileUpload(factory);
			upload.setHeaderEncoding("UTF-8");
			upload.setFileSizeMax(1024 * 1024 * 1024);
			upload.setSizeMax(2048 * 1024 * 1024);
			boolean isMultipart = ServletFileUpload.isMultipartContent(request);
			if (!isMultipart) {
				return;
			}

			List<FileItem> items = upload.parseRequest(request);
			
			//String savePath = getServletContext().getRealPath("/upload/");
			//String savePath =  "D:\\软件程序\\JDK\\apache-tomcat-8.5.13\\webapps\\StudyPlatform\\upload\\";
			
			//String savePath =  "D:\\work\\StudyPlatform\\StudyPlatform\\WebContent\\upload\\";
			String savePath =  "D:\\images";
			Iterator<FileItem> iter = items.iterator();

			System.out.println("上传的文件地址：" + savePath);
			while (iter.hasNext()) {
				FileItem item = iter.next();
				if (item.isFormField()) {
					String name = item.getFieldName();
					String value = item.getString();
				} else {

					String fileName = item.getName();
					fileName = fileName.substring(fileName.lastIndexOf("\\") + 1);
	
					System.out.println("上传的文件名是：" + fileName);
					System.out.println("上传的文件地址是：" + savePath+fileName);
					InputStream in = item.getInputStream();
					OutputStream out = new FileOutputStream(savePath + fileName);
					byte b[] = new byte[1024];
					int len = 0;
					while ((len = in.read(b)) != -1) {
						out.write(b, 0, len);
					}
					System.out.println(BaseUrl.url+"/upload/"+fileName);
					in.close();
					out.close();
					
					File file=new File(savePath + fileName);
					ApiResult result = new ApiResult();
					if(file.exists()){
						
					    Timestamp time = new Timestamp(System.currentTimeMillis());
						CourseRescoure course =new CourseRescoure();
						course.setUploadId(userid);
						course.setFileName(fileName);
						course.setUpload_name(realName);
				        course.setFileUrl(BaseUrl.url+"/upload/"+fileName);
				        course.setCreateTime(time);
				        boolean resultInsert = OperatorCourseResource.insertRecource(course);
				        result.setCode(0);
						result.setData(resultInsert);
						
					}else{
						result.setCode(-1);
						result.setMessage("上传失败");
						
					}
					response.getWriter().append(JSONObject.fromObject(result).toString());
				}
			}
			

		} catch (Exception e) {
			e.printStackTrace();
			ApiResult result = new ApiResult();
			result.setCode(-1);
			result.setMessage(e.getMessage());
			response.getWriter().append(JSONObject.fromObject(result).toString());
		}
	}

}
