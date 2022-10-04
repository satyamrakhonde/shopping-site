import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Item = ({ _id, ITEM_ID, PRICE,CATEGORY_L1,CATEGORY_L2, PRODUCT_DESCRIPTION, GENDER}) => {
  const imgPath = `https://d22kv7nk938ern.cloudfront.net/images/${CATEGORY_L1}/${ITEM_ID}.jpg`;
  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/item/${_id}`);

  return (
    <Card className='animate__animated animate__fadeIn' raised>
      <CardActionArea>
        <CardMedia
          component='img'
          height='240'
          image={imgPath}
          alt={_id}
          onClick={handleNavigation}
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary' noWrap>
            {PRODUCT_DESCRIPTION}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button size='small' color='error' onClick={handleNavigation}>
          PRICE
        </Button>
        <Typography variant='subtitle2' color='text.secondary' align='right'>
          {`$${PRICE}`}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Item;