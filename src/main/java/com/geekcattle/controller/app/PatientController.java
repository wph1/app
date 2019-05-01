package com.geekcattle.controller.app;


import com.alibaba.fastjson.JSON;
import com.geekcattle.model.app.ApplyBed;
import com.geekcattle.model.app.Case;
import com.geekcattle.model.app.Patient;
import com.geekcattle.model.app.User;
import com.geekcattle.service.app.patient.CasesService;
import com.geekcattle.service.app.patient.PatientService;
import com.geekcattle.service.app.user.UserService;
import com.geekcattle.util.*;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang3.ArrayUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Api(description = "患者接口")
@RestController
@RequestMapping("/app/patient")
public class PatientController {
//https://gitee.com/zhongmh/poi-commons/blob/tanx1.0/%E5%BF%AB%E9%80%9F%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97.md
    @Autowired
    private PatientService patientService;
    @Autowired
    private CasesService casesService;
    @ApiOperation(value = "患者登录" ,  notes="患者登录")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "card", value = "身份证号码", required = true, paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "password", value = "密码", required = true, paramType = "query", dataType = "String"),
    })
    @PostMapping("/login")
    @ResponseBody
    public ModelMap login(Patient patient){
        Patient u = patientService.getPatientByNameAndPwd(patient);
            if(u!=null){

             return    ReturnUtil.Success("登录成功", ArrayUtils.toMap(
                        new Object [][]{ { "token",  Base64Utils.encrypt(JSON.toJSONString(u))},
                                { "info",  u}}
                ));
            }else{
             return    ReturnUtil.Error("登录失败");
            }
    }
    @ApiOperation(value = "患者注册" ,  notes="患者注册")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "card", value = "身份证号码", required = true, paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "name", value = "姓名", required = true, paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "department", value = "科室", required = true, paramType = "query", dataType = "String"),
    })
    @PostMapping("/register")
    @ResponseBody
    public ModelMap register(Patient patient){
        try {
            patientService.register(patient);
        }catch (Exception e){
            return ReturnUtil.Error(e.getMessage());
        }
        return ReturnUtil.Success("请求成功");

    }

    @ApiOperation(value = "患者信息更新" ,  notes="患者信息更新")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "主键id", required = true, paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "name", value = "姓名", required = true, paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "age", value = "年龄", required = true, paramType = "query", dataType = "Integer"),
            @ApiImplicitParam(name = "telephone", value = "电话", required = true, paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "sex", value = "0-女，1-男", required = true, paramType = "query", dataType = "Integer"),
    })
    @PostMapping("/update")
    @ResponseBody
    public ModelMap update(Patient patient){
        patientService.updatePatientById(patient);
        return ReturnUtil.Success("请求成功");
    }

    @ApiOperation(value = "患者查询自己病例分页列表" ,  notes="患者查询自己病例分页列表")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "pageNums", value = "当前页码，不传递，默认为1", required = true, paramType = "query", dataType = "Integer"),
            @ApiImplicitParam(name = "pageSizes", value = "每页条数，不传递，默认为10", required = true, paramType = "query", dataType = "Integer"),
    })
    @PostMapping(value = "/getMyCasesList")
    @ResponseBody
    public ModelMap getMyCasesList(Patient patient) {
        Patient p = PatientThreadLocal.get();
        List<Case> lists = casesService.getPageList(p);
        ModelMap modelMap = new ModelMap();
        PageInfo<Case> pageInfo = new PageInfo<>(lists);
        modelMap.put("total",pageInfo.getTotal());
        modelMap.put("data",pageInfo.getList());
        return ReturnUtil.Success("加载成功", modelMap, null);
    }


    @ApiOperation(value = "患者申请调换床位" ,  notes="患者申请调换床位")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "reason", value = "申请原因", required = true, paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "afterBed", value = "申请需要调换到那个床位Id", required = true, paramType = "query", dataType = "Integer"),
    })
    @PostMapping("/applyExchangeBed")
    @ResponseBody
    public ModelMap applyExchangeBed(ApplyBed applyBed){
        patientService.applyExchangeBed(applyBed);
        return ReturnUtil.Success("请求成功");
    }






}
