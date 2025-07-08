import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - EasyCrop',
  description: "Get in touch with the EasyCrop team. We're here to help with any questions or feedback about our image editing tools.",
  alternates: {
    canonical: 'https://easycrop.com/contact-us',
  },
};

export default function ContactUs() {
  return (
    <div className="w-full min-h-screen pt-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Contact Us
          </h1>
          
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We'd love to hear from you! Whether you have questions, feedback, 
                or suggestions for new features, don't hesitate to reach out.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="space-y-6 max-w-md">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 text-blue-600">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">support@easycrop.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 text-blue-600">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Support Hours</h3>
                    <p className="text-gray-600">Monday - Friday, 9 AM - 5 PM EST</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center max-w-lg mx-auto">
              <h3 className="font-semibold text-blue-900 mb-2">Need Quick Help?</h3>
              <p className="text-blue-800 text-sm">
                For immediate assistance, try our FAQ section or check out our 
                tool-specific help guides available on each page.
              </p>
            </div>
            
            <div className="text-center text-sm text-gray-500">
              We typically respond within 24 hours during business days.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
