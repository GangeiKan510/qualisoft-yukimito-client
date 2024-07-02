
import ProductList from "./ProductList";


const InventoryTabComponent = () => {
  return (
    
    <div
      className="tab-pane fade"
      id="inventory"
      role="tabpanel"
      aria-labelledby="inventory-tab"
    >
      <div className="py-5 overflow-auto p-3 mb-3 mb-s-0 mr-s-3">
        <div className="py-5">
          <div class="card border">
            <div class="card-header"> <h3>Products</h3></div>
            <div class="card-body">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryTabComponent;
