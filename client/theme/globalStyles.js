import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    height:100%;
}

body {
  font-size:1rem;
  line-height:1.6;
  background-color:white;
}
a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style:none;
}

img {
  width:100%;
}

* {
  box-sizing: border-box;
  margin:0;
}

.text-primary {
  color:${props => props.theme.colors.main};
}
`;

export default GlobalStyle;



