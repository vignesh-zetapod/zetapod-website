import React from "react";
import { COMPANY } from "@/constants";
import '../styles/text-content.style.css';

export default function TermsOfService(): JSX.Element {
  return (
    <div className="prose mt-20 py-10 px-[5%] content-container">
      <h1><strong>Terms of Service</strong></h1>
      
      <p><strong>Last Updated: 01-December-2025</strong></p>

      <p>
        Welcome to <strong>ZETAPOD Labs</strong> (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). These Terms of Service
        (&quot;Terms&quot;) govern your access to and use of our website, products, and services
        (collectively, the &quot;Services&quot;). By accessing or using the Services you agree to be
        bound by these Terms. If you do not agree, do not use the Services.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years old (or the age of majority in your jurisdiction) to use
        the Services. By using the Services you represent and warrant that you meet this
        requirement and have the legal authority to enter into these Terms.
      </p>

      <h2>2. User Accounts</h2>
      <p>
        To access certain features you may need to create an account. When you create an
        account you agree to: provide accurate and complete information; keep your account
        credentials secure; be responsible for all activity that occurs under your account; and
        notify us immediately if you suspect unauthorized use. We reserve the right to suspend
        or terminate accounts at our discretion.
      </p>

      <h2>3. Acceptable Use</h2>
      <p>You agree not to use the Services to:</p>
      <ul>
        <li>Violate any applicable law, regulation, or third-party right.</li>
        <li>Upload or distribute malware, viruses, or other harmful code.</li>
        <li>Access or attempt to access restricted areas of the Services.</li>
        <li>Reverse-engineer, decompile, or attempt to discover source code or trade secrets.</li>
        <li>Interfere with the security, performance, or integrity of the Services.</li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <p>
        All content, software, trademarks, logos, and other materials on or provided through the
        Services (&quot;ZETAPOD Content&quot;) are owned by ZETAPOD Labs or its licensors and are
        protected by copyright, trademark, and other intellectual property laws. Subject to these
        Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use
        the Services for your internal business purposes. You may not copy, modify, distribute,
        sell, lease, or create derivative works of ZETAPOD Content except as expressly
        permitted in writing by us.
      </p>

      <h2>5. Software Licenses</h2>
      <p>
        If the Services include downloadable or hosted software, we grant you a limited license
        to use that software solely as permitted in these Terms. You may not reverse-engineer,
        decompile, disassemble, sublicense, or redistribute the software except as explicitly
        authorized.
      </p>

      <h2>6. Payments and Subscriptions (If Applicable)</h2>
      <p>
        Paid features or subscriptions are billed as described at the time of purchase. You
        authorize us to charge your chosen payment method for fees and taxes. Subscriptions
        renew automatically unless cancelled. Refunds are issued only as required by law or at
        our discretion.
      </p>

      <h2>7. Third-Party Services</h2>
      <p>
        The Services may integrate with third-party platforms, libraries, or services. Your use
        of those third-party services is subject to their terms and privacy practices. We are not
        responsible for third-party content, data handling, or service availability.
      </p>

      <h2>8. Privacy</h2>
      <p>
        Our collection and processing of personal data are governed by our Privacy Policy,
        which includes information about data collection, use, sharing, international transfers,
        and your rights under applicable data protection laws (including GDPR where applicable).
        Please review our Privacy Policy for details: [Insert Privacy Policy URL].
      </p>

      <h2>9. Service Modifications & Availability</h2>
      <p>
        We may modify, suspend, or discontinue features of the Services at any time. We do not
        guarantee uninterrupted access and are not liable for service interruptions, scheduled
        maintenance, or changes to features or pricing.
      </p>

      <h2>10. Termination</h2>
      <p>
        We may immediately suspend or terminate your access if you breach these Terms, cause
        legal exposure to us, or engage in fraudulent or abusive conduct. Upon termination your
        right to use the Services ends. Sections that by their nature should survive termination
        (for example, Intellectual Property, Indemnification, Limitation of Liability) will survive.
      </p>

      <h2>11. Disclaimers</h2>
      <p>
        THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;. TO THE MAXIMUM EXTENT
        PERMITTED BY LAW, ZETAPOD LABS DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS,
        IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
      </p>

      <h2>12. Limitation of Liability</h2>
      <p>
        TO THE FULLEST EXTENT PERMITTED BY LAW, ZETAPOD LABS WILL NOT BE LIABLE FOR ANY
        INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF
        PROFITS, REVENUE, DATA OR BUSINESS INTERRUPTION. OUR AGGREGATE LIABILITY FOR ANY
        CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED
        THE AMOUNTS PAID BY YOU TO ZETAPOD LABS IN THE TWELVE (12) MONTHS PRIOR TO THE
        EVENT GIVING RISE TO THE CLAIM (OR $0 IF YOU HAVE NOT PAID US).
      </p>

      <h2>13. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless ZETAPOD Labs and its affiliates,
        officers, directors, employees, and agents from and against any claims, liabilities,
        damages, losses, and expenses (including reasonable attorneys&apos; fees) arising out of or
        relating to your use of the Services, violation of these Terms, or infringement of any
        third-party rights.
      </p>

      <h2>14. Governing Law & Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of <strong>[Insert Jurisdiction/Country]</strong>
        without regard to conflict-of-law rules. Unless otherwise required by applicable law,
        the courts located in <strong>[Insert Location]</strong> will have exclusive jurisdiction
        over disputes arising from these Terms. If you are a consumer and local law requires a
        different dispute resolution process, that law will apply.
      </p>

      <h2>15. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. We will post the updated Terms with a
        new &quot;Last Updated&quot; date. If we make material changes that adversely affect your rights
        or access, we will provide notice in accordance with applicable law. Continued use after
        changes constitutes acceptance of the revised Terms.
      </p>

      <h2>16. Contact Us</h2>
      <p>
        If you have questions about these Terms, please contact us:
      </p>
      <ul>
        <li>
          <strong>{COMPANY.name}</strong>
        </li>
        <li>Email: {COMPANY.email}</li>
      </ul>
    </div>
  );
}
