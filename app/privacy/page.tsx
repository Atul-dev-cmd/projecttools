export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-12">
          <a
            href="/"
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            ← Back to ProjectTools
          </a>

          <h1 className="mt-8 text-4xl font-extrabold md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-slate-500">
            Last updated: August 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 leading-8 text-slate-300">

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Introduction
            </h2>

            <p>
              Welcome to ProjectTools. We respect your privacy and
              are committed to protecting information related to your
              use of our website and tools.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Information We Collect
            </h2>

            <p>
              ProjectTools is designed to provide simple online tools.
              We may collect information that you voluntarily provide
              when using certain features of the website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              How We Use Information
            </h2>

            <p>
              Information may be used to operate, maintain, improve,
              and secure ProjectTools and its features.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Cookies
            </h2>

            <p>
              ProjectTools may use cookies or similar technologies
              to improve website functionality and understand how
              visitors use the website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Third-Party Services
            </h2>

            <p>
              Some features may use third-party services. Those
              services may have their own privacy policies and terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Contact
            </h2>

            <p>
              If you have questions about this Privacy Policy,
              please contact the ProjectTools team.
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/10 pt-6 text-sm text-slate-600">
          © 2026 ProjectTools. All rights reserved.
        </div>

      </div>
    </main>
  );
}