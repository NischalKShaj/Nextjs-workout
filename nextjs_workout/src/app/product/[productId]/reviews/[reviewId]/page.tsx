// file to show the dynamic nested routing

import { notFound } from "next/navigation";

const ReviewId = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  let review;
  if (params.reviewId === "1") {
    review = "review 1 for the product";
  } else if (params.reviewId === "2") {
    review = "review 2 for the product";
  } else {
    review = "no review available for the product";
  }

  if (parseInt(params.reviewId) > 100) {
    notFound();
  }

  return (
    <div>
      <>
        {review}
        {params.productId}
      </>
    </div>
  );
};

export default ReviewId;
