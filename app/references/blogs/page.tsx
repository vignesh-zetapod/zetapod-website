import BaseLayout from "@/components/layout/base.layout";
import { BlogsHero } from "@/components/blogs/hero";
import { Blogs } from "@/components/blogs/content";

export default function AboutUs() {
  return (
    <BaseLayout>
      <BlogsHero />
      <Blogs />
    </BaseLayout>
  );
}
