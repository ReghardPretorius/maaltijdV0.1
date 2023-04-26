import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";


const Meals = () => {
  const [pageNumber] = useState(0);

  const searchedProduct = products;

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

 // const pageCount = Math.ceil(searchedProduct.length / productPerPage);

//   const changePage = ({ selected }) => {
//     setPageNumber(selected);
//   };

  return (
    <Helmet title="All meals">
      <Container>
        <Row>
          {displayPage.map((item) => (
            <Col
              lg="3"
              md="4"
              sm="6"
              xs="6"
              key={item.id}
              className=" mt-4"
            >
              <ProductCard item={item} />
            </Col>
          ))}
          {/* Page navigavtion buttons */}
          {/* <div className="d-flex justify-content-center mt-4 mb-4">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              containerClassName="paginationBttns"
            />
          </div> */}
        </Row>
      </Container>
    </Helmet>
  );
};

export default Meals;