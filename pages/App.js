import React, {useState, useEffect} from 'react';
//import { web3_actions } from "./src/funcs.js";
import { ethers } from 'ethers';
import Wallet from './Wallet';
import O_AI from './O_AI';
import Homepage from '../css/Homepage.module.css'


export const App = () => {
  
  const getUserAddress = (data) => {
    console.log(data);
  }

  return (
    <div className={Homepage.backdrop}>
      <h1 className={Homepage.title}>OPEN NFT</h1>
      <div className={Homepage.connect_wallet}>
        <Wallet/>
      </div>
      <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh'
        }}>
        <O_AI/>
      </div>
      
    </div>
  );   
}
