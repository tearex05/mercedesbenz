import React from "react"
import styled, { createGlobalStyle } from "styled-components";
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import Nav from "./Nav";
import LogoP from "../images/logo.png";
import CarP from "../images/benzcar.png";
import Bg from "../images/bg.jpg"


function Home() {
  return (
    <>
      <GlobalStyle />
      <Body>
        <Nav />
        <Main>
          <Logo src={LogoP} alt="logo" />
          <Car src={CarP} alt="benz car" />
          <Button to="/cars">Explore</Button>
        </Main>
        <Info>
          <h1>A little Info</h1>
          <p>Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Quasi, commodi.</p>
          <Video style={{ backgroundImage: `url(${Bg})` }} to="/video"><FaPlay style={{ width: "2em", height: "2em", color: "white" }} /></Video>
        </Info>
      </Body>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Playfair Display', serif;
    overflow: hidden;
  }
`;

const Body = styled.div`
@keyframes load {
  from{transform:translateX(20px); opacity:0}
  to{transform:translateX(0); opacity:1}
}
overflow-y:auto;
  width:100vw;
  height:100vh;
  display:grid;
  grid-template-columns: repeat(1,1fr);
  @media (min-width:1000px){
    grid-template-columns: 60vw 40vw;
  }
`;

const Video = styled(Link)`
animation: load 0.5s ease-in-out forwards;
  text-decoration: none;
  margin-bottom: 60px;
  border-radius: 25px;
  width:300px;
  height:200px;
  display:flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover{
    transform: scale(1.1,1.1);
}
`;

const Logo = styled.img`
animation: load 0.5s ease-in-out forwards;
    width:330px;
`;

const Car = styled.img`
    position: relative;
    width:530px;
    animation: load 0.5s ease-in-out forwards;
`;

const Button = styled(Link)`
animation: load 0.5s ease-in-out forwards;
  padding:15px 20px;
  border: 1px solid #050035;
  border-radius: 40px;
  color:#050035;
  font-size: 20px;
  margin-bottom: 20px;
  transition:all 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  &:hover{
    background-color: #050035;
    color: white
  }
`;

const Main = styled.div`
  display:flex;
  padding:20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background:linear-gradient(to bottom, whitesmoke, #e2e2e2)
`;

const Info = styled.div`
animation: load 0.5s ease-in-out forwards;
  h1{
  border-left:5px solid #f10071;
  padding: 0 20px;
  align-self: flex-start;
  margin-top: 30px;
  }
  p{
    width: 60%;
    margin-top: 50px;
    text-align:center;
    font-size:20px;
  }
  color: snow;
  display:flex;
  padding:20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom,#050035,#03001f);
`;

export default Home;