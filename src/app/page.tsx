"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import Link from 'next/link';
import { Code, Sparkles, Globe, Smartphone, BarChart3, Shield, Cloud, Brain, BookOpen, DollarSign, Star, Zap, Crown, Building2 } from 'lucide-react';

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
            {"name":"Courses","id":"/courses"},
            {"name":"About","id":"/about"},
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
            {"text":"Start Learning","href":"/courses"},
            {"text":"Learn More","href":"/about"}
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We build exceptional developers through cutting-edge technology and personalized learning experiences that prepare students for successful careers in the rapidly evolving tech industry"
          buttons={[
            {"text":"View Courses","href":"/courses"},
            {"text":"Meet Our Team","href":"/about"}
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

      <div id="product" data-section="product">
        <ProductCardOne
          title="Popular Courses"
          description="Explore our most sought-after programming courses designed by industry experts"
          tag="Courses"
          tagIcon={BookOpen}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {"id":"1","name":"Full-Stack Web Development","price":"$2,499","imageSrc":"https://pixabay.com/get/ge722c6f8cc7796d061357a3aa1dd4ca9770b90a8a817370301e06a2d2084e4f930115bdbaa97cd0157a45aeaae6027e70337bd5bacd0a01e17f1cde3999e0330_1280.png","imageAlt":"Web development course"},
            {"id":"2","name":"Mobile App Development","price":"$2,299","imageSrc":"https://pixabay.com/get/ge46974cb6029cf1bd2c4cedd71a056b0f2d71cf6ea76013827ec642427bd947df139ee35fdbc03fb8c8a8e7faac99cab40b979442e33f535113f7fdfbd58cf04_1280.jpg","imageAlt":"Mobile app development course"},
            {"id":"3","name":"Data Science & Analytics","price":"$2,799","imageSrc":"https://pixabay.com/get/g63dbfc2786ffe0b1251a34c76862d4abf738db5e3ce9756e7de902003098933d7ac7d75177f8469ad0dcc204d52020215063a2d0e0e76127d18eae91d7df8c0d_1280.jpg","imageAlt":"Data science course"},
            {"id":"4","name":"Cybersecurity Specialist","price":"$2,599","imageSrc":"https://pixabay.com/get/g005c84b93027fdaaa8ada799a7eb1e00b8ccb761d7bc72c69990f41b71d4a4e929a4458e8f8dc5be0194e4b2f27e37efa427c65344e210d56de9893dc20d9a9b_1280.jpg","imageAlt":"Cybersecurity course"}
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Learning Path"
          description="Flexible pricing options to fit your schedule and budget"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {"id":"part-time","badge":"Popular Choice","badgeIcon":Star,"price":"$1,999","subtitle":"Perfect for working professionals","features":["Evening & weekend classes","6-month program duration","Career placement assistance","Industry mentor access","Flexible payment plans"]},
            {"id":"full-time","badge":"Intensive","badgeIcon":Zap,"price":"$2,999","subtitle":"Accelerated career transformation","features":["Full-time immersive program","3-month intensive training","Job guarantee program","1-on-1 career coaching","Industry networking events"]},
            {"id":"premium","badge":"Best Value","badgeIcon":Crown,"price":"$3,999","subtitle":"Complete career package","features":["All course modules included","Personal learning assistant","Lifetime career support","Alumni network access","Advanced certification"]}
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
    </ThemeProvider>
  );
}