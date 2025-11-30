"use client";

import ContactUsForm from "@/components/contact-us/contact-us";
import { ContactUsHero } from "@/components/contact-us/hero";
import BaseLayout from "@/components/layout/base.layout";
import { Spacer } from "@/components/layout/helper.layout";

export default function ContactUs() {
  return (
    <BaseLayout>
      <ContactUsHero />
      <Spacer height="60px" />
      <ContactUsForm />
    </BaseLayout>
  );
}
