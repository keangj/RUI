import React from 'react';
import './importicons';
import './icon.scss'

interface IconProps {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
      <svg className="rui-icon">
        <use xlinkHref={`#${props.name}`}/>
      </svg>
  )
};

export default Icon