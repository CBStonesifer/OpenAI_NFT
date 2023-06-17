import React, {useState} from 'react'
import {ethers} from 'ethers'
import Mint_abi from'../build/contracts/Mint.json'
import NFT_abi from '../build/contracts/NFT_contract.json'
import eth_styles from '../css/eth_style.module.css'


const Wallet = () => {

	// deploy simple storage contract and paste deployed contract address here. This value is local ganache chain
	let contractAddress = '0x451DdfC788e85892c605394dC473eDf634182EA5';

	let NFT_contract_Address = '0xEe4a4Cab203000976cce791C04cE5156E16a4573';

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect MetaMask Wallet');

	const [currentContractVal, setCurrentContractVal] = useState(null);

	const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	const [contract, setContract] = useState(null);
	const [NFTcontract, setNFTContract] = useState(null);


	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		setConnButtonText(newAccount);
		updateEthers();
	}

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
    if(typeof window !== 'undefined'){
        window.ethereum.on('accountsChanged', accountChangedHandler);

        window.ethereum.on('chainChanged', chainChangedHandler);
    }

	const updateEthers = () => {
		let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
		setProvider(tempProvider);

		let tempSigner = tempProvider.getSigner();
		setSigner(tempSigner);

		let tempContract = new ethers.Contract(contractAddress, Mint_abi['abi'], tempSigner);
		setContract(tempContract);

		let nftTempContract = new ethers.Contract(NFT_contract_Address, NFT_abi['abi'], tempSigner);
		setNFTContract(nftTempContract);

	}

	const setIncrement = async () => {
		let num = await contract.increment();		
		console.log(num);
	}

	const getCurrentVal = async () => {
		let val = Number(await contract.count());
		setCurrentContractVal(val);
	}
	
	return (
		<div>
			<button  className={eth_styles.wallet_button} 
			onClick={connectWalletHandler}>{connButtonText}</button>
			{errorMessage}
		</div>
	);
}

export default Wallet;

/*
<button onClick={setIncrement} style={{marginTop: '5em'}}> Increment </button>
			<div>
				{currentContractVal}
			</div>
			<div>
			<button onClick={getCurrentVal} style={{marginTop: '5em'}}> My Count </button>
			</div>
*/