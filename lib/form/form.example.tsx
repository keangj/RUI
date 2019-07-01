import * as React from "react";
import Form, {FormValue} from "./form";
import {Fragment, useState} from "react";
import Validator from "./validator";

const FormExample = () => {
  const [formData, setFormData] = useState<FormValue>({
    name: '123',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [fields] = useState([
    {name: 'name', label: '用户名姓名命名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]);
  const onSubmit = () => {
    const error = Validator(formData, [{
      key: 'name',
      required: true,
      maxLength: 12,
      minLength: 6,
      pattern: /^[a-z]+$/
    },
    {
      key: 'password',
      required: true,
      maxLength: 12,
      minLength: 6,
      pattern: /^[0-9]+$/
    }
    ]);
    console.log(error);
    setErrors(error);
  };

  return (
    <Form
      value={formData}
      fields={fields}
      onSubmit={onSubmit}
      onChange={(newValue) => setFormData(newValue)}
      errors={errors}
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
