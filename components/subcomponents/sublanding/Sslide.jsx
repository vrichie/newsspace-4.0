import style from '../../../styles/Slide.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link';
    import axios from "axios";
    import Slider from'react-slick'
    import Config from '../../../config/config.json'
import { useState } from 'react';
import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
export default function Sslide() {
    const [post,setPost]=useState([]);
    const [page,setPage]=useState([]);

    const [mobilePost,setMobilePost]=useState([]);

    const get_data=()=>{
        let base=window.location.href.split("/");
        let len=base.length-1;
        let key=base[len].toLowerCase();
        setPage(key);        
const url=Config.IP_ADDRESS+"category/"+key+"/4";
// console.log(url);

        fetch(url).then(res=>res.json()).then(data=>{
            // console.log(data)
            setMobilePost(data);
        }).catch(e=>console.log(e))

       
    }

    useEffect(async()=>{
        get_data();
    },[]);

    // console.log(mobilePost);
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

            <h1 id={style.mobile_wrapper_h1}>
                {page}
            </h1>

        <div id={style.mobile_wrapper}>


            {
                mobilePost.map((posts,index)=>(
                    <Link href={`./article/${posts.slug}`} key={index}>
                    
                    
                    
                                <div id={style.mobile_slide}>


                                    

                                    <img id={style.fore} src={Config.POSTIMAGE_BASEURL+posts.pic} alt="" />
                                    <img id={style.back} src={Config.POSTIMAGE_BASEURL+posts.pic} alt="" />

                                    <div id={style.details}>
                                        <h5 onLoad={(e)=>{e.style.color="red"}}>
                                            {posts.title}
                                        </h5>
                                        <p>
                                            {posts.summary}
                                        </p>
                                        <span>
                                            <i>By:{posts.username}</i>
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
