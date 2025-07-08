import ScrollTopButton from "@/components/ScrollTopButton";

export default function Resize3000Content() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* How to Resize Section */}
      <section className="text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-gray-800">
          How to Resize Image to 3000x3000
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              1
            </div>
            <p className="text-gray-700">Upload your image (JPG, PNG, GIF, WebP, etc.)</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              2
            </div>
            <p className="text-gray-700">Our resizer automatically sets dimensions to 3000 x 3000 pixels</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              3
            </div>
            <p className="text-gray-700">Choose to crop or keep the aspect ratio</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              4
            </div>
            <p className="text-gray-700">Select output format (JPG, PNG, WebP)</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 md:col-span-2 lg:col-span-2">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              5
            </div>
            <p className="text-gray-700">Download your perfectly resized image</p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section>
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center text-gray-800">
          Why Choose Our 3000x3000 Pixel Image Converter
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-700">Resize images to exact 3000×3000 pixels without losing quality</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-700">Support for all common image formats (JPEG, PNG, GIF, TIFF, BMP, HEIC)</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-700">User-friendly interface - easily resize with simple drag-and-drop</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-700">Options to crop or maintain square aspect ratio</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-700">Completely free to use with no watermarks</p>
          </div>
          <div className="flex items-start space-x-3 md:col-span-2">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-700">Secure local processing - your files never leave your browser</p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center text-gray-800">
          Convert Images to 3000x3000 Format for Any Purpose
        </h2>
        <p className="text-lg text-center mb-8 text-gray-600">
          Our image resize tool is perfect when you need to resize for:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <p className="text-gray-700 font-medium">E-commerce product photos (Amazon, eBay, Etsy)</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <p className="text-gray-700 font-medium">Social media profiles and posts</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <p className="text-gray-700 font-medium">Digital artwork and graphic design</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <p className="text-gray-700 font-medium">Print materials requiring high resolution</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <p className="text-gray-700 font-medium">Website images and thumbnails</p>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section>
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center text-gray-800">
          Technical Specifications of Our Photo Resizer
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-blue-200">
                <span className="font-semibold text-gray-700">Output resolution:</span>
                <span className="text-blue-600 font-medium">3000×3000 pixels</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-blue-200">
                <span className="font-semibold text-gray-700">File formats:</span>
                <span className="text-blue-600 font-medium">JPG, PNG, WebP, JPEG</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-blue-200">
                <span className="font-semibold text-gray-700">File size:</span>
                <span className="text-blue-600 font-medium">Process images up to 20MB</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-blue-200">
                <span className="font-semibold text-gray-700">Image dimensions:</span>
                <span className="text-blue-600 font-medium">Automatically adjust to 3000px</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-blue-200">
                <span className="font-semibold text-gray-700">Quality:</span>
                <span className="text-blue-600 font-medium">Lossless or optimized file size</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Resize and convert your images to exact 3000 x 3000 pixels now!
        </h2>
        <p className="text-lg mb-6">
          No registration required. Try our 3000x3000 image converter today!
        </p>
        <ScrollTopButton ctaText="Get Started - It's Free!" />
      </section>

    </div>
  );
}
