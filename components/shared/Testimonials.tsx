export interface TestimonialItem {
  quote: string | React.ReactNode;
  author: string;
  bgColor: string;
}

export interface TestimonialsData {
  title: string;
  testimonials: TestimonialItem[];
  rating?: number; // Optional rating (e.g., 4.8)
  reviewCount?: number; // Optional review count (e.g., 2847)
}

export interface TestimonialsProps {
  testimonialsData: TestimonialsData;
}

export function Testimonials({ testimonialsData }: TestimonialsProps) {
  const { title, testimonials, rating, reviewCount } = testimonialsData;

  return (
    <section className="w-full py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          {title}
        </h2>

        {/* Rating Display */}
        {(rating || reviewCount) && (
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3">
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1;
                  const isFilled = starValue <= (rating || 0);
                  const isPartial = !isFilled && starValue - (rating || 0) < 1 && starValue - (rating || 0) > 0;
                  
                  return (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${
                        isFilled ? 'text-yellow-400' : isPartial ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  );
                })}
              </div>
              <span className="text-gray-600">
                {rating && `${rating}/5`}
                {reviewCount && ` (${reviewCount.toLocaleString()} reviews)`}
              </span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial: TestimonialItem, index: number) => (
            <div key={index} className={`${testimonial.bgColor} rounded-lg p-6`}>
              <blockquote className="text-gray-700 italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              <cite className="text-sm font-semibold text-gray-900">{testimonial.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 