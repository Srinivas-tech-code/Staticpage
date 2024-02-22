import styles from './button.module.css'
import React from 'react';



const Buttontag: React.FC = () => {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <div className={styles.container}>
      <button
        className={styles.block}
        type="button"
      >
        Submit
      </button>
      </div>
      </>
    
  );
}

export default Buttontag;
