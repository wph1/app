package com.geekcattle.model.app;

import java.util.Date;
import javax.persistence.*;

@Table(name = "cases")
public class Case {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * 主治医生id
     */
    @Column(name = "doctor_id")
    private Integer doctorId;

    /**
     * 对应护士id
     */
    @Column(name = "nurse_id")
    private Integer nurseId;

    /**
     * 患者id
     */
    @Column(name = "patient_id")
    private Integer patientId;

    /**
     * 病例
     */
    @Column(name = "case_mark")
    private String caseMark;

    @Column(name = "ins_time")
    private Date insTime;

    /**
     * 1-进行中，2-结束,3-康复出院
     */
    private Integer state;

    /**
     * @return id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取主治医生id
     *
     * @return doctor_id - 主治医生id
     */
    public Integer getDoctorId() {
        return doctorId;
    }

    /**
     * 设置主治医生id
     *
     * @param doctorId 主治医生id
     */
    public void setDoctorId(Integer doctorId) {
        this.doctorId = doctorId;
    }

    /**
     * 获取对应护士id
     *
     * @return nurse_id - 对应护士id
     */
    public Integer getNurseId() {
        return nurseId;
    }

    /**
     * 设置对应护士id
     *
     * @param nurseId 对应护士id
     */
    public void setNurseId(Integer nurseId) {
        this.nurseId = nurseId;
    }

    /**
     * 获取患者id
     *
     * @return patient_id - 患者id
     */
    public Integer getPatientId() {
        return patientId;
    }

    /**
     * 设置患者id
     *
     * @param patientId 患者id
     */
    public void setPatientId(Integer patientId) {
        this.patientId = patientId;
    }

    /**
     * 获取病例
     *
     * @return case_mark - 病例
     */
    public String getCaseMark() {
        return caseMark;
    }

    /**
     * 设置病例
     *
     * @param caseMark 病例
     */
    public void setCaseMark(String caseMark) {
        this.caseMark = caseMark;
    }

    /**
     * @return ins_time
     */
    public Date getInsTime() {
        return insTime;
    }

    /**
     * @param insTime
     */
    public void setInsTime(Date insTime) {
        this.insTime = insTime;
    }

    /**
     * 获取1-进行中，2-结束,3-康复出院
     *
     * @return state - 1-进行中，2-结束,3-康复出院
     */
    public Integer getState() {
        return state;
    }

    /**
     * 设置1-进行中，2-结束,3-康复出院
     *
     * @param state 1-进行中，2-结束,3-康复出院
     */
    public void setState(Integer state) {
        this.state = state;
    }

    @Transient
    private Integer pageNums=1;
    @Transient
    private Integer pageSizes=10;

    public Integer getPageNums() {
        return pageNums;
    }

    public void setPageNums(Integer pageNums) {
        this.pageNums = pageNums;
    }

    public Integer getPageSizes() {
        return pageSizes;
    }

    public void setPageSizes(Integer pageSizes) {
        this.pageSizes = pageSizes;
    }
}