import React from 'react';
import { useEffect, useState } from "react";


const Background = (props) => {
    if(props.weather === 'Clear' && props.hour <= 1){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clear' && props.hour === 2){
        props.setImage("./2c.png")
    }else if(props.weather === 'Clear' && props.hour === 3){
        props.setImage("./3c.png")
    }else if(props.weather === 'Clear' && props.hour === 4){
        props.setImage("./4c.png")
    }else if(props.weather === 'Clear' && props.hour === 5){
        props.setImage("./5c.png")
    }else if(props.weather === 'Clear' && props.hour === 6){
        props.setImage("./6c.png")
    }else if(props.weather === 'Clear' && props.hour === 7){
        props.setImage("./7c.png")
    }else if(props.weather === 'Clear' && props.hour === 8){
        props.setImage("./8c.png")
    }else if(props.weather === 'Clear' && props.hour === 9){
        props.setImage("./9c.png")
    }else if(props.weather === 'Clear' && props.hour === 10){
        props.setImage("./10c.png")
    }else if(props.weather === 'Clear' && props.hour === 11){
        props.setImage("./11c.png")
    }else if(props.weather === 'Clear' && props.hour === 12){
        props.setImage("./12c.png")
    }else if(props.weather === 'Clear' && props.hour === 13){
        props.setImage("./13c.png")
    }else if(props.weather === 'Clear' && props.hour === 14){
        props.setImage("./14c.png")
    }else if(props.weather === 'Clear' && props.hour === 15){
        props.setImage("./15c.png")
    }else if(props.weather === 'Clear' && props.hour === 16){
        props.setImage("./16c.png")
    }else if(props.weather === 'Clear' && props.hour === 17){
        props.setImage("./17c.png")
    }else if(props.weather === 'Clear' && props.hour === 18){
        props.setImage("./18c.png")
    }else if(props.weather === 'Clear' && props.hour === 19){
        props.setImage("./19c.png")
    }else if(props.weather === 'Clear' && props.hour === 20){
        props.setImage("./20c.png")
    }else if(props.weather === 'Clear' && props.hour === 21){
        props.setImage("./21c.png")
    }else if(props.weather === 'Clear' && props.hour === 22){
        props.setImage("./22c.png")
    }else if(props.weather === 'Clear' && props.hour === 23){
        props.setImage("./23c.png")
    }else if(props.weather === 'Clear' && props.hour === 24){
        props.setImage("./24c.png")
    }
    /*Clouds */
    else if(props.weather === 'Clouds' && props.hour <= 1){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 2){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 3){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 4){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 5){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 6){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 7){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 8){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 9){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 10){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 11){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 12){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 13){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 14){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 15){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 16){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 17){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 18){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 19){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 20){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 21){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 22){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 23){
        props.setImage("./1c.png")
    }else if(props.weather === 'Clouds' && props.hour === 24){
        props.setImage("./1c.png")
    }
    /* Rain */
    else if(props.weather === 'Rain' && props.hour <= 1){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 2){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 3){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 4){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 5){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 6){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 7){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 8){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 9){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 10){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 11){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 12){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 13){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 14){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 15){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 16){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 17){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 18){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 19){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 20){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 21){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 22){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 23){
        props.setImage("./1c.png")
    }else if(props.weather === 'Rain' && props.hour === 24){
        props.setImage("./1c.png")
    }
    /*ThunderStorm */
    else if(props.weather === 'Thunderstorm' && props.hour <= 1){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 2){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 3){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 4){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 5){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 6){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 7){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 8){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 9){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 10){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 11){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 12){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 13){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 14){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 15){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 16){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 17){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 18){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 19){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 20){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 21){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 22){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 23){
        props.setImage("./1c.png")
    }else if(props.weather === 'Thunderstorm' && props.hour === 24){
        props.setImage("./1c.png")
    }

    /*Snow */
    else if(props.weather === 'Drizzle' && props.hour <= 1){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 2){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 3){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 4){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 5){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 6){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 7){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 8){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 9){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 10){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 11){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 12){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 13){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 14){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 15){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 16){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 17){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 18){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 19){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 20){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 21){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 22){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 23){
        props.setImage("./1c.png")
    }else if(props.weather === 'Drizzle' && props.hour === 24){
        props.setImage("./1c.png")
    }
    /*Drizzle */
    else if(props.weather === 'Snow' && props.hour <= 1){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 2){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 3){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 4){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 5){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 6){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 7){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 8){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 9){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 10){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 11){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 12){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 13){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 14){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 15){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 16){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 17){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 18){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 19){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 20){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 21){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 22){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 23){
        props.setImage("./1c.png")
    }else if(props.weather === 'Snow' && props.hour === 24){
        props.setImage("./1c.png")
    }
    /* Windy */
    else if(props.hour <= 1){
        props.setImage("./1c.png")
    }else if(props.hour === 2){
        props.setImage("./1c.png")
    }else if(props.hour === 3){
        props.setImage("./1c.png")
    }else if(props.hour === 4){
        props.setImage("./1c.png")
    }else if(props.hour === 5){
        props.setImage("./1c.png")
    }else if(props.hour === 6){
        props.setImage("./1c.png")
    }else if(props.hour === 7){
        props.setImage("./1c.png")
    }else if(props.hour === 8){
        props.setImage("./1c.png")
    }else if(props.hour === 9){
        props.setImage("./1c.png")
    }else if(props.hour === 10){
        props.setImage("./1c.png")
    }else if(props.hour === 11){
        props.setImage("./1c.png")
    }else if(props.hour === 12){
        props.setImage("./1c.png")
    }else if(props.hour === 13){
        props.setImage("./1c.png")
    }else if(props.hour === 14){
        props.setImage("./1c.png")
    }else if(props.hour === 15){
        props.setImage("./1c.png")
    }else if(props.hour === 16){
        props.setImage("./1c.png")
    }else if(props.hour === 17){
        props.setImage("./1c.png")
    }else if(props.hour === 18){
        props.setImage("./1c.png")
    }else if(props.hour === 19){
        props.setImage("./1c.png")
    }else if(props.hour === 20){
        props.setImage("./1c.png")
    }else if(props.hour === 21){
        props.setImage("./1c.png")
    }else if(props.hour === 22){
        props.setImage("./1c.png")
    }else if(props.hour === 23){
        props.setImage("./1c.png")
    }else if(props.hour === 24){
        props.setImage("./1c.png")
    }
    useEffect(() => {
        Background();
      }, [props.search]);
}

export default Background;