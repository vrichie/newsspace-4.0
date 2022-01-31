import style from '../styles/Cards.module.css'
import Config from '../config/config.json'
import Link from 'next/link'
import { useEffect,useState } from 'react'

import Image from 'next/image'

// const api_url=Config.IP_ADDRESS+"include/category/cards/";
export default function Cards() {
    const [post,setPost]=useState([]);

    const [Entertainment,setEntertainment]=useState([]);
    const [world,setWorld]=useState([]);
    const [gossip,setGossip]=useState([]);
    const [news,setNews]=useState([]);

    const get_cards=()=>{
        // fetch(api_url).then(res=>res.json()).then(data=>{
        //     // console.log(data);
        //     setPost(data);
        // }).catch((e)=>console.log(e));


        fetch(Config.IP_ADDRESS+"category/world/1").then(res=>res.json()).then(data=>{
            // console.log(data);
            setWorld(data[0]);
        }).catch((e)=>console.log(e));
             
        
        fetch(Config.IP_ADDRESS+"category/gossip/1").then(res=>res.json()).then(data=>{
            // console.log(data);
            setGossip(data[0]);
        }).catch((e)=>console.log(e)); 
        
        fetch(Config.IP_ADDRESS+"category/entertainment/1").then(res=>res.json()).then(data=>{
            // console.log(data);
            setEntertainment(data[0]);
        }).catch((e)=>console.log(e));  
        
        fetch(Config.IP_ADDRESS+"category/news/1").then(res=>res.json()).then(data=>{
            console.log(data);
            setNews(data[0]);
        }).catch((e)=>console.log(e));
    }

    useEffect( () => {
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



            {/* {
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
                            {/* <img src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+card.pic} alt={card.pic} />
                            <h2>
                                {card.title}
                            </h2>
                            <span>
                                <p>by:{card.username}</p> <p>{card.date}</p>
                            </span>

                        </div>

                    
                    
                    </Link>
                ))
            } */} 


<Link href={`./article/${news.slug}`}  passHref>

<div id={style.card_item}>

    <Link href={`./${news.tag}`} passHref>
        <button
        onLoadStart={(e)=>{handleMouseLeave(e,card)}} 
        onMouseEnter={(e)=>{handleMouseEnter(e,card)}} 
        onMouseLeave={(e)=>{handleMouseLeave(e,card)}}>
        {news.category}
    </button>
    </Link>
    
    {/* <Image
    src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+card.pic} 
    /> */}
    <img src={Config.POSTIMAGE_BASEURL+news.pic} alt={news.pic} />
    <h2>
        {news.title}
    </h2>
    <span>
        <p>by:{news.username}</p> <p>{news.date}</p>
    </span>

</div>



</Link>


<Link href={`./article/${world.slug}`}  passHref>

<div id={style.card_item}>

    <Link href={`./${world.tag}`} passHref>
        <button
        onLoadStart={(e)=>{handleMouseLeave(e,card)}} 
        onMouseEnter={(e)=>{handleMouseEnter(e,card)}} 
        onMouseLeave={(e)=>{handleMouseLeave(e,card)}}>
        {world.category}
    </button>
    </Link>
    
    {/* <Image
    src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+card.pic} 
    /> */}
    <img src={Config.POSTIMAGE_BASEURL+world.pic} alt={world.pic} />
    <h2>
        {world.title}
    </h2>
    <span>
        <p>by:{world.username}</p> <p>{world.date}</p>
    </span>

</div>



</Link>





<Link href={`./article/${gossip.slug}`}  passHref>

<div id={style.card_item}>

    <Link href={`./${gossip.tag}`} passHref>
        <button
        onLoadStart={(e)=>{handleMouseLeave(e,card)}} 
        onMouseEnter={(e)=>{handleMouseEnter(e,card)}} 
        onMouseLeave={(e)=>{handleMouseLeave(e,card)}}>
        {gossip.category}
    </button>
    </Link>
    
    {/* <Image
    src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+card.pic} 
    /> */}
    <img src={Config.POSTIMAGE_BASEURL+gossip.pic} alt={gossip.pic} />
    <h2>
        {gossip.title}
    </h2>
    <span>
        <p>by:{gossip.username}</p> <p>{gossip.date}</p>
    </span>

</div>



</Link>



<Link href={`./article/${Entertainment.slug}`}  passHref>

<div id={style.card_item}>

    <Link href={`./${Entertainment.tag}`} passHref>
        <button
        onLoadStart={(e)=>{handleMouseLeave(e,card)}} 
        onMouseEnter={(e)=>{handleMouseEnter(e,card)}} 
        onMouseLeave={(e)=>{handleMouseLeave(e,card)}}>
        {Entertainment.category}
    </button>
    </Link>
    
    {/* <Image
    src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+card.pic} 
    /> */}
    <img src={Config.POSTIMAGE_BASEURL+Entertainment.pic} alt={Entertainment.pic} />
    <h2>
        {Entertainment.title}
    </h2>
    <span>
        <p>by:{Entertainment.username}</p> <p>{Entertainment.date}</p>
    </span>

</div>



</Link>








        </div>
    </div>
        
    )
}
