import {useState,useEffect} from 'react'
import style from '../../styles/Read_section.module.css'
import Config from '../../config/config.json'
import Link from 'next/link'
 import Image from 'next/image'
import image from 'next/image'
export default function Suggestion({category}) {
    // const [load,setLoad]=useState(false);
    const [suggestion,setSuggestion]=useState([]);

 
    const get_article=()=>{
        const furl = Config.IP_ADDRESS+"category/entertainment/10";
        // console.log(furl);

         fetch(furl).then(res=>res.json()).then(data=>{
                //  console.log(data);
                 setSuggestion(data);
                 
         });


    }




    useEffect(()=>{
            get_article();

    },[]);
 
    
// console.log(category);

// console.log(Config.POSTIMAGE_BASEURL+post.pic);
 
// console.log(wiff);
// if(suggestion.length==0){
//     console.log("loading")
// }else{
//     console.log("loaded")
// }

// console.log(suggestion.length);



    return (
        <div id={style.suggestion}>
        <h1>
            Suggested articles
        </h1>
        <ul> 
 

                    {suggestion.length==0?(
                        <Image src={"/loader.gif"} alt="loading" width={200} height={200} />
                    ):
                        suggestion.map((post,key)=>(
                            
                            <Link href={`${post.slug}`} key={key} passHref>

                            <li>
                            <p>
                            {post.title}    
                            </p>
                            <span>
              
                        <img id={style.fore_image} src={Config.POSTIMAGE_BASEURL+post.pic} alt={post.pic} />
                           
                       <img id={style.back_image} src={Config.POSTIMAGE_BASEURL+post.pic} alt={post.pic} />
                          </span>
                        </li> 

                   </Link>


                       ))}
                   






        </ul>
    </div>
    )
}
