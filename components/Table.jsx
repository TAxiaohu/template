import React from 'react'
import { Button, Space, Popconfirm } from 'antd'
import { BaseTable } from '@ui-comps'
import PropTypes from 'prop-types'

const PageTable = (props) => {
  const {
    data,
    pagination,
    onTableChange,
    onPreview,
    onRemove,
    ...rest
  } = props

  const columns = [{
    title: 'title1',
    dataIndex: 'title1',
    fixed: 'left',
  }, {
    title: 'title2',
    dataIndex: 'title2',
  }, {
    title: 'title3',
    dataIndex: 'title3',
  }, {
    title: 'title4',
    dataIndex: 'title4',
  }, {
    title: 'title5',
    dataIndex: 'title5',
  }, {
    title: 'title6',
    dataIndex: 'title6',
  }, {
    title: 'title7',
    dataIndex: 'title7',
  }, {
    title: 'title8',
    dataIndex: 'title8',
  }, {
    title: 'title9',
    dataIndex: 'title9',
  }, {
    title: 'title10',
    dataIndex: 'title10',
  }, {
    title: 'title11',
    dataIndex: 'title11',
  }, {
    title: '操作',
    fixed: 'right',
    width: 148,
    render: (value, row) => (
      <Space>
        <Button type="link" onClick={() => onPreview(row)}>查看</Button>
        <Popconfirm title="您确定要删除该条目吗？" onConfirm={() => onRemove(reow)}>
          <Button type="link">删除</Button>
        </Popconfirm>
      </Space>
    ),
  }]

  return (
    <>
      <BaseTable
        rowKey={(record) => `${record.taskId}-${record.taskPlanId}-${record.taskExecuteTime}`}
        columns={columns}
        data={data}
        onChange={onTableChange}
        {...pagination}
        {...rest}
      />
    </>
  )
}

PageTable.defaultProps = {
  data: [],
  pagination: {},
  onTableChange: () => { },
  onPreview: () => { },
  onRemove: () => { },
}

PageTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  pagination: PropTypes.oneOfType([PropTypes.object]),
  onTableChange: PropTypes.func,
  onPreview: PropTypes.func,
  onRemove: PropTypes.func,
}

export default PageTable
