'use client';

import Image from 'next/image';
import React, { useRef } from 'react';

import styled from 'styled-components';
import { FaRocket, FaWallet } from 'react-icons/fa';
import { Abril_Fatface } from 'next/font/google';

import logo from '../../../public/logo.png';
import Button from '../Button/Button';
import useHover3d from '../../utils/hover';

import heroImage from '../../../public/images/monkey.png';

const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: ['400'],
});

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { transform, transition } = useHover3d(headerRef, {
    x: 30,
    y: -40,
    z: 30,
  });

  const { transform: imageTransform, transition: imageTransition } = useHover3d(
    headerRef,
    {
      x: 20,
      y: -5,
      z: 11,
    }
  );

  return (
    <HeaderStyled ref={headerRef}>
      <nav>
        <div className='logo'>
          <Image src={logo} alt='logo' width={36} />
          <h2>Logo</h2>
        </div>
        <div className='input'>
          <input type='text' placeholder='Search' />
        </div>
        <ul className='nav-items'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Auctions</a>
          </li>
          <li>
            <a href='#'>Marketplace</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <Button name='Login' icon={<FaWallet />} />
        </ul>
      </nav>

      <HeaderContent>
        <TextContent>
          <h1 className={abril.className}>
            Buy, collect, and sell extraordinary NFTs
          </h1>
          <p>
            Acquire expertise in navigating the rapidly evolving and
            exhilarating NFT landscape, unveil the highlt sought-after NFTs, and
            comprehend the possible advantages and disadvantages of acquiring,
            amassing, and vending these exceptional digital assets.
          </p>
          <ButtonWrapper>
            <Button
              name='Get Started'
              icon={<FaRocket />}
              background='#f2994a'
              color='#fff'
              border='1px solid #f2994a'
            />
            <Button name='Learn More' />
          </ButtonWrapper>
        </TextContent>
        <ImageContent>
          <div
            className='image'
            style={{
              transform,
              transition,
            }}
          >
            <Image
              src={heroImage}
              alt='hero'
              width={600}
              height={600}
              style={{
                transform: imageTransform,
                transition: imageTransition,
              }}
            />
          </div>
        </ImageContent>
      </HeaderContent>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  nav {
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }

  .input {
    flex: 2;
    display: flex;
    justify-content: center;

    input {
      width: 55%;
      padding: 0.6rem 0.8rem;
      border-radius: 8px;
      background-color: #161616;
      border: 1px solid var(--color-border);

      &::placeholder {
        color: var(--color-border);
        font-weight: 500;
      }
    }
  }

  .nav-items {
    display: flex;
    gap: 2rem;
    align-items: center;

    li {
      transition: all 0.2s ease-in-out;

      &:hover {
        color: white;
        transform: scale(1.1);
      }
    }
  }
`;

const HeaderContent = styled.div`
  padding: 0 10rem 5rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  min-height: calc(100vh - 10vh);
`;

const TextContent = styled.div`
  > h1 {
    font-size: clamp(2rem, 5vw, 5rem);
    color: #f2994a;
    transition: all 0.01s linear;
    padding-bottom: 1.5rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
`;

const ImageContent = styled.div`
  .image {
    padding: 1rem;
    border-radius: 8px;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);

    img {
      border-radius: 8px;
    }
  }
`;

export default Header;
