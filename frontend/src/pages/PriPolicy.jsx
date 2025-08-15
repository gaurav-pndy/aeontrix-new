import React from "react";
import SEO from "../components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-6xl relative text-lg mx-auto px-4 py-8 pb-20 text-seasalt space-y-10">
      <SEO
        title="Privacy Policy | Aeontrix"
        description="Learn how Aeontrix handles your data securely."
        keywords="privacy policy, Aeontrix, data protection, AI automation"
        url="https://aeontrix.com/privacy-policy"
        canonical="https://aeontrix.com/privacy-policy"
        ogTitle="Privacy Policy | Aeontrix"
        ogDescription="Understand Aeontrix's data protection practices."
        image="https://aeontrix.com/aeontrix-emblem.png"
        twitterSite="@aeontrix"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy | Aeontrix",
          url: "https://aeontrix.com/privacy-policy",
          description:
            "Aeontrix's Privacy Policy outlines how we collect, use, and protect your data.",
          publisher: {
            "@type": "Organization",
            name: "Aeontrix",
            logo: {
              "@type": "ImageObject",
              url: "https://aeontrix.com/aeontrix-emblem.png",
            },
          },
        }}
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Privacy Policy - Aeontrix
      </h1>

      <div className="space-y-2">
        <p className=" font-bold text-spring">Effective Date: 20 July 2025</p>
        <p className="font-bold text-spring">
          <strong>Operated By:</strong> Aeontrix, the AI Division of Pasovit
          Technologies Private Limited
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-2">1. Overview</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          Aeontrix designs, builds, and manages AI powered automation systems.
          This policy explains how we handle your data when you use our
          services, download our lead magnets, or subscribe to our newsletter.{" "}
          <br />
          By interacting with Aeontrix (via services, website forms, or content
          downloads), you consent to the data practices outlined here.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">2. What Data We Collect</h2>
        <div className="md:ml-4">
          <h3 className="text-xl font-semibold mb-1 mt-4">
            a. Stakeholder Interview Data (AI Audit)
          </h3>
          <p className="text-[#F8F9FB]/80 md:ml-4">
            <p className="text-[#F8F9FB]/80 md:ml-4">
              Aeontrix provides a suite of AI-driven solutions including:{" "}
            </p>
          </p>
          <ul className="list-disc md:ml-4 list-inside text-[#F8F9FB]/80 space-y-1">
            <li>• Role/title and department</li>
            <li>• Qualitative input on workflows, pain points, and goals</li>
            <li>
              • Opinions or perspectives on internal tools, processes, and
              automation potential
            </li>
            <li>• Operational challenges and business context</li>
          </ul>
          <p className="mt-2 text-[#F8F9FB]/80">
            This information is used solely to assess your organization's
            readiness and opportunities for AI transformation. With explicit
            consent, stakeholder interviews may be audio or video recorded for
            internal analysis. These recordings are never shared externally.{" "}
          </p>

          <h3 className="text-xl font-semibold mb-1 mt-4">
            a. Client & Subscriber Data
          </h3>
          <ul className="list-disc md:ml-4 list-inside text-[#F8F9FB]/80 space-y-1">
            <li>Name, email address, job title, company (if provided)</li>
            <li>API keys, tokens (encrypted) – for clients</li>
            <li>Newsletter preferences and subscription status</li>
          </ul>
          <p className="mt-2 text-[#F8F9FB]/80">
            We collect this information through:
          </p>
          <ul className="list-disc md:ml-4 list-inside text-[#F8F9FB]/80 space-y-1">
            <li>Service intake and onboarding forms</li>
            <li>Newsletter sign-up forms</li>
            <li>
              Lead magnets (e.g., downloadable guides or templates) with opt-in
              checkboxes for weekly emails
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-1 mt-4">
            b. System & AI Performance Data (for Clients)
          </h3>
          <ul className="list-disc md:ml-4 list-inside text-[#F8F9FB]/80 space-y-1">
            <li>Chatbot and workflow logs</li>
            <li>Lead funnel data (AI SDR)</li>
            <li>Engagement metrics (AI Marketing/Influencer Studio)</li>
            <li>AI agent feedback loops and analytics</li>
          </ul>

          <h3 className="text-xl font-semibold mb-1 mt-4">
            c. End-User Data (for Managed/Hosted Services)
          </h3>

          <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
            <li>Only accessed with permission from the client</li>
            <li>
              Includes chat transcripts, AI responses, and behavioral metrics
            </li>
            <li>Used strictly for improvement, debugging, and optimization</li>
          </ul>
          <p className="text-[#F8F9FB]/80 md:ml-4">
            We do <b>not</b> use end-user data for profiling, marketing, or
            resale.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Data</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">We use your data to:</p>
        <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>
            Analyze stakeholder input to shape AI transformation proposals,
            ensure contextual accuracy, and prioritize automation opportunities.
          </li>
          <li>Deliver AI services</li>
          <li>Send requested resources (e.g., lead magnets)</li>
          <li>
            Send newsletters and educational content (only to subscribers who’ve
            opted in)
          </li>
          <li>Improve performance and customer experience</li>
          <li>Comply with legal and security obligations</li>
        </ul>
        <p className="mt-2 md:ml-4 text-[#F8F9FB]/80">
          You can unsubscribe from newsletters at any time via the link at the
          bottom of each email.
        </p>
        <p className="text-[#F8F9FB]/80 mt-4 md:ml-4">
          We use client-provided data only to:
        </p>
        <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>Set up and configure AI agents or chatbot services</li>
          <li>Provide technical support and maintenance</li>
          <li>Improve service design and implementation quality</li>
          <li>Send essential service-related communications</li>
        </ul>
        <p className="mt-2 md:ml-4 text-[#F8F9FB]/80">
          We do not sell, lease, or share your data with unauthorized third
          parties.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          4. Data Storage & Retention
        </h2>
        <ul className="list-disc md:ml-4 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>
            Subscriber and client data is stored securely using our email and
            project management platforms
          </li>
          <li>API credentials are encrypted</li>
          <li>
            Data is retained only as long as necessary for service or content
            delivery
          </li>
          <li>Newsletter data is retained until you opt out</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          5. Use of Third-Party Platforms
        </h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          Aeontrix builds and deploys AI systems that operate on third-party
          platforms such as messaging tools, automation platforms, CRMs, and
          cloud services.
          <br />
          As part of our onboarding process, we will{" "}
          <strong>
            {" "}
            explicitly specify which platforms will be used for your project,
          </strong>{" "}
          allowing you to{" "}
          <strong>
            review their respective terms and privacy policies.
          </strong>{" "}
          <br />
          We only work with{" "}
          <strong>reliable and widely recognized platforms</strong> that
          maintain strong data protection practices. However, please note that:
        </p>
        <ul className="list-disc list-inside md:ml-4 text-[#F8F9FB]/80 space-y-1 mt-2">
          <li>
            Aeontrix does <strong>not control or store end-user data</strong>{" "}
            handled by these platforms.
          </li>
          <li>
            You are responsible for ensuring your own compliance with the terms
            and data practices of any third-party services used in your
            deployment.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Security Measures</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          We implement appropriate technical and organizational measures to
          safeguard all client and user data, including:
        </p>
        <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>
            <strong>Encryption of Sensitive Information: </strong> API tokens,
            credentials, and personal data are encrypted both at rest and in
            transit.
          </li>
          <li>
            <strong>Access Control: </strong> Stakeholder inputs, interview
            notes, and recordings (if applicable) are restricted to the Aeontrix
            project team through role-based access control (RBAC).
          </li>
          <li>
            <strong>Audit Logging: </strong> Access to sensitive data is logged
            and periodically reviewed.
          </li>
          <li>
            <strong>Storage Protocols: </strong> Interview recordings (if taken)
            are stored securely on encrypted drives or cloud storage with access
            restricted to relevant audit personnel.
          </li>
        </ul>
        <p className="mt-2 md:ml-4 text-[#F8F9FB]/80">
          We <b>do not share</b>, publish, or use interview insights outside
          your project scope. All data collected during the AI Audit, including
          stakeholder input, is handled with confidentiality and used
          exclusively to inform your AI transformation recommendations.
          <br />
          While we take strong measures to protect your data, no method of
          transmission or storage is 100% secure. We continuously review our
          practices to ensure ongoing compliance and data protection.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">7. Your Rights</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">You have the right to: </p>
        <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>Access, correct, or delete your personal data</li>
          <li>Withdraw consent for marketing emails</li>
          <li>
            Request complete deletion of your records (subject to
            service-related data retention limitations)
          </li>
        </ul>
        <p className="mt-2 md:ml-4 text-[#F8F9FB]/80">
          Contact us at{" "}
          <a
            target="_blank"
            href="mailto:contact@aeontrix.com"
            className="underline text-[#00FF93]"
          >
            contact@aeontrix.com
          </a>
          . We’ll respond within 5 business days.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">8. Children’s Privacy</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          Our services are <strong>not directed to children under 16,</strong>{" "}
          and we do not knowingly collect any data from them.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">9. Policy Updates</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          We may update this Privacy Policy periodically. Any changes will be
          posted on our website and, where significant, notified via email to
          registered clients.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
        <address className="not-italic md:ml-4 text-[#F8F9FB]/80 leading-relaxed">
          <strong>Aeontrix (Pasovit Technologies Private Limited)</strong>
          <br />
          715 A, Spencer Plaza, 7th Floor, No. 768-769, Anna Salai
          <br />
          Chennai, Tamil Nadu 600 002, India
          <br />
          Email:{" "}
          <a
            target="_blank"
            href="mailto:contact@aeontrix.com"
            className="underline italic text-[#00FF93]"
          >
            contact@aeontrix.com
          </a>
          {" | "}
          <a
            target="_blank"
            href="mailto:contact@pasovit.com"
            className="underline italic text-[#00FF93]"
          >
            contact@pasovit.com
          </a>
        </address>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          11. Reference to Parent Company Policy
        </h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          This Privacy Policy is supplemental to the broader privacy framework
          maintained by our parent company. For additional legal and operational
          context, refer to:
          <a
            target="_blank"
            href="https://www.pasovit.com/privacy"
            className="underline italic text-[#00FF93]"
          >
            Pasovit Technologies Privacy Policy
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
