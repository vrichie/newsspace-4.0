
import Config from '../config/config.json'
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react'
import style from '../styles/Gossip_home.module.css'
import Mobile from '../styles/Mobile_home.module.css'
const api_url=Config.IP_ADDRESS+"category/gossip/7";
const api_mobile_url=Config.IP_ADDRESS+"category/gossip/6";
const type="Gossip";

export default function Gossip_home() {
    const [post, setPost] = useState([]);
    const [mpost, setMpost] = useState([]);
    
      const base_url=api_url;

      const base_mobile_url=api_mobile_url;
    const get_data=async()=>{
  
        await fetch(base_url).then(res=>res.json()).then(data=>{
            
            setPost(data);

        }).catch((e)=>console.log(e));
        await fetch(base_mobile_url).then(res=>res.json()).then(data=>{
            // console.log(data);
            setMpost(data);

        }).catch((e)=>console.log(e));
    }
    

useEffect(async() => {
    get_data();
}, []);

 
    let end=3;

    const first=post.slice(0,end);
    const second=post.slice(end,end+post.length);




    let end_2=1;

    const main_post=first.slice(0,end_2);
    const twin_post=first.slice(end_2,end_2+first.length);











    return (
        <div className={style.world_wrapper} >
                <div className={style.main_card_label}>
                     {type}
                </div>

            <div className={style.trending}>

                <h2>
                    Check out whats poppin
                </h2>


                {
                    second.map((post,index)=>(

                        <Link href={`./article/${post.slug}`} key={index}> 
                        
                        
                            <span className={style.trend_list}>
                                <h1>
                                    {post.title}
                                </h1>
                             </span>
                        
                        
                        </Link>

                        



                    ))
                }





            </div>

            <div className={style.main_item}>

                {
                    main_post.map((post,index)=>(

                        <Link href={`./articles/${post.slug}`} key={index}>

                                                                
                            <div className={style.main_item_card}>


                                <img src={Config.POSTIMAGE_BASEURL+post.pic} alt={post.pic} />

                                <div className={style.main_card_details}>
                                
                                    <h1>
                                        {post.title}
                                    </h1>

                                    <h6>
                                        {post.summary}  
                                    </h6>

                                    <div className={style.extra_info}>     
                                    <p>
                                        By : {post.username}
                                    </p>

                                    <p>
                                        {post.date}
                                    </p>

                                     
                                
                                    </div>

                                </div>

                            </div>
                            
                            
                            
                        </Link>

                    ))
                }


        

{
                    twin_post.map((post,index)=>(
                        


                        <Link href={`./article/${post.slug}`} key={index}>
                            <div className={style.main_item_cardleft}>

                                <img src={Config.POSTIMAGE_BASEURL+post.pic} alt={post.pic} />

                                <div className={style.main_card_detail}>
                                
                                    <h1>
                                       {post.title}
                                    </h1>

                                
                                </div>

                                <span id={style.bottom_most_span}>
                                        <p>
                                            by:{post.username}
                                        </p>
                                        <p>
                                            {post.date}
                                        </p>
                                    </span>
                             </div>
                        </Link>

                    ))
                }





               




            </div>


            <div id={Mobile.mobile}>
                    <ul>


                        {
                            mpost.map((post,key)=>(
                                <Link href={`./article/${post.slug}`} key={key}>
                                
                                
                                    <li>
                                        <img src={Config.POSTIMAGE_BASEURL+post.pic} alt="" />
                                        <span>
                                            <h3>
                                                {post.title} 
                                                </h3> 
                                                <h6>
                                                {post.summary}   
                                                </h6>  
                                                <p>
                                                    <i>by :{post.username}</i>
                                                    <b>{post.date}</b>
                                                </p>
                                                        
                                        </span>
    
                                    </li>
                                
                                
                                
                                </Link>


                            ))
                        }

                    </ul>
                   
                </div>
            
        </div>
    )
}
