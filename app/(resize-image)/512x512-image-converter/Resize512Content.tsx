import ScrollTopButton from "@/components/ScrollTopButton";

export default function Resize512Content() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* How to Use Section */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Use Our 512x512 Image Converter</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">Converting your images to 512x512 is simple with our user-friendly online tool. Follow these steps to resize images quickly and efficiently:</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="font-semibold mb-2">Upload</h3>
            <p className="text-gray-600">Drag and drop or select your image file.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="font-semibold mb-2">Convert Image</h3>
            <p className="text-gray-600">Our tool automatically resizes your image to 512x512 pixels.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="font-semibold mb-2">Download</h3>
            <p className="text-gray-600">Save your perfectly resized image in your preferred format.</p>
          </div>
        </div>
        
        <div className="py-4 px-8 rounded-lg inline-block">
          <ScrollTopButton ctaText="Start Converting Now" />
        </div>
      </section>

      {/* Features Section */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Features of Our Image to 512x512 Converter</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Fast Resize</h3>
            <p className="text-gray-600">Convert an image to 512x512 in seconds with no delays.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">High Quality</h3>
            <p className="text-gray-600">Resize images to 512x512 without losing quality, preserving sharpness and clarity.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Multiple Formats</h3>
            <p className="text-gray-600">Support for various image formats, including PNG, JPEG, and more.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Easy Crop Tool</h3>
            <p className="text-gray-600">Crop your images to fit the 512x512 pixel dimensions perfectly.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Free Online Tool</h3>
            <p className="text-gray-600">No downloads or subscriptions needed—just upload and convert.</p>
          </div>
        </div>
      </section>

      {/* Why Convert Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Convert Images to 512x512 Pixels?</h2>
        <p className="text-gray-700 mb-6">The 512x512 pixel resolution is ideal for social media, avatars, and app icons, ensuring compatibility and crisp visuals. Our image converter makes resizing effortless, delivering pixel-perfect results every time. Whether you need to convert an image to 512x512 for a specific platform or project, our tool ensures quality and speed.</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">👤 Avatars</h3>
            <p className="text-sm text-gray-600">Perfect for profile pictures</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">📱 App Icons</h3>
            <p className="text-sm text-gray-600">Ideal for mobile applications</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">📱 Social Media</h3>
            <p className="text-sm text-gray-600">Compatible with various platforms</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Our Image Resizing Tool</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 text-xl">🔍</span>
            </div>
            <h3 className="font-semibold mb-2">Resize Without Losing Quality</h3>
            <p className="text-sm text-gray-600">Our advanced algorithms ensure your images maintain clarity when resized to 512x512 pixels. Say goodbye to blurry or pixelated results with our image resizer.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 text-xl">📂</span>
            </div>
            <h3 className="font-semibold mb-2">Support for Multiple Formats</h3>
            <p className="text-sm text-gray-600">Convert images to 512x512 in popular formats like PNG, JPEG, and more. Choose the format that best suits your needs without compromising quality.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 text-xl">⚡</span>
            </div>
            <h3 className="font-semibold mb-2">Quick and Easy Upload Process</h3>
            <p className="text-sm text-gray-600">Simply upload your image, and our online tool handles the rest. No complicated software or technical skills required.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Frequently Asked Questions About 512x512 Image Conversion</h2>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-blue-600">What is a 512x512 Pixel Image?</h3>
            <p className="text-gray-700">A 512x512 pixel image is a square image with 512 pixels in width and height, commonly used for avatars, icons, and social media posts.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-blue-600">Can I Convert an Image to 512x512 Without Losing Quality?</h3>
            <p className="text-gray-700">Yes! Our image converter ensures your images are resized to 512x512 pixels without losing quality, maintaining sharpness and detail.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-blue-600">How Do I Resize Image to 512x512?</h3>
            <p className="text-gray-700">Just upload your image to our online tool, and it will automatically resize the image to 512x512 pixels. You can also crop if needed before downloading.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-blue-600">Is This Image Resizer Free?</h3>
            <p className="text-gray-700">Absolutely! Our 512x512 image converter is a free online tool, requiring no sign-ups or downloads.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Resize Image to 512x512 Pixels?</h2>
        <p className="text-xl mb-8 text-blue-100">Don't wait—resize your images to 512x512 with our free, fast, and reliable image resizer. Upload now and get pixel-perfect results in seconds!</p>
        <ScrollTopButton ctaText="Start Resizing Now" />
      </section>

    </div>
  );
}
