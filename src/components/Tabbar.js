import React, { useState } from 'react'; 
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';



const Tabbar = () => {
    const [selectedTab, setSelectedTab] = useState("homepage");
    const tabsList = ["homepage", "accessories", "apparel", "beauty", "books", "electronics", "floral", "footwear", "furniture", "groceries", "homedecor", "housewares", "instruments", "jewelry", "outdoors", "seasonal", "tools", "food service", "cold dispensed", "salty snacks", "hot dispensed"];
    const api = "http://localhost:3002/api";

    const handleTabChange = async (event, newValue) => {
        console.log(newValue, tabsList[newValue]);
        let category = tabsList[newValue];
        setSelectedTab(newValue)
      };

    return (
        <AppBar position="static" color="inherit">
            <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            aria-label="Tabs where selection follows focus"
            selectionFollowsFocus
            variant="scrollable"
            scrollButtons
        >
            {tabsList.map((item) => (<Tab label={item} />)
            )}

        </Tabs>
      </AppBar>
    );

};

export default Tabbar;