import { IconButton, TextField } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";

const ProductItems = ({ name }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1));
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <li className="list-group-item">
      <h4>{name}</h4>
      <div container alignItems="center" justifyContent="center">
        <div class="row">
          <div class="d-flex justify-content-end">
            <div item style={{marginRight:"20px"}}>
              <IconButton onClick={handleDecrement} disabled={quantity <= 1}>
                <Remove />
              </IconButton>
            </div>
            <div item >
              <TextField
                type="number"
                value={quantity}
                variant="standard"
                size="extralarge"
                style={{ width: 60, textAlign: "center" }}
                readOnly
              />
            </div>
            <div item style={{marginLeft:"20px"}}>
              <IconButton onClick={handleIncrement}>
                <Add />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItems;
