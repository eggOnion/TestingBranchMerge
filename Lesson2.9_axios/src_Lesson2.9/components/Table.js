import styles from "./Table.module.css";

function Table({ list }) {
  return (
    <div>
      {/* if there is at least 1 element in the array */}
      {list.length === 0 && <p>no products found.</p>}
      <p>{list.length > 0 && list[0].name}</p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Modify</th>            
          </tr>
        </thead>
        <tbody>
          {list.length > 0 &&
            list.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>              
                {/* <td onClick={() => handlerDeleteItem(item.id)}>❌</td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
