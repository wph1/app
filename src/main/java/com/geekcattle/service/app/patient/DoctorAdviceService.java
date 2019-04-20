package com.geekcattle.service.app.patient;

import com.geekcattle.model.app.DoctorAdvice;

import java.util.List;

/**
 * 用户service
 */
public interface DoctorAdviceService {

    /**
     * 给患者添加医嘱
     * @param doctorAdvice
     */
   void  addDoctorAdvice(DoctorAdvice doctorAdvice);

    /**
     * 更新对应医嘱的状态
     * @param doctorAdvice
     */
     void updateDoctorAdviceState(DoctorAdvice doctorAdvice);

    /**
     * 查询某个病例对应的医嘱信息
     * @param id
     * @return
     */
   List<DoctorAdvice> getAllDoctorAdviceByCaseId(String id);



}




