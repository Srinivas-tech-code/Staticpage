import React from 'react'
import Image from 'next/image'
import styles from './body.module.css'
import dhoni2 from '../../../../public/dhoni2.png'

interface propshere{

}

const Body:React.FC<propshere> = () => {
  return (
    
<html>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    
    
       <div style={{boxSizing:'border-box',margin:'0'}}>
      <Image src={dhoni2} layout='responsive' alt={'Sun is rising'} />
    </div>
   
    </html>
    
    
    
    
   

  )
}



export default Body