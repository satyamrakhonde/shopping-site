import Grid from '@mui/material/Grid';
import NavBar from '../NavBar/NavBar';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Tabbar from '../Tabbar';
import Item from '../item/Item';

const Products = ({ items }) => (
  <>
    
    <NavBar />
    <Tabbar />
    <Grid container spacing={4} py={3} padding={5}>
      {items?.map((item) => (
        <Grid item xs={12} sm={6} lg={3} key={item.id}>
          <Item {...item} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default Products;