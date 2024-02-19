import styles from './button.module.css'
import React from 'react';



const Buttontag: React.FC = () => {
  return (
    
      <div className={styles.container}>
      <button
        className={styles.block}
        type="button"
      >
        Submit
      </button>
      </div>
    
    
  );
}

export default Buttontag;
