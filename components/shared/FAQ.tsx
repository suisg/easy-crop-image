export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export interface FAQData {
  title: string;
  faqs: FAQItem[];
}

export interface FAQProps {
  faqData: FAQData;
}

export function FAQ({ faqData }: FAQProps) {
  const { title, faqs } = faqData;

  return (
    <section className="w-full mx-auto py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          {title}
        </h2>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq: FAQItem, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6"
            >
              <p className="text-xl font-semibold mb-2">
                {faq.question}
              </p>
              <p className="text-base">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 