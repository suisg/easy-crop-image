import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import ScrollTopButton from "@/components/ScrollTopButton"
import FourWaysToSquare from "@/components/squareImage/FourWaysToSquare"
import Link from "next/link"
import { Testimonials } from "@/components/shared/Testimonials"

const testimonialsData = {
  title: "What Our Users Say About Making Images Square",
  testimonials: [
    {
      quote: "EasyCrop is perfect to make photo square for Instagram! The blur background keeps my full photo, creating a polished square image in seconds.",
      author: "Sarah M., Social Media Manager",
      bgColor: "bg-blue-50"
    },
    {
      quote: "This tool makes it so easy to make image square for my blog! I upload, crop or resize, and get a perfect square image instantly.",
      author: "James T., Blogger",
      bgColor: "bg-green-50"
    },
    {
      quote: "As a business owner, I use EasyCrop to make image square for my store. The solid color background option ensures a clean square image every time.",
      author: "Emily R., E-commerce Entrepreneur",
      bgColor: "bg-yellow-50"
    }
  ],
  rating: 4.9,
  reviewCount: 189
}

export default function SquareContent() {
  return (
    <div className="w-full mx-auto">
      <section className="bg-gray-200 mt-20 py-12 px-2">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Make an image square online for free</h2>
          <p className="max-w-4xl mx-auto mt-6 text-lg text-gray-600 ">
            Instantly transform any rectangle or rectangular image into a perfect square photo with our powerful square
            image resizer. Whether you want to <Link className="text-blue-500" href="/crop">crop image</Link>, resize image to square, or create a visually appealing
            square image for social media, our image tool works directly in your web browser — completely online for
            free.
          </p>
        </div>
      </section>

      {/* How to Square Image Section */}
      <section className="py-16">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">How to Make an Image Square: Quick Steps</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <p className="text-lg">Upload the image you want to make square.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <p className="text-lg mb-3">Choose a method:</p>
                <div className="ml-4 space-y-2">
                  <p className="text-gray-700"><strong>Blur Background:</strong> Adds a blurred square background to keep the whole image.</p>
                  <p className="text-gray-700"><strong>Color Background:</strong> Adds a solid color square background for a clean look.</p>
                  <p className="text-gray-700"><strong>By Scaling:</strong> Stretch the short side or compress the long side to make image square.</p>
                  <p className="text-gray-700"><strong>By Cropping:</strong> Move and resize the square crop frame to create a square image.</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <p className="text-lg">Preview the result and download your square image.</p>
            </div>
          </div>
        </div>
      </section>


      <FourWaysToSquare />


      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center">Features of Square Image Tool</h2>
          <div className="grid gap-10 mt-16 md:grid-cols-2">
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">Effortlessly Square Image online</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  With just one click, convert your original image into a square image. Our <Link className="text-blue-500" href="/image-resizer">image resizer</Link> allows you to
                  crop, resize, and make an image square without cropping important parts. Simply upload your image,
                  select the area you want, and let our easy-to-use image tool create a perfectly squared
                  version, maintaining the original aspect ratio or adjusting as needed.

                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">Multiple and perfect square image Options</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Square image your way: crop the image to fit, use blur to fill the background around the sides of
                  the image, or add a solid color background. Create a square image that's visually appealing and fits
                  any size requirements for Instagram, Facebook, or <Link className="text-blue-500" href="/youtube-thumbnail-resizer">YouTube thumbnails</Link>.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">Easy-to-Use Image Tool – Online for Free</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Drag and drop your photo or upload your image file in JPG or PNG image formats. The tool supports
                  high-resolution images up to 6000x6000 px and works directly in your browser—no downloads or signups
                  required. Free to use and secure.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">Customizable and Fast image square resize</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Resize an image, crop image, or make the image into perfect squares in seconds. Adjust the
                  background color, blurred version, or crop photos to highlight the most important parts of your
                  original image.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Use Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center">Why Use Our Square Image Tool?</h2>
          <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-4">
              <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500" />
              <div>
                <h3 className="font-semibold">Perfect Square Images</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Instantly make image square for profile pictures, thumbnails, or social media posts.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500" />
              <div>
                <h3 className="font-semibold">No Loss of Quality</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">Maintain quality for JPG and PNG files.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500" />
              <div>
                <h3 className="font-semibold">Flexible Formatting</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Change the aspect ratio, crop image to square, and select the area of the image you want to keep.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500" />
              <div>
                <h3 className="font-semibold">User-Friendly</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Use square cropping and resizing options even if you're not a photo editing expert.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500" />
              <div>
                <h3 className="font-semibold">Tool is Completely Free</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">Use our free online tool any time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials testimonialsData={testimonialsData} />

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold">
            Make image square, crop picture to square with our free online tool now!
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Your go-to solution to make photo square for all your needs. Try it now and create a perfectly squared, professional image in seconds!
          </p>
          <ScrollTopButton ctaText="Square Your Image Now" />
        </div>
      </section>

    </div>
  )
}
