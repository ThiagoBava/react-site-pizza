import React from 'react';
import Navbar from '../NavBar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

const Hero = () => {
  return (
    <HeroContainer>
        <Navbar />
        <HeroContent>
            <HeroItems>
                <HeroH1>Os Melhores Lanches</HeroH1>
                <HeroP>No melhor tempo!</HeroP>
                <HeroBtn>Compre Já!</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero;