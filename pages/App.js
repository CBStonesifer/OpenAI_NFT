import React, {useState, useEffect} from 'react';
//import { web3_actions } from "./src/funcs.js";
import { ethers } from 'ethers';
import WalletCard from './WalletCard';
import Counter from './Counter';
import O_AI from './O_AI';
import Homepage from '../css/Homepage.module.css'

export const App = () => {
  
  const getUserAddress = (data) => {
    console.log(data);
  }

  return (
    <div >
      <h1 className={Homepage.title}>OPEN NFT</h1>
      <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh'
        }}>
        <O_AI/>
      </div>
      <Counter/>
    </div>
  );   
}
//<WalletCard onGetAddress={getUserAddress} />

/*
THIS ALLOWS TEXT TO BE INPUT AND SENT TO CONSOLE
      




 */
