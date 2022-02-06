
import { useEffect ,useState} from "react";
import style from "../../../styles/Sublanding.module.css";
import Link from "next/link";
import Image from "next/image";

import Config from '../../../config/config.json'



const api_url = Config.IP_ADDRESS+"category/";
export default function Second_wrapper() {
    const [post, setPost] = useState([]);



    const get_data=()=>{

        let url=window.location.href.split("/");
        let len=url.length;
        let base=url[len-1];
    
        const baseUrl=api_url+(base.toLocaleLowerCase())+"/3"; 
        console.log(baseUrl);
 
        fetch(baseUrl).then(res=>res.json()).then(data=>{
            console.log(data);
            setPost(data);
            console.log(post);
        }).catch(e=>console.log(e));

    }

    useEffect(()=>{

        get_data();

    },[])


    let end=2;

    const first=post.slice(1,end);
    const second=post.slice(end,end+post.length);

    
    return (
        <div id={style.second_wrapper}>


            {
                first.length==0?(

                    <div id={style.loader_wrapper}>

                    <Image id={style.loader} src={"/loading.gif"} alt="loading" width={50} height={50} />
          
          
               </div>

                ):




                first.map((posts,index)=>(

                    <Link href={`/article/${posts.slug}`} key={index}>
                        <div className={style.second_details}>
                        <div id={style.main_image_content}>
                            <img id={style.mic_background} src={Config.POSTIMAGE_BASEURL+posts.pic} alt="" />

                                <img id={style.mic_main} src={Config.POSTIMAGE_BASEURL+posts.pic} alt="" />

                        </div>
                        <h2>
                            {posts.title}
                        </h2>
                        </div>  
                    </Link>



                   
                ))
            }

{
                second.length==0?(

                    <div id={style.loader_wrapper}>

                    <Image id={style.loader} src={"/loading.gif"} alt="loading" width={50} height={50} />
          
          
               </div>

                ):
                second.map((posts,index)=>(

                    <Link href={`/article/${posts.slug}`} key={index}>
                        <div className={style.second_details}>
                        <div id={style.main_image_content}>
                            <img id={style.mic_background} src={Config.POSTIMAGE_BASEURL+posts.pic} alt="" />

                                <img id={style.mic_main} src={Config.POSTIMAGE_BASEURL+posts.pic} alt="" />

                        </div>
                        <h2>
                            {posts.title}
                        </h2>
                        </div>  
                    </Link>



                   
                ))
            }
 

        
        </div>
    )
}
