package com.geekcattle.mapper.app;

import com.geekcattle.model.app.Case;
import com.geekcattle.util.CustomerMapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface CaseMapper extends CustomerMapper<Case> {
    /**
     * 通过护士id查询对应病例的患者id
     * @return
     */
  List<Integer> selectPatientIdList(Case cases);
}