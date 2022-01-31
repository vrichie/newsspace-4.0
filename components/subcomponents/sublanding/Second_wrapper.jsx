
import { useEffect ,useState} from "react";
import style from "../../../styles/Sublanding.module.css";
import Link from "next/link";


import Config from '../../../config/config.json'



export default function Second_wrapper() {
    const [post, setPost] = useState([]);



    const get_data=()=>{
        let url=window.location.href.split("/");
        let len=url.length;
        let category=url[len-1];
    const api_url=Config.IP_ADDRESS+"category/"+category+"/2";
        fetch(api_url).then(res=>res.json()).then(data=>{
            // console.log(data);
            setPost(data);
        }).catch(e=>console.log(e));

    }

    useEffect(async()=>{

        get_data();

    },[])


    
    return (
        <div id={style.second_wrapper}>


            {
                post.map((posts,index)=>(

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
