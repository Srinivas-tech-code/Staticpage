import React from 'react'
import Image from 'next/image'


import styles from './body.module.css'

interface propshere{

}

const Body:React.FC<propshere> = () => {
  return (
    
    <div className={styles.container}>
          <Image sizes="(max-width:480) and (min-width:320) 100vw,(max-width: 768px) 100vw, (max-width: 1280px) 100vw" width={1280} height={1280} src={'/dhoni2.png'} layout='responsive' alt={'Sun is rising'} />
    </div>
    
   

  )
}



export default Body
