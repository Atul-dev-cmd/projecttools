export default function TermsOfService() {
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
            Terms of Service
          </h1>

          <p className="mt-4 text-slate-500">
            Last updated: August 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 leading-8 text-slate-300">

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Acceptance of Terms
            </h2>

            <p>
              By accessing and using ProjectTools, you agree to
              comply with these Terms of Service. If you do not
              agree with these terms, please do not use the website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Use of Our Tools
            </h2>

            <p>
              ProjectTools provides online tools designed to help
              users with content creation and other digital tasks.
              You agree to use these tools only for lawful purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Acceptable Use
            </h2>

            <p>
              You must not use ProjectTools to create, distribute,
              or promote content that violates applicable laws or
              the rights of others.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Intellectual Property
            </h2>

            <p>
              The ProjectTools website, design, branding, code,
              and original content may be protected by applicable
              intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Disclaimer of Warranties
            </h2>

            <p>
              ProjectTools is provided on an &quot;as is&quot; and
              &quot;as available&quot; basis. We do not guarantee
              that every tool or feature will always be available,
              accurate, or error-free.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Limitation of Liability
            </h2>

            <p>
              To the extent permitted by applicable law, ProjectTools
              shall not be responsible for losses or damages resulting
              from the use or inability to use the website or its tools.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Changes to These Terms
            </h2>

            <p>
              We may update these Terms of Service from time to time.
              Any changes will be reflected on this page with an
              updated date.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Contact
            </h2>

            <p>
              If you have questions about these Terms of Service,
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