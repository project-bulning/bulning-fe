import { ElementType, ReactNode } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

export type FontWeight = 'regular' | 'medium' | 'bold' | 'lighter' | 'bolder';

interface TextProps {
  children: ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types
  weight?: FontWeight;
  // eslint-disable-next-line react/no-unused-prop-types
  as?: ElementType;
  // eslint-disable-next-line react/no-unused-prop-types
  fontSize?: string;
  // eslint-disable-next-line react/no-unused-prop-types
  color?: string;
}

interface VariantTextProps extends TextProps {
  variant?: 'large' | 'medium' | 'small';
}

const Text = styled.p<TextProps>`
  font-weight: ${({ weight }) => weight || 'regular'};
  margin: 0;
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`};
  ${({ color }) => color && `color: ${color};`};
`;

export default Text;

export function ErrorText({ children, variant = 'medium' }: VariantTextProps) {
  const theme = useTheme();
  const textSizes = {
    large: '16px', medium: '14px', small: '12px',
  };
  return <Text as="p" fontSize={textSizes[variant]} color={theme.colors.other.error}>{children}</Text>;
}

export function Paragraph({ children, variant = 'medium', weight }: VariantTextProps) {
  const textSizes = {
    large: '18px', medium: '16px', small: '14px',
  };
  return <Text as="p" fontSize={textSizes[variant]} weight={weight}>{children}</Text>;
}

export const Heading = {
  H1: ({ children, weight }: TextProps) => (
    <Text as="h1" fontSize="32px" weight={weight}>
      {children}
    </Text>
  ),
  H2: ({ children, weight }: TextProps) => (
    <Text as="h2" fontSize="28px" weight={weight}>
      {children}
    </Text>
  ),
  H3: ({ children, weight }: TextProps) => (
    <Text as="h3" fontSize="24px" weight={weight}>
      {children}
    </Text>
  ),
  H4: ({ children, weight }: TextProps) => (
    <Text as="h4" fontSize="20px" weight={weight}>
      {children}
    </Text>
  ),
  H5: ({ children, weight }: TextProps) => (
    <Text as="h5" fontSize="18px" weight={weight}>
      {children}
    </Text>
  ),
};