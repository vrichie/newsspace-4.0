
import { useEffect, useState } from "react";
import style from "../../../styles/Sublanding.module.css";
import Link from "next/link";
import Config from "../../../config/config.json"




export default function Trending() {
    const [posts, setPosts] = useState([]);

    const getCart=()=>{
        let url=window.location.href.split("/")
        let len=url.length;
        let cartegory=url[(len-1)];
    const api_url=Config.IP_ADDRESS+"category/"+(cartegory.toLocaleLowerCase())+"/6";


            fetch(api_url).then(res=>res.json()).then(data=>{
                // console.log(data);
                setPosts(data)
            })

      

    }

    useEffect(()=>{
        getCart();


    },[]);


    




    return (
        <div id={style.third_content}>
        <h2>this whats trending</h2>
        <ul>

            {posts.map((post,key) => (


                    
                <Link href={`/article/${post.slug}`} key={key}>
                    <li key={key}>
                        
                        {post.title}
                    </li>
                </Link>


                
                
                
            ))}




        </ul>
      </div>
    )
}
