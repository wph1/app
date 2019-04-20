package com.geekcattle.service.app.user.impl;

import com.geekcattle.mapper.app.DepartmentMapper;
import com.geekcattle.mapper.app.UserMapper;
import com.geekcattle.model.app.Department;
import com.geekcattle.model.app.User;
import com.geekcattle.service.app.user.UserService;
import com.github.pagehelper.PageHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.util.Date;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private DepartmentMapper departmentMapper;
    @Override
    public User getUserByNameAndPwd(User user) {

        Example example = new Example(User.class);
        example.createCriteria().andCondition("card=",user.getCard()).andCondition("password=",user.getPassword());
        List<User> users = userMapper.selectByExample(example);
        logger.info("进行登录查询到的用户个数==> "+users.size());
        if(users!=null&&users.size()==1){
            return users.get(0);
        }
        return  null;
    }

    @Override
    public List<Department> departmentList() {

        return departmentMapper.selectAll();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updateUserById(User user) {
        userMapper.updateByPrimaryKeySelective(user);
    }
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void delUser(String ids) {
        String[] idList = ids.split(",");
        for(String id:idList){
            userMapper.deleteByPrimaryKey(Integer.parseInt(id));
            logger.info("删除员工信息成功！");
        }
    }

    @Override
    public List<User> getPageList(User user) {
        PageHelper.startPage(user.getPageNums(), user.getPageSizes());
        if(user.getType()!=null){
            Example example = new Example(User.class);
            example.createCriteria().andCondition("type=",user.getType());
            return userMapper.selectByExample(example);
        }else{
            return userMapper.selectAll();
        }

    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void addUser(User user) {
        user.setInsTime(new Date());
        user.setPassword("123456");
        userMapper.insert(user);
    }
}
