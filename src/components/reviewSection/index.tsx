"use client";

import { useTranslation } from "react-i18next";

interface Review {
  id: number;
  reviewer: string;
  rating: number;
  comment: string;
}

interface ReviewSectionProps {
  reviews: Review[];
}

export const ReviewSection = ({ reviews }: ReviewSectionProps) => {
  const { t } = useTranslation();

  if (!reviews || reviews.length === 0) {
    return <div>{t("reviews.no_reviews")}</div>;
  }

  return (
    <div className="relative w-full flex justify-center">
      <div className="absolute left-0 top-0 w-screen">
        <hr className="border-t border-gray-200" />
      </div>
      <div className="px-[15px] md:px-[32px] lg:px-[50px] py-[20px] lg:py-[44px] flex flex-col justify-start items-start w-full max-w-[1200px]">
        <h2 className="text-foreground text-[20px] leading-[32px] tracking-[0.6px] mb-[30px]">
          {t("home.reviews")}
        </h2>
        <div className="flex gap-[20px]">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-gray-200 p-[15px] rounded-md"
            >
              <h3 className="text-[16px] font-semibold mb-[5px]">
                {review.reviewer}
              </h3>
              <p className="text-[14px] text-customGray mb-[10px]">
                Rating: {review.rating} / 5
              </p>
              <p className="text-[14px] text-customGray">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
