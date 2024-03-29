import React from 'react';
import IconBase, { type IconBaseProps } from './IconBase';

const SvgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
  </svg>
);

const Plus = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="Plus" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);

export default Plus;
