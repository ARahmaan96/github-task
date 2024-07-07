import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {NumberProp} from 'react-native-svg';

interface SvgComponentProps {
  width?: NumberProp;
  height?: NumberProp;
  viewBox?: string;
  [key: string]: any; // Allow other props for flexibility
}

const SvgComponent: React.FC<SvgComponentProps> = props => (
  <Svg width={50} viewBox="0 0 14.557 17.746" {...props}>
    <Path
      fill="#68ddba"
      d="M1.56 17.746h13V2.08h-1.04V0H1.56A1.561 1.561 0 0 0 0 1.56v14.626a1.561 1.561 0 0 0 1.56 1.56Zm-.52-1.56V3.03a1.553 1.553 0 0 0 .52.089h.52v13.587h-.52a.521.521 0 0 1-.52-.52Zm12.477.52H3.119V3.119h5.2V8.77L10.4 7.383l2.08 1.386v-5.65h1.04ZM9.358 3.119h2.08v3.708L10.4 6.134l-1.04.693ZM1.56 1.04h10.917v1.04H1.56a.52.52 0 0 1 0-1.04Zm0 0"
      data-name="Path 7"
    />
  </Svg>
);

export default SvgComponent;
