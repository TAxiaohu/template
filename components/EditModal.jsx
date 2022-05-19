/*
 * @Author: 胡路杰
 * @Date: 2022-05-19 17:39:54
 * @Descripttion: 
 * @Company: YH
 */
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { Modal, Form, Input, message } from "antd";
import {
  BasicInput, BasicSelect,
} from '@ui-comps'
import { editApi } from "../server";

const EditModal = (props) => {
  const { visible, info, onRefresh, onClose } = props
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const isEdit = !!info.id

  useEffect(() => {
    if (visible && info && info.id) {
      form.setFieldsValue({
        name: '名称',
        gender: '1',
        remarks: '这是备注 备注 备注'
      })
    }
  }, [info])

  // 取消
  const onCancel = () => {
    form.resetFields()
    onClose()
  }

  // 提交
  const onSubmit = () => {
    form.validateFields()
      .then((values) => {
        setLoading(true)
        editApi({ ...info, ...values })
          .then(() => {
            message.success('操作成功')
            onCancel()
            onRefresh()
          })
          .finally(() => {
            setLoading(false)
          })
      })
  }

  return (
    <Modal
      destroyOnClose
      title={`弹层${isEdit ? '编辑' : '新增'}`}
      visible={visible}
      onOk={onSubmit}
      onCancel={onCancel}
      confirmLoading={loading}
    >
      <Form form={form}>
        <BasicInput
          label="名称"
          placeholder="请输入"
          name="name"
          rules={[{ required: true, message: '请输入' }]}
        />
        <BasicSelect
          label="性别"
          placeholder="请选择"
          name="gender"
          options={[
            { value: '1', lable: '男' },
            { value: '2', lable: '女' },
          ]}
        />
        <Form.Item
          name="remarks"
          label="备注"
        >
          <Input.TextArea
            placeholder={`请输入${labelMap[visible]},${visible === 'REFUSE' ? '必填' : '非必填'}`}
            rows={3}
            style={{ width: '100%' }}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

EditModal.defaultProps = {
  visible: false,
  info: {},
  onRefresh: () => { },
  onClose: () => { },
}

EditModal.propTypes = {
  visible: PropTypes.bool,
  info: PropTypes.oneOfType([PropTypes.object]),
  onRefresh: PropTypes.func,
  onClose: PropTypes.func.isRequired,
}


export default EditModal