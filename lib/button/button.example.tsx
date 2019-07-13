import * as React from "react";
import Button from './button';
import ButtonGroup from './button-group';
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
      </div>
      <div className="button-group">
        <h3>Grouped Buttons（按钮组）</h3>
        <ButtonGroup>
          <Button disabled>left</Button>
          <Button disabled>middle</Button>
          <Button>right</Button>
        </ButtonGroup>
      </div>
    </div>
  )
};

export default ButtonExample;
