import { useState, forwardRef } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import Container from '@components/container';
import useBugInputPageStyle from '@pages/helpee/useBugInputPageStyle';
import { Paragraph } from '@components/text';
import Button from '@components/button';
import Input from '@components/input';

interface ButtonSelectorProps {
  label: string;
  options: string[];
  name: string;
  setValue: UseFormSetValue<any>;
  etcBtn?: boolean;
}

const ButtonSelector = forwardRef<HTMLDivElement, ButtonSelectorProps>(({
  label, options, name, setValue, etcBtn = true,
}: ButtonSelectorProps, ref) => {
  const { selectedBtnStyle, inputTextStyle } = useBugInputPageStyle();
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [etcValue, setEtcValue] = useState('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (option !== 'etc') setEtcValue('');
    setValue(name, option);
  };

  const handleEtcChange = (value: string) => {
    setEtcValue(value);
    setValue(name, value);
  };

  return (
    <div ref={ref}>
      <Paragraph>{label}</Paragraph>
      <Container justify="space-between">
        {options.map((option) => (
          <Button
            key={option}
            type="button"
            onClick={() => handleOptionClick(option)}
            css={selectedOption === option ? selectedBtnStyle : undefined}
          >
            {option}
          </Button>
        ))}
        {etcBtn && (
          <Button
            type="button"
            onClick={() => handleOptionClick('etc')}
            css={selectedOption === 'etc' ? selectedBtnStyle : undefined}
          >
            기타
          </Button>
        )}
      </Container>
      {selectedOption === 'etc' && (
        <Container css={{ ...inputTextStyle, marginTop: '10px' }}>
          <Input
            type="text"
            value={etcValue}
            placeholder="기타 내용을 입력하세요"
            onChange={(e) => handleEtcChange(e.target.value)}
          />
        </Container>
      )}
    </div>
  );
});

export default ButtonSelector;
