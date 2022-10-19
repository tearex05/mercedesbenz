import React from 'react';
import { Link } from 'react-router-dom';
import { FaCarSide, FaHome, FaPlay } from 'react-icons/fa';
import styled from 'styled-components';


function Nav() {
  return (
    <>
      <NavMain>
        <HomePage to="/mercedesbenz">Go To The HomePage<FaHome style={{ width: "1.5em", height: "1.5em", color: "white", marginLeft: "20px" }} /></HomePage>
        <Cars to="/cars">See The Cars Here<FaCarSide style={{ width: "1.5em", height: "1.5em", color: "white", }} /></Cars>
        <Play to="/video">See The Trailer Here<FaPlay style={{ width: "1.2em", height: "1.2em", color: "white", }} /></Play>
      </NavMain>
    </>
  )
}

const NavMain = styled.div`
      align-self: center;
      position: absolute;
      z-index: 100;
`;

const Cars = styled(Link)`
border: 1px solid snow;
margin: 5px 0;
  &:hover{
    transform: translateX(0);
  }
  transition: all 0.3s ease-out;
  transform: translateX(-180px);
  text-decoration: none;
  background: linear-gradient(to bottom,#050035,#03001f);
  color: white;
  padding:20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const HomePage = styled(Link)`
margin: 5px 0;
border: 1px solid snow;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  &:hover{
    transform: translateX(0);
  }
  justify-content: space-between;
  transition: all 0.3s ease-out;
  transform: translateX(-180px);
  text-decoration: none;
  background: linear-gradient(to bottom,#050035,#03001f);
  color: white;
  padding:20px;
  display: flex;
  align-items: center;
`;

const Play = styled(Link)`
margin: 5px 0;
border: 1px solid snow;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  &:hover{
    transform: translateX(0);
  }
  transition: all 0.3s ease-out;
  transform: translateX(-180px);
  text-decoration: none;
  background: linear-gradient(to bottom,#050035,#03001f);
  color: white;
  padding:20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export default Nav