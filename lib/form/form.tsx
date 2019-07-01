import * as React from "react";
import {FormEventHandler, ReactFragment} from "react";
import Input from "../input/input";
import './form.scss';

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
      <table>
        {
          props.fields.map(f =>
            <tr key={f.name} className="rui-form-tr">
              <td className="rui-form-td">
                {f.label}
              </td>
              <td className="rui-form-td">
                <Input
                  type={f.input.type}
                  value={formData[f.name]}
                  onChange={(e) => onChange(f.name, e.target.value)}
                />
                {props.errors && <div>{props.errors[f.name]}</div>}
              </td>
            </tr>
          )
        }
        <div>
          {props.buttons}
        </div>
      </table>
    </form>
  )
};

export default Form;
