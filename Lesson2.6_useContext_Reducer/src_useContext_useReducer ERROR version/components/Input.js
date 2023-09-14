import styles from './Input.module.css';

function Input({ value, type, label, onChange }) {

  const handlerChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input 
        className={styles.input} 
        onChange={handlerChange} 
        value={value} 
        type={type}
      />
    </div>
  );
}
export default Input;
