import style from '../styles/Post_wrapper.module.css'
import Link from 'next/link';
import Config from '../config/config.json';
import Mobile from '../styles/Mobile_home.module.css'


import Image from 'next/image'
import { useEffect, useState } from 'react';




export default function Post_wrapper() {
    const [post, setPost] = useState([]);

    const get_data=()=>{
        let url=window.location.href.split("/");
        let len=url.length;
        let base=url[len-1];

const api_url=Config.IP_ADDRESS+"category/"+(base.toLocaleLowerCase())+"/6";


        fetch(api_url).then(res=>res.json()).then(data=>{
    
            setPost(data);
        }).catch(e=>console.log(e));





    }


    useEffect(()=>{
        get_data();
    },[]);

 
    let j, end=3;

    const first=post.slice(0,end);
    const second=post.slice(end,end+post.length);
  
 




    return (
        <div id={style.Post_wrapper} className="bg-light">


            <div id={style.suggestions}>
                <ul>

                {   
                        
                        second.length==0 ?(
                        <Image id={style.loader} src={"/loading.gif"} alt="loading" width={100} height={100} />
                    
                        ):
                        second.map((posts,key)=>(

                            <Link href={`./article/${posts.slug}`} key={key}>       
                                <li>
                                    <img src={Config.POSTIMAGE_BASEURL+posts.pic} alt={posts.pic} height="80%" width="40%" />
                                    <span>
                                        <p>
                                            {posts.title}
                                        </p>

                                        <div id={style.extra_info_sug}>
                                            <h6>by:{post.username}</h6>
                                            <h6>{posts.date}</h6>
                                        </div>
                                    </span>
                                   
                                </li>
                                        
                            
                            </Link>
                        ))
                    }


                </ul>
                

            </div>



            <div id={style.posts}>


            {   
                        
                        first.length==0 ?(
                        <Image id={style.loader} src={"/loading.gif"} alt="loading" width={100} height={100} />
                    
                        ):
                    first.map((posts,key)=>(

                        <Link href={`./article/${posts.slug}`} key={key}>

                                    
                            <div id={style.Post_wrapper_card}>
                                <img src={Config.POSTIMAGE_BASEURL+posts.pic} alt={posts.pic} />

                                <div id={style.Post_wrapper_card_details}>
                                
                                <h4>
                                   {posts.title}  
                                </h4>
                                
                                <p>
                                    {posts.summary}
                                </p>
                                
                                </div>             
                                <div id={style.Post_wrapper_card_extra}>
                                      <h6>By:{post.username}</h6> 
                                      <h6>{posts.date}</h6>
                                       
                                </div>               

                                
                                

                            </div>
                                            
                           
                            
                            
                        </Link>


                    ))
                }

 











            </div>

            
            <div id={Mobile.mobile}>

                <h1>
                    check out some of our top articles
                </h1>
                    <ul>

                    {   
                        

                            post.map((post,key)=>( 
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
