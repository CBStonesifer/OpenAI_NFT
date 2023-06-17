import { Button } from '@chakra-ui/react';
//import {writeFileSync } from 'fs';
import React, {useState} from 'react';
import { Configuration, OpenAIApi } from 'openai';
import AI_styles from '../css/O_AI_style.module.css'

const O_AI = () => {


	const [textInput, setTextInput] = useState('');
	const[myImage, setImage] = useState('https://user-images.githubusercontent.com/47315479/81145216-7fbd8700-8f7e-11ea-9d49-bd5fb4a888f1.png');

	const configuration = new Configuration({
		apiKey: "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",
		});
	const openai = new OpenAIApi(configuration);

	const generateImage = async (e) =>{
		e.preventDefault();
		console.log(textInput);
		
		const response = await openai.createImage({
			prompt: textInput,
			n: 1,
			size: "256x256",
			// temperature: 0.9,
			// max_tokens: 2048,
		  });
		  
		  const image_url = response.data.data[0].url;
		  console.log(image_url);
		  setImage(image_url);
	}


	const handleText = (e) => {
		setTextInput(e.target.value);
	}

	return (
		<div className={AI_styles.OI_layout}>
			<img src= {myImage} alt="new"
				className={AI_styles.img}/>
			<form onSubmit={generateImage}>
				<div>
					<input type="string" className={AI_styles.gen_textbox} onChange={handleText} value={textInput}
					placeholder="Type Image Prompt Here..."/>
					<button type="submit" className={AI_styles.gen_button}> Generate </button>
				</div>
      		</form>
		</div>
	);
}

export default O_AI;


//"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"