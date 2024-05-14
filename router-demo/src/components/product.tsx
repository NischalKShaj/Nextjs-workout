// file for product

const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <h1>product page</h1>
    </div>
  );
};

export default Product;
