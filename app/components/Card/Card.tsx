'use client';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  description: string;
  image: StaticImport;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <CardContainer>
      <CardImage>
        <CardPragraph>New</CardPragraph>
        <CardText>
          <h3>{title}</h3>
          <p>{description}</p>
        </CardText>

        <Image
          src={image}
          alt='card'
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            borderRadius: '8px',
          }}
        />
      </CardImage>
      <CardOverlay></CardOverlay>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  background-color: var(--color-bg);
  height: 100%
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease-in-out;
`;

const CardPragraph = styled.p`
  position: absolute;
  top: 3rem;
  right: 2.5rem;
  z-index: 5;
  background: #222260;
  color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
`;

const CardText = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 2.5rem;
  z-index: 5;

  h3 {
    display: inline-block;
    font-size: 1.5rem;
    color: #f2994a;
    background: var(--color-bg);
    padding: 0.2rem 1rem;
    border-radius: 30px;
    margin-bottom: 0.5rem;
    border: 1px solid var(--color-border);
  }
  p {
    font-size: 1rem;
  }
`;

const CardImage = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
`;

const CardOverlay = styled.div`
  postition: absolute;
  botton: -2px;
  left: -2px;
  width: calc(100% + 4px);
  height: 25%;
  background: linear-gradient(0deg, #111111 1%, rgba(17, 17, 17, 0.06));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
export default Card;
