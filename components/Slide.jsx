import style from '../styles/Slide.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link';
    import axios from "axios";
    import Slider from'react-slick'
    import Config from '../config/config.json'
import { useState } from 'react';
import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
export default function Slide() {
    const [post,setPost]=useState([]);

    const [mobilePost,setMobilePost]=useState([]);

    const get_data=()=>{
        
const url=Config.IP_ADDRESS+"src/include/category/cards/";
const api_url=Config.IP_ADDRESS+"src/include/category/landin/";
        fetch(url).then(res=>res.json()).then(data=>{
 
            setMobilePost(data);
        }).catch(e=>console.log(e))

        fetch(api_url).then(res=>res.json()).then(data=>{
  
            setPost(data);
        }).catch(e=>console.log(e))
    }

    useEffect(()=>{
        get_data();
    },[]);

 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
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

        <section id={style.main_slide_wrapper} className='bg-light'>
     <div  id={style.slide}>
          
          <Link href={`./article/${post.slug}`}>
          
              <div id={style.slide_item}>
                  <img id={style.real_image} src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+post.pic} alt="" />
                  <img id={style.background_image} src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+post.pic} alt="" />
                  <div className={style.detail_slide}>
                      <h2>{post.title}</h2>
                      <h5>{post.summary}</h5>
                      <span>
                           <p>by:{post.username}</p> <p>{post.date}</p> 
                      </span>
                  </div>
                  <Link href={`${post.tag}`}>
                  <button
                    onLoadStart={(e)=>{handleMouseLeave(e,post)}} 
                    onMouseEnter={(e)=>{handleMouseEnter(e,post)}} 
                    onMouseLeave={(e)=>{handleMouseLeave(e,post)}}>
                      {post.category} 
                  </button>
                  </Link>
                
              </div>
          
          
          </Link>

      </div>



      <div id={style.side_carousel}>



            <div id={style.covid}>
                <img src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+post.pic} id={style.covid_image} alt="" />
                <div id={style.covid_details}>
                <Link href={`${post.tag}`}>
                  <button
                    onLoadStart={(e)=>{handleMouseLeave(e,post)}} 
                    onMouseEnter={(e)=>{handleMouseEnter(e,post)}} 
                    onMouseLeave={(e)=>{handleMouseLeave(e,post)}}>
                      {post.category} 
                  </button>
                  </Link>
                    <h3>
                        {post.title}
                    </h3>

                    <h6>
                        {post.date}
                    </h6>

                </div>
            </div>



            <div id={style.covid}>
                <img src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+post.pic} id={style.covid_image} alt="" />
                <div id={style.covid_details}>
                <Link href={`${post.tag}`}>
                  <button
                    onLoadStart={(e)=>{handleMouseLeave(e,post)}} 
                    onMouseEnter={(e)=>{handleMouseEnter(e,post)}} 
                    onMouseLeave={(e)=>{handleMouseLeave(e,post)}}>
                      {post.category} 
                  </button>
                  </Link>
                    <h3>
                        {post.title}
                    </h3>

                    <h6>
                        {post.date}
                    </h6>

                </div>
            </div>


      </div>


        <div id={style.mobile_wrapper}>


            {
                mobilePost.map((posts,index)=>(
                    <Link href={`./article/${posts.slug}`} key={index}>
                    
                    
                    
                                <div id={style.mobile_slide}>

                                    <Link href={`./${posts.tag}`}>
                                    
                                    
                                    <button>{posts.tag}</button>
                                    </Link>

                                    <img id={style.fore} src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+posts.pic} alt="" />
                                    <img id={style.back} src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+posts.pic} alt="" />

                                    <div id={style.details}>
                                        <h5 onLoad={(e)=>{e.style.color="red"}}>
                                            {posts.title}
                                        </h5>
                                        <p>
                                            {posts.summary}
                                        </p>
                                        <span>
                                            <i>By:{post.username}</i>
                                            <b>
                                                {posts.date}
                                            </b>
                                        </span>

                                      </div>



                                 </div>

                    
                    
                    
                    </Link>
                ))
            }






  

        </div>

     



        </section>
    

    )
}
