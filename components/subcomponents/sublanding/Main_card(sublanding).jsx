import { useState ,useEffect } from "react";
import Link from "next/link";

import style from "../../../styles/Sublanding.module.css";

import { Button } from "semantic-ui-react";
import Config from "../../../config/config.json";


const api_url = Config.IP_ADDRESS+"projects/api/src/include/category/main/?cat=";
export default function Main_card() {

    const [post, setPost] = useState({});
  

  const getPost = () => {

    let url=window.location.href.split("/");
    let len=url.length;
    let base=url[len-1];

    const baseUrl=api_url+(base.toLocaleLowerCase()); 
    console.log(baseUrl);




 
    // fetch
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setPost(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getPost();
  }, []);




    return (
        
        <Link href={`/article/${post.slug}`} key={}>
            <div id={style.content}>

              <div id={style.main_image_content}>
              <img id={style.mic_background} src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+post.pic} alt={post.pic} />

                  <img id={style.mic_main} src={Config.IP_ADDRESS+Config.POSTIMAGE_BASEURL+post.pic} alt={post.pic}  />

              </div>


                  <div className={style.title}>
                      <h1>
                        {post.title}
                      </h1>
                  </div>

                  <div id={style.sub_title}>
                      <p>
                          {post.summary}
                      </p>
                  </div>

                  <div className={style.extra_sub_info}>

                  <p>{post.username}</p>
                  <p>
                  {post.date}
                  </p>

                  <Button
                  content='Like'
                  icon='heart'
                  label={{ as: 'p', basic: true, content: '2,048' }}
                  labelPosition='right'
                  />
                  </div>

            </div>
      </Link>

        
    )
}
