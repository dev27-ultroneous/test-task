import { memo } from 'react';

import type { ContainerPropsType } from '@/utils/types';


const Container = ({
  children,
  className,
  backgroundClassName,
}: ContainerPropsType): React.JSX.Element => (
  <div className={`w-full ${backgroundClassName}`}>
    <div className={`max-w-screen-2xl m-auto ${className}`}>{children}</div>
  </div>
);

export default memo(Container);
