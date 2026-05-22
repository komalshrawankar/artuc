import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Termcondition = () => {
  return (
    <>
      <Navbar />

      <section style={{ background: "#fff", padding: "70px 15px" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <span
            style={{
              background: "#fff0e5",
              color: "#ff7a1a",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "11px",
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          >
            ⚖ Legal Center
          </span>

          <h1 style={{ fontWeight: "800", marginTop: "24px", fontSize: "34px" }}>
            Legal Information
          </h1>

          <p
            style={{
              maxWidth: "620px",
              color: "#333",
              fontSize: "16px",
              lineHeight: "1.7",
              marginTop: "18px",
            }}
          >
            Please read our Terms & Conditions and Privacy Policy carefully.
            These documents govern your relationship with Global Pathways Study
            Abroad services.
          </p>
        </div>
      </section>

      <section style={{ background: "#f3f5f7", padding: "35px 15px 60px" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={cardStyle}>
            <h2 style={sectionTitle}>📋 1. Terms & Conditions</h2>

            <TextBlock title="Introduction">
              Welcome to our website. By accessing and using this website, you
              agree to comply with and be bound by the following Terms and
              Conditions. Please read them carefully before using our services.
            </TextBlock>

            <TextBlock title="Use of Website">
              This website is intended to provide information about study abroad
              programs, educational services, and related guidance. By using this
              website, you agree to use it only for lawful purposes and in a way
              that does not infringe the rights of others.
            </TextBlock>

            <TextBlock title="Services">
              Our services include career counseling, university selection,
              application support, visa guidance, test preparation assistance,
              and other study abroad-related services. Admission decisions, visa
              approvals, and scholarship awards are subject to the respective
              institutions and government authorities.
            </TextBlock>

            <TextBlock title="User Responsibilities">
              Users are responsible for providing accurate and complete
              information when submitting forms or inquiries through the website.
              Any misuse, fraudulent activity, or submission of false information
              may result in denial of services.
            </TextBlock>

            <TextBlock title="Intellectual Property">
              All content on this website, including text, graphics, logos,
              images, and design elements, is the property of the company and is
              protected by applicable copyright and intellectual property laws.
              Unauthorized use or reproduction is prohibited.
            </TextBlock>

            <TextBlock title="Third-Party Links">
              Our website may contain links to third-party websites for
              additional information. We are not responsible for the content,
              policies, or practices of these external websites.
            </TextBlock>

            <TextBlock title="Limitation of Liability">
              We make every effort to ensure the information on this website is
              accurate and up to date. However, we are not responsible for any
              errors, omissions, or decisions made based on the information
              provided on this website.
            </TextBlock>

            <TextBlock title="Changes to Terms">
              We reserve the right to modify or update these Terms and
              Conditions at any time without prior notice. Continued use of the
              website indicates acceptance of the updated terms.
            </TextBlock>

            <TextBlock title="Contact Information">
              If you have any questions regarding these Terms and Conditions,
              please contact us through the contact information provided on our
              website.
            </TextBlock>
          </div>

          <div style={cardStyle}>
            <h2 style={sectionTitle}>🛡 2. Privacy Policy</h2>

            <TextBlock title="Introduction">
              We value your privacy and are committed to protecting your personal
              information. This Privacy Policy explains how we collect, use, and
              safeguard your data when you visit our website.
            </TextBlock>

            <TextBlock title="Information We Collect">
              <ul style={{ marginTop: "12px", marginBottom: 0 }}>
                <li>Name, Email address, Phone number</li>
                <li>Country of interest for study</li>
                <li>Academic details or preferences</li>
              </ul>
            </TextBlock>

            <div className="row g-3 my-4">
              <div className="col-12 col-md-6">
                <div style={smallBox}>
                  <h6 style={smallTitle}>HOW WE USE YOUR INFORMATION</h6>
                  <p style={smallText}>
                    To provide study abroad guidance, respond to inquiries,
                    improve our website, and share relevant opportunities about
                    universities and courses.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div style={smallBox}>
                  <h6 style={smallTitle}>DATA PROTECTION</h6>
                  <p style={smallText}>
                    We implement appropriate security measures to protect your
                    personal information from unauthorized access, misuse, or
                    disclosure.
                  </p>
                </div>
              </div>
            </div>

            <TextBlock title="Sharing of Information">
              We do not sell or rent your personal information to third parties.
              However, your information may be shared with partner universities,
              institutions, or service providers when necessary to assist with
              your application.
            </TextBlock>

            <TextBlock title="Cookies & Third-Parties">
              Our website may use cookies to improve user experience. We are not
              responsible for the privacy practices of external sites linked from
              our pages.
            </TextBlock>

            <TextBlock title="Your Consent & Updates">
              By using our website, you consent to this policy. We may update
              this Privacy Policy from time to time; changes will be posted on
              this page.
            </TextBlock>

            <TextBlock title="Contact Us">
              If you have any questions about this Privacy Policy or how your
              information is handled, please contact us through the contact
              details available on our website.
            </TextBlock>
          </div>

          <div
            className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3"
            style={{
              background: "linear-gradient(135deg, #0c4edb, #2f7df1)",
              borderRadius: "8px",
              padding: "28px 30px",
              color: "#fff",
            }}
          >
            <div>
              <h3 style={{ fontWeight: "800", fontSize: "22px" }}>
                Need help with our policies?
              </h3>
              <p style={{ margin: 0, fontSize: "14px" }}>
                Our advisory team is here to clarify any legal or privacy
                questions.
              </p>
            </div>

            <a
              href="/contact"
              style={{
                background: "#ff7a1a",
                color: "#fff",
                textDecoration: "none",
                padding: "13px 22px",
                borderRadius: "6px",
                fontWeight: "700",
                fontSize: "14px",
              }}
            >
              ✉ Contact Legal Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

const TextBlock = ({ title, children }) => (
  <div style={{ marginBottom: "30px" }}>
    <h5 style={{ fontSize: "16px", fontWeight: "800", marginBottom: "12px" }}>
      {title}
    </h5>
    <div style={{ fontSize: "14px", color: "#333", lineHeight: "1.8" }}>
      {children}
    </div>
  </div>
);

const cardStyle = {
  background: "#fff",
  border: "1px solid #d9dee7",
  borderRadius: "8px",
  padding: "32px 28px",
  marginBottom: "26px",
};

const sectionTitle = {
  fontSize: "22px",
  fontWeight: "800",
  marginBottom: "28px",
};

const smallBox = {
  background: "#f6f8fb",
  borderRadius: "6px",
  padding: "18px",
  height: "100%",
};

const smallTitle = {
  fontSize: "12px",
  fontWeight: "800",
  marginBottom: "10px",
};

const smallText = {
  fontSize: "13px",
  lineHeight: "1.6",
  margin: 0,
};

export default Termcondition;