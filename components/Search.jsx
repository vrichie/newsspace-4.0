import style from '../styles/Search.module.css'

export default function Search() {
    return (
        <div id={style.search_wrapper} className="bg-light">
            <div id={style.suggested}>
                <h1>
                    check out these 
                </h1>
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores.
                    </li>



                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores.
                    </li>



                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores.
                    </li>



                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores.
                    </li>


                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores.
                    </li>


                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores.
                    </li>


                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores.
                    </li>

                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores.
                    </li>
                </ul>
            </div>

            <div id={style.results}>
                <h1>
                results
                </h1>
                <div className={style.result_card}></div>
            
            </div>
            
        </div>
    )
}
