/*
 * @Author: 胡路杰
 * @Date: 2022-05-19 17:26:37
 * @Descripttion: 
 * @Company: YH
 */
import React, { useState } from "react";
import PropTypes from 'prop-types'
import { Button, message } from "antd";
import { SearchHoc } from '@hoc'
import { Panel } from '@ui-comps'
import { PageForm, PageTable, EditModal } from "./components";
import { remove } from "./server";

const {{ template }} = props => {
  const {
    tableData,
    pagination,
    onSearch,
    onChange,
    onRefresh,
  } = props

  const [visible, setVisible] = useState(false)
  const [info, setInfo] = useState(null)

  const onFormSearch = (values) => {
    const params = {
      ...values,
    }
    onSearch(params)
  }

  // 删除
  const onRemove = (item) => {
    const { id } = item
    remove(id)
      .then(() => {
        onRefresh()
        message.success('操作成功')
      })
  }

  return (
    <div className="page">
      <PageForm
        onSubmit={onFormSearch}
      />

      <Panel title="列表" actions={(
        <Button type="primary" onClick={() => setVisible(true)}>新增</Button>
      )}>
        <PageTable
          data={tableData}
          pagination={pagination}
          onPreview={openTaskResult}
          onRemove={onRemove}
          onTableChange={onChange}
          onPreview={() => {
            setInfo({ id: 1 })
            setVisible(true)
          }}
        />
      </Panel>
      <EditModal
        visible={visible}
        info={info}
        onClose={() => {
          setVisible(false)
          setInfo({})
        }}
      />
    </div>
  )
}

{{ template }}.defaultProps = {
  tableData: [],
  pagination: null,
  onSearch: null,
  onChange: null,
  onRefresh: null,
}

{{ template }}.propTypes = {
  tableData: PropTypes.oneOfType([PropTypes.array]),
  pagination: PropTypes.oneOfType([PropTypes.object]),
  onSearch: PropTypes.func,
  onChange: PropTypes.func,
  onRefresh: PropTypes.func,
}

export default SearchHoc({ method: 'post', urlConfig: ['host', '/api'] })( {{ template }} )
