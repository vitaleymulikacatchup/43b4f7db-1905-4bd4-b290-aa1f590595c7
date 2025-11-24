"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import Link from 'next/link';
import { TrendingUp, Users, MessageSquare, Newspaper, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

export default function AboutPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="animatedGrid"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            {"name":"Home","id":"/"},
            {"name":"Courses","id":"/courses"},
            {"name":"Contact","id":"/contact"}
          ]}
          brandName="BigCoder"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Our Success Story"
          description="Numbers that speak for our commitment to excellence"
          tag="Impact"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {"id":"1","value":"5,000+","description":"Graduates Hired"},
            {"id":"2","value":"95%","description":"Job Placement Rate"},
            {"id":"3","value":"$85K+","description":"Average Starting Salary"},
            {"id":"4","value":"200+","description":"Partner Companies"}
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Expert Instructors"
          description="Learn from industry professionals with years of real-world experience"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {"id":"1","name":"Alex Rodriguez","role":"Senior Full-Stack Developer","imageSrc":"https://pixabay.com/get/g3d33c900b7b4e0968f8cbc3aa62015ec37ab8611a908ba61ad1c7b2452f4b081df017036f36b0dc6b560dd34739ab9023d8791b1c6e662edc878adade1844370_1280.jpg","imageAlt":"Alex Rodriguez - Senior Full-Stack Developer"},
            {"id":"2","name":"Sarah Chen","role":"Data Science Lead","imageSrc":"https://pixabay.com/get/g94edbd1efaa86d59e73a66165f863628bf065c80dd2a388195e06216f1f9cbcf6c41319a71201957b6577e314246ea4fa69a1fe8acf9334bba6fe705b3478530_1280.jpg","imageAlt":"Sarah Chen - Data Science Lead"},
            {"id":"3","name":"Michael Johnson","role":"Cybersecurity Expert","imageSrc":"https://pixabay.com/get/g171fd829f896f72bcdcfb5f891afc20a82add6af938972564437d110d4b21242f2a0752680b010e4e7cdfda3050685fa3b7eb0197641bef588071383fdb16397_1280.jpg","imageAlt":"Michael Johnson - Cybersecurity Expert"}
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Success Stories"
          description="Hear from our graduates who transformed their careers"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          testimonials={[
            {"id":"1","name":"Emily Rodriguez","role":"Software Engineer","company":"Google","rating":5,"imageSrc":"https://pixabay.com/get/g0e0e3ef0db7b805a22049b7c394bd9149170937fed5da91054c353a99a7ab5fb4df52fe18375339bd3f4f20d8687da74ec9c3233d53b6ef5e6a2caf737e62e71_1280.jpg","imageAlt":"Emily Rodriguez"},
            {"id":"2","name":"David Kim","role":"Full-Stack Developer","company":"Microsoft","rating":5,"imageSrc":"https://pixabay.com/get/g3b7fd3c17aa4ae9ac385c50c46f724757082207921c7a24b15d6e9ad1700dede16551a10b91a88c78ff8dc5e7c66f48e7676c0a4b52c7f1cc4733265b8735339_1280.jpg","imageAlt":"David Kim"},
            {"id":"3","name":"Jessica Martinez","role":"Data Scientist","company":"Netflix","rating":5,"imageSrc":"https://pixabay.com/get/g75114d349a944359bdc4809201c26c97c9151f9c061fab4d462077ce350eb44e18e0c71dce70bb5240e62a108561a3f69a2c5f69dd0fb0ea7b99f52741c732c8_1280.jpg","imageAlt":"Jessica Martinez"},
            {"id":"4","name":"Ryan Thompson","role":"DevOps Engineer","company":"Amazon","rating":5,"imageSrc":"https://pixabay.com/get/g7b53a66a65a80a956825090c5e1a23bc349aea8f283ccb488360e22e7cc80c18e35c02ec1bc4a406192214013c14a6b24843feb94b0500d7666c377d2182bb11_1280.jpg","imageAlt":"Ryan Thompson"}
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest from BigCoder"
          description="Stay updated with the latest trends and insights in technology education"
          tag="Blog"
          tagIcon={Newspaper}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {"id":"1","category":"Industry Trends","title":"Top Programming Languages to Learn in 2025","excerpt":"Discover which programming languages are most in-demand and will shape your career trajectory","imageSrc":"https://pixabay.com/get/g6e2d57091d0237723bc4ad7c4bdad20744c69bf1daf19b5983e695e5e27b2805c4bcbacc0aa2be04ed0df84ac90f4524924e56e52166dde0e390ad60b4870701_1280.png","imageAlt":"Programming trends 2025","authorName":"Alex Rodriguez","authorAvatar":"https://pixabay.com/get/g3d33c900b7b4e0968f8cbc3aa62015ec37ab8611a908ba61ad1c7b2452f4b081df017036f36b0dc6b560dd34739ab9023d8791b1c6e662edc878adade1844370_1280.jpg","date":"March 15, 2025"},
            {"id":"2","category":"Career Advice","title":"From Bootcamp to Big Tech: Success Strategies","excerpt":"Learn the proven strategies our graduates used to land jobs at major tech companies","imageSrc":"https://pixabay.com/get/gfa81948703ac884c4514b15f1bdae85c38c158897655c1ebf24d1c3c94e57095df01ca2191a6dfa39225fea24114f2d1800e17ebb2fc09bf5092ad3e95879daa_1280.jpg","imageAlt":"Career advice for developers","authorName":"Sarah Chen","authorAvatar":"https://pixabay.com/get/g94edbd1efaa86d59e73a66165f863628bf065c80dd2a388195e06216f1f9cbcf6c41319a71201957b6577e314246ea4fa69a1fe8acf9334bba6fe705b3478530_1280.jpg","date":"March 12, 2025"},
            {"id":"3","category":"Learning Path","title":"The Complete Web Developer Roadmap","excerpt":"Step-by-step guide to becoming a full-stack web developer in 2025","imageSrc":"https://pixabay.com/get/gdc808c723839dbea483dd7195df3282c6c3bfd1104376db51a27c20e2929c93f9b0857b4792786e83fd943d76ff336a3e2f553b8d905dde7afde9bbedf4470c3_1280.jpg","imageAlt":"Web developer learning path","authorName":"Michael Johnson","authorAvatar":"https://pixabay.com/get/g171fd829f896f72bcdcfb5f891afc20a82add6af938972564437d110d4b21242f2a0752680b010e4e7cdfda3050685fa3b7eb0197641bef588071383fdb16397_1280.jpg","date":"March 10, 2025"}
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="BigCoder"
          copyrightText="© 2025 BigCoder IT School. All rights reserved."
          columns={[
            {"title":"Courses","items":[
              {"label":"Web Development","href":"/courses/web-development"},
              {"label":"Data Science","href":"/courses/data-science"},
              {"label":"Mobile Apps","href":"/courses/mobile-apps"},
              {"label":"Cybersecurity","href":"/courses/cybersecurity"}
            ]},
            {"title":"Company","items":[
              {"label":"About Us","href":"/about"},
              {"label":"Our Instructors","href":"/about"},
              {"label":"Career Services","href":"/career-services"}
            ]},
            {"title":"Resources","items":[
              {"label":"FAQ","href":"/faq"},
              {"label":"Contact","href":"/contact"}
            ]}
          ]}
          socialLinks={[
            {"icon":Twitter,"href":"https://twitter.com/bigcoder","ariaLabel":"Follow BigCoder on Twitter"},
            {"icon":Linkedin,"href":"https://linkedin.com/company/bigcoder","ariaLabel":"Connect with BigCoder on LinkedIn"},
            {"icon":Youtube,"href":"https://youtube.com/bigcoder","ariaLabel":"Subscribe to BigCoder YouTube"},
            {"icon":Instagram,"href":"https://instagram.com/bigcoder","ariaLabel":"Follow BigCoder on Instagram"}
          ]}
        />
      </div>
    </ThemeProvider>
  );
}