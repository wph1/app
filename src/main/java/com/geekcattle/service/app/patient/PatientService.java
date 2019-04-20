package com.geekcattle.service.app.patient;

import com.geekcattle.model.app.Patient;
import com.geekcattle.model.app.User;

import java.util.List;

/**
 * 用户service
 */
public interface PatientService {
    /**
     * 通过用户名和密码登录
     * @param patient
     * @return
     */
    Patient getPatientByNameAndPwd(Patient patient);

    /**
     * 患者注册
     * @param patient
     */
   void  register(Patient patient);

    /**
     * 通过主键id更新信息
     * @param patient
     */
    void  updatePatientById(Patient patient);

    /**
     * 通过主键id更新信息
     * @param ids
     */
    void  delPatient(String ids);

    /**
     * 分页查询患者列表
     * @param patient
     * @return
     */
    List<Patient> getPageList(Patient patient);

    /**
     * 查询患者列表，通过权限
     * @param user
     * @return
     */
   List<Patient> findPatientList(User user);

}




