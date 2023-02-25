import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Circle, Path } from 'react-native-svg';

export const Settings = ({ color = '#000', ...props }: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M10.521 3.624a2 2 0 012.958 0l.735.807a2 2 0 001.572.651l1.091-.05a2 2 0 012.091 2.09l-.05 1.092a2 2 0 00.65 1.572l.808.735a2 2 0 010 2.958l-.807.735a2 2 0 00-.651 1.572l.05 1.091a2 2 0 01-2.09 2.091l-1.092-.05a2 2 0 00-1.572.65l-.735.808a2 2 0 01-2.958 0l-.735-.807a2 2 0 00-1.572-.651l-1.091.05a2 2 0 01-2.092-2.09l.051-1.092a2 2 0 00-.65-1.572l-.808-.735a2 2 0 010-2.958l.807-.735a2 2 0 00.651-1.572l-.05-1.091a2 2 0 012.09-2.092l1.092.051a2 2 0 001.572-.65l.735-.808z"
        stroke={color}
        strokeWidth={2}
      />
      <Circle cx={12} cy={12} r={3} stroke={color} strokeWidth={2} />
    </Svg>
  );
};
