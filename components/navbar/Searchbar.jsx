import {useState,useEffect} from 'react'
import style from '../../styles/Navbar.module.css'
import * as Icon from 'react-bootstrap-icons';
import Link from 'next/link'
import { useRouter } from 'next/router'
import {Redirect} from 'react-router-dom';
import Config from '../../config/config.json'
const api_url=Config.IP_ADDRESS+"projects/api/src/include/category/search/?";
export default function Searchbar() {
    const [post,setPost]=useState([]);
    const [search,setSearch]=useState(false);
    const [searchInput,setSearchInput]=useState('');
    const [category,setCategory]=useState('all');
    const [results,setResults]=useState(0);
    const [query,setQuery]=useState('');
    const [page,setPage]=useState('');
    const [reload,setReload]=useState(false);

    const router = useRouter();

    const get_page=()=>{
 
        return page_name;
    }


    const get_cards=(url)=>{       
        
        let base=window.location.href.split("/");
        let len=base.length-2;
        let page_name=base[len];
        setPage(page_name);
        fetch(url).then(res=>res.json()).then(data=>{
            if(data[0].results===0){
                setResults(0)

            console.log(data[0].results);
            setPost([])
            }else{
                setResults(data[0].results)
            setPost(data);
            }
        }).catch((e)=>console.log(e));
    }

    useEffect(() => {


        // console.log("reload");
        console.log(searchInput)
        !searchInput ? setSearch(false) : setSearch(true)
        // console.log(search);
        // console.log(category);
        setQuery(`k=${searchInput}&&c=${category}`);

        // console.log(query);
        const url=api_url+query;
        // console.log(url)

        
        get_cards(url);

    }, [searchInput,search,category,reload]);


    const handleSubmit=(e)=>{
        e.prevent.default();

       

    }
    const Searchpost=()=>{
        // console.log(page);
        if(page==="search"){
            setReload(true);
            let base=window.location.href.split("k");
            base.pop();
            base=base[0];
            let reload_Page=base+query;
          
            console.log(reload_Page);
            // console.log(bas[0]);
            // // router.push(`${reload_Page}`);       
            //  router.push(`./${query}`);
            
        }else{
            console.log(page);

        // router.push(`./search/${query}`);
        }
        // router.push(`../search/${query}`);
     

    }


    
    return (
        <div  id={style.search_wrapper}>
        <form onSubmit={(e)=>{handleSubmit(e)}} id={style.form}>


        <div className="ui icon input" id={style.searchinput_wrapper}>
          <input type="text" placeholder="Search..." value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}}/>
          <i onClick={()=>{Searchpost()}} className="inverted circular search link icon"></i>
        </div>




        <select className="form-select" id={style.search_select} value={category} onChange={(e)=>{setCategory(e.target.value)}} aria-label="Default select example">
          <option value="all" selected>All...</option>
          <option value="news">News</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Gossip">Gossip</option>
          <option value="world">World</option>
        </select>



        </form>
                     {            search ?             

                                        <div id={style.searchResults}>
                                            <ul>
                                                {results!=0 ? ( <h5>
                                                                results :{results}
                                                                </h5>)
                                                            : (
                                                                <h5>
                                                                    no results found
                                                                </h5>
                                                            )
                                                }
                                               
                                                    { post.map((result,key)=>(

                                                        <Link href={`./article/${result.slug}`} key={key} passHref>


                                                            <li key={index}>
                                                                <div id={style.imageWrapper}>
                                            
                                                                <img src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+result.pic} id={style.background_image} alt="" />
                                                                <img src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+result.pic} id={style.foreground_image} alt="" />
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
                                                                    {/* <h6>
                                                                        {result.summary} 
                                                                    </h6> */}
                                            
                                                                </div>
                                            
                                                            </li> 


                                                        </Link>


                                                    ))}
                                               
                                                    
                                                

                                            </ul>
                                        </div>
                                    : <></>
            }

      </div>
    )
}
