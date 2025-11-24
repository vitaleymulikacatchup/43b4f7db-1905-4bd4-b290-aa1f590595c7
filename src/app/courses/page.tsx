"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import Link from 'next/link';
import { BookOpen, DollarSign, Star, Zap, Crown } from 'lucide-react';

export default function CoursesPage() {
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
            {"name":"About","id":"/about"},
            {"name":"Contact","id":"/contact"}
          ]}
          brandName="BigCoder"
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
        />
      </div>
    </ThemeProvider>
  );
}