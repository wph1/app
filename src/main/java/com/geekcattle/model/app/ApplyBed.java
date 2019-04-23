package com.geekcattle.model.app;

import io.swagger.models.auth.In;

import java.util.Date;
import javax.persistence.*;

@Table(name = "apply_bed")
public class ApplyBed {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * 申请人id
     */
    @Column(name = "applicant_id")
    private Integer applicantId;

    /**
     * 申请原因
     */
    private String reason;

    /**
     * 插入时间
     */
    @Column(name = "ins_time")
    private Date insTime;

    /**
     * 申请状态，1-待审核，2-审核通过，3-驳回
     */
    @Column(name = "apply_state")
    private Integer applyState;

    /**
     * 驳回原因
     */
    @Column(name = "reject_reason")
    private String rejectReason;

    @Column(name = "after_bed")
    private Integer afterBed;

    @Column(name = "before_bed")
    private Integer beforeBed;

    public Integer getAfterBed() {
        return afterBed;
    }

    public void setAfterBed(Integer afterBed) {
        this.afterBed = afterBed;
    }

    public Integer getBeforeBed() {
        return beforeBed;
    }

    public void setBeforeBed(Integer beforeBed) {
        this.beforeBed = beforeBed;
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
     * 获取申请人id
     *
     * @return applicant_id - 申请人id
     */
    public Integer getApplicantId() {
        return applicantId;
    }

    /**
     * 设置申请人id
     *
     * @param applicantId 申请人id
     */
    public void setApplicantId(Integer applicantId) {
        this.applicantId = applicantId;
    }

    /**
     * 获取申请原因
     *
     * @return reason - 申请原因
     */
    public String getReason() {
        return reason;
    }

    /**
     * 设置申请原因
     *
     * @param reason 申请原因
     */
    public void setReason(String reason) {
        this.reason = reason;
    }

    /**
     * 获取插入时间
     *
     * @return ins_time - 插入时间
     */
    public Date getInsTime() {
        return insTime;
    }

    /**
     * 设置插入时间
     *
     * @param insTime 插入时间
     */
    public void setInsTime(Date insTime) {
        this.insTime = insTime;
    }

    /**
     * 获取申请状态，1-待审核，2-审核通过，3-驳回
     *
     * @return apply_state - 申请状态，1-待审核，2-审核通过，3-驳回
     */
    public Integer getApplyState() {
        return applyState;
    }

    /**
     * 设置申请状态，1-待审核，2-审核通过，3-驳回
     *
     * @param applyState 申请状态，1-待审核，2-审核通过，3-驳回
     */
    public void setApplyState(Integer applyState) {
        this.applyState = applyState;
    }

    /**
     * 获取驳回原因
     *
     * @return reject_reason - 驳回原因
     */
    public String getRejectReason() {
        return rejectReason;
    }

    /**
     * 设置驳回原因
     *
     * @param rejectReason 驳回原因
     */
    public void setRejectReason(String rejectReason) {
        this.rejectReason = rejectReason;
    }



    private Integer handleId;

    public Integer getHandleId() {
        return handleId;
    }

    public void setHandleId(Integer handleId) {
        this.handleId = handleId;
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