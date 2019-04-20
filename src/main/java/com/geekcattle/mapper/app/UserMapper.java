package com.geekcattle.mapper.app;

import com.geekcattle.model.app.User;
import com.geekcattle.util.CustomerMapper;
import org.springframework.stereotype.Component;

@Component
public interface UserMapper extends CustomerMapper<User> {
}