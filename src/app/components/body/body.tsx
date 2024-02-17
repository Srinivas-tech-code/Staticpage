import React from 'react'
import Image from 'next/image'


import styles from './body.module.css'

interface propshere{

}

const Body:React.FC<propshere> = () => {
  return (
    
    <div className={styles.container}>
          <Image sizes="(max-width:480)  100%,(max-width: 768px) 100%, (max-width: 1280px) 100%" width={1480} height={1280} src={'/pixels.jpg'} layout='responsive' alt={'Sun is rising'} priority/>
    </div>
    
   

  )
}



export default Body