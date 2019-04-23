package com.geekcattle.service.app.bed.impl;

import com.geekcattle.mapper.app.ApplyBedMapper;
import com.geekcattle.mapper.app.BedMapper;
import com.geekcattle.mapper.app.CaseMapper;
import com.geekcattle.model.app.ApplyBed;
import com.geekcattle.model.app.Bed;
import com.geekcattle.model.app.Case;
import com.geekcattle.service.app.bed.ApplyBedService;
import com.geekcattle.service.app.bed.BedService;
import com.geekcattle.util.UserThreadLocal;
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
public class ApplyBedServiceImpl implements ApplyBedService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private ApplyBedMapper applyBedMapper;
    @Autowired
    private CaseMapper caseMapper;
    @Autowired
    private BedMapper bedMapper;
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

//    @Override
//    @Transactional(rollbackFor = Exception.class)
//    public void addBed(Bed bed) {
//        bed.setInsTime(new Date());
//        bedMapper.insert(bed);
//    }
//
//    @Override
//    @Transactional(rollbackFor = Exception.class)
//    public void updateBedById(Bed bed) {
//        bedMapper.updateByPrimaryKeySelective(bed);
//    }
//
//    @Override
//    @Transactional(rollbackFor = Exception.class)
//    public void delBed(String ids) {
//        String[] idList = ids.split(",");
//        for(String id:idList){
//            bedMapper.deleteByPrimaryKey(Integer.parseInt(id));
//            logger.info("删除床位信息成功！");
//        }
//    }

    @Override
    public List<ApplyBed> getPageList(ApplyBed bed) {
        PageHelper.startPage(bed.getPageNums(), bed.getPageSizes());
        Case cases = new Case();
        cases.setNurseId(UserThreadLocal.get().getId());
        //患者id的list
        List<Integer> patientIdList = caseMapper.selectPatientIdList(cases);

        return  applyBedMapper.selectApplyBedByApplyIds(patientIdList);

    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updateBedById(ApplyBed bed) {
        //如果审核通过，将之前的床位设置为空，将现在的床位设置为占用
        ApplyBed applyBed = applyBedMapper.selectByPrimaryKey(bed.getId());
        if(2==bed.getApplyState()){
            //将之前的床位设置为空
            Bed beforeBed=new Bed();
            beforeBed.setState(1);
            beforeBed.setId(applyBed.getBeforeBed());
            bedMapper.updateByPrimaryKeySelective(beforeBed);

            Bed afterBed=new Bed();
            afterBed.setState(2);
            afterBed.setId(applyBed.getBeforeBed());
            bedMapper.updateByPrimaryKeySelective(beforeBed);
        }

      bed.setHandleId(UserThreadLocal.get().getId());
        applyBedMapper.updateByPrimaryKeySelective(bed);
    }

}
