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
    const [mobilePost_w,setMobilePost_w]=useState([]);
    const [mobilePost_e,setMobilePost_e]=useState([]);
    const [mobilePost_g,setMobilePost_g]=useState([]);
    const [mobilePost_n,setMobilePost_n]=useState([]);

    const get_data=()=>{
        
const Wurl=Config.IP_ADDRESS+"category/world/1";
const Nurl=Config.IP_ADDRESS+"category/news/1";
const Gurl=Config.IP_ADDRESS+"category/gossip/1";
const Eurl=Config.IP_ADDRESS+"category/entertainment/1";
const api_url=Config.IP_ADDRESS+"category/world/1";
console.log(api_url);

        //world
        fetch(Wurl).then(res=>res.json()).then(data=>{
 
            setMobilePost_w(data[0]);
        }).catch(e=>console.log(e))

        //news
        fetch(Nurl).then(res=>res.json()).then(data=>{
 
            setMobilePost_n(data[0]);
        }).catch(e=>console.log(e))

        //gossip
        fetch(Gurl).then(res=>res.json()).then(data=>{
 
            setMobilePost_g(data[0]);
        }).catch(e=>console.log(e))

        //entertainment
        fetch(Eurl).then(res=>res.json()).then(data=>{
 
            setMobilePost_e(data[0]);
        }).catch(e=>console.log(e))

        fetch(api_url).then(res=>res.json()).then(data=>{
            console.log(data[0])
            setPost(data[0]);
        }).catch(e=>console.log(e))
    }

    useEffect(async()=>{
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
                  <img id={style.real_image} src={Config.POSTIMAGE_BASEURL+post.pic} alt="" />
                  <img id={style.background_image} src={Config.POSTIMAGE_BASEURL+post.pic} alt="" />
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
                <img src={Config.POSTIMAGE_BASEURL+post.pic} id={style.covid_image} alt="" />
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
                <img src={Config.POSTIMAGE_BASEURL+post.pic} id={style.covid_image} alt="" />
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
                    <Link href={`./article/${mobilePost_e.slug}`} >
                    
                    
                    
                                <div id={style.mobile_slide}>

                                    <Link href={`./${mobilePost_e.tag}`}>
                                    
                                    
                                    <button>{mobilePost_e.tag}</button>
                                    </Link>

                                    <img id={style.fore} src={Config.POSTIMAGE_BASEURL+mobilePost_e.pic} alt={mobilePost_e.pic} />
                                    <img id={style.back} src={Config.POSTIMAGE_BASEURL+mobilePost_e.pic} alt={mobilePost_e.pic} />

                                    <div id={style.details}>
                                        <h5 onLoad={(e)=>{e.style.color="red"}}>
                                            {mobilePost_e.title}
                                        </h5>
                                        <p>
                                            {mobilePost_e.summary}
                                        </p>
                                        <span>
                                            <i>By:{mobilePost_e.username}</i>
                                            <b>
                                                {mobilePost_e.date}
                                            </b>
                                        </span>

                                      </div>



                                 </div>

                    
                    
                    
                    </Link>
                
            }


            {
                    <Link href={`./article/${mobilePost_g.slug}`} >
                    
                    
                    
                                <div id={style.mobile_slide}>

                                    <Link href={`./${mobilePost_e.tag}`}>
                                    
                                    
                                    <button>{mobilePost_g.tag}</button>
                                    </Link>

                                    <img id={style.fore} src={Config.POSTIMAGE_BASEURL+mobilePost_g.pic} alt={mobilePost_g.pic} />
                                    <img id={style.back} src={Config.POSTIMAGE_BASEURL+mobilePost_g.pic} alt={mobilePost_g.pic} />

                                    <div id={style.details}>
                                        <h5 onLoad={(e)=>{e.style.color="red"}}>
                                            {mobilePost_g.title}
                                        </h5>
                                        <p>
                                            {mobilePost_g.summary}
                                        </p>
                                        <span>
                                            <i>By:{mobilePost_g.username}</i>
                                            <b>
                                                {mobilePost_g.date}
                                            </b>
                                        </span>

                                      </div>



                                 </div>

                    
                    
                    
                    </Link>
                
            }

            {
                    <Link href={`./article/${mobilePost_w.slug}`} >
                    
                    
                    
                                <div id={style.mobile_slide}>

                                    <Link href={`./${mobilePost_w.tag}`}>
                                    
                                    
                                    <button>{mobilePost_w.tag}</button>
                                    </Link>

                                    <img id={style.fore} src={Config.POSTIMAGE_BASEURL+mobilePost_w.pic} alt={mobilePost_w.pic} />
                                    <img id={style.back} src={Config.POSTIMAGE_BASEURL+mobilePost_w.pic} alt={mobilePost_w.pic} />

                                    <div id={style.details}>
                                        <h5 onLoad={(e)=>{e.style.color="red"}}>
                                            {mobilePost_w.title}
                                        </h5>
                                        <p>
                                            {mobilePost_w.summary}
                                        </p>
                                        <span>
                                            <i>By:{mobilePost_w.username}</i>
                                            <b>
                                                {mobilePost_w.date}
                                            </b>
                                        </span>

                                      </div>



                                 </div>

                    
                    
                    
                    </Link>
                
            }


{
                    <Link href={`./article/${mobilePost_n.slug}`} >
                    
                    
                    
                                <div id={style.mobile_slide}>

                                    <Link href={`./${mobilePost_n.tag}`}>
                                    
                                    
                                    <button>{mobilePost_n.tag}</button>
                                    </Link>

                                    <img id={style.fore} src={Config.POSTIMAGE_BASEURL+mobilePost_n.pic} alt={mobilePost_n.pic} />
                                    <img id={style.back} src={Config.POSTIMAGE_BASEURL+mobilePost_n.pic} alt={mobilePost_n.pic} />

                                    <div id={style.details}>
                                        <h5 onLoad={(e)=>{e.style.color="red"}}>
                                            {mobilePost_n.title}
                                        </h5>
                                        <p>
                                            {mobilePost_n.summary}
                                        </p>
                                        <span>
                                            <i>By:{mobilePost_n.username}</i>
                                            <b>
                                                {mobilePost_n.date}
                                            </b>
                                        </span>

                                      </div>



                                 </div>

                    
                    
                    
                    </Link>
                
            }






  

        </div>

     



        </section>
    

    )
}
