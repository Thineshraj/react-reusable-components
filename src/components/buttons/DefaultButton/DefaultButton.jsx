import styles from './DefaultButton.module.css';

const DefaultButton = (props) => {
  return (
    <>
      <button
        type={props.type ? props.type : 'button'}
        className={styles.button}
      >
        {props.title}
      </button>
    </>
  );
};

export default DefaultButton;
