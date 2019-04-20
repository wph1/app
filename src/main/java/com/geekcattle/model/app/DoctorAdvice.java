package com.geekcattle.model.app;

import java.util.Date;
import javax.persistence.*;

@Table(name = "doctor_advice")
public class DoctorAdvice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String mark;

    /**
     * 1-进行中，2-已执行
     */
    private Integer state;

    /**
     * 病例id
     */
    @Column(name = "case_id")
    private Integer caseId;

    @Column(name = "ins_time")
    private Date insTime;

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
     * @return mark
     */
    public String getMark() {
        return mark;
    }

    /**
     * @param mark
     */
    public void setMark(String mark) {
        this.mark = mark;
    }

    /**
     * 获取1-进行中，2-已执行
     *
     * @return state - 1-进行中，2-已执行
     */
    public Integer getState() {
        return state;
    }

    /**
     * 设置1-进行中，2-已执行
     *
     * @param state 1-进行中，2-已执行
     */
    public void setState(Integer state) {
        this.state = state;
    }

    /**
     * 获取病例id
     *
     * @return case_id - 病例id
     */
    public Integer getCaseId() {
        return caseId;
    }

    /**
     * 设置病例id
     *
     * @param caseId 病例id
     */
    public void setCaseId(Integer caseId) {
        this.caseId = caseId;
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
}