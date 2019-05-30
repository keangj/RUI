import * as React from "react";
import {FormEventHandler, ReactFragment} from "react";
import Input from "../input/input";

export interface FormValue {
  [key: string]: any
}

interface Props {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler;
  onChange: (value: FormValue) => void;
  errors?: {[K: string]: [string]}
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onChange = (name: string, value: string) => {
    const newFormData = {...formData, [name]: value};
    props.onChange(newFormData);
  };

  return (
    <form onSubmit={onSubmit}>
      {
        props.fields.map(f =>
          <div key={f.name}>
            {f.label}
            <Input
              type={f.input.type}
              value={formData[f.name]}
              onChange={(e) => onChange(f.name, e.target.value)}
            />
            {props.errors && <div>{props.errors[f.name]}</div>}
          </div>
        )
      }
      <div>
        {props.buttons}
      </div>
    </form>
  )
};

export default Form;