import './App.css';
import Products from './components/products/Products';

//import { saveState } from './redux/localStorage';

import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import ItemDetail from './components/item/ItemDetail';
import { CartProvider } from './context/CartContext';
import UserSelector from './components/login/UserSelector';
//import store from './redux/store';

const lightTheme = createTheme({ palette: { mode: 'light' } });


function App() {

  const dummyItem = [{"_id":"63313f6f96be254956a2d391","ITEM_ID":"7977f680-2cf7-457d-8f4d-afa0aa168cb9","PRICE":125.99,"CATEGORY_L1":"accessories","CATEGORY_L2":"backpack","PRODUCT_DESCRIPTION":"This gray backpack for women is first-rate for the season","GENDER":"F"},{"_id":"63313f6f96be254956a2d392","ITEM_ID":"296d144e-7f86-464b-9c5a-f545257f1700","PRICE":144.99,"CATEGORY_L1":"accessories","CATEGORY_L2":"backpack","PRODUCT_DESCRIPTION":"This black backpack for women is first-class for the season","GENDER":"F"},{"_id":"63313f6f96be254956a2d393","ITEM_ID":"1d3ae532-f790-44ca-a8e8-f55aa9b66526","PRICE":75.99,"CATEGORY_L1":"accessories","CATEGORY_L2":"backpack","PRODUCT_DESCRIPTION":"This purple backpack for women is flawless for the season","GENDER":"F"},{"_id":"63313f6f96be254956a2d394","ITEM_ID":"f6cd5dd2-d3ea-4858-844a-04879153e459","PRICE":95.99,"CATEGORY_L1":"accessories","CATEGORY_L2":"backpack","PRODUCT_DESCRIPTION":"This black backpack for women is first-class for the season","GENDER":"F"},{"_id":"63313f6f96be254956a2d395","ITEM_ID":"1a3fa9d4-e320-4873-be58-f3f6af5f99f4","PRICE":135.99,"CATEGORY_L1":"accessories","CATEGORY_L2":"backpack","PRODUCT_DESCRIPTION":"Rust leather backpack for women","GENDER":"F"},{"_id":"63313f6f96be254956a2d396","ITEM_ID":"3491deff-c0fe-4065-abbc-72b507da84b2","PRICE":80.99,"CATEGORY_L1":"accessories","CATEGORY_L2":"backpack","PRODUCT_DESCRIPTION":"Unicorn backpack for women","GENDER":"F"},{"_id":"63313f6f96be254956a2d397","ITEM_ID":"da1f2a8f-5372-4102-b357-9e40900ebb08","PRICE":148.99,"CATEGORY_L1":"accessories","CATEGORY_L2":"backpack","PRODUCT_DESCRIPTION":"This red backpack for women is first-class for the season","GENDER":"F"},{"_id":"63313f6f96be254956a2d398","ITEM_ID":"0c47dade-1ec0-483a-9ab4-1b87604bdaf8","PRICE":106.99,"CATEGORY_L1":"accessories","CATEGORY_L2":"backpack","PRODUCT_DESCRIPTION":"Pink backpack for women","GENDER":"F"},{"_id":"63313f6f96be254956a2d399","ITEM_ID":"41ab23ce-b417-46b2-a52a-bf7030f93161","PRICE":120.99,"CATEGORY_L1":"accessories","CATEGORY_L2":"backpack","PRODUCT_DESCRIPTION":"Gainsboro backpack for women","GENDER":"F"},
  {"_id":"63313f6f96be254956a2d391","ITEM_ID":"7977f680-2cf7-457d-8f4d-afa0aa168cb9","PRICE":125.99,"CATEGORY_L1":"accessories","CATEGORY_L2":"backpack","PRODUCT_DESCRIPTION":"This gray backpack for women is first-rate for the season","GENDER":"F"},{"_id":"63313f6f96be254956a2d392","ITEM_ID":"296d144e-7f86-464b-9c5a-f545257f1700","PRICE":144.99,"CATEGORY_L1":"accessories","CATEGORY_L2":"backpack","PRODUCT_DESCRIPTION":"This black backpack for women is first-class for the season","GENDER":"F"},{"_id":"63313f6f96be254956a2d393","ITEM_ID":"1d3ae532-f790-44ca-a8e8-f55aa9b66526","PRICE":75.99,"CATEGORY_L1":"accessories","CATEGORY_L2":"backpack","PRODUCT_DESCRIPTION":"This purple backpack for women is flawless for the season","GENDER":"F"},{"_id":"63313f6f96be254956a2d394","ITEM_ID":"f6cd5dd2-d3ea-4858-844a-04879153e459","PRICE":95.99,"CATEGORY_L1":"accessories","CATEGORY_L2":"backpack","PRODUCT_DESCRIPTION":"This black backpack for women is first-class for the season","GENDER":"F"}];

  const item = {"_id":"63313f6f96be254956a2d391","ITEM_ID":"7977f680-2cf7-457d-8f4d-afa0aa168cb9","PRICE":125.99,"CATEGORY_L1":"accessories","CATEGORY_L2":"backpack","PRODUCT_DESCRIPTION":"This gray backpack for women is first-rate for the season","GENDER":"F"};
  return (
    <div className="App">
      <CartProvider>
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route path="/" element={<UserSelector />} />
          <Route path='/items' element={<Products items={dummyItem}/>} />

          <Route path="/itemDetail" element={<ItemDetail {...item} />} />

        </Routes>
      </ThemeProvider>
      </CartProvider>
    </div>
  );

}

export default App;
