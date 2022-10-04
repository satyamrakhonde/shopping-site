import { useContext } from 'react';
import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const CartWidget = () => {
  //const { amountOfItemsInCart } = useContext(CartContext);

  return  (
    <Tooltip title='Cart'>
      <IconButton
        sx={{ mx: 1 }}
        aria-label='carrito'
        size='large'
        color='inherit'
        component={Link}
        to='/cart'
      >
        <Badge badgeContent="0" color='error'>
          <ShoppingCartIcon sx={{ fontSize: 30 }} />
        </Badge>
      </IconButton>
    </Tooltip>
  ) ;
};

export default CartWidget;


