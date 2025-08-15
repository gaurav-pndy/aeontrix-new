import React from "react";
import SEO from "../components/SEO";

const TermsOfService = () => {
  return (
    <div className="max-w-6xl relative text-lg mx-auto px-4 py-8 pb-20 text-seasalt space-y-10">
      <SEO
        title="Terms of Service | Aeontrix"
        description="Review Aeontrix's terms for AI automation services."
        keywords="terms of service, Aeontrix, AI services, business automation"
        url="https://aeontrix.com/terms-of-service"
        canonical="https://aeontrix.com/terms-of-service"
        ogTitle="Terms of Service | Aeontrix"
        ogDescription="Understand the terms governing Aeontrix's AI services."
        image="https://aeontrix.com/aeontrix-emblem.png"
        twitterSite="@aeontrix"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms of Service | Aeontrix",
          url: "https://aeontrix.com/terms-of-service",
          description:
            "Aeontrix's Terms of Service outline the conditions for using our AI automation services.",
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
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Terms of Service - Aeontrix
      </h1>

      <div className="space-y-2">
        <p className="text-[#F8F9FB]/70 font-bold text-spring">
          Effective Date: 20 July 2025
        </p>
        <p className="text-[#F8F9FB]/70 font-bold text-spring">
          <strong>Operated By:</strong> Aeontrix, the AI Division of Pasovit
          Technologies Private Limited
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          By accessing or using any of the services offered by Aeontrix (“we,”
          “our,” or “us”), you (“Client” or “User”) agree to be bound by these
          Terms and Conditions. If you do not agree to these terms, you must not
          use our services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">2. Nature of Services</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          Aeontrix provides a suite of AI-driven solutions including:{" "}
        </p>

        <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>
            <strong>AI SDR: </strong> Multi Channel Outreach with follow-ups,
            Database Reactivation, CRM integration
          </li>
          <li>
            <strong>AI Project Manager: </strong> Your own Customizable AI
            Influencer Model/Mascot
          </li>
          <li>
            <strong>AI Marketing Suite: </strong> Managing Various Social Media
            Platforms from a single place, powered by AI
          </li>
          <li>
            <strong>AI Business Partner: </strong> Dedicated AI Dev Team at your
            disposal
          </li>
          <li>
            <strong>AI Customer Support: </strong> Chatbots, Voice AI, E-mail
            support automation, CRM integration
          </li>
          <li>
            <strong>AI Secretary: </strong> Personalized, Branded Replicas with
            Knowledge
          </li>
        </ul>
        <p className="mt-2 md:ml-4 text-[#F8F9FB]/80">
          These services are offered as configuration, integration, and
          deployment of AI-powered systems.{" "}
          <strong>
            We do not own or manage the data pipelines, hosting environments, or
            end-user communication platforms
          </strong>{" "}
          used in these implementations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          3. Client Responsibilities
        </h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          Clients are solely responsible for:{" "}
        </p>
        <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>
            <strong>
              Providing required credentials, licenses, and platform access
            </strong>{" "}
            (e.g., WhatsApp API key, Slack bot tokens, etc).
          </li>
          <li>
            Ensuring <strong>all third-party accounts used</strong> are active,
            legitimate, and compliant with their respective terms of service.
          </li>
          <li>
            Reviewing and approving the agent outputs before any outbound
            communications are sent.
          </li>
          <li>
            Managing data collection practices, ensuring consent and compliance
            with local data protection laws (e.g., GDPR, CCPA).
          </li>
          <li>
            Paying <strong>Platform fees</strong>, unless specifically mentioned
            in contract upon client’s request (e.g., Zapier tasks, n8n hosting).
          </li>
        </ul>
        <p className="mt-2 md:ml-4 text-[#F8F9FB]/80">
          Delays due to client-side inaction may impact timelines or invalidate
          refund eligibility.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">4. Platform Disclaimer</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          Aeontrix integrates with third-party platforms including, but not
          limited to:
        </p>
        <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>
            Communication platforms such as Slack, WhatsApp, Telegram, Discord
          </li>
          <li>Make.com, n8n.io, Zapier</li>
          <li>Databases SQL, NoSQL, MongoDB, Supabase, etc.</li>
          <li>Notion, HubSpot, Salesforce, Google Workspace, etc.</li>
        </ul>
        <p className="mt-2 md:ml-4 text-[#F8F9FB]/80">
          We do <strong>not control, own,</strong> or <strong>guarantee</strong>{" "}
          the uptime, performance, or data policies of these platforms. Any data
          generated, stored, or transmitted via those platforms is{" "}
          <strong>governed by the respective platform</strong>, not by Aeontrix.{" "}
          <br />
          Clients are subject to those third-party terms of service and privacy
          policies.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          5. Client Data Access and AI Training (for Managed Services)
        </h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          For clients on a <strong>retainer or ongoing management plan</strong>,
          Aeontrix may access interaction logs, transcripts, or usage data from
          the AI agents we operate on your behalf. <br />
          This access is used strictly to:
        </p>
        <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>Monitor system performance</li>
          <li>Debug issues</li>
          <li>
            Continuously optimize or retrain the AI systems to improve outcomes
          </li>
        </ul>
        <p className="mt-2 md:ml-4 text-[#F8F9FB]/80">
          We do{" "}
          <strong>
            not use this data for any purposes outside your project
          </strong>
          , and we will never sell or share this information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. Intellectual Property
        </h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          Unless otherwise specified in a formal agreement:
        </p>
        <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>
            All <strong>custom-built AI workflows, code, and logic</strong>{" "}
            developed by Aeontrix remain the intellectual property of Aeontrix.
          </li>
          <li>
            Clients receive a{" "}
            <strong>non-exclusive, non-transferable license</strong> to use the
            deliverables within their organization.
          </li>
          <li>
            Any use of third-party tools remains under their respective licenses
            (e.g., open-source licenses, platform APIs).
          </li>
        </ul>
        <p className="mt-2 md:ml-4 text-[#F8F9FB]/80">
          If full IP transfer is required, it must be negotiated in advance and
          included in the service agreement.{" "}
        </p>{" "}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">7. Fees and Payment</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">Clients agree to:</p>
        <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>Pay all service fees as agreed upon via invoice or contract.</li>
          <li>
            Understand that delays in payment may result in{" "}
            <strong>pausing service</strong> or termination.
          </li>
          <li>
            Understand that usage-based charges (e.g., LLM API usage,
            third-party tools) may apply and are billed transparently or
            directly through the provider.
          </li>
          <li>
            Understand that the AI Audit fee is charged in advance and{" "}
            <b>credited</b> toward a full AI transformation engagement,
            effectively making it refundable in the form of service credit.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">8. Confidentiality</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          Both parties agree to protect confidential information exchanged
          during the engagement. This includes:
        </p>
        <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>Technical details </li>
          <li>Business processes </li>
          <li>Credentials (stored securely and only used as needed) </li>
          <li>End-user data (if accessed for performance tuning)</li>
        </ul>
        <p className="mt-2 md:ml-4 text-[#F8F9FB]/80">
          Confidentiality obligations continue beyond project completion.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          9. Limitation of Liability
        </h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          Aeontrix shall not be held liable for:
        </p>
        <ul className="list-disc md:ml-8 list-inside text-[#F8F9FB]/80 space-y-1">
          <li>Any indirect, incidental, or consequential damages.</li>
          <li>
            Errors resulting from incorrect platform credentials, expired
            tokens, or API rate limits.
          </li>
          <li>
            Violations of local laws caused by improper platform usage or data
            handling by the client.
          </li>
        </ul>
        <p className="mt-2 md:ml-4  text-[#F8F9FB]/80">
          Our maximum liability in any circumstance shall be{" "}
          <strong>
            limited to the fees paid for the affected service within the last 30
            days.
          </strong>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">10. Termination</h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          Aeontrix or the Client may terminate services with{" "}
          <strong>7 days written notice</strong>. Upon termination:
        </p>
        <ul className="list-disc list-inside md:ml-4 text-[#F8F9FB]/80 space-y-1 mt-2">
          <li>
            Aeontrix will transfer access to all deliverables developed up to
            the termination date.
          </li>
          <li>
            Refunds upon termination will be governed by our updated Refund &
            Cancellation Policy, including how the AI Audit fee is handled.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          11. Governing Law and Jurisdiction
        </h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          These terms shall be governed by and construed in accordance with the
          laws of <strong>India</strong>, specifically under the jurisdiction of{" "}
          <strong>Chennai, Tamil Nadu</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">12. Contact Information</h2>
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
          <br />
          Website:{" "}
          <a
            target="_blank"
            href="https://pasovit.com"
            className="underline italic text-[#00FF93]"
          >
            https://pasovit.com
          </a>
        </address>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          13. Reference to Parent Company Policies{" "}
        </h2>
        <p className="text-[#F8F9FB]/80 md:ml-4">
          Aeontrix operates under the legal and corporate framework of{" "}
          <b>Pasovit Technologies Private Limited</b>. For any matters not
          explicitly covered in these Terms & Conditions, including legal
          rights, liabilities, and definitions of service, please refer to:{" "}
          <a
            href="https://pasovit.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00FF93] italic"
          >
            https://pasovit.com/terms{" "}
          </a>
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
