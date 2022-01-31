import style from '../styles/Read_section.module.css'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Config from '../config/config.json'
 import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Suggestion from './read/Suggestion'

export default function Read_section() {
   
    const [post,setPost]=useState({});
    const [suggestion,setSuggestion]=useState([]);
    const [wiff,setWiff]=useState('');

    const get_article=()=>{

            let wif=window.location.href.split("/")
            let len=wif.length;
            let wiff=wif[(len-1)]; 
           
        // const furl = Config.IP_ADDRESS+"include/posts/?slug="+wiff;
        const furl=Config.IP_ADDRESS+"article/"+wiff;
         fetch(furl).then(res=>res.json()).then(data=>{

                 setPost(data[0]);
         });
          
  

    }




    useEffect(()=>{
        
            get_article();

    },[]);
 
    


 



    return (
        <div id={style.main_wrapper}>
      <Head>
        <title>{post.title}</title>
        <meta name={post.title} content={post.summary} />
        <link rel="icon" href="/newsspace_logo.png" />
      </Head>



            <div id={style.fake_header} className="bg-light">
                <div id={style.category}>
                    <h1>
                       {post.category}
                    </h1>
                </div>

            </div>
            <div id={style.real_content}>
                <div id={style.post_wrapper}>
                    <h1 id={style.title_h1}>
                        {post.title}
                     </h1>

                     <h6>
                         {post.category}
                     </h6>


                     <p>
                         {post.date}
                     </p>

                    <div id={style.main_image}>

                        <div id={style.mm_place}>
                           
                              <img id={style.mic_background_mm} src={Config.POSTIMAGE_BASEURL+post.pic} alt={post.pic} />
                              <img id={style.mic_main_mm} src={Config.POSTIMAGE_BASEURL+post.pic} alt={post.pic} />

                        </div>
                            
                            
                          
                          
                        
                        <div  id={style.writers}>

                            <div id={style.editor_pic}>
                                <img  src={Config.EDITORSIMAGE_BASEURL+post.profile} alt={post.profile} />
                                <div id={style.editor_name}>
                                        {post.username}
                                </div>
                            </div>

                            <div id={style.image_rights}>
                                    
                                    <p>
                                        <i>
                                            image courtesy of google
                                        </i>
                                    </p>
                            </div>
                       
                        </div>



                    </div>
                    <div id={style.content}>

                        <p>

                            {post.body} 
                        </p>


                    </div>
                    



                </div>

            <Suggestion />

            </div>
            
        </div>
    )
}
