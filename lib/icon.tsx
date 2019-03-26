import React from 'react';
import './importicons';
import './icon.scss';
import classes from './helpers/classer'


interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string;
}

const Icon: React.FunctionComponent<IconProps> =
  ({ className, name, ...restProps }) => {
  return (
      <svg
        className={classes("rui-icon", className)}
        { ...restProps }
      >
        <use xlinkHref={`#${name}`}/>
      </svg>
  );
};

export default Icon