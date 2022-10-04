import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import ItemDescription from './ItemDescription';
import ItemCount from './ItemCount';




import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { CartContext } from '../../context/CartContext';
import NavBar from '../NavBar/NavBar';

const ItemDetail = ({ _id, ITEM_ID, PRICE,CATEGORY_L1,CATEGORY_L2, PRODUCT_DESCRIPTION, GENDER }) => {
  const { addItemToCart, isInCart } = useContext(CartContext);
  const [showSuccessBar, setShowSuccessBar] = useState(false);
  const imgPath = `https://d22kv7nk938ern.cloudfront.net/images/${CATEGORY_L1}/${ITEM_ID}.jpg`;

  

  const handleAddItemToCart = (quantity) => {
    if (isInCart(ITEM_ID) || quantity === 0) return;

    addItemToCart({ ITEM_ID, CATEGORY_L2, PRICE, quantity });
    setShowSuccessBar(true);
  };

  return (
    <>
      <NavBar />
      <Grid
        container
        mt={5}
        className='animate__animated animate__fadeIn'
        spacing={3}
        padding={5}
      >
        <Grid
          item
          sm={6}
          md={4}
          className='animate__animated animate__fadeInLeft'
        >
          <Card raised>
            <CardMedia component='img' image={imgPath} alt={ITEM_ID} />
          </Card>
          <Box
            display='flex'
            justifyContent='space-between'
            mt={1}
            alignContent='center'
          >
           

            <Typography component='h5' variant='h6' textAlign='center'>
              ${PRICE}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
          <Typography component='h3' textAlign='center' gutterBottom>
            {CATEGORY_L2}
          </Typography>
          <Divider />

          <p>{PRODUCT_DESCRIPTION}</p>
          <Divider sx={{ mb: 2 }} />

          <Box display='flex' justifyContent={'center'} my>
            {isInCart(ITEM_ID) ? (
              <Button
                variant='contained'
                color='error'
                startIcon={<AssignmentTurnedInIcon />}
                component={Link}
                to='/cart'
              >
                Checkout
              </Button>
            ) :   (
              <ItemCount  onAdd={handleAddItemToCart} />
            ) }
          </Box>
        </Grid>
      </Grid>
     
    </>
  );
};

export default ItemDetail;