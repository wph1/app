package com.geekcattle.controller.app;


import com.geekcattle.model.app.Case;
import com.geekcattle.model.app.DoctorAdvice;
import com.geekcattle.model.app.Patient;
import com.geekcattle.model.app.User;
import com.geekcattle.service.app.patient.CasesService;
import com.geekcattle.service.app.patient.DoctorAdviceService;
import com.geekcattle.service.app.patient.PatientService;
import com.geekcattle.util.ReturnUtil;
import com.geekcattle.util.UserThreadLocal;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Api(description = "员工操作患者接口")
@RestController
@RequestMapping("/app/user")
public class UserForPatientControllers {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private PatientService patientService;
    @Autowired
    private CasesService casesService;

    @Autowired
    private DoctorAdviceService doctorAdviceService;

    @ApiOperation(value = "患者信息更新" ,  notes="患者信息更新")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "主键id", required = true, paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "name", value = "姓名", required = true, paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "age", value = "年龄", required = true, paramType = "query", dataType = "Integer"),
            @ApiImplicitParam(name = "telephone", value = "电话", required = true, paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "sex", value = "0-女，1-男", required = true, paramType = "query", dataType = "Integer"),
    })
    @PostMapping("/updatePatient")
    @ResponseBody
    public ModelMap updatePatient(Patient patient){
        patientService.updatePatientById(patient);
        return ReturnUtil.Success("请求成功");
    }

    @ApiOperation(value = "患者信息删除" ,  notes="患者信息删除")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "ids", value = "主键id,多个用英文的逗号分隔，多个可以批量删除", required = true, paramType = "query", dataType = "String"),
    })
    @PostMapping("/delPatient")
    @ResponseBody
    public ModelMap delPatient(String ids){
        try {
            patientService.delPatient(ids);
        }catch (Exception e){
            e.printStackTrace();
            logger.error(e.getMessage());
            return ReturnUtil.Error("请求失败");
        }

        return ReturnUtil.Success("请求成功");
    }


    @ApiOperation(value = "患者列表分页" ,  notes="患者列表分页")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "pageNums", value = "当前页码，不传递，默认为1", required = true, paramType = "query", dataType = "Integer"),
            @ApiImplicitParam(name = "pageSizes", value = "每页条数，不传递，默认为10", required = true, paramType = "query", dataType = "Integer"),
    })
    @PostMapping(value = "/getPatientList")
    @ResponseBody
    public ModelMap getPatientList(Patient patient) {
        List<Patient> lists = patientService.getPageList(patient);
        ModelMap modelMap = new ModelMap();
        PageInfo<Patient> pageInfo = new PageInfo<>(lists);
        modelMap.put("total",pageInfo.getTotal());
        modelMap.put("data",pageInfo.getList());
        return ReturnUtil.Success("加载成功", modelMap, null);
    }

    @ApiOperation(value = "给患者添加病例，每一次看病有一条新病例，有正在进行中的病例就不能再添加，除非手动停止或者出院" ,  notes="给患者添加病例，每一次看病有一条新病例")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "patientId", value = "患者id", required = true, paramType = "query", dataType = "Integer"),
            @ApiImplicitParam(name = "caseMark", value = "病例内容", required = true, paramType = "query", dataType = "String"),
    })
    @PostMapping("/addCases")
    @ResponseBody
    public ModelMap addCases(Case cases){
        try {
            User user = UserThreadLocal.get();
            cases.setDoctorId(user.getId());
            casesService.addCases(cases);
        }catch (Exception e){
            e.printStackTrace();
            return ReturnUtil.Error(e.getMessage());
        }
        return ReturnUtil.Success("操作成功");
    }


    @ApiOperation(value = "给患者病例添加医嘱，可以有多条医嘱" ,  notes="给患者病例添加医嘱，有多条医嘱")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "mark", value = "医嘱内容", required = true, paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "caseId", value = "病例id", required = true, paramType = "query", dataType = "Integer"),
    })
    @PostMapping("/addDoctorAdvice")
    @ResponseBody
    public ModelMap addDoctorAdvice(DoctorAdvice doctorAdvice){
        try {
            doctorAdviceService.addDoctorAdvice(doctorAdvice);
        }catch (Exception e){
            e.printStackTrace();
            return ReturnUtil.Error(e.getMessage());
        }
        return ReturnUtil.Success("操作成功");
    }

    @ApiOperation(value = "查询某个病例的所有医嘱" ,  notes="查询某个病例的所有医嘱")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "主键id", required = true, paramType = "query", dataType = "String"),
    })
    @PostMapping("/getAllDoctorAdviceByCaseId")
    @ResponseBody
    public ModelMap getAllDoctorAdviceByCaseId(String id){
        doctorAdviceService.getAllDoctorAdviceByCaseId(id);
        return ReturnUtil.Success("更新成功");
    }

    @ApiOperation(value = "护士更新对应的医嘱状态" ,  notes="护士更新对应的医嘱状态")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "主键id", required = true, paramType = "query", dataType = "String"),
    })
    @PostMapping("/updateDoctorAdviceState")
    @ResponseBody
    public ModelMap updateDoctorAdviceState(DoctorAdvice doctorAdvice){
        doctorAdviceService.updateDoctorAdviceState(doctorAdvice);
        return ReturnUtil.Success("更新成功");
    }
}
