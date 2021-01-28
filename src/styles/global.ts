import { createGlobalStyle } from 'styled-components'

const GlobalSyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%
}

html, body, #__next {
  height: 100%auto;
}

body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, 'Helvetica Neue', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

`

export default GlobalSyles
