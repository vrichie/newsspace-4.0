import { useEffect, useState } from "react";
import style from "../styles/Sublanding.module.css";
import Image from "next/image";

import { Button } from "semantic-ui-react";
import axios from "axios";
import Main_card from "./subcomponents/sublanding/Main_card(sublanding)";
import Second_wrapper from "./subcomponents/sublanding/Second_wrapper";
import Trending from "./subcomponents/sublanding/Trending";






export default function Sublanding() {
   
  

  return (
    <div id={style.main_wrapper} className="bg-light">
      <div id={style.main}>

        <Main_card />
        
      
      
      </div>

      <div id={style.second}>
        <Second_wrapper />
        
      </div>
      <div id={style.third}>

        <Trending />



      </div>
    </div>
  );
}
