import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  font-family:  'Capriola', sans-serif;
  height: 100vh;
  background-color: rgb(251, 248, 248);
  overflow-x: hidden ;
}

button {
  font-family:  'Capriola', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

::-webkit-scrollbar {
  width: 6px;
  background-color: rgb(168, 167, 167);
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

::-webkit-scrollbar-button{
  height: 7px;
}

`