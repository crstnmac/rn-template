import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Basket = ({ color = '#000', ...props }: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        d="M21 9h-1.465l-3.7-5.555a1 1 0 00-1.664 1.11L17.132 9H6.868l2.964-4.445a1 1 0 00-1.664-1.11L4.465 9H3a1 1 0 000 2h1v8a2 2 0 002 2h12a2 2 0 002-2v-8h1a1 1 0 000-2zM9 17.5a1 1 0 01-2 0v-4a1 1 0 012 0zm4 0a1 1 0 01-2 0v-4a1 1 0 012 0zm4 0a1 1 0 01-2 0v-4a1 1 0 012 0z"
        fill={color}
      />
    </Svg>
  );
};
