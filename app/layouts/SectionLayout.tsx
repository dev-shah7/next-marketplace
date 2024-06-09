'use client';

import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card/Card';

import { cards } from '../utils/cards';
import FullPage from '../components/FullPage';

const SectionLayout = () => {
  return (
    <MainStyled>
      <SectionLayoutStyled>
        <CardWrapper>
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </CardWrapper>
      </SectionLayoutStyled>

      <FullPage />

      <SectionLayoutStyled>
        <CardWrapper>
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </CardWrapper>
      </SectionLayoutStyled>
    </MainStyled>
  );
};

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;
`;

const SectionLayoutStyled = styled.div`
  padding: 5rem 10rem;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 30rem);
  gap: 4rem;
`;
export default SectionLayout;
