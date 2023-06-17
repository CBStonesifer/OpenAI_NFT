import React, {useState} from 'react';
import { Grid } from '@mui/material';
import { Button } from '@chakra-ui/react';
import eth_styles from '../css/menu_style.module.css'


const Menu = ({onComponentRecieved}) => {

    const handleClick = (ID) =>{
        // console.log(ID);
        onComponentRecieved(ID);
    }

return(
<Grid container justify="space-around" columns={16}>
  <Grid item>
    <Button className={eth_styles.menu_button} onClick={() => handleClick(0)}>Generate NFT</Button>
  </Grid>
  <Grid item>
    <Button className={eth_styles.menu_button} onClick={() => handleClick(1)}>Description</Button>
  </Grid>
  <Grid item>
    <Button className={eth_styles.menu_button}>My NFTs</Button>
  </Grid>
</Grid>
);
}

export default Menu;