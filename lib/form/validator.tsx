import {FormValue} from "./form";

type FormRules = Array<FormRule>
interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}
interface FormErrors {
  [K: string]: Array<string>
}

const Validator = (formData: FormValue, rules: FormRules): FormErrors => {
  return {}
};

export default Validator;