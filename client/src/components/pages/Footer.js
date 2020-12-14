import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styles from '../../scss/footer.module.scss'


export default function Footer() {


  return (
    <div className={styles.footer_Container}>
    <a href="https://github.com/alecbrando/Twitchr" className={styles.smallContainer}><GitHubIcon  fontSize="large" className={styles.logos}/></a>
    <a href="https://www.linkedin.com/in/alec-garcia-4159b0169/" className={styles.smallContainer}><LinkedInIcon  fontSize="large" className={styles.logos}/></a>
    <a href="https://angel.co/u/alec-garcia-5" className={styles.smallContainer}><img height="60px" src="https://www.shareicon.net/data/128x128/2016/06/20/606409_angellist_4096x4096.png" className={styles.logos}/></a>
    </div>
  )
}
