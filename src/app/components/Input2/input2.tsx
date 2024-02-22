import styles from './input2.module.css'
import React from 'react';

interface Propshere {
  
  placeholder: string;
}

const SecondInput: React.FC<Propshere> = ({ placeholder }) => {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <div className={styles.container}>

      <input
      className={styles.input}   

        placeholder={placeholder} />
    
    </div>
    </>
  );
}

export default SecondInput;
