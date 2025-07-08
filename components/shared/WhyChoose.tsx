import { LucideIcon } from "lucide-react"
import React from "react"

interface Feature {
  icon: LucideIcon
  headline: string
  description: string
}

interface WhyChooseProps {
  title: string
  subtitle: string | React.ReactNode
  features: Feature[]
}

export default function WhyChoose({ title, subtitle, features }: WhyChooseProps) {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:shadow-purple-200/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl  mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Headline */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                  {feature.headline}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}