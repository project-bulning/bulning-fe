import { forwardRef, InputHTMLAttributes, MouseEvent } from 'react';
import { CSSObject } from '@emotion/react';
import useRadioStyle from '@components/radio/useRadioStyle';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'radio';
  css?: CSSObject;
  defaultChecked?: boolean;
  checked?: boolean;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    { type = 'radio', ...rest },
    ref,
  ) => {
    const { radioStyle } = useRadioStyle();

    const onClick = (e: MouseEvent) => {
      const input = e.target as HTMLInputElement;
      input.checked = true;
    };

    return (
      <input type={type} css={radioStyle} onClick={onClick} ref={ref} {...rest} />
    );
  },
);

export default Radio;
