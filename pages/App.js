import React, {useState} from 'react';
//import { web3_actions } from "./src/funcs.js";
import { ethers } from 'ethers';
import Wallet from './Wallet';
import O_AI from './O_AI';
import Menu from './Menu';
import Homepage from '../css/Homepage.module.css'
import Description from './Description';


export const App = () => {

  const [mainPage, setMainPage] = useState(0);
  const [myComponentID, setMyComponentID] = useState(0);

  const handlePageChange = (componentID) =>{
    setMainPage(componentID);
    console.log("Function Changed: "+ componentID);
  }

  const mainDisplay = (componentID) => {

    switch(componentID){
      case 0:
        return<O_AI/>
      case 1:
        return <Description/>

      case 2:
    }
      
  }
  
  const getUserAddress = (data) => {
    console.log(data);
  }

  return (
    <div className={Homepage.backdrop}>
      <h1 className={Homepage.title}>OPEN_NFT</h1>
      <div className={Homepage.connect_wallet}>
        <Wallet/>
      </div>
      <Menu onComponentRecieved={handlePageChange}/>
      <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh'
        }}>
        {mainDisplay(mainPage)}
      </div>
      
    </div>
  );   
}
