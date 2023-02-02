import { ethers } from 'ethers';

async function web3_actions() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const account = await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const name = "hello";
    return name; //{provider, account, signer};
}

export default web3_actions();