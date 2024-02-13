import styles from './input1.module.css'
import React from 'react';

interface propshere{
  label:string
  placeholder:string
  
}

const FirstInput: React.FC<propshere> = ({ label, placeholder }) => {
  return (
    
    <div className={styles.container}>
      <label className={styles.label}>
        {label}
      </label>
      <br/>
      <br/>
      <input
        className={styles.input}
        
        
        placeholder={placeholder}
      />
      
    </div>
    
  );
}

export default FirstInput;
