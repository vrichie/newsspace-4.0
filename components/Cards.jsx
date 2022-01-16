import style from '../styles/Cards.module.css'
import Config from '../config/config.json'
import Link from 'next/link'
import { useEffect,useState } from 'react'

import Image from 'next/image'

const api_url=Config.IP_ADDRESS+"src/include/category/cards/";
export default function Cards() {
    const [post,setPost]=useState([]);

    const get_cards=()=>{
        fetch(api_url).then(res=>res.json()).then(data=>{
            // console.log(data);
            setPost(data);
        }).catch((e)=>console.log(e));
    }

    useEffect(() => {
        get_cards();
    }, []);



    

    const handleMouseEnter=(e,card)=>{
        e.target.style.background=card.background;
        e.target.style.color="white"; 
    }    
    const handleMouseLeave=(e,card)=>{
        e.target.style.borderColor=card.background;
        e.target.style.color=card.background;
        e.target.style.background="white";
        

    }



    return (
    <div id={style.card_wrapper} >

        <h1 id={style.slogan}>Everything news and in between...</h1>

        <div className="ui special cards" id={style.real_card_wrapper}>



            {
                post.map((card,key)=>(
                    <Link href={`./article/${card.slug}`} key={key} passHref>

                        <div id={style.card_item}>

                            <Link href={`./${card.tag}`} passHref>
                                <button
                                onLoadStart={(e)=>{handleMouseLeave(e,card)}} 
                                onMouseEnter={(e)=>{handleMouseEnter(e,card)}} 
                                onMouseLeave={(e)=>{handleMouseLeave(e,card)}}>
                                {card.category}
                            </button>
                            </Link>
                            
                            {/* <Image
                            src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+card.pic} 
                            /> */}
                            <img src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+card.pic} alt={card.pic} />
                            <h2>
                                {card.title}
                            </h2>
                            <span>
                                <p>by:{card.username}</p> <p>{card.date}</p>
                            </span>

                        </div>

                    
                    
                    </Link>
                ))
            }










        </div>
    </div>
        
    )
}
