package com.geekcattle.util;

public class AppConstant {
    /**
     * 医生
     */
    private static final Integer DOCTOR=1;
    /**
     * 管理员
     */
    private static final Integer ADMIN=0;
    /**
     * 护士
     */
    private static final Integer NURSE=2;
    /**
     * 护士长
     */
    private static final Integer NURSE_HEAD=3;


    public static Integer getDOCTOR() {
        return DOCTOR;
    }

    public static Integer getADMIN() {
        return ADMIN;
    }

    public static Integer getNURSE() {
        return NURSE;
    }

    public static Integer getNurseHead() {
        return NURSE_HEAD;
    }
}
