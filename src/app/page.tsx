"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import Link from 'next/link';
import { Code, Sparkles, Globe, Smartphone, BarChart3, Shield, Cloud, Brain, Building2, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

export default function HomePage() {
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
            {"name":"Courses","id":"courses"},
            {"name":"About","id":"/about"},
            {"name":"Instructors","id":"/team"},
            {"name":"Success Stories","id":"/testimonials"},
            {"name":"Contact","id":"/contact"}
          ]}
          brandName="BigCoder"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Where education meets automation"
          description="A revolutionary IT school with automated attendance, resource tracking, and performance analysis tools designed for modern programming education"
          tag="Meet the Future"
          tagIcon={Code}
          mediaItems={[
            {"imageSrc":"https://pixabay.com/get/g441bd793395008802db395120be93c1b7e906c03c34cd2091cc925ccf09296bde117245169391389feb773e1527d1a083b4745b39c76bc61f2a8b4fc5af59379_1280.jpg","imageAlt":"Modern coding workspace"},
            {"imageSrc":"https://pixabay.com/get/ge722c6f8cc7796d061357a3aa1dd4ca9770b90a8a817370301e06a2d2084e4f930115bdbaa97cd0157a45aeaae6027e70337bd5bacd0a01e17f1cde3999e0330_1280.png","imageAlt":"Web development setup"},
            {"imageSrc":"https://pixabay.com/get/ge46974cb6029cf1bd2c4cedd71a056b0f2d71cf6ea76013827ec642427bd947df139ee35fdbc03fb8c8a8e7faac99cab40b979442e33f535113f7fdfbd58cf04_1280.jpg","imageAlt":"Mobile app development"},
            {"imageSrc":"https://pixabay.com/get/g63dbfc2786ffe0b1251a34c76862d4abf738db5e3ce9756e7de902003098933d7ac7d75177f8469ad0dcc204d52020215063a2d0e0e76127d18eae91d7df8c0d_1280.jpg","imageAlt":"Data science workspace"}
          ]}
          buttons={[
            {"text":"Start Learning","href":"courses"},
            {"text":"Learn More","href":"/about"}
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We build exceptional developers through cutting-edge technology and personalized learning experiences that prepare students for successful careers in the rapidly evolving tech industry"
          buttons={[
            {"text":"View Courses","href":"/courses"},
            {"text":"Meet Our Team","href":"/team"}
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="Cutting-Edge Learning Experience"
          description="Discover our comprehensive approach to modern IT education with industry-leading tools and methodologies"
          tag="Features"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          showIconBoxBackground={true}
          features={[
            {"title":"Web Development","icon":Globe},
            {"title":"Mobile Apps","icon":Smartphone},
            {"title":"Data Science","icon":BarChart3},
            {"title":"Cybersecurity","icon":Shield},
            {"title":"Cloud Computing","icon":Cloud},
            {"title":"AI & Machine Learning","icon":Brain}
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Tech Companies"
          description="Our graduates work at the world's most innovative companies"
          tag="Partners"
          tagIcon={Building2}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g137534e243d2bd1b4ab5b157c3e863c24fe41b606c66d987e344670bd0b4147f877349630878c1fe986824589b61b02206d30886500bf8e1af500ab4723774e9_1280.jpg",
            "https://pixabay.com/get/g00f0f0e574a3b9e6fd638b0ea0283d1bd663640440c55c4b1a9f2051649b34019b5d4f75d4decd2db5d070fcfb548a869e2ff80adb07f53ca7cdf8b11b402904_1280.jpg",
            "https://pixabay.com/get/gf2d983ad39800ba2aaf3ecb3bd5ba2c56d92ba9c102fc897878ce8e56d64099f67fe7ebc40d2036c3253b2aff187922ca9a21faf59eed26e11adafe96d8ca71f_1280.jpg",
            "https://pixabay.com/get/gaff36d6c5ef156bfd5959f676ad8183a7318480d30fd7a57e467f6610805fac2e46a67b0a1afce2324f797f470cba7c2812de52f0a569faed840e45e60a9f527_1280.jpg",
            "https://pixabay.com/get/gc2702b7d18b1cceabcdc0b006cd55427f7fa4910320550edd4d3060cf23fa9e8fdf8a3bb14bf65c8e8cfb7031cfe1e0609dc7b2cc5ee755439f8e8ceee3bd476_1280.jpg",
            "https://pixabay.com/get/g16dff5794196762f2ad2894cfc92485a296a61ffa8aee6c7ba8a73f6cd8894bfb6f6a061c786e3449e037422ed51b7d358834ff4f21869e0ab17a1e23853d8d2_1280.jpg",
            "https://pixabay.com/get/ga4c4655b88b793d8fede8cd114a2c1d89b9bbb307e033c1008dcdc860b542984ff08fb7b9c7d22ff351e15dee8332a17deb8dbfa28e482d3c62f416891973434_1280.jpg"
          ]}
          speed={40}
          showCard={true}
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