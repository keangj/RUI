import * as React from "react";
import Form from "./form";
import {Fragment, useState} from "react";

const FormExample = () => {
  const [formData] = useState({
    name: '',
    password: ''
  });
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);
  return (
    <Form
      value={ formData }
      fields={ fields }
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