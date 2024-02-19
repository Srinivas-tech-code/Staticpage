import styles from './input1.module.css'
import React from 'react';

interface propshere{
  label:string
  placeholder:string
  
}

const FirstInput: React.FC<propshere> = ({ label, placeholder }) => {
  return (
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
    
  );
}

export default FirstInput;
