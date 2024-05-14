// for showing the streaming
import { Suspense } from "react";
import Product from "@/components/product";
import Review from "@/components/review";

const ProductDetail = () => {
  return (
    <div>
      <h2>Product Detail page</h2>
      <Suspense fallback={<p>Loading product detail.....</p>}>
        <Review />
      </Suspense>
      <Suspense fallback={<p>Loading review detail.....</p>}>
        <Product />
      </Suspense>
    </div>
  );
};

export default ProductDetail;
