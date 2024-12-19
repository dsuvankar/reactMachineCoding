import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);

  // Function to fetch products from API
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=120");
    const data = await res.json();

    console.log(data);
    setProducts(data.products);
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to handle page change
  const handlePage = (selectedPage) => {
    if (selectedPage > 0 && selectedPage <= products.length / 10)
      setPage(selectedPage);
  };

  return (
    <div>
      <div className="products">
        {/* Display products for the current page */}
        {products.slice(page * 10 - 10, page * 10).map((prod) => {
          return (
            <div key={prod.id}>
              <h4>
                <img src={prod.thumbnail} alt="" />
              </h4>
              <span>{prod.title}</span>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        {/* Previous page button */}
        <span onClick={() => handlePage(page - 1)} className="left">
          &larr;
        </span>
        {/* Page numbers */}
        {[...Array(products.length / 10)].map((_, i) => {
          return <h5 key={i}>{i + 1}</h5>;
        })}
        {/* Next page button */}
        <span onClick={() => handlePage(page + 1)} className="right">
          &#x2192;
        </span>
      </div>
    </div>
  );
}

export default App;
