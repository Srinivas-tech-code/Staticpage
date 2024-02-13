import React from 'react'
import Image from 'next/image'



interface propshere{

}

const Body:React.FC<propshere> = () => {
  return (
    <div className="bg-gray-100 p-4">
          <Image style={{width:'100%'}} width={850} height={850}  alt={'Sun is rising'} src={'/ms-dhoni.jpg'}/>
    </div>
   

  )
}



export default Body
