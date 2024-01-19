import styles from "./Button.module.css";

function Button({ children, type, onClick }) {
  return (
    <button type={type} className={styles.primary} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
