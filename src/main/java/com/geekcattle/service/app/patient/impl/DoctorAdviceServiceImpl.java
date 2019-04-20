package com.geekcattle.service.app.patient.impl;

import com.geekcattle.mapper.app.DoctorAdviceMapper;
import com.geekcattle.model.app.DoctorAdvice;
import com.geekcattle.service.app.patient.DoctorAdviceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.util.Date;
import java.util.List;

@Service
public class DoctorAdviceServiceImpl implements DoctorAdviceService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private DoctorAdviceMapper doctorAdviceMapper;
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void addDoctorAdvice(DoctorAdvice doctorAdvice) {
        doctorAdvice.setInsTime(new Date());
    doctorAdviceMapper.insert(doctorAdvice);
    }

    @Override
    public List<DoctorAdvice> getAllDoctorAdviceByCaseId(String id) {
        Example example = new Example(DoctorAdvice.class);
        example.createCriteria().andCondition("case_id",id);
        return doctorAdviceMapper.selectByExample(example);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updateDoctorAdviceState(DoctorAdvice doctorAdvice) {
        doctorAdvice.setState(2);//2-已经执行
        doctorAdviceMapper.updateByPrimaryKeySelective(doctorAdvice);
    }
}
