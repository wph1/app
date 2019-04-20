package com.geekcattle.mapper.app;

import com.geekcattle.model.app.Case;
import com.geekcattle.util.CustomerMapper;
import org.springframework.stereotype.Component;

@Component
public interface CaseMapper extends CustomerMapper<Case> {
}