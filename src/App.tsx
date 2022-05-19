import React  from "react";

// Styles
import styles from './App.module.css';

// Components
import RadioWidget from './components/radioWidget';



//call radio component 

function App() {

  return (
    <div className={styles.main}>
     <RadioWidget />
    </div>
  );
}

export default App;
