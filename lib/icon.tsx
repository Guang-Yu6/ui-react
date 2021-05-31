import React from 'react';
import './icons/wx.svg';
import './icons/zfb.svg';
import './icons/bd.svg';
import './AA.scss';
import classes from './helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

//    <>类型接受一个参数         我的icon是一个函数组件，它的属性是：里面包含着name是字符串类型
const Icon: React.FunctionComponent<IconProps> = ({className, name, ...restProps}) => {
  return (
    <svg className={classes('fui-icon', className)}
         {...restProps}
    >
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
