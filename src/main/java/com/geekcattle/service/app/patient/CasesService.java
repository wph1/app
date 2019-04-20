package com.geekcattle.service.app.patient;

import com.geekcattle.model.app.Case;
import com.geekcattle.model.app.Patient;
import com.geekcattle.model.app.User;

import java.util.List;

/**
 * 用户service
 */
public interface CasesService {

    /**
     * 给患者添加病例
     * @param cases
     */
   void  addCases(Case cases);
    /**
     * 分页查询自己病例列表
     * @param patient
     * @return
     */
    List<Case> getPageList(Patient patient);


}




