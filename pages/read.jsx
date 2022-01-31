
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Read_section from '../components/Read_section'

import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function trending() {
    return (
        <div className={styles.container}>



        <Navbar />


        <Read_section />


        








        <Footer />


            
        </div>
    )
}
