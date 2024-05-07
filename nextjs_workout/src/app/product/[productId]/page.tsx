// showing the result according to the dynamic routes

const ProductId = ({ params }: { params: { productId: string } }) => {
  let productContent;
  if (params.productId === "1") {
    productContent = <h2>shoes</h2>;
  } else if (params.productId === "2") {
    productContent = <h2>watches</h2>;
  } else if (params.productId === "3") {
    productContent = <h2>mobiles</h2>;
  } else {
    productContent = <h2>no products found</h2>;
  }
  return (
    <div>
      <>{productContent}</>
    </div>
  );
};

export default ProductId;
