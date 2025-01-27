import { InputHTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';
import useCheckboxStyle from '@components/checkbox/useCheckboxStyle';
import { Paragraph } from '@components/text';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'checkbox';
  css?: CSSObject;
  defaultChecked?: boolean;
  checked?: boolean;
  id: string;
  labeling: string;
}

function CheckBox({
  type = 'checkbox', id, labeling, ...rest
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
        <Paragraph variant="small">{labeling}</Paragraph>
      </label>
    </>
  );
}

export default CheckBox;
