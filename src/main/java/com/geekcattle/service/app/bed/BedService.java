package com.geekcattle.service.app.bed;

import com.geekcattle.model.app.Bed;
import com.geekcattle.model.app.Case;
import com.geekcattle.model.app.DoctorAdvice;

import java.util.List;

/**
 * 床位service
 */
public interface BedService {

//    /**
//     * 给患者添加医嘱
//     * @param doctorAdvice
//     */
//   void  addDoctorAdvice(DoctorAdvice doctorAdvice);
//
//    /**
//     * 更新对应医嘱的状态
//     * @param doctorAdvice
//     */
//     void updateDoctorAdviceState(DoctorAdvice doctorAdvice);
//
//    /**
//     * 查询某个病例对应的医嘱信息
//     * @param id
//     * @return
//     */
//   List<DoctorAdvice> getAllDoctorAdviceByCaseId(String id);
//

    /**
     * 床位添加
     * @param bed
     */
    void  addBed(Bed bed);

    /**
     * 通过主键id更新信息
     * @param bed
     */
    void  updateBedById(Bed bed);

    /**
     * 更新病例信息，通过主键id
     * @param cases
     */
    void  updateCaseById(Case cases);

    /**
     * 通过主键id删除
     * @param ids
     */
    void  delBed(String ids);

    /**
     * 分页查询床位列表
     * @param bed
     * @return
     */
    List<Bed> getPageList(Bed bed);

}




