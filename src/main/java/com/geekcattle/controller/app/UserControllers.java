package com.geekcattle.controller.app;


import com.alibaba.fastjson.JSON;
import com.geekcattle.model.app.User;
import com.geekcattle.service.app.patient.PatientService;
import com.geekcattle.service.app.user.UserService;
import com.geekcattle.util.MD5Util;
import com.geekcattle.util.ReturnUtil;
import com.geekcattle.util.UserThreadLocal;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang3.ArrayUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(description = "员工接口")
@RestController
@RequestMapping("/app/user")
public class UserControllers {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private UserService userService;
    @Autowired
    private PatientService patientService;
    @ApiOperation(value = "用户登录" ,  notes="用户登录")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "card", value = "身份证号码", required = true, paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "password", value = "密码", required = true, paramType = "query", dataType = "String"),
    })
    @PostMapping("/login")
    @ResponseBody
    public ModelMap login(User user){
            User u = userService.getUserByNameAndPwd(user);
            if(u!=null){
             return    ReturnUtil.Success("登录成功", ArrayUtils.toMap(
                        new Object [][]{ { "token",  MD5Util.string2MD5(JSON.toJSONString(u))},
                                { "info",  u}}
                ));
            }else{
             return    ReturnUtil.Error("登录失败");
            }
    }

    @PostMapping("/info")
    @ResponseBody
    public ModelMap info(){



        return ReturnUtil.Success("请求成功");
    }


    @ApiOperation(value = "科室下拉列表" ,  notes="科室下拉列表")
    @PostMapping("/departmentList")
    @ResponseBody
    public ModelMap departmentList(){
        return  ReturnUtil.Success("操作成功",userService.departmentList());
    }



    @ApiOperation(value = "员工信息更新" ,  notes="员工信息更新")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "主键id", required = true, paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "name", value = "姓名", required = true, paramType = "query", dataType = "String"),
//            @ApiImplicitParam(name = "age", value = "年龄", required = true, paramType = "query", dataType = "Integer"),
            @ApiImplicitParam(name = "telephone", value = "电话", required = true, paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "sex", value = "0-女，1-男", required = true, paramType = "query", dataType = "Integer"),
    })
    @PostMapping("/updateUser")
    @ResponseBody
    public ModelMap updatePatient(User user){
        userService.updateUserById(user);
        return ReturnUtil.Success("请求成功");
    }

    @ApiOperation(value = "员工信息删除" ,  notes="员工信息删除")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "ids", value = "主键id,多个用英文的逗号分隔，多个可以批量删除", required = true, paramType = "query", dataType = "String"),
    })
    @PostMapping("/delUser")
    @ResponseBody
    public ModelMap delUser(String ids){
        try {
            userService.delUser(ids);
        }catch (Exception e){
            e.printStackTrace();
            logger.error(e.getMessage());
            return ReturnUtil.Error("请求失败");
        }

        return ReturnUtil.Success("请求成功");
    }


    @ApiOperation(value = "员工列表分页" ,  notes="员工列表分页")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "pageNums", value = "当前页码，不传递，默认为1", required = true, paramType = "query", dataType = "Integer"),
            @ApiImplicitParam(name = "pageSizes", value = "每页条数，不传递，默认为10", required = true, paramType = "query", dataType = "Integer"),
            @ApiImplicitParam(name = "type", value = "1-医生，2-护士，3-护士长", required = true, paramType = "query", dataType = "Integer"),
    })
    @PostMapping(value = "/getUserList")
    @ResponseBody
    public ModelMap getUserList(User user) {
        List<User> lists = userService.getPageList(user);
        ModelMap modelMap = new ModelMap();
        PageInfo<User> pageInfo = new PageInfo<>(lists);
        modelMap.put("total",pageInfo.getTotal());
        modelMap.put("data",pageInfo.getList());
        return ReturnUtil.Success("加载成功", modelMap, null);
    }


    @ApiOperation(value = "员工添加" ,  notes="员工添加")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "card", value = "身份证号码", required = true, paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "name", value = "姓名", required = true, paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "department", value = "科室", required = true, paramType = "query", dataType = "String"),
    })
    @PostMapping("/addUser")
    @ResponseBody
    public ModelMap addUser(User user){
        userService.addUser(user);
        return ReturnUtil.Success("操作成功");
    }

    @ApiOperation(value = "查询对应的病例列表，通过权限控制" ,  notes="查询对应的病例列表")
    @PostMapping("/findPatientList")
    @ResponseBody
    public ModelMap findPatientList(){
//        userService.addUser(user);
        User user = UserThreadLocal.get();
        patientService.findPatientList(user);
        return ReturnUtil.Success("操作成功");
    }

}
