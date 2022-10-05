import styles from './Wrap.module.css';

const Wrap = (props) => {
  return <div className={styles.wrap}>{props.children}</div>;
};

export default Wrap;
