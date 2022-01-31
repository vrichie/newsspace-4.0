import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sublanding from '../components/Sublanding'
import Post_wrapper from '../components/Post_wrapper'
import Mobile from '../components/subcomponents/sublanding/Mobile'
import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function gossip() {
    return (
        <div className={styles.container}>
        <Head>
          <title>Gossip</title>
          <meta name="description" content="Home of all the latest Kenyan gossip trending on social-media,get your tea about your favourite celeb" />
          <link rel="icon" href="/newsspace_logo.png" />
        </Head>


        <Navbar />



        <main className={styles.main}>

            <Sublanding />
            <Mobile/>

            <Post_wrapper />

        
        
        
        
      </main>




        <Footer />


            
        </div>
    )
}
