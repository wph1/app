package com.geekcattle.mapper.app;

import com.geekcattle.model.app.Patient;
import com.geekcattle.util.CustomerMapper;
import io.swagger.models.auth.In;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public interface PatientMapper extends CustomerMapper<Patient> {
    /**
     * 通过医生id，护士id查询患者信息
     * @param doctorId
     * @param nurseId
     * @param nurseIdList
     * @return
     */
   List<Map> selectPatientCase(Integer doctorId, Integer nurseId,List<Integer> nurseIdList);

}