import { InputHTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';
import useCheckboxStyle from '@components/checkbox/useCheckboxStyle';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'checkbox';
  css?: CSSObject;
  defaultChecked?: boolean;
  checked?: boolean;
}

function CheckBox({ type = 'checkbox', ...rest }: CheckBoxProps) {
  const { checkboxStyle } = useCheckboxStyle();

  return (
    <input type={type} css={checkboxStyle} {...rest} />
  );
}

export default CheckBox;
