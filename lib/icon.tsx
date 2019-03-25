import React from 'react';
import './importicons';
import './icon.scss'

interface IconProps {
  name: string,
  onClick: () => void
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
      <svg className="rui-icon" onClick={props.onClick}>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
  )
};

export default Icon