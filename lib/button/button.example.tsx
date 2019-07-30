import * as React from "react";
import Button from './button';
import ButtonGroup from './button-group';
import Icon from "../icon/icon";
import './button.example.scss';

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <h3>buttons（按钮）</h3>
      <div className="button">
        <Button>normal</Button>
        <Button level="important">important</Button>
        <Button level="danger">danger</Button>
        <Button level="danger" disabled>disabled</Button>
        <Button>icon right<Icon name="alipay" className="right"/></Button>
        <Button><Icon name="qq" className="left"/>icon left</Button>
      </div>
      <div className="button-group">
        <h3>Grouped Buttons（按钮组）</h3>
        <ButtonGroup>
          <Button disabled>left</Button>
          <Button disabled>middle</Button>
          <Button>right</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>left</Button>
          <Button>middle</Button>
          <Button>right</Button>
        </ButtonGroup>
      </div>
    </div>
  )
};

export default ButtonExample;
