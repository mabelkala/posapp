import React, { useContext, useEffect } from "react";
import { Container, Table } from "reactstrap";
import { ItemsContext } from "../contexts/ItemsContext";
import Loader from "../component/Loader";
const ItemsList = () => {
  const { items, loading, error, getAllItems } = useContext(ItemsContext);

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div>
      <Container>
        <div>
          <h2>List of items</h2>
        </div>
        <Table striped hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>ITEM_ID</th>
              <th>COST PRICE</th>
              <th>SELLING PRICE</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {loading && <h1>loading...</h1>}
            {error && <h1>Error</h1>}
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item._id}</td>
                <td>{item.costPrice}</td>
                <td>{item.sellPrice}</td>
                <td>{item.qnty}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ItemsList;
