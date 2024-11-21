import {
  forwardRef, ReactNode, SelectHTMLAttributes, useRef,
} from 'react';
import Label from '@components/label';
import { CSSObject } from '@emotion/react';
import useSelectStyle from '@components/select/useSelectStyle';
import { generateRandomId } from '@/utils';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children?: ReactNode;
  icon?: string | ReactNode;
  label?: string;
  css?: CSSObject;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  children, icon, label, css, ...rest
}, ref) => {
  const selectId = useRef(generateRandomId());
  const { selectStyle, selectContainerStyle } = useSelectStyle();

  return (
    <div css={selectContainerStyle}>
      {label ? <Label>{label}</Label> : null}
      <select id={selectId.current} css={[selectStyle, css]} {...rest} ref={ref}>
        {children}
      </select>
    </div>
  );
});

export default Select;
