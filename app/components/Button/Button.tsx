'use client';

import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  name: string;
  icon?: React.ReactNode;
  background?: string;
  color?: string;
  border?: string;
}

const Button = ({
  name,
  icon,
  background = 'var(--color-bg)',
  color,
  border,
}: ButtonProps) => {
  return (
    <ButtonStyled $background={background} $color={color} $border={border}>
      {icon && icon}
      {name}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<{
  $background?: string;
  $color?: string;
  $border?: string;
}>`
  padding: 0.8rem 2rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({ $background }) => $background || ''};
  color: ${({ $color }) => $color || ''};
  border: ${({ $border }) => $border || '2px solid var(--color-border)'};

  &:hover {
    background-color: var(--color-border);
    color: white;
  }
`;
export default Button;
