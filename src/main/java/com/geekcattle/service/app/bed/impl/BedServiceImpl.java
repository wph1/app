package com.geekcattle.service.app.bed.impl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONPath;
import com.geekcattle.mapper.app.BedMapper;
import com.geekcattle.mapper.app.CaseMapper;
import com.geekcattle.mapper.app.PatientMapper;
import com.geekcattle.mapper.app.UserMapper;
import com.geekcattle.model.app.Bed;
import com.geekcattle.model.app.Case;
import com.geekcattle.model.app.Patient;
import com.geekcattle.model.app.User;
import com.geekcattle.service.app.bed.BedService;
import com.geekcattle.service.app.patient.PatientService;
import com.geekcattle.util.AppConstant;
import com.github.pagehelper.PageHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class BedServiceImpl implements BedService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private BedMapper bedMapper;
    @Autowired
    private CaseMapper caseMapper;
//    @Autowired
//    private PatientMapper patientMapper;
//    @Autowired
//    private  UserMapper userMapper;
//    @Override
//    public Patient getPatientByNameAndPwd(Patient patient) {
//
//        Example example = new Example(Patient.class);
//        example.createCriteria().andCondition("card=",patient.getCard()).andCondition("password=",patient.getPassword());
//        List<Patient> patientList = patientMapper.selectByExample(example);
//        logger.info("进行登录查询到的用户个数==> "+patientList.size());
//        if(patientList!=null&&patientList.size()==1){
//            return patientList.get(0);
//        }
//        return  null;
//    }
//
//    @Override
//    @Transactional(rollbackFor = Exception.class)
//    public void register(Patient patient) {
//        patient.setInsTime(new Date());
//        patient.setPassword("123456");
//        patientMapper.insert(patient);
//    }
//
//    @Override
//    @Transactional(rollbackFor = Exception.class)
//    public void updatePatientById(Patient patient) {
//        patientMapper.updateByPrimaryKeySelective(patient);
//    }
//
//    @Override
//    @Transactional(rollbackFor = Exception.class)
//    public void delPatient(String ids) {
//        String[] idList = ids.split(",");
//        for(String id:idList){
//            patientMapper.deleteByPrimaryKey(Integer.parseInt(id));
//            logger.info("删除患者信息成功！");
//        }
//    }
//
//    @Override
//    public List findPatientList(User user) {
//        if(AppConstant.getDOCTOR()==user.getType()){//医生
//            return patientMapper.selectPatientCase(user.getId(),null,null);
//        }else if (AppConstant.getNURSE()==user.getType()){//护士
//            return patientMapper.selectPatientCase(null,user.getId(),null);
//        }else if(AppConstant.getNurseHead()==user.getType()){//护士长
//            //查询下面的所有护士下所属患者
//            User nurseHead = userMapper.selectByPrimaryKey(user.getId());
//            Example userExample = new Example(User.class);
//            userExample.createCriteria().andCondition("department=",nurseHead.getDepartment())
//                    .andCondition("type=",AppConstant.getNURSE());
//            //护士长下的所有护士
//            List<User> nurseList = userMapper.selectByExample(userExample);
//            List<Integer> nurseIdList = new ArrayList();
//            if(nurseList!=null&&nurseList.size()>0){
//                nurseIdList =( List<Integer>) JSONPath.read(JSON.toJSONString(nurseList), "$.id");
//            }
//            return patientMapper.selectPatientCase(null,null,nurseIdList);
//        }else{//管理员
//            return    patientMapper.selectPatientCase(null,null,null);
//        }
//    }
//
//    @Override
//    public List<Patient> getPageList(Patient patient) {
////        PageHelper.offsetPage(patient.getOffset(), patient.getLimit());
//        PageHelper.startPage(patient.getPageNums(), patient.getPageSizes());
//        return patientMapper.selectAll();
//    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void addBed(Bed bed) {
        bed.setInsTime(new Date());
        bedMapper.insert(bed);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updateBedById(Bed bed) {
        bedMapper.updateByPrimaryKeySelective(bed);
    }
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updateCaseById(Case cases) {
        caseMapper.updateByPrimaryKeySelective(cases);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void delBed(String ids) {
        String[] idList = ids.split(",");
        for(String id:idList){
            bedMapper.deleteByPrimaryKey(Integer.parseInt(id));
            logger.info("删除床位信息成功！");
        }
    }

    @Override
    public List<Bed> getPageList(Bed bed) {
        PageHelper.startPage(bed.getPageNums(), bed.getPageSizes());
       return  bedMapper.selectAll();

    }
}
