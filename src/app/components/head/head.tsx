import React from "react";
import Image from "next/image";
import styles from './head.module.css'


const Head:React.FC = () => {
  return (

  <div className={styles.container}>
      
      <Image className={styles.Image} width={40} height={40}  alt={"Dhoni"} src={"/Dhoni.png"}/>
      
      <div className={styles.hhh}>
        <div className={styles.one}>Dhoni</div>
        <div className={styles.two}>6 June 2021, 12:10 pm</div>
      
      
        <div className={styles.three}>
            <Image width={20} height={30} src={'/goldstack.png'} alt={'gold coins'}/>
        </div>
        <div className={styles.fivesix}>
        <div>2100
        
        <div >Gross Coins</div>
        </div>
        </div>
        <div className={styles.seven}><svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 576 512"><path fill="#42aa1d" d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"/></svg></div>
        <div className={styles.eight}><svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 128 512"><path fill="#B197FC" d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg></div>     
      </div>
      
    </div>
    
  )
}
export default Head
