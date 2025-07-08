import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - EasyCrop',
  description: 'Learn about EasyCrop, the free online image editing tool that works entirely in your browser with no uploads required.',
  alternates: {
    canonical: 'https://easycrop.com/about-us',
  },
};

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen pt-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            About EasyCrop
          </h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              EasyCrop is a free, browser-based image editing platform that puts privacy and simplicity first. 
              We believe that powerful image editing tools should be accessible to everyone without compromising 
              your personal data.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Our Mission
            </h2>
            <p>
              To provide professional-grade image editing tools that work entirely in your browser, 
              ensuring your images never leave your device. We're committed to making image editing 
              fast, secure, and user-friendly for everyone.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Why Choose EasyCrop?
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>100% Privacy:</strong> Your images are processed locally in your browser</li>
              <li><strong>No Uploads:</strong> No server storage means your data stays with you</li>
              <li><strong>Free to Use:</strong> All tools are completely free with no hidden costs</li>
              <li><strong>No Registration:</strong> Start editing immediately without creating an account</li>
              <li><strong>Professional Quality:</strong> Advanced algorithms for high-quality results</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Our Tools
            </h2>
            <p>
              We offer a comprehensive suite of image editing tools including image cropping, 
              resizing, format conversion, and specialized tools for social media platforms. 
              Whether you need to create a perfect avatar, resize images for different platforms, 
              or create Instagram grid layouts, we have the tools you need.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <p className="text-blue-900 font-medium">
                Thank you for choosing EasyCrop for your image editing needs. 
                We're constantly working to improve our tools and add new features 
                to make your experience even better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
