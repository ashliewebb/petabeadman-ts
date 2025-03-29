import {HeroBanner} from "@/app/components/HeroBanner/HeroBanner";
import {CallToAction} from "@/app/components/CallToAction/CallToAction";
import {Cards} from "@/app/components/Cards/Cards";
import {Card} from "@/app/components/Cards/Card";
import {ImageText} from "@/app/components/ImageText/ImageText";
import {Testimonials} from "@/app/components/Testimonials/Testimonals";
import {Testimonial} from "@/app/components/Testimonials/Testimonial";
import {Text} from "@/app/components/Text/Text";
import stylesGlobal from "@/app/page.module.scss";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  return (
      <>
          <HeroBanner
              title="Empowering women to build thriving Real Estate careers"
              description="Jump start your way to financial independence, career flexibility, and personal fulfilment"
              ctaLink="#"
              ctaLabel="Join Our Community"
              ctaLink2="#"
              ctaLabel2="Buy The Book"
          ></HeroBanner>
          <ImageText
              image="/woman-asleep-at-desk.svg"
              imageAlt="Woman falls asleep while working at desk"
              image_direction="Right"
              copy="<p>Are you stuck in a 9-5 job but crave more flexibility?</p>
<p>Do you feel like your income is never enough to get by?</p>
<p>Has your career plateaued making you feel restricted and unfulfilled?</p>"
              bg_alt={true}
          ></ImageText>
          <Cards heading="Do you imagine your life like this instead?">
            <Card
                title="Supporting Your Family"
                description="Manage your workday and be in control of your work-life<br>balance.<br><br>Gain flexibility in your schedule."
                image="/heart-hands.svg"
            ></Card>
            <Card
                title="Creating Financial Freedom"
                description="Money and career success are pathways to fulfill your dreams and aspirations.<br><br>Create the life you envision."
                image="/money-hand.svg"
            ></Card>
            <Card
                title="Building Your Future"
                description="Build stability for the long-term, for your retirement, and even the next generation.<br><br>Secure the future you desire."
                image="/money-plant.svg"
            ></Card>
          </Cards>
          <hr className={stylesGlobal.divider}></hr>
          <ImageText
              image="/peta-award-winner.jpg"
              imageAlt="Peta Beadman wins Raine & Horne's Best Newcomer Agent 2023"
              image_direction="Left"
              image_rounded={true}
              copy="<h2>Meet Peta</h2>
              <p>Author of 90 Days To Paid</p>
              <p>Award-winning Real Estate Agent</p>
              <p>Founder & Co-ordinator of Goulburn Women in Business</p>"
          ></ImageText>
          <Text
              copy="<p>In 2021, Peta hit breaking point. Working tirelessly as an assistant for a fixed income, she watched her boss – who she’d helped build the business from scratch – earning millions.</p>
              <p>Realising she was stuck at the mercy of someone else’s valuation of her time, she decided enough was enough. Despite pushback from family and friends, Peta became a real estate agent and took the leap into securing her future in more ways than imaginable.</p>
              <p>While navigating this new industry, Peta worked from the ground up – learning many lessons the hard way – to quickly excelling and winning Best Newcomer Agent 2023 in the Raine & Horne State Awards.</p>
              <p>In her book, 90 Days To Paid, Peta will guide you through step-by-step how you too can excel in real estate and leaping over those first rocky moments that starting in a new career often brings.</p>"
              no_vertical_space={true}
          ></Text>
          <Testimonials
              heading="What Peta's clients have to say"
              bg_alt={true}
          >
              <Testimonial
                  quote="<h3>Sold Before it Even Went to Market</h3>
                  <p>Peta is an incredible representative of the Raine & Horne Brand. Her sales market knowledge and vast network meant my house sold before it even went to market. Trusting Peta was the wisest decision I made. It meant my sale was completely stress fee and Peta was able to find the right people for my beauful home.<br>
Thank you Peta.</p>"
                  quotee="Louise Edwards - Seller"
              ></Testimonial>
              <Testimonial
                  quote="
                    <h3>Great customer service</h3>
                    <p>Peta showed my husband and I a home we recently just bought. Peta was so helpful and was able to answer all of our questions we had regarding the property. Peta also arranged for us to go back the next day to view the home just so we could make sure it was the house for us! Peta was very kind and informative the whole process.</p>"
                  quotee="Jess Hayes - Buyer"
              ></Testimonial>
              <Testimonial
                  quote="<h3>I wholeheartedly recommend Peta to anyone</h3>
                  <p>I wholeheartedly recommend Peta to anyone looking to buy or sell a home. Peta took the time to understand our needs, answered every question with patience and expertise, and guided us through every step of the process with professionalism and care. Peta not only helped us sell our home  for a great price, but also provided invaluable insights and resources along the way.</p>"
                  quotee="Phil Saunders - Seller"
              ></Testimonial>
              <Testimonial
                  quote="<h3>Very prompt and professional</h3>
                  <p>Peta was honest and transparent which translated to an easy and pleasant experience. Peta would return phone calls and e-mails promptly which plays a big role when purchasing a property.</p>"
                  quotee="Buyer"
              ></Testimonial>
              <Testimonial
                  quote="<h3>Would recommend Peta in a heartbeat</h3>
                  <p>Could not be happier with the service provided. Absolutely went above and beyond her obligations with complete honest and integrity. Would recommend in a heartbeat.</p>"
                  quotee="Buyer"
              ></Testimonial>
          </Testimonials>
          <Cards heading="Jump start your career in Real Estate today!">
              <Card
                  title="1. LEARN"
                  description="Read <strong>90 Days To Paid</strong> for your practical & actionable roadmap.<br><br>You’ll receive daily task lists, templates, and insider tips to getting started."
                  image="/reading-book.svg"
              ></Card>
              <Card
                  title="2. APPLY"
                  description="Follow clear, actionable steps designed to help you succeed in the market.<br><br>Implement proven tools & strategies to secure listings and build confidence"
                  image="/clipboard-checklist.svg"
              ></Card>
              <Card
                  title="3. SUCCEED"
                  description="Achieve financial independence, career & home-life flexibility, and personal fulfilment."
                  image="/target.svg"
              ></Card>
          </Cards>
          <CallToAction
              ctaLink="#"
              ctaLabel="Buy The Book"
              subtext="Available on Amazon Kindle for $9.90 USD"
          ></CallToAction>
          <Text
              copy="<h2>Your Path to Real Estate Success Starts Today</h2>
              <p>Are you a woman in real estate ready to take control of your income and build a business that works for you? <strong>90 Days to Paid</strong> is your step-by-step guide to landing clients, closing deals, and creating a sustainable career—without the overwhelm. Whether you're new to the industry or struggling to gain traction, this book gives you the blueprint to transform your passion into profit in just three months.</p>
              <p>Written by a successful real estate professional who has been in your shoes, this book empowers women with the tools, strategies, and confidence to build a real estate business on their terms. It dives into proven strategies for attracting and converting high-value clients, smart marketing techniques to stand out in a crowded market, and time management skills to help you balance your real estate career with your personal life. You’ll also discover powerful negotiation tactics that will give you an edge in closing deals, along with the mindset shifts needed to overcome self-doubt and build lasting success.</p>
              <p>If you’ve been spinning your wheels, waiting for your breakthrough moment, this book is your answer. Instead of feeling lost in a sea of real estate advice, you’ll have a clear, actionable plan designed specifically for women who want to create financial freedom in real estate. Every chapter is packed with real-world strategies, personal insights, and success stories to inspire you to take bold steps toward the career you’ve always wanted.</p>
              <p>This is not just another real estate book—it’s a hands-on, action-packed roadmap designed for women who are ready to level up their careers, claim their financial independence, and make an impact. It will show you how to build a thriving real estate business that generates consistent income, giving you the freedom to work on your terms and live life on your own schedule.</p>
              <p>If you’re ready to start earning what you’re worth and take your real estate career to the next level, now is the time to take action. <br><strong>Order your copy today and take the first step toward financial success in real estate</strong>.</p>"
          ></Text>
      </>
  )
}
