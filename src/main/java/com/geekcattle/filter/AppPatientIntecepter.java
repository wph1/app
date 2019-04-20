package com.geekcattle.filter;

import com.alibaba.fastjson.JSON;
import com.geekcattle.model.app.Patient;
import com.geekcattle.model.app.User;
import com.geekcattle.util.MD5Util;
import com.geekcattle.util.PatientThreadLocal;
import com.geekcattle.util.UserThreadLocal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/***
 * app患者访问拦截
 */
public class AppPatientIntecepter implements HandlerInterceptor {
    private Logger log = LoggerFactory.getLogger(this.getClass());
    /**
     * 调用Controller之前
     *
     * */
    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws Exception {
        System.out.println("LoginIntecepter------> 患者     preHandle");
        HttpServletRequest req = (HttpServletRequest) httpServletRequest;
        String authorization = req.getHeader("Authorization");
        log.info("拿到token==> "+authorization);
        if(authorization!=null){
            log.info("解析后的token==> "+MD5Util.convertMD5(authorization));

//            ThreadLocal<User> threadLocal = new ThreadLocal<User>();
            Patient user = JSON.parseObject(MD5Util.convertMD5(authorization), Patient.class);
           PatientThreadLocal.set(user);
        }
        return true;
    }
    /**
     * 调用完Controller之后，视图渲染之前
     *
     * */
    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {
        System.out.println("LoginIntecepter------> 患者   postHandle");
    }
    /**
     * 整个完成之后
     *
     * */
    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {
        System.out.println("LoginIntecepter------>  患者   afterCompletion");
        log.info("清楚本地线程中的用户");
        PatientThreadLocal.set(null);
    }
}
