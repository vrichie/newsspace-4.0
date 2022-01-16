import style from '../styles/Footer.module.css'
import * as Icon from 'react-bootstrap-icons';



export default function Footer() {
    return (
        <footer id={style.footer} className="bg-light">
                <div className={style.footerdiv}>

                    <div className={style.text}>
                        <p>
                           | privacy policy |<br/>
                           | Terms and conditions |<br/>
                            | About |<br/>
                            2021 all copyrights reserved 
                        </p>
                    </div>
                </div>

                <div  className={style.footerdiv} id={style.middle_div}>
                    <div id={style.logo}>
                        <h1>News-space</h1>
                        <p>
                            <i>

                            Everything news and in-between...
                            </i>

                        </p>
                    </div>

                    <div id={style.social}>



                        <span>
                            <Icon.Instagram size={30} />
                        </span>
                        <span>
                            <Icon.Facebook size={30} />
                        </span>
                        <span>
                            <Icon.Twitter size={30} />
                        </span>
                        <span>
                            <Icon.Telegram size={30} />
                        </span>
                        <span>
                            <Icon.Envelope size={30} />
                        </span>
                        

                  
                



                    </div>


                    <form action="" id={style.subscription_form}>
                    <div className="ui tiny form" id={style.subscription_form_wrapper}>
                    
                            <div className="field">
                            <label>Subscribe for our weekly newsletter</label>
                            <input type="email" placeholder="joe@schmoe.com" />
                            </div>
                           
                    
                        
                            <button className="mini ui red button">subscribe</button>
                    </div>
                    </form>



                    <div id={style.by}>
                        <h6>By:k_ritchie</h6>
                    </div>
                </div>

                <div  className={style.footerdiv}>
                <div className={style.textright}>
                        <ul>
                            <li>
                                <Icon.HouseDoorFill size={20}/>
                                <p>
                                   Home 
                                </p>
                                
                            </li>
                            <li>
                                <Icon.PeopleFill size={20}/>
                                <p>

                                Our team
                                </p>
                            </li>
                            <li>
                                <Icon.PersonLinesFill size={20}/>
                                <p>

                                Our Contacts
                                </p>
                            </li>
                            <li>
                                <Icon.InfoLg size={20}/>
                                <p>

                                About us
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

        </footer>
    )
}
