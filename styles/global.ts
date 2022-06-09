import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 html { // 16px
     @media (max-width: 1088px){
         font-size: 93.75%; // 15px
     }

     @media (max-width: 720px){
         font-size: 87.5%; // 14px
     }
 }

 body {
     background-image: 
     radial-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)),
     url("/images/digital-city.jpg");
     -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button{
     font-family: 'Poppins', sans-serif;
     font-weight: 400;
     color: #FFFFFF;
 }

 h1, h2, h3, h4, h5, h6 {
     font-weight: 600;
 }

 button{
     cursor: pointer;
 }

`