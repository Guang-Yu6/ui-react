import React from 'react';

interface IconProps {
  name: string;
}
//    <>类型接受一个参数         我的icon是一个函数组件，它的属性是：里面包含着name是字符串类型
const Icon:React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      {props.name}
    </span>
  );
};

export default Icon;
