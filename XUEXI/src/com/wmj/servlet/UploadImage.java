package com.wmj.servlet;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadBase;
import org.apache.commons.fileupload.ProgressListener;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import com.wmj.bean.ApiResult;
import com.wmj.bean.BaseUrl;

import net.sf.json.JSONObject;

/**
 * Servlet implementation class UploadImage
 */
@WebServlet("/UploadImage")
public class UploadImage extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public UploadImage() {
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
			// 4、是：解析request对象的正文内容List<FileItem>
			List<FileItem> items = upload.parseRequest(request);
			String savePath = getServletContext().getRealPath("/upload");
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
					String newFileName = fileName;
					System.out.println("上传的文件名是：" + newFileName);
					InputStream in = item.getInputStream();
					OutputStream out = new FileOutputStream(savePath + newFileName);
					byte b[] = new byte[1024];
					int len = 0;
					while ((len = in.read(b)) != -1) {
						out.write(b, 0, len);
					}
					in.close();
					out.close();
					item.delete();// 删除临时文件
				}
			}
			ApiResult result = new ApiResult();
			result.setCode(0);
			result.setData(null);
			response.getWriter().append(JSONObject.fromObject(result).toString());

		} catch (Exception e) {
			e.printStackTrace();
			ApiResult result = new ApiResult();
			result.setCode(-1);
			result.setMessage(e.getMessage());
			response.getWriter().append(JSONObject.fromObject(result).toString());
		}
	}

}
