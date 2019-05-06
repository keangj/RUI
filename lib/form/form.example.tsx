import * as React from "react";
import Form, {FormValue} from "./form";
import {Fragment, useState} from "react";

const FormExample = () => {
  const [formData, setFormData] = useState<FormValue>({
    name: '123',
    password: ''
  });
  const [fields] = useState([
    {name: 'name', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]);
  const onSubmit = () => {
    console.log(formData);
  };

  return (
    <Form
      value={formData}
      fields={fields}
      onSubmit={onSubmit}
      onChange={(newValue) => setFormData(newValue)}
      buttons={
        <Fragment>
          <button type="submit">提交</button>
          <button>取消</button>
        </Fragment>
      }
    />
  )
};

export default FormExample;