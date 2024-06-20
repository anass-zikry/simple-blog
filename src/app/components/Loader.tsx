import styles from "./Loader.module.css"

const Loader= ()=>{
    return (
        <div className={styles.lds}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
}

export default Loader