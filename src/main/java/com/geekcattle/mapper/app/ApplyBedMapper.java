package com.geekcattle.mapper.app;

import com.geekcattle.model.app.ApplyBed;
import com.geekcattle.util.CustomerMapper;

import java.util.List;

public interface ApplyBedMapper extends CustomerMapper<ApplyBed> {
    /**
     * 通过患者id查询申请记录
     * @param idList
     * @return
     */
   List<ApplyBed> selectApplyBedByApplyIds(List<Integer> idList);
}