import styles from './input1.module.css'
import React from 'react';

interface propshere{
  label:string
  placeholder:string
  
}

const FirstInput: React.FC<propshere> = ({ label, placeholder }) => {
  return (
    <>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <div className={styles.container}>
      <div className={styles.label}>
      <label>
        {label}
      </label>
      <br/>
      <br/>
      </div>
      
      <input
        
        className={styles.input}

        placeholder={placeholder} />

    </div>
    </>
  );
}

export default FirstInput;
