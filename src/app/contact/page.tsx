"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import Link from 'next/link';
import { Mail, HelpCircle, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

export default function ContactPage() {
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
            {"name":"About","id":"/about"},
            {"name":"Instructors","id":"/team"},
            {"name":"Success Stories","id":"/testimonials"}
          ]}
          brandName="BigCoder"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Mail}
          title="Ready to Transform Your Career?"
          description="Join thousands of successful graduates who have launched their tech careers with BigCoder. Get updates on new courses, career opportunities, and exclusive content."
          inputPlaceholder="Enter your email address"
          buttonText="Start Your Journey"
          termsText="By signing up, you agree to receive updates about courses, career opportunities, and tech industry insights. Unsubscribe anytime."
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about BigCoder IT School"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {"id":"1","title":"What programming languages do you teach?","content":"We teach the most in-demand programming languages including JavaScript, Python, Java, React, Node.js, SQL, and many more. Our curriculum is constantly updated to match industry demands."},
            {"id":"2","title":"Do you offer job placement assistance?","content":"Yes! We have a dedicated career services team that provides resume optimization, interview preparation, and direct connections to our network of 200+ partner companies."},
            {"id":"3","title":"What are the class schedules like?","content":"We offer flexible scheduling options including part-time evening classes, weekend bootcamps, and full-time intensive programs to accommodate different lifestyles and commitments."},
            {"id":"4","title":"Do I need prior programming experience?","content":"No prior experience required! Our programs are designed for beginners through advanced developers. We start with fundamentals and progressively build to advanced concepts."},
            {"id":"5","title":"What kind of support do students receive?","content":"Students receive comprehensive support including 1-on-1 mentoring, study groups, technical support, career coaching, and access to our alumni network."}
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
              {"label":"Our Instructors","href":"/team"},
              {"label":"Success Stories","href":"/testimonials"},
              {"label":"Career Services","href":"/career-services"}
            ]},
            {"title":"Resources","items":[
              {"label":"Blog","href":"/blog"},
              {"label":"FAQ","href":"/faq"},
              {"label":"Student Portal","href":"/student-portal"},
              {"label":"Contact","href":"/contact"}
            ]},
            {"title":"Support","items":[
              {"label":"Help Center","href":"/help"},
              {"label":"Technical Support","href":"/support"},
              {"label":"Admissions","href":"/admissions"},
              {"label":"Financial Aid","href":"/financial-aid"}
            ]}
          ]}
          socialLinks={[
            {"icon":"Twitter","href":"https://twitter.com/bigcoder","ariaLabel":"Follow BigCoder on Twitter"},
            {"icon":"Linkedin","href":"https://linkedin.com/company/bigcoder","ariaLabel":"Connect with BigCoder on LinkedIn"},
            {"icon":"Youtube","href":"https://youtube.com/bigcoder","ariaLabel":"Subscribe to BigCoder YouTube"},
            {"icon":"Instagram","href":"https://instagram.com/bigcoder","ariaLabel":"Follow BigCoder on Instagram"}
          ]}
        />
      </div>
    </ThemeProvider>
  );
}