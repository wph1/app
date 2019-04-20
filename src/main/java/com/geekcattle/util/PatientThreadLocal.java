package com.geekcattle.util;

import com.geekcattle.model.app.Patient;

public class PatientThreadLocal {

    //把构造函数私有，外面不能new，只能通过下面两个方法操作
    private PatientThreadLocal(){

    }

    private static final ThreadLocal<Patient> LOCAL = new ThreadLocal<Patient>();

    public static void set(Patient user){
        LOCAL.set(user);;
    }

    public static Patient get(){
        return LOCAL.get();
    }
}
