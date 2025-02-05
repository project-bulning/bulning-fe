import { InputHTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';
import useCheckboxStyle from '@components/checkbox/useCheckboxStyle';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'checkbox';
  css?: CSSObject;
  defaultChecked?: boolean;
  checked?: boolean;
  id: string;
  labeling: string;
}

function CheckBox({
  type = 'checkbox', id, labeling, css, ...rest
}: CheckBoxProps) {
  const { checkboxStyle } = useCheckboxStyle();

  return (
    <>
      <input
        type={type}
        id={id}
        css={checkboxStyle}
        {...rest}
      />
      <label htmlFor={id}>
        <div>{labeling}</div>
      </label>
    </>
  );
}

export default CheckBox;
