import * as RX from 'reactxp';
import ImageSvg, { SvgPath } from 'reactxp-imagesvg';
import { IconBase, IconProps } from './icon-base';

export const EmailIcon = (props: IconProps) => (
    <IconBase viewBox='0 0 40 40' {...props} >
        <SvgPath strokeColor={props.style.strokeColor} fillColor={props.style.fillColor} 
            // tslint:disable-next-line:max-line-length
            d='m5 11.6c-0.3-0.1-0.9-0.5-1-0.8-0.3-0.6 0-0.8 0.9-0.8h29.9c0.8 0 1.1 0.2 0.9 0.8-0.2 0.3-0.7 0.7-1 0.8-0.9 0.5-12.8 7-13.2 7.2s-1 0.3-1.7 0.3-1.1 0-1.6-0.3-12.4-6.7-13.2-7.2z m30.4 0.4c0.7-0.4 0.6 0 0.6 0.3v16.1c0 0.7-0.9 1.6-1.7 1.6h-28.9c-0.8 0-1.9-0.9-1.9-1.6v-16.1s0-0.7 0.7-0.3c0.6 0.3 6.5 4.3 10.3 6.8l-6.5 7.3c-0.1 0.2-0.1 0.3 0 0.4s0.3 0.1 0.4-0.1l7.7-6.5c1.1 0.8 1.9 1.3 2.1 1.4 0.6 0.3 1.1 0.3 1.6 0.3s1 0 1.7-0.3c0.1-0.1 0.9-0.6 2.1-1.4l7.6 6.5c0.2 0.2 0.4 0.2 0.5 0.1s0-0.2-0.2-0.4l-6.4-7.3c3.9-2.5 9.7-6.5 10.3-6.8z'
        />
    </IconBase>
);
