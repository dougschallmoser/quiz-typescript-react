import styled, { createGlobalStyle } from 'styled-components';
import background from './images/splash.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${background});
    background-size: cover;
    margin: 0;
    padding: 0 25px;
    justify-content: center;
    display: flex;
  }

  * {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    color: #fff;
    filter: drop-shadow(2px 2px #0085A3);
  }

  .start, .next {
    cursor: pointer;
    background: #fff;
    border: none;
    padding: 12px 24px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  .next {
    background: #bad5ff;
  }
`