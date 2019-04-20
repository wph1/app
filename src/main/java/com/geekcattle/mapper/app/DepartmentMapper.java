package com.geekcattle.mapper.app;

import com.geekcattle.model.app.Department;
import com.geekcattle.util.CustomerMapper;
import org.springframework.stereotype.Component;

@Component
public interface DepartmentMapper extends CustomerMapper<Department> {
}