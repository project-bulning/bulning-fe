import { useState, forwardRef } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import Container from '@components/container';
import useFormPageStyle from '@pages/helpee/useFormPageStyle';
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
  const { selectedBtnStyle, inputTextStyle } = useFormPageStyle();
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
    <Container direction="column">
      <div ref={ref}>
        <Paragraph weight="semi-bold" css={{ marginBottom: '10px' }}>{label}</Paragraph>
        <Container justify="space-between" gap="8px">
          {options.map((option) => (
            <Button
              variant="select"
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
            variant="select"
            type="button"
            onClick={() => handleOptionClick('etc')}
            css={selectedOption === 'etc' ? selectedBtnStyle : undefined}
          >
            직접 입력
          </Button>
          )}
        </Container>
        {selectedOption === 'etc' && (
        <Container css={{ ...inputTextStyle, marginTop: '10px' }}>
          <Input
            type="text"
            value={etcValue}
            placeholder="내용을 직접 입력해주세요"
            onChange={(e) => handleEtcChange(e.target.value)}
          />
        </Container>
        )}
      </div>
    </Container>
  );
});

export default ButtonSelector;
