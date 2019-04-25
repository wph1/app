package com.geekcattle.mapper.app;

import com.geekcattle.model.app.Patient;
import com.geekcattle.util.CustomerMapper;
import io.swagger.models.auth.In;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestParam;

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
   List<Map> selectPatientCase(@Param("doctorId") String doctorId, @Param("nurseId")String nurseId,  @Param("nurseIdList")List<String> nurseIdList);

}