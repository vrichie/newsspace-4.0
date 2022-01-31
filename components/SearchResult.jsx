import {useState,useEffect} from 'react'
import style from '../styles/Read_section.module.css'
import Config from '../config/config.json'
import Link from 'next/link';



const api_url=Config.IP_ADDRESS+"search/";


export default function SearchResult() {

    const [post,setPost]=useState([]);
    const [search,setSearch]=useState(false);
    const [searchInput,setSearchInput]=useState('');
    const [category,setCategory]=useState('gossip');
    const [results,setResults]=useState(0);


    const get_url=()=>{
        let url=window.location.href.split("/");
        let len=url.length-1;
        let key=url[len]
        return (key);

    }
    const get_cards=(url)=>{
        fetch(url).then(res=>res.json()).then(data=>{
            if(data[0].results===0){
                setResults(0)
 
            setPost([])
            }else{
                setResults(data[0].results)
            setPost(data);
            }
        }).catch((e)=>console.log(e));
    }
    useEffect(async()=>{
        let query=get_url();
        let url=api_url+query;
 
        get_cards(url);
    },[])







    return (
        <div id={style.main_wrapper}>
       
        <div id={style.real_content}>
                <div id={style.post_wrapper}>
                <h1>
                    your results
                 </h1>
                 <ul id={style.searchResults}>
                 { post.map((result,index)=>(

                <Link href={`../../article/${result.slug}`} key={index}>


                    <li key={index}>
                        <div id={style.imageWrapper}>

                            <img src={Config.POSTIMAGE_BASEURL+result.pic} id={style.background_image} alt="" />
                            <img src={Config.POSTIMAGE_BASEURL+result.pic} id={style.foreground_image} alt="" />
                        </div>
                        <div id={style.result_details}>
                            <h4>
                                {result.title}
                            </h4>
                            <span>
                                <p>
                                    By:{result.username}
                                </p>
                                <p>
                                    {result.date}
                                </p>
                            </span>
                            <h6>
                                {result.summary} 
                            </h6>

                        </div>

                    </li> 


                </Link>


))}




                 </ul>


                



            </div>

            <div id={style.suggestion}>
                <h1>
                    Suggested articles
                </h1>
                <ul>
                    <li>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore iusto ullam natus sit, fuga esse!
                        </p>
                        <span>
                          
                       </span>
                    </li>

                    <li>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore iusto ullam natus sit, fuga esse!
                        </p>
                        <span>
                           
                       </span>
                    </li>


                    <li>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore iusto ullam natus sit, fuga esse!
                        </p>
                        <span>
                          
                       </span>
                    </li>


                    <li>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore iusto ullam natus sit, fuga esse!
                        </p>
                        <span>
                            
                       </span>
                    </li>

                    <li>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore iusto ullam natus sit, fuga esse!
                        </p>
                        <span>
                           
                       </span>
                    </li>

                    <li>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore iusto ullam natus sit, fuga esse!
                        </p>
                        <span>
                           
                       </span>
                    </li>
                </ul>
            </div>

        </div>
        
    </div>
    )
}
