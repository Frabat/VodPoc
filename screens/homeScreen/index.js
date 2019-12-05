import React, {Component} from "react";
import HomeScreen from "./HomeScreen.js";
import SideBar from "../sideBar/SideBar";
import {DrawerNavigator} from  "react-navigation";
import Kids from "../kids/KidsScreen";
import Movies from "../movies/MoviesScreen";
import Series from "../series/SeriesScreen"

const HomeScreenRouter = DrawerNavigator(
    {
        Featured : {screen : HomeScreen},
        Kids : {screen : Kids},
        Movies : {screen : Movies},
        Series : {screen : Series}
    },
    {
        contentComponent : () => <SideBar {...props} />
    }
);
export default HomeScreenRouter ;