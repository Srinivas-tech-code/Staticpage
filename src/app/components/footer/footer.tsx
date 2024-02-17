import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.flexcontainer}>
    <div className={styles.main}>
      <div className={styles.three}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z"/>
</svg>
        <svg  fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
        <Image src={'/share.png'} width={24} height={24} alt='share'/>
      </div>
      <div style={{position:'absolute',right:'0'}} className={styles.four}>
      <button style={{backgroundColor:'rgb(82, 22, 138)',color:'white'}}>
  Lead +100
<Image className='zero' alt='ucoin'  width={18} height={18} src={'/ucoin.png'}/>
</button>
</div>
</div>
<div className={styles.footerflex}>
    <div className={styles.box}>
    50 interested
    </div>
    <div className={styles.six} >
     
    <Image style={{borderRadius:'90%',overflow:'hidden'}} width={40} height={40}  alt={"Dhoni"} src={"/Virat.jpg"}/>
    
    <div className={styles.gold}>
    <Image width={10} height={18} src={'/goldstack.png'} alt={'gold coins'}/>
    </div>
    <div className={styles.seven}> 
        <div>1100</div>
        <span style={{fontWeight:'bold'}} >Virat_kohli</span>
        <span style={{color:'gray'}}> in Lead</span>
        
        </div>
        
       
        <div className={styles.before}><svg  xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 576 512"><path fill="#42aa1d" d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"/></svg></div>
        <div className={styles.last} >
        <Image  src={'/time.png'} alt='time' width={73} height={33}/>
        </div>
        </div>
        <br/>
        <div className={styles.prev} >@Virat_kohli...Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, velit.</div>
        
        </div>
    </div>
    

  )
}

export default Footer