import React from 'react'
import Image from 'next/image'

import styles from './body.module.css'

interface propshere{

}

const Body:React.FC<propshere> = () => {
  return (
    <body>
    <div className={styles.container}>
          <Image className={styles.Image} alt={'Sun is rising'} width={414} height={425.6} src={'/ms-dhoni.jpg'}/>
    </div>
    </body>
   

  )
}



export default Body
