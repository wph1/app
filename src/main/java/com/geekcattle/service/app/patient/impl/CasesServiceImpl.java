package com.geekcattle.service.app.patient.impl;

import com.geekcattle.mapper.app.CaseMapper;
import com.geekcattle.model.app.Case;
import com.geekcattle.model.app.Patient;
import com.geekcattle.service.app.patient.CasesService;
import com.github.pagehelper.PageHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.util.Date;
import java.util.List;

@Service
public class CasesServiceImpl implements CasesService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private CaseMapper caseMapper;
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

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void addCases(Case cases) {
        Example example = new Example(Case.class);
        example.createCriteria().andCondition("patient_id",cases.getPatientId()).andCondition("state","1");
        List<Case> casesList = caseMapper.selectByExample(example);
        if(casesList!=null&&casesList.size()>0){
            logger.info("有正在进行中的病例，不能进行重复添加!");
        throw  new RuntimeException("有正在进行中的病例，不能进行重复添加!");

        }
        cases.setInsTime(new Date());
        caseMapper.insert(cases);
    }

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
    @Override
    public List<Case> getPageList(Patient patient) {
//        PageHelper.offsetPage(patient.getOffset(), patient.getLimit());
        PageHelper.startPage(patient.getPageNums(), patient.getPageSizes());
        Example example = new Example(Case.class);
        example.createCriteria().andCondition("patient_id=",patient.getId());
        return caseMapper.selectByExample(example);
    }
}
