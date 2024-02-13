import styles from './input2.module.css'
import React from 'react';

interface Propshere {
  
  placeholder: string;
}

const SecondInput: React.FC<Propshere> = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      
      <input
        className={styles.input}
        
        placeholder={placeholder}
      />
    </div>
  );
}

export default SecondInput;
