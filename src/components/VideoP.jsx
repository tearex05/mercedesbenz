import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Nav from './Nav'
import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa';
import Bg from '../images/bg.jpg'

function VideoP() {
      return (
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }} transition={{ duration: 0.4 }}>
                  <GlobalStyle />
                  <Nav />
                  <BodyV>
                        <VideoC>
                                    <Video src={Bg} />
                                    <FaPlay style={{ width: "2em", height: "2em", color: "tomato", position: 'absolute', }} />
                        </VideoC>
                  </BodyV>
            </motion.div>
      )
}

const VideoC = styled.div`
width:80vw;
max-width:700px;
display:flex;
align-items:center;
justify-content:center;
`;

const Video = styled.img`
border: 2px dashed white;
width:100%;
border-radius:25px;
transition:all 0.3s ease-in-out;
&:hover{
      border-radius:0;
}
`;

const BodyV = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(to bottom, #222,#111);
display:flex;
align-items: center;
justify-content: center;
`;


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Playfair Display', serif;
    overflow-x: hidden;
  }
`;

export default VideoP