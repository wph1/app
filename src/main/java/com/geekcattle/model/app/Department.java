package com.geekcattle.model.app;

import com.geekcattle.model.BaseEntity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;

@Table(name = "department")
public class Department extends BaseEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @Column(name = "ins_time")
    private Date insTime;

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
     * @return name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name
     */
    public void setName(String name) {
        this.name = name;
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