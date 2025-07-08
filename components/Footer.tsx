import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-12 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Brand & Legal Column */}
          <div className="space-y-4">
            <div>
              <Link
                href="/"
                className="flex items-center text-xl font-bold text-blue-600 tracking-tight mb-3 inline-flex"
              >
                <Image
                  src="/EasyCrop-image-cropper-logo.png"
                  alt="EasyCrop Logo"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                EasyCrop
              </Link>
              <p className="text-sm text-gray-600 mb-4">
                Professional online image editor.
              </p>
            </div>
          </div>

          {/* support Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Support</h4>
            <div className="space-y-2">
              <Link href="/contact-us" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Link href="/about-us" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/privacy-policy" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Privacy
              </Link>
              <Link href="/terms-of-service" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Terms
              </Link>
              <Link href="/changelog" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Changelog
              </Link>
              <Link href="/blog" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Crop Tools Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Crop Tools</h4>
            <div className="space-y-2">
              <Link href="/crop" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Image Cropper
              </Link>
              <Link href="/circle-crop" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Circle Crop
              </Link>

              <Link href="/avatar-cropper" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Avatar Cropper
              </Link>
              <Link href="/discord-pfp-cropper" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Discord PFP Cropper
              </Link>
            </div>
          </div>

          {/* Resize Tools Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Resize Tools</h4>
            <div className="space-y-2">
              <Link href="/image-resizer" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Image Resizer
              </Link>
              <Link href="/300x300-image-converter" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                300x300 image
              </Link>
              <Link href="/512x512-image-converter" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                512x512 image
              </Link>
              <Link href="/3000x3000-image-converter" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                3000x3000 image
              </Link>
              <Link href="/resize-image-to-1920x1080" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                1920x1080 image
              </Link>
              <Link href="/youtube-thumbnail-resizer" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                YouTube Thumbnail Resizer
              </Link>
            </div>
          </div>

          {/* Other Tools Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Other Tools</h4>
            <div className="space-y-2">
              <Link href="/instagram-grid-maker" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Instagram Grid Maker
              </Link>

              <Link href="/square-image" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Make Image Square
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} EasyCropImage.com. All rights reserved. No server uploads, keeping your privacy secure.
          </p>
        </div>
      </div>
    </footer>
  );
} 