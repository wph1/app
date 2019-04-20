package com.geekcattle.model.app;

import com.geekcattle.model.BaseEntity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;

@Table(name = "user")
public class User extends BaseEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String telephone;

    private String department;

    /**
     * 0-女，1-男
     */
    private Integer sex;

    private String password;

    /**
     * 0-管理员，1-医生，2-护士，3-护士长
     */
    private Integer type;

    @Column(name = "ins_time")
    private Date insTime;

    /**
     * 身份证号
     */
    private String card;

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
     * @return department
     */
    public String getDepartment() {
        return department;
    }

    /**
     * @param department
     */
    public void setDepartment(String department) {
        this.department = department;
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
     * 获取0-管理员，1-医生，2-护士，3-护士长
     *
     * @return type - 0-管理员，1-医生，2-护士，3-护士长
     */
    public Integer getType() {
        return type;
    }

    /**
     * 设置0-管理员，1-医生，2-护士，3-护士长
     *
     * @param type 0-管理员，1-医生，2-护士，3-护士长
     */
    public void setType(Integer type) {
        this.type = type;
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
     * 获取身份证号
     *
     * @return card - 身份证号
     */
    public String getCard() {
        return card;
    }

    /**
     * 设置身份证号
     *
     * @param card 身份证号
     */
    public void setCard(String card) {
        this.card = card;
    }
}