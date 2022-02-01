import {useState,useEffect} from 'react'
import style from '../../styles/Read_section.module.css'
import Config from '../../config/config.json'
import Link from 'next/link'
 import Image from 'next/image'
import image from 'next/image'
export default function Suggestion({category}) {
    const [suggestion,setSuggestion]=useState([]);

 
    const get_article=()=>{
        const furl = Config.IP_ADDRESS+"category/entertainment/10";

         fetch(furl).then(res=>res.json()).then(data=>{
                 setSuggestion(data);
                 
         });


    }




    useEffect(()=>{
            get_article();

    },[]);
 
    const refreshPage=(slug)=>{ 
             let url=window.location.href.split("/");
             let base=url.pop();
             url=url.join('/')
    
            window.location.href=url+'/'+slug;
    }
    


    return (
        <div id={style.suggestion}>
        <h1>
            Suggested articles
        </h1>
        <ul> 
 

                    {
                        suggestion.map((post,key)=>(
                           

                            <li onClick={()=>{ refreshPage(post.slug)}} key={key}>
                            <p>
                            {post.title}    
                            </p>
                            <span>
              
                        <img id={style.fore_image} src={Config.POSTIMAGE_BASEURL+post.pic} alt={post.pic} />
                           
                       <img id={style.back_image} src={Config.POSTIMAGE_BASEURL+post.pic} alt={post.pic} />
                          </span>
                        </li> 

               


                       ))}
                   






        </ul>
    </div>
    )
}
