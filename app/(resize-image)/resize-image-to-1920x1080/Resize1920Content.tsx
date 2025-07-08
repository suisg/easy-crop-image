import ScrollTopButton from "@/components/ScrollTopButton";

export default function Resize1920Content() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Features Section */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Features of Our Free Online Image Resizer</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Resize Images to 1920x1080 Without Losing Quality</h3>
            <p className="text-gray-600">Effortlessly resize an image to the perfect 1920x1080 pixel resolution using our online image resizer. Our advanced algorithms ensure your image stays sharp and clear, preserving every detail without losing quality.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Upload and Convert Images to 1920x1080 Instantly</h3>
            <p className="text-gray-600">With our free online tool, simply upload your photo in any format (JPG, PNG, etc.) and convert images to 1920x1080 in seconds. No software or sign-up needed—just fast, reliable image resizing.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Maintain Aspect Ratio with Smart Crop Options</h3>
            <p className="text-gray-600">Our image resizer lets you resize photos to 1920x1080 while keeping the original dimension proportions intact. Use the crop feature to perfectly fit your image to 1920x1080 without distortion, ideal for professional results.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Upscale or Adjust Resolution for Any Project</h3>
            <p className="text-gray-600">Need to upscale or fine-tune your image to the 1920x1080 pixel resolution? Our image converter offers flexible options to adjust dimensions, ensuring compatibility with HD displays, social media, and more.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Download Your Resized Image Instantly</h3>
            <p className="text-gray-600">Once you resize an image to 1920x1080, download it immediately with a single click. Our online tool makes the process seamless, saving your resized photo in high quality for any use.</p>
          </div>
        </div>
      </section>

      {/* Aspect Ratio Section */}
      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Maintaining Aspect Ratio When Resizing to 1920x1080</h2>
        <p className="text-gray-700 mb-6">For the 16% of users concerned about aspect ratio, our tool offers smart resizing options. The 1920x1080 resolution (16:9 aspect ratio) is ideal for Full HD content, but mismatched aspect ratios can distort images. Our resizer includes:</p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 text-xl">🔒</span>
            </div>
            <h3 className="font-semibold mb-2">Aspect Ratio Lock</h3>
            <p className="text-sm text-gray-600">Automatically preserve your image's original proportions.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 text-xl">✂️</span>
            </div>
            <h3 className="font-semibold mb-2">Crop or Pad Options</h3>
            <p className="text-sm text-gray-600">Adjust images to fit 1920x1080 without stretching.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 text-xl">👁️</span>
            </div>
            <h3 className="font-semibold mb-2">Preview Feature</h3>
            <p className="text-sm text-gray-600">See how your image will look before downloading.</p>
          </div>
        </div>
        
        <p className="text-gray-700">Whether you're resizing photos, graphics, or screenshots, our tool ensures your images look professional without distortion.</p>
      </section>

      {/* How to Use Section */}
      <section className="text-center space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">How to Resize Your Image to 1920x1080</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">Our intuitive process makes resizing effortless:</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="font-semibold mb-2">Upload your image</h3>
            <p className="text-gray-600">(supports JPG, PNG, and more).</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="font-semibold mb-2">Choose 1920x1080 resolution</h3>
            <p className="text-gray-600">or fine-tune aspect ratio settings.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="font-semibold mb-2">Download your resized image</h3>
            <p className="text-gray-600">instantly.</p>
          </div>
        </div>
        
        <div className=" py-4 px-8 rounded-lg inline-block">
          <p className="text-lg font-semibold">Start resizing now and get perfect 1920x1080 images in just a few clicks!</p>
          <ScrollTopButton ctaText="Try It Now" />
        </div>
      </section>

      {/* Why 1920x1080 Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why 1920x1080 Resolution?</h2>
        <p className="text-gray-700 mb-6">The 1920x1080 resolution, or Full HD, is a standard for high-definition content. It's widely used for:</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">📱 Social Media</h3>
            <p className="text-sm text-gray-600">Instagram, Facebook posts</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">📺 Video Content</h3>
            <p className="text-sm text-gray-600">YouTube thumbnails and backgrounds</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">💻 Desktop</h3>
            <p className="text-sm text-gray-600">Wallpapers and presentations</p>
          </div>
        </div>
        
        <p className="text-gray-700 mt-6">Resize your images to 1920x1080 to ensure compatibility and stunning visuals across platforms.</p>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Frequently Asked Questions (FAQ)</h2>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-blue-600">Can I resize images to 1920x1080 without software?</h3>
            <p className="text-gray-700">Yes! Our online image resizer requires no downloads, making it perfect for quick, hassle-free image resizing.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-blue-600">How do I maintain the aspect ratio when resizing?</h3>
            <p className="text-gray-700">Our image resizer automatically locks the aspect ratio or lets you crop to fit 1920x1080 pixel resolution without distortion.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-blue-600">Is this free online image resizer really free?</h3>
            <p className="text-gray-700">Absolutely! Resize unlimited images to 1920x1080 for free, with no hidden costs.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Resize to 1920x1080?</h2>
        <p className="text-xl mb-8 text-blue-100">Join thousands of users who trust our online tool to resize images online. Upload now and get your 1920x1080 images in seconds!</p>
        <ScrollTopButton ctaText="Start Resizing" />
      </section>

      {/* Other Tools */}

    </div>
  );
}
