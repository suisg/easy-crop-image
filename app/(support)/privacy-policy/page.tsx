import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - EasyCrop",
  description: "Privacy policy for EasyCrop",
  alternates: {
    canonical: "https://www.easycropimage.com/privacy-policy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-4 pt-20">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4 text-gray-700">
        Your privacy is important to us. By using easycropimage.com, you agree to the following:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>
          We do not collect, store, or share your images or personal data.
        </li>
        <li>
          All image processing happens locally in your browser.
        </li>
        <li>
          We use Google Analytics and Microsoft Clarity to analyze website usage and improve user experience. These services may collect anonymous data about your visit, including pages viewed and time spent on the site. For more information, please visit{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Google Analytics Privacy Policy</a> and{" "}
          <a href="https://clarity.microsoft.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Microsoft Clarity Privacy Policy</a>.
        </li>
        <li>
          We may update this policy at any time. Please check this page for changes.
        </li>
      </ul>
      <p className="mt-6 text-gray-600">
        If you have questions, please contact us at <span className="text-blue-500 hover:underline">contact@easycropimage.com</span>.
      </p>
    </main>
  );
} 