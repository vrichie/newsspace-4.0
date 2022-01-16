import { useState } from 'react'
import Searchbar from './navbar/Searchbar';
import Link from 'next/link'
import style from '../styles/Navbar.module.css'
import * as Icon from 'react-bootstrap-icons';
import Contact_modal from './Contact_modal';




export default function Navbar() {

  const [state, setState] = useState('start');


  const contactModal=()=>{
    <Contact_modal/>
  }




    return (
      <nav className="navbar sticky-top navbar-light " id={style.nav}>
        
        <div id={style.logo_wrapper}> 
        <Link href="/" >
          <a className="navbar-brand" href="#" id={style.logo} >Newsspace</a>

          </Link>
      
        </div>
        
      <Searchbar />
      <div id={style.icon_nav}>
      <Icon.HouseDoorFill size={20} />
      <Icon.PeopleFill size={20} onClick={contactModal}/>
      <Icon.PersonLinesFill size={20}/>
      <Icon.InfoLg size={20}/>
      </div>


      <div className="bg-light" id={style.links}>


      <Link href="/News">
      <button className="ui basic teal button">News</button>

      </Link>


      <Link href="/Gossip">
      <button className="ui basic blue button">Gossip</button>
      </Link>

      <Link href="/Entertainment">
      <button className="ui basic violet button">Entertainment</button>
      </Link>

      <Link href="/World">

      <button className="ui basic  purple button">World</button>

      </Link>

      </div>







     </nav>
    )
}
