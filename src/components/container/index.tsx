import { HTMLAttributes, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
import useContainerStyle from '@components/container/useContainerStyle';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'center' | 'flex-end';
  width?: string;
  height?: string;
  gap?: string;
  padding?: string;
  boxSizing?: 'border-box' | 'content-box';
  css?: CSSObject;
}

function Container({
  css, children, ...rest
}: ContainerProps) {
  const { containerStyle } = useContainerStyle(rest);
  return (
    <div css={[containerStyle, css]} {...rest}>
      {children}
    </div>
  );
}

export default Container;
