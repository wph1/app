package com.geekcattle.service.app.user;

import com.geekcattle.model.app.Department;
import com.geekcattle.model.app.User;

import java.util.List;

/**
 * 用户service
 */
public interface UserService {
    /**
     * 通过用户名和密码登录
     * @param user
     * @return
     */
   User getUserByNameAndPwd(User user);

    /**
     * 科室下拉列表
     * @return
     */
   List<Department> departmentList();

    /**
     * 通过主键id更新信息
     * @param user
     */
    void  updateUserById(User user);

    /**
     * 通过主键id删除
     * @param ids
     */
    void  delUser(String ids);

    /**
     * 分页查询员工列表
     * @param user
     * @return
     */
    List<User> getPageList(User user);

    /**
     * 员工添加
     * @param user
     */
    void  addUser(User user);

}




