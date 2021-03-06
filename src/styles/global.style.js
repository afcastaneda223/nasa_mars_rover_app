import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
body {
    background-color: white;
    box-sizing: border-box;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  *,*:before,*:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  img {
    max-width: 100%;
    display: block;
  }
 `;
