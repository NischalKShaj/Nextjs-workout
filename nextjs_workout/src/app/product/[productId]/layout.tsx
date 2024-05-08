// file to show the layout for the product id page

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <>{children}</>
      <h2 style={{ backgroundColor: "lightblue", color: "black" }}>
        Features product
      </h2>
    </div>
  );
};

export default ProductDetailsLayout;
