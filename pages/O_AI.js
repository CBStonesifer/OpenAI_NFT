import { Button } from '@chakra-ui/react';
import React, {useState} from 'react';
import { OpenAIApi } from 'openai';
import AI_styles from '../css/O_AI_style.module.css'

const O_AI = () => {

	const [textInput, setTextInput] = useState('');
	const[myImage, setImage] = useState(null);

	const response = async (ask) => {
		await OpenAIApi.createImage({
		prompt: ask,
		n: 1,
		size: "1024x1024",
	  });
	  image_url = response.data.data[0].url;
	  setImage(images['doggy.png']);
	}

	const submitText = (e) => {
		e.preventDefault();
		console.log(textInput);
		response(textInput);
	}

	const handleText = (e) => {
		setTextInput(e.target.value);
	}

	return (
		<div>
			<img src= {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4e7IlUhUDcscX__CNJB_jKcrsUUFXemtbD9JQaV5BV0we_2ovJQZZQAjgBdIebhesnWU&usqp=CAU'} alt="new"/>
			<form onSubmit={submitText}>
        	<div>
        		<input type="string" onChange={handleText} value={textInput}/>
				<button type="submit" className={AI_styles.gen_button}> Generate </button>
        	</div>
        	
      		</form>
		</div>
	);
}

export default O_AI;