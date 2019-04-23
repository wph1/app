package com.geekcattle.model.app;

import java.util.Date;
import javax.persistence.*;

public class Bed {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * 床位号
     */
    private String name;

    /**
     * 科室id
     */
    @Column(name = "department_id")
    private Integer departmentId;

    @Column(name = "ins_time")
    private Date insTime;

    /**
     * 1-空闲状态，2-有人
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
     * 获取床位号
     *
     * @return name - 床位号
     */
    public String getName() {
        return name;
    }

    /**
     * 设置床位号
     *
     * @param name 床位号
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取科室id
     *
     * @return department_id - 科室id
     */
    public Integer getDepartmentId() {
        return departmentId;
    }

    /**
     * 设置科室id
     *
     * @param departmentId 科室id
     */
    public void setDepartmentId(Integer departmentId) {
        this.departmentId = departmentId;
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
     * 获取1-空闲状态，2-有人
     *
     * @return state - 1-空闲状态，2-有人
     */
    public Integer getState() {
        return state;
    }

    /**
     * 设置1-空闲状态，2-有人
     *
     * @param state 1-空闲状态，2-有人
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