package com.geekcattle.util;

import com.geekcattle.model.app.User;

public class UserThreadLocal {

    //把构造函数私有，外面不能new，只能通过下面两个方法操作
    private UserThreadLocal(){

    }

    private static final ThreadLocal<User> LOCAL = new ThreadLocal<User>();

    public static void set(User user){
        LOCAL.set(user);
    }

    public static User get(){
        return LOCAL.get();
    }
}