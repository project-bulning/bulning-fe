import Container, { ContainerProps } from '@components/container';
import { css } from '@emotion/react';

interface DefaultPaddedContainerProps extends ContainerProps {
}

export function DefaultPaddedContainer(
  { children, css: cssOverride, ...rest }: DefaultPaddedContainerProps,
) {
  const paddedContainerStyle = css`
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  `;

  return (
    <Container css={css([paddedContainerStyle, cssOverride])} {...rest}>
      {children}
    </Container>
  );
}
