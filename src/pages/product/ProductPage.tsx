import { useEffect, useState } from "react";

import {
  fetchAllProducts,
  fetchProductsByCategory,
  searchProducts,
} from "../../actions/product-actions";
import {
  BORDER_ANIMATION,
  SECONDARY_VARIANT,
} from "../../constants/loaderConstants";

import Product from "../../components/ProductItem";
import PaginationBar from "../../components/PaginationBar";
import Loader from "../../components/basic-ui-elements/Loader";
import { useAppDispatch, useAppSelector } from "../../store";

import classes from "./ProductPage.module.css";
import { Row, Col } from "react-bootstrap";
import { productActions } from "../../slices/productSlice";
import { categoryActions } from "../../slices/categorySlice";

type ProductPageProps = {
  searchKeyword: string | undefined;
};

function ProductPage() {
  const dispatch = useAppDispatch();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(14);

  let selectedCategory = "";
  selectedCategory = useAppSelector((state) => state.category.selectedCategory);
  console.log(selectedCategory);

  let searchKeyword = "";
  searchKeyword = useAppSelector((state) => state.products.searchKeyword);
  console.log(searchKeyword);

  useEffect(() => {
    if (
      (selectedCategory === "" || selectedCategory === "All Products") &&
      searchKeyword.length === 0
    ) {
      console.log("all products");
      dispatch(fetchAllProducts())
        .then((action) => {
          setProducts(action.payload.products);
          console.log(products);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setIsLoading(false);
        });
    } else if (searchKeyword.length > 0) {
      console.log("keyword");
      setIsLoading(true);
      console.log("else");
      dispatch(searchProducts(searchKeyword))
        .then((action) => {
          setProducts(action.payload.products);
          console.log(products);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setIsLoading(false);
        });
      dispatch(categoryActions.removeSelectedCategory());
    } else {
      setIsLoading(true);
      console.log("by category");
      dispatch(fetchProductsByCategory(selectedCategory))
        .then((action) => {
          setProducts(action.payload.products);
          console.log(products);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setIsLoading(false);
        });
      dispatch(productActions.removeSearchKeyword());
    }
  }, [dispatch, selectedCategory, searchKeyword]);

  //Get Current post
  const indexofLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexofLastPost - postsPerPage;
  console.log(products);
  const currentProducts = products.slice(indexOfFirstPost, indexofLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderProductList = () => {
    if (isLoading) {
      return (
        <div className={classes.loaderContainer}>
          <Loader variant={SECONDARY_VARIANT} animation={BORDER_ANIMATION} />
        </div>
      );
    }

    if (products.length === 0) {
      return <p>No products available.</p>;
    }

    // Split products into rows with four products per row
    const rows = [];
    for (let i = 0; i < currentProducts.length; i += 4) {
      const rowProducts = currentProducts.slice(i, i + 4);
      rows.push(
        <Row key={i}>
          {rowProducts.map((product) => (
            <Col key={product.id} sm={3}>
              <Product
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.images[0]}
              />
            </Col>
          ))}
        </Row>
      );
    }
    return rows;
  };

  return (
    <div>
      <h1 className={classes.head}>Product List</h1>
      {searchKeyword.length > 0 && <p>search keyword:{searchKeyword}</p>}
      <Row> {renderProductList()}</Row>
      <div className={classes.paginationBar}>
        <PaginationBar
          postPerPage={postsPerPage}
          totalPosts={products.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default ProductPage;
