import {FormValue} from "./form";

type FormRules = Array<FormRule>
interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  message?: string;
}
interface FormErrors {
  [K: string]: Array<string>
}

const isEmpty = (value: string) => {
  return value === undefined || value === null || value === '';

};

const Validator = (formData: FormValue, rules: FormRules): FormErrors => {
  let errors: any = {};
  const addError = (key: string, message: string) => {
    if (!errors[key]) {
      errors[key] = [message]
    } else {
      errors[key].push(message)
    }
  };
  console.log(formData, rules);
  rules.map(rule => {
    console.log(formData[rule.key]);
    const value = formData[rule.key];
    if (rule.required) {
      if (isEmpty(value)) {
        errors[rule.key] = ['必填'];
      }
    }
    if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      addError(rule.key, '太长');
    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(rule.key, '太短');
    }
    if (rule.pattern && !isEmpty(value) && !rule.pattern.test(value)) {
      console.log(rule.pattern.test(value));
      addError(rule.key, '失败');
    }
  });
  return errors
};

export default Validator;