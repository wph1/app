package com.geekcattle.model.app;

import com.geekcattle.model.BaseEntity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;

@Table(name = "patient")
public class Patient   implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private Integer age;

    private String telephone;
    private Integer type;

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    /**
     * 0-女，1-男
     */
    private Integer sex;

    private String address;

    @Column(name = "ins_time")
    private Date insTime;

    private String password;

    private String card;

    private Integer department;
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
     * @return age
     */
    public Integer getAge() {
        return age;
    }

    /**
     * @param age
     */
    public void setAge(Integer age) {
        this.age = age;
    }

    /**
     * @return telephone
     */
    public String getTelephone() {
        return telephone;
    }

    /**
     * @param telephone
     */
    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    /**
     * 获取0-女，1-男
     *
     * @return sex - 0-女，1-男
     */
    public Integer getSex() {
        return sex;
    }

    /**
     * 设置0-女，1-男
     *
     * @param sex 0-女，1-男
     */
    public void setSex(Integer sex) {
        this.sex = sex;
    }

    /**
     * @return address
     */
    public String getAddress() {
        return address;
    }

    /**
     * @param address
     */
    public void setAddress(String address) {
        this.address = address;
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
     * @return password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return card
     */
    public String getCard() {
        return card;
    }

    /**
     * @param card
     */
    public void setCard(String card) {
        this.card = card;
    }

    /**
     * @return department
     */
    public Integer getDepartment() {
        return department;
    }

    /**
     * @param department
     */
    public void setDepartment(Integer department) {
        this.department = department;
    }
}