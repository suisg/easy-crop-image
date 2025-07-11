import type { Metadata } from "next";
import AvatarCropperPanel from "@/components/avatarCropper/AvatarCropperPanel";
import ScrollTopButton from "@/components/ScrollTopButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Online Avatar Cropper - Crop Your Discord PFP & Profile Picture - EasyCrop",
  description: "Crop avatars for Discord, PFP, and more with our free online avatar cropper. Resize, adjust, and preview profile pictures in real-time without losing quality.",
  alternates: {
    canonical: "https://www.easycropimage.com/avatar-cropper",
  },
};

export default function AvatarCropperPage() {

  return (
    <>
      <main className="min-h-screen flex flex-col items-center px-2 pt-20 bg-white">
        <div className="w-full max-w-6xl flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-3xl font-bold text-center mb-2">
          Free Online Avatar Cropper: <br /> Crop Your Discord PFP and Profile Picture Perfectly 
          </h1>
          <p className="text-sm lg:text-lg text-center">
          Easily crop your avatar for Discord, PFP, and social media with our user-friendly, free online tool. Resize, adjust, and preview in real-time to create a stunning profile image!
          </p>
        </div>
        <AvatarCropperPanel />

      
      {/* Content Section */}
      <div className="w-full max-w-4xl mx-auto px-4 py-16 space-y-12">
        {/* How to crop an avatar */}
        <section className="space-y-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">How to crop an avatar</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Want to crop a perfect Discord or PFP avatar? Follow these simple steps to create a profile picture that fits any platform using our free online cropping tool.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Upload Your Image</h3>
                  <p className="text-gray-600">Select and upload your photo to our cropping tool.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Choose Your Frame</h3>
                  <p className="text-gray-600">Pick Circle, <Link className="text-blue-500" href="/square-image">Square</Link>, or Both to crop your avatar.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Adjust & Resize</h3>
                  <p className="text-gray-600">Zoom, drag, or resize your photo to fit the fixed frame with real-time previews.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Download</h3>
                  <p className="text-gray-600">Save your cropped avatar in PNG format, ready for Discord, Twitter, or any platform.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="space-y-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Features of Our avatar cropper</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our online avatar cropper offers powerful editing features to crop avatars without losing quality, making it ideal for Discord, PFP, and more.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Fixed Crop Frames</h3>
              <p className="text-gray-600">Choose Circle, Square, or Both for versatile avatar cropping.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Real-Time Previews</h3>
              <p className="text-gray-600">Preview your avatar in four sizes as you adjust and <Link className="text-blue-500" href="/image-resizer">resize your photos</Link>.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Zoom & Drag Controls</h3>
              <p className="text-gray-600">Easily crop an avatar by zooming and dragging within the fixed frame.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">High-Quality Output</h3>
              <p className="text-gray-600">Download avatar images in PNG formats without losing quality.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Completely Free</h3>
              <p className="text-gray-600">Crop your profile picture with our free online tool, no sign-up required.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Our Tool */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Why Choose Our Avatar Cropping Tool?</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Our <Link className="text-blue-500" href="/discord-pfp-cropper">pfp cropper</Link> is designed for seamless avatar cropping, perfect for Discord profile pictures, social media PFPs, and more.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Optimized for Discord and PFP</h3>
              <p className="text-gray-700 leading-relaxed">
                Crop your Discord avatar or PFP with precision using our discord avatar cropper. Adjust and resize your photos to fit profile picture dimensions without distortion.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast and Free Online Cropper</h3>
              <p className="text-gray-700 leading-relaxed">
                Our free online avatar cropper lets you crop images quickly. No downloads or fees—just upload, crop, and download your profile image in high-quality PNG.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Specific Cropping Tools for Perfect discord Avatars</h3>
              <p className="text-gray-700 leading-relaxed">
                Our avatar <Link className="text-blue-500" href="/crop">cropper tools</Link> make it easy to crop and edit photos to fit any platform, from Discord to social media, without losing quality.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seamless Avatar Cropping</h3>
              <p className="text-gray-700 leading-relaxed">
                With our online resize image tool, you can crop your avatar with precision. Zoom and drag to create avatar pictures that fit perfectly in circle or square frames.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supports Multiple Platforms</h3>
              <p className="text-gray-700 leading-relaxed">
                Need to crop a Discord profile or PFP for Twitter? Our cropping tool supports various file formats, ensuring your photos fit profile picture dimensions across platforms.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">FAQs About Avatar Cropper Tools</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Can I crop avatars in both circle and square shapes?</h3>
              <p className="text-gray-700">Yes, select "Both" to download two images: one circular and one square, perfect for versatile use.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Is this avatar cropper free to use?</h3>
              <p className="text-gray-700">Absolutely! Our free online tool to crop avatars is completely free, with no hidden fees or sign-ups.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Can I zoom and drag to select the crop area?</h3>
              <p className="text-gray-700">Yes, our cropper allows you to zoom in/out and drag your image within the fixed frame for precise cropping.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Is this tool optimized for Discord profile pictures?</h3>
              <p className="text-gray-700">Yes, our discord avatar cropper is designed to crop profile pictures that meet Discord's circular display requirements.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">What file formats are supported?</h3>
              <p className="text-gray-700">Download your cropped avatar in PNG or other common formats, ensuring high-quality results every time.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Ready to Crop Your Profile Picture?</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Transform your photos into perfect avatars with our free online avatar cropper. Crop your Discord PFP or social media profile picture now and stand out!
          </p>
          <ScrollTopButton ctaText="Crop Your Avatar Now" />
        </section>
      </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
