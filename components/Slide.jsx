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

    const [mobilePost_w,setMobilePost_w]=useState([]);
    const [mobilePost_e,setMobilePost_e]=useState([]);
    const [mobilePost_g,setMobilePost_g]=useState([]);
    const [mobilePost_n,setMobilePost_n]=useState([]);

    const [post_w,setPost_w]=useState([]);
    const [post_e,setPost_e]=useState([]);
    const [post_g,setPost_g]=useState([]);

    const get_data=()=>{
            
    const Wurl=Config.IP_ADDRESS+"category/world/1";
    const Nurl=Config.IP_ADDRESS+"category/news/1";
    const Gurl=Config.IP_ADDRESS+"category/gossip/1";
    const Eurl=Config.IP_ADDRESS+"category/entertainment/1";
    const api_url_e=Config.IP_ADDRESS+"category/entertainment/1";
    const api_url_g=Config.IP_ADDRESS+"category/gossip/1";
    const api_url_w=Config.IP_ADDRESS+"category/world/1";
    // console.log(api_url);

        //world
        fetch(Wurl).then(res=>res.json()).then(data=>{
 
            setMobilePost_w(data[0]);
            setMobilePost_w_loader(true);

        }).catch(e=>console.log(e))

        //news
        fetch(Nurl).then(res=>res.json()).then(data=>{
 
            setMobilePost_n(data[0]);
            setMobilePost_n_loader(true);
        }).catch(e=>console.log(e))

        //gossip
        fetch(Gurl).then(res=>res.json()).then(data=>{
 
            setMobilePost_g(data[0]);
            setMobilePost_g_loader(true);
        }).catch(e=>console.log(e))

        //entertainment
        fetch(Eurl).then(res=>res.json()).then(data=>{
 
            setMobilePost_e(data[0]);
            setMobilePost_e_loader(true);
        }).catch(e=>console.log(e))

        fetch(api_url_e).then(res=>res.json()).then(data=>{
            // console.log(data[0])
            setPost_e(data[0]);
        }).catch(e=>console.log(e))


        fetch(api_url_g).then(res=>res.json()).then(data=>{
            // console.log(data[0])
            setPost_g(data[0]);
        }).catch(e=>console.log(e))


        fetch(api_url_w).then(res=>res.json()).then(data=>{
            // console.log(data[0])
            setPost_w(data[0]);
        }).catch(e=>console.log(e))







    }

    useEffect(()=>{
        get_data();
    },[]);

 




    return (

        <section id={style.main_slide_wrapper} className='bg-light'>
     <div  id={style.slide}>


         {
             post_e.id==null?(
                <div id={style.loader_wrapper}>

                <Image id={style.loader} src={"/loading.gif"} alt="loading" width={50} height={50} />
   
    
           </div>
             ):(


          <Link href={`./article/${post_e.slug}`}>
          
              <div id={style.slide_item}>
                  <img id={style.real_image} src={Config.POSTIMAGE_BASEURL+post_e.pic} alt="" />
                  <img id={style.background_image} src={Config.POSTIMAGE_BASEURL+post_e.pic} alt="" />
                  <div className={style.detail_slide}>
                      <h2>{post_e.title}</h2>
                      <h5>{post_e.summary}</h5>
                      <span>
                           <p>by:{post_e.username}</p> <p>{post_e.date}</p> 
                      </span>
                  </div>
                  <Link href={`${post_e.tag}`}>
                  <button>
                      {post_e.category} 
                  </button>
                  </Link>
                
              </div>
          
          
          </Link>

             )
         }
          


      </div>



      <div id={style.side_carousel}>



 


            {
             post_g.id==null?(
                <div id={style.loader_wrapper}>

                <Image id={style.loader} src={"/loading.gif"} alt="loading" width={50} height={50} />
   
    
                 </div>
             ):(


                <Link href={`./article/${post_e.slug}`}>
                            <div id={style.covid}>
                        <img src={Config.POSTIMAGE_BASEURL+post_g.pic} id={style.covid_image} alt="" />
                        <div id={style.covid_details}>
                        <Link href={`${post_g.tag}`}>
                        <button>
                            {post_g.category} 
                        </button>
                        </Link>
                            <h3>
                                {post_g.title}
                            </h3>

                            <h6>
                                {post_g.date}
                            </h6>

                        </div>
                </div>

           </Link>

             )

}
 
{
             post_w.id==null?(
                <div id={style.loader_wrapper}>

                <Image id={style.loader} src={"/loading.gif"} alt="loading" width={50} height={50} />
   
    
                 </div>
             ):(

                <Link href={`./article/${post_e.slug}`}>
            <div id={style.covid}>

                
                
                <img src={Config.POSTIMAGE_BASEURL+post_w.pic} id={style.covid_image} alt="" />
                <div id={style.covid_details}>
                <Link href={`${post_w.tag}`}>
                  <button>
                      {post_w.category} 
                  </button>
                  </Link>
                    <h3>
                        {post_w.title}
                    </h3>

                    <h6>
                        {post_w.date}
                    </h6>

                </div>
            </div>

            </Link>

             )
             }


      </div>


        <div id={style.mobile_wrapper}>


            {
                mobilePost_e==false?(
                    <div id={style.loader_wrapper}>

                    <Image id={style.loader} src={"/loading.gif"} alt="loading" width={50} height={50} />
       
        
               </div>
                ):(

                


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

                    
                    
                    
                    </Link>)
                }

                
            


            {
                mobilePost_g==false?(
                    <div id={style.loader_wrapper}>

                    <Image id={style.loader} src={"/loading.gif"} alt="loading" width={50} height={50} />
       
        
               </div>
                ):(

                
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
                )
                
            }








            {
                mobilePost_w==false?(
                    <div id={style.loader_wrapper}>

                    <Image id={style.loader} src={"/loading.gif"} alt="loading" width={50} height={50} />
       
        
               </div>
                ):(

                
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


                )
                
            }


            {
                mobilePost_n==false?(
                    <div id={style.loader_wrapper}>

                    <Image id={style.loader} src={"/loading.gif"} alt="loading" width={50} height={50} />
       
        
               </div>
                ):(

                
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


                )
                
            }






  

        </div>

     



        </section>
    

    )
}
