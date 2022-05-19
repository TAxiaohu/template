import React, { useEffect } from 'react'
import FormHoc from '@hoc/FormHoc'
import PropTypes from 'prop-types'
import {
  BasicInput,
} from '@ui-comps'

const SearchForm = (props) => {
  const { onSubmit } = props

  useEffect(() => {
    onSubmit()
  }, [])

  return (
    <>
      <BasicInput
        label="名称"
        placeholder="请输入名称"
        name="name"
      />
      <BasicInput
        label="名称2"
        placeholder="请输入名称2"
        name="name2"
      />
      <BasicInput
        label="名称3"
        placeholder="请输入名称2"
        name="name3"
      />
      <BasicInput
        label="名称4"
        placeholder="请输入名称2"
        name="name4"
      />
    </>
  )
}
SearchForm.defaultProps = {
  setFieldsValue: () => { },
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setFieldsValue: PropTypes.func,
}

export default FormHoc(SearchForm)
