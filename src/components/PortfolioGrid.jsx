import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import seeplogo from "../assets/seeplogo.jpg";
import sm1 from "../assets/sm1.webp";
import sm2 from "../assets/sm2.webp";
import sm3 from "../assets/sm3.webp";
import sm4 from "../assets/sm4.webp";
import sm5 from "../assets/sm5.webp";
import em1 from "../assets/em1.webp";
import em3 from "../assets/em3.webp";
import em4 from "../assets/em4.avif";
import em5 from "../assets/em5.webp";
import cm1 from "../assets/cm1.webp";
import cm2 from "../assets/cm2.webp";
import cm3 from "../assets/cm3.webp";
import cm4 from "../assets/cm4.webp";
import cm5 from "../assets/cm5.webp";
import cm6 from "../assets/cm6.webp";

const projects = [
  {
    id: 1,
    title: "Social Media Marketing",
    image:
      "https://quickframe.com/wp-content/uploads/2024/07/QF-Blog_Social-Media-Marketing_-Complete-Guide-for-Advertisers-2024_1920x1080.jpg",
    carouselContent: [
      {
        image:
          "https://www.meghnacolour.com/wp-content/uploads/2024/09/Frame-2-1-e1727763068203.png",
        text: "B2B Content Strategy | Meghna Colours",
        body: "Partnered with Meghna Colours to grow their LinkedIn presence through engaging content that highlighted their expertise and industry impact. Crafted LinkedIn content to boost brand visibility and showcase Meghna Colours’ expertise in pigment manufacturing for B2B audiences.",
        links: [
          {
            label: "Post 1",
            url: "https://www.linkedin.com/feed/update/urn:li:activity:7194347953967288322/",
          },
          {
            label: "Post 2",
            url: "https://www.linkedin.com/feed/update/urn:li:activity:7190255225566355456/",
          },
          {
            label: "Post 3",
            url: "https://www.linkedin.com/feed/update/urn:li:activity:7186981081617756160/",
          },
          {
            label: "Post 4",
            url: "https://www.linkedin.com/feed/update/urn:li:activity:7185554719476510721/",
          },
        ],
      },
      {
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQHGyVF_eQmrwA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1680498659731?e=1761177600&v=beta&t=UtfCiTV_Lv-Q5o1P1ZxrDIqgNzIhrp9ForLxv-9JLLo",
        text: "LinkedIn Content Manager- Grishma Sanghvi",
        body: "Led LinkedIn content strategy and execution for Grishma Sanghvi, a renowned celebrity and talent manager. Over one year, I crafted posts that amplified her industry experience, shared behind-the-scenes insights, and built her personal brand with authenticity and impact.",
        links: [
          {
            label: "Post 1",
            url: "https://www.linkedin.com/posts/activity-7052983557962539008-kuGU/?utm_source=share&utm_medium=member_desktop",
          },
          {
            label: "Post 2",
            url: "linkedin.com/posts/activity-7048619531065339905-zrm5?utm_source=share&utm_medium=member_desktop",
          },
          {
            label: "Post 3",
            url: "linkedin.com/posts/activity-7057020792001171456-UA1v?utm_source=share&utm_medium=member_desktop",
          },
          {
            label: "Post 4",
            url: "https://www.linkedin.com/posts/activity-7062404001396383744-oiRR/?utm_source=share&utm_medium=member_desktop",
          },
        ],
      },
      {
        image: sm1,
        text: "Hi Ice",
        body: "Hi Ice is a gelato brand based in Vapi, Gujarat, bringing a fresh, playful, and aesthetic identity to the frozen dessert space. I joined from the very beginning, building the brand from scratch, setting its tone of voice, copy aesthetic, and overall strategy. My role included creating content, managing shoots, and handling posting across Meta & Pinterest. Within just a few months, the brand achieved 1,00,000+ organic reach and saw a significant increase in followers, establishing its presence in a competitive market.",
        links: [
          {
            label: "Post 1",
            url: "https://www.instagram.com/p/DJwvV3RIozd/",
          },
          {
            label: "Post 2",
            url: "https://www.instagram.com/p/DMS5qnSS43w/",
          },
        ],
      },
      {
        image: sm2,
        text: "Witty Wolf Coffee",
        body: "Witty Wolf is a coffee brand started by a couple with a passion for coffee. They approached us to build their social media presence from the ground up. I onboarded as a **Strategist, Copywriter, Shoot Coordinator & Social Media Specialist**, managing their account for four months. During this time, I created and executed content strategies around trends, educational posts, and brand storytelling to build an **authentic following** and establish Witty Wolf’s digital identity.",
        links: [
          {
            label: "Proof Of Work",
            url: "https://www.instagram.com/p/DHS8NBLiC8s/",
          },
          {
            label: "Influencer Collab and Trends",
            url: "https://www.instagram.com/wittywolfcoffee/reel/DFXTAXSMiEk/",
          },
          {
            label: "Founders Led Reels",
            url: "https://www.instagram.com/p/DGIfwJqoUeX/",
          },
          {
            label: "Carousel Content ",
            url: "https://www.instagram.com/p/DGX7GcExQfb/?img_index=1",
          },
          {
            label: "Static Posts",
            url: "https://www.instagram.com/p/DHDnrHVsHGU/",
          },
        ],
      },
      {
        image: sm3,
        text: "One Carat",
        body: "One Carat is an India-based jewellery brand specialising in gold, silver, and lab-grown diamond jewellery. I worked as a **Social Media Strategist**, where I managed brand shoots, crafted content, and handled posting to establish a consistent and premium digital presence. My role focused on highlighting One Carat’s designs and product range while building audience engagement through curated storytelling.",
        links: [
          {
            label: "Post 1",
            url: "https://www.instagram.com/p/DOXpFUsiFnu/",
          },
          {
            label: "Post 2",
            url: "https://www.instagram.com/p/DNnMUVDII_F/",
          },
          {
            label: "Post 3",
            url: "https://www.instagram.com/p/DNNgILZzjPf/",
          },
          {
            label: "Post 4",
            url: "https://www.instagram.com/p/DMfWemyICre/",
          },
          {
            label: "Post 5",
            url: "https://www.instagram.com/p/DMkdeUjIB_c/",
          },
          {
            label: "Post 6",
            url: "https://www.instagram.com/p/DOI6oMfCH1L/",
          },
        ],
      },
      {
        image: sm4,
        text: "Dhruv Agencies",
        body: "Dhruv Agencies is a middle man company that helps customer get best kind of motor, solar, and other gears for their company. I worked as their social media manager, content writer and created social media content and emailer for the brand",
        links: [
          {
            label: "Product Based Posts",
            url: "https://www.instagram.com/p/DD9FjVzNUQ2/",
          },
          {
            label: "Festival Posting ",
            url: "https://www.instagram.com/p/DBxrjUTN0gk/",
          },
          {
            label: "Static",
            url: "https://www.instagram.com/p/DBGymGlNl75/",
          },
        ],
      },
      {
        image: sm5,
        text: "Prithvi Exchange",
        body: "Prithvi Exchange is a trusted name in the forex industry with over 30 years of excellence. An RBI Authorized Dealer (Category II) and a BSE-listed entity, the company has a strong pan-India presence. As a Copywriter, Social Media Manager & Performance Marketer, I wrote, managed, and ran performance-driven campaigns for Prithvi Exchange. Channels We handled :",
        links: [
          {
            label: "LinkedIn",
            url: "https://www.linkedin.com/company/prithvi-softech-limited/",
          },
          {
            label: "Instagram",
            url: "https://www.instagram.com/prithviexchange/",
          },
          {
            label: "Twitter",
            url: "https://x.com/prithviexchange?ref_src=twsrc%5Etfw",
          },
          {
            label: "Facebook",
            url: "https://www.facebook.com/PrithviExchange/about/?_rdr",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Content Writing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnI4wvBPuAIgfusVdnbobAXavIHseze0moPg&s",
    carouselContent: [
      {
        image: cm1,
        text: "Caaru",
        body: "Caaru is a Jaipur-based, homegrown brand founded by a father-daughter duo, with their mother as the first customer and inspiration. Rooted in the Sanskrit word *Charu* (meaning beautiful), Caaru celebrates the beauty of imperfection through natural, mindful products. As a Blog Writer, I crafted brand stories and blog content that reflected Caaru’s authentic, family-driven origin and its philosophy of embracing natural beauty.",
        links: [
          {
            label: "Rice Water for Hair Growth: Does It Really Work?",
            url: "https://caaruforyou.com/rice-water-for-hair-growth-does-it-really-work/",
          },
          {
            label: "How to Make Your Hair Color Last Longer",
            url: "https://caaruforyou.com/how-to-make-your-hair-color-last-longer/",
          },
          {
            label: "How to Use Henna Hair Color",
            url: "https://caaruforyou.com/henna-hair-color-guide-easy-steps-for-beginners/",
          },
          {
            label:
              "Why Caaru’s Henna-Based Hair Color is the Best Natural Alternative in 2025",
            url: "https://caaruforyou.com/why-caarus-henna-based-hair-color-is-the-best-natural-alternative-in-2025/",
          },
          {
            label: "The Truth About Rosemary Oil for Hair Growth",
            url: "https://caaruforyou.com/rosemary-oil-for-hair-growth-benefits/",
          },
        ],
      },
      {
        image: cm2,
        text: "Wemine",
        body: "Wemine is a Dubai-based company dedicated to making cryptocurrency mining accessible to all. They provide cutting-edge crypto mining machines and accessories designed for optimal performance, catering to both seasoned miners and beginners venturing into the crypto space. With a mission to empower miners across the UAE and beyond, Wemine positions itself as a trusted partner offering expertise, guidance, and top-of-the-line equipment for long-term success. I wrote blogs for them, here are the links for few of the published blogs.",
        links: [
          {
            label: "Blog 1",
            url: "https://wemine.ae/emirates-airlines-to-accept-bitcoin-and-ethereum-making-travel-payments-easier-faster/",
          },
          {
            label: "Blog 2",
            url: "https://wemine.ae/uae-bitcoin-mining-boom-gcc-crypto-investments/",
          },
          {
            label: "Blog 3",
            url: "http://wemine.ae/crypto-scams-2025-7-investor-traps-exposed/",
          },
          {
            label: "Blog 4",
            url: "https://wemine.ae/bitcoin-vs-bank-savings-2025-investment-guide/",
          },
          {
            label: "Blog 5",
            url: "https://wemine.ae/crypto-mining-uae-simple-cryptocurrency-trading/",
          },
        ],
      },

      {
        image:
          "https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/getty_177470402_2000133320009280142_345636.jpg",
        text: "Plastic Industry",
        body: "Articles on sustainability and plastic awareness.",
        links: [
          {
            label: "Microplastics Are Bad",
            url: "https://vinshikajain.notion.site/Microplastics-Are-Bad-7a1f1ca1f3d24655b2d2f41b4eb9749a",
          },
          {
            label: "Plastic does not degrade",
            url: "https://vinshikajain.notion.site/Plastic-does-not-degrade-273a58fb8bb841fd91a82d250478b9dc",
          },
          {
            label: "Plastic kills marine life",
            url: "https://vinshikajain.notion.site/Plastic-kills-marine-life-0f7721b909694b2cb41f405b9923e9a4",
          },
          {
            label: "Is Plastic Really A Pollutant",
            url: "https://vinshikajain.notion.site/Is-Plastic-Really-A-Pollutant-a1d5252a9aff40f8b4d7d47486ee9b74",
          },
        ],
      },
      {
        image: cm3,
        text: "Trends",
        body: "Marketing insights and case studies.",
        links: [
          {
            label: "The TalkOver: Nutella And Swiggy",
            url: "https://vinshikajain.notion.site/The-TalkOver-Nutella-And-Swiggy-140070dbeb7447a68da37c31f14cab0f",
          },
          {
            label: "Social Media Marketing As A Career",
            url: "https://vinshikajain.notion.site/Social-Media-Marketing-As-A-Career-1bb3c4dcaa8941f3828b002b9b12cc11",
          },
          {
            label: "Trends To Look Out For In 2023",
            url: "https://vinshikajain.notion.site/Trends-To-Look-Out-For-In-2023-609fee472000440387c369d9c3f0c895",
          },
          {
            label:
              "Do We Need To Worry About ChatGPT? Diving Into AI And Technology",
            url: "https://vinshikajain.notion.site/Do-We-Need-To-Worry-About-ChatGPT-Diving-Into-AI-And-Technology-242a5fa3001e47cfb75337af7f41e8fe",
          },
        ],
      },
      {
        image: cm4,
        text: "Web 3.0",
        body: "",
        links: [
          {
            label: "How can you save yourself from paying massive Gas Fees1",
            url: "https://vinshikajain.notion.site/How-can-you-save-yourself-from-paying-massive-Gas-Fees-da04641405164eeb87c1b7a843238491",
          },
          {
            label: "Why choose polygon to launch your IDO and NFT projects?",
            url: "https://vinshikajain.notion.site/Why-choose-polygon-to-launch-your-IDO-and-NFT-projects-97abe4dea3a847d6a1f6c96ab7ff770c",
          },
          {
            label: "NFTS and Why they are the future.",
            url: "https://vinshikajain.notion.site/NFTS-and-Why-they-are-the-future-ee81c1cf202b401582c3953334d3573b",
          },
          {
            label: "What Ethereum issues is Polygon addressing?",
            url: "https://vinshikajain.notion.site/What-Ethereum-issues-is-Polygon-addressing-0c0ebfeb990445a698abec3150acf4ec",
          },
          {
            label: "Avalanche vs Polygon vs Binance Smart Chain",
            url: "https://vinshikajain.notion.site/Avalanche-vs-Polygon-vs-Binance-Smart-Chain-ccb746cca5774174bca5f7378e3d5eb3",
          },
        ],
      },
      {
        image: cm6,
        text: "Market Research",
        body: "",
        links: [
          {
            label: "How to monetize trivia games with rewarded surveys",
            url: "https://vinshikajain.notion.site/How-to-monetize-trivia-games-with-rewarded-surveys-1186299115cd45b39cf40d443dc074d3",
          },
          {
            label:
              "05 hottest advertising trends in 2022 and how can market research help you make the most of them?",
            url: "https://vinshikajain.notion.site/05-hottest-advertising-trends-in-2022-and-how-can-market-research-help-you-make-the-most-of-them-9452ee4f6df54a48a35c6e4c69c56069",
          },
          {
            label:
              "From URL to IRL: How Top Brands Are Meeting Consumers Where They Are",
            url: "https://vinshikajain.notion.site/From-URL-to-IRL-How-Top-Brands-Are-Meeting-Consumers-Where-They-Are-a6131b2bf95145489a467b91631b624a",
          },
          {
            label:
              "The rise of the GIG economy - how does it impact your consumers",
            url: "https://vinshikajain.notion.site/The-rise-of-the-GIG-economy-how-does-it-impact-your-consumers-ff1cee1ae31d4022801b233a75ed49c7",
          },
          {
            label: "How To Avoid Selection Bias In Market Research",
            url: "https://vinshikajain.notion.site/How-To-Avoid-Selection-Bias-In-Market-Research-f6a42cf2600d4cc78f2e5fb0574f5e36",
          },
        ],
      },
      {
        image:
          "https://static.toiimg.com/thumb/msid-120797470,width-1280,height-720,resizemode-4/120797470.jpg",
        text: "Travel",
        body: "",
        links: [
          {
            label: "Benefits of using a forex card while traveling",
            url: "https://vinshikajain.notion.site/Benefits-of-using-a-forex-card-while-traveling-52fd136c180d40e986d714856481e0ca",
          },
          {
            label: "Tips to avoid money transfer fraud",
            url: "https://vinshikajain.notion.site/Tips-to-avoid-money-transfer-fraud-538e68b425534128968d01650cd2788a",
          },
          {
            label:
              "How to utilize the leftover foreign currency after coming back to India?",
            url: "https://vinshikajain.notion.site/How-to-utilize-the-leftover-foreign-currency-after-coming-back-to-India-3dca97255f2a429f994dc3decd3994ce",
          },
          {
            label:
              "Travfx- the smartest and easiest way to transfer money from India",
            url: "https://vinshikajain.notion.site/Travfx-the-smartest-and-easiest-way-to-transfer-money-from-India-967c883f25094cd4ae2fd1fbb7c1c67b",
          },
          {
            label: "How to Identify Scammers/Scam text",
            url: "https://vinshikajain.notion.site/How-to-Identify-Scammers-Scam-text-5618908402ea44dfb66208a0a08a8d90",
          },
          {
            label: "How can students abroad manage their finances?",
            url: "https://vinshikajain.notion.site/How-can-students-abroad-manage-their-finances-c1f51ba2e9d64fc3a2aaf4d5c3087993",
          },
        ],
      },
      {
        image:
          "https://www.bakels.com.au/wp-content/uploads/sites/21/2020/07/Logo-Crown-PMS-281-Blue.jpg ",
        text: "Baking",
        body: "",
        links: [
          {
            label: "How bakers can save money without sacrificing quality",
            url: "https://vinshikajain.notion.site/How-bakers-can-save-money-without-sacrificing-quality-59d7660292234c289b976988d2b3a184",
          },
          {
            label: "The Healthier Swift in the Baking Industry ",
            url: "https://vinshikajain.notion.site/The-Healthier-Swift-in-the-Baking-Industry-9b5d42050ecb4ae8a4e92f1679eceb31",
          },
        ],
      },
      {
        image:
          "https://www.amenityhome.com/wp-content/uploads/2023/11/AmenityHome-Mob-Icon.png.webp",
        text: "Interior",
        body: "",
        links: [
          {
            label:
              "18 Mid-Century Modern Round Dining Tables to Elevate Your Interior",
            url: "https://vinshikajain.notion.site/18-Mid-Century-Modern-Round-Dining-Tables-to-Elevate-Your-Interior-b28e0e593c464f8f913c786f66b0f4b5",
          },
          {
            label:
              "The Ultimate Guide to Finding the Best Slipcovered Sofas of 2023",
            url: "https://vinshikajain.notion.site/The-Ultimate-Guide-to-Finding-the-Best-Slipcovered-Sofas-of-2023-5a894683fc094bae9f291bc199620df8",
          },
          {
            label: "9 Decor Ideas To Make Your Guest Bedroom Multifunctional",
            url: "https://vinshikajain.notion.site/9-Decor-Ideas-To-Make-Your-Guest-Bedroom-Multifunctional-08377831df6445ffbba16eb22033759c",
          },
          {
            label: "Painting Wood Floor",
            url: "https://vinshikajain.notion.site/Painting-Wood-Floor-0a0aaebd884540d0be06050d89aa9ae1",
          },
          {
            label: "The Best Sanders to Remove Paint",
            url: "https://vinshikajain.notion.site/The-Best-Sanders-to-Remove-Paint-A-Comprehensive-Guide-to-Finding-the-Perfect-Paint-Sander-6047e92980c94896997e2e1185634950",
          },
        ],
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTeHqjg40dh9JXratQ2_4hvobtl_uYm_9bQQ&s",
        text: "Sample scripts ",
        body: "The scripts below are written in Hinglish as an assignment for the course I did at Terrible Tiny Tales aka ttt .",
        links: [
          {
            label: "Flaws",
            url: "https://file.notion.so/f/f/ae0e8bc9-318c-42b7-9150-fcd3afc148a0/3b675e86-61bb-48b4-9ec6-08d0f980cf35/Flaws.pdf",
          },
          {
            label: "Holding hands at Signal",
            url: "https://file.notion.so/f/f/ae0e8bc9-318c-42b7-9150-fcd3afc148a0/64d745d1-eaf5-4860-b70f-9a1e3281e405/Holding_hands_at_Signal.pdf",
          },
        ],
      },
      {
        image:
          "https://happydoors.in/wp-content/uploads/2023/08/Happy-Doors-LOGO-e1693028023508.png",
        text: "Happy Doors – Product Storytelling",
        body: "Concise, customer-friendly product descriptions balancing technical detail and design appeal.",
        links: [
          {
            label: "Explore Happy Doors",
            url: "https://vinshikajain.notion.site/Happy-Doors-17b3a32d053d45b289f1e3ce3b11c46d",
          },
        ],
      },
      {
        image:
          "https://vinshikajain.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5fe6874e-7d01-4fb4-8d92-59aeae321138%2FUntitled.png?id=82d2328c-f90c-4583-807a-7d1ebcbd80c8&table=block&spaceId=ae0e8bc9-318c-42b7-9150-fcd3afc148a0&width=250&userId=&cache=v2",
        text: "Glee & Glint – Handcrafted Product Copy",
        body: "Compelling product storytelling to highlight antique and handcrafted offerings.",
        links: [
          {
            label: "Explore Glee and Glint",
            url: "https://vinshikajain.notion.site/Glee-and-Glint-82d2328cf90c4583807a7d1ebcbd80c8",
          },
        ],
      },
      {
        image:
          "https://s10eventmakers.com/Backend/images/Headersetting/black_logo1687328829.svg",
        text: "S10 Weddings | Website Content",
        body: "Elegant, experience-driven content showcasing bespoke wedding design and planning.",
        links: [
          {
            label: "Explore S10 Weddings",
            url: "https://vinshikajain.notion.site/S10-Weddings-2f01cf939bbf4d24b78b2f5b929bd81d",
          },
        ],
      },
      {
        image:
          "https://amorejewels.net/wp-content/uploads/2023/01/Amore_LOGO-02.svg ",
        text: "Amore Jewels | Website Copy",
        body: "Timeless website content capturing craftsmanship and design philosophy.",
        links: [
          {
            label: "Explore Amore Jewels",
            url: "https://amorejewels.net/",
          },
        ],
      },
      {
        image: cm5,
        text: "Soul Magik",
        body: "Soul Magikk is a spiritual & wellness brand offering products like numerology soaps, crystal bracelets, spiritual oils, and curated hampers. For Soul Magik, I wrote website copy, Amazon listings, and product descriptions. I ensured each line reflects the brand’s mystical, spiritual tone while clearly communicating product features, benefits, and emotional appeal.",
        links: [
          {
            label: "Explore Soul Magik",
            url: "https://soulmagik.in/?srsltid=AfmBOooqDX2-y_3Pfn1aPe4f-zV9-VBIx9rT0TDKPOvQmdGMeGB9Idmw",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Email Marketing",
    image:
      "https://blog.blendee.com/wp-content/uploads/2024/11/email-marketing.jpg",
    carouselContent: [
      {
        image: em1,
        text: "America and Beyond",
        body: "America & Beyond is a US-based fashion / lifestyle brand with global appeal. As Project Manager & Copywriter, I over look email marketing strategy, write emailers, automated flow copy, and signup forms. I am working on their retail and wholesale emailer. Where I also manage their Klaviyo campaigns. Using Klaviyo analytics, I tracked performance metrics and optimized campaigns. I also created weekly strategic decks to assess what’s working vs what’s not. Emailers and Flows I have worked on:",
        links: [
          {
            label: "A&B Wholesale Newsletter Emailers ",
            url: "https://vinshikajain.notion.site/A-B-Wholesale-Newsletter-Emailers-27424bea4a45806fa11dc3fd99a4ea3a",
          },
          {
            label: "A&B Wholesale Product Based Emailer",
            url: "https://vinshikajain.notion.site/A-B-Wholesale-Product-Based-Emailer-27424bea4a45802090c6cccf13738372",
          },
          {
            label: "A&B Retail Campaigns",
            url: "https://vinshikajain.notion.site/A-B-Retail-Campaigns-27424bea4a4580a1a41ff77a3726fa64",
          },
          {
            label: "A&B Retail Birthday Flow",
            url: "https://vinshikajain.notion.site/A-B-Retail-Birthday-Flow-27424bea4a45804cbcadc6496eff5730",
          },
          {
            label: "A&B SMS Copy",
            url: "https://vinshikajain.notion.site/A-B-SMS-Copy-27424bea4a458033800ff95bce5eed58",
          },
        ],
      },
      {
        image: seeplogo,
        text: "Seep",
        body: "Seep is a UK-based eco-friendly home cleaning brand that creates sustainable, plastic-free cleaning products designed to reduce waste and protect the planet. As an Email Copywriter, I crafted engaging email campaigns and automated flows that highlighted Seep’s products while reinforcing their sustainability mission.",
        links: [
          {
            label: "Seep Emailers",
            url: "https://vinshikajain.notion.site/Seep-Emailer-s-27424bea4a4580dd94adda7ab7caa3ab",
          },
          {
            label: "Seep Sunset Flow",
            url: "https://vinshikajain.notion.site/Seep-Sunset-Flow-27424bea4a458010b120d8a8e23036c0",
          },
        ],
      },
      {
        image:
          "https://cottontwist.co.uk/cdn/shop/files/Navy_-_Horizontal_strapline.png?v=1740757188&width=600",
        text: "Cotton Twist",
        body: "Cotton Twist is a UK-based brand creating eco-friendly craft kits for kids, designed to spark creativity while staying planet-friendly. I joined as the copywriter, where I established the brand’s tone of voice, engagement strategy, and copywriting guidelines. Beyond setting the foundation, I wrote email flows, campaigns, and storytelling copy that positioned Cotton Twist as a playful yet eco-conscious brand, helping it connect with parents, grandparents & gift-giver.",
        links: [
          {
            label: "Cotton Twist Emailers",
            url: "https://vinshikajain.notion.site/Cotton-Twist-Emailers-27424bea4a458052ad69fa6bc8232f39",
          },
          {
            label: "Sign Up Form (Klaviyo)",
            url: "https://vinshikajain.notion.site/Sign-Up-Form-Klaviyo-27424bea4a45806187cad148c3e6ad23",
          },
          {
            label: "Text Based Flow",
            url: "https://vinshikajain.notion.site/Text-Based-Flow-27424bea4a4580089c91c8158cef94a2",
          },
        ],
      },
      {
        image: em3,
        text: "Diaza",
        body: "Diaza is a sportswear & customizable uniform brand, offering high-performance gear for teams and athletes. As an Email Copywriter for Diaza, I wrote email campaigns that reflect the brand’s athletic, dynamic voice. I maintain tone consistency across all messages.",
        links: [
          {
            label: "Diaza Emailers",
            url: "https://vinshikajain.notion.site/Diaza-Emailers-27424bea4a458011816bf5cadd04a3df",
          },
        ],
      },
      {
        image: em4,
        text: "The Clever Nest",
        body: "The Clever Nest is an AI-focused company and content platform sharing the latest news, tools, and insights from the world of artificial intelligence. Their newsletters and updates cover everything from major AI events. As a **Newsletter Writer & Content Marketer**, I researched and curated AI updates, wrote and scheduled newsletters using **Beehiiv**, and repurposed content into LinkedIn posts to extend reach and engagement. My role combined content creation with execution ensuring consistent, timely communication across email and social channels.",
        links: [
          {
            label: "Link 1",
            url: "https://www.theclevernest.com/p/ai-agent-revolution-ac9d",
          },
          {
            label: "Link 2",
            url: "https://www.theclevernest.com/p/ai-tools-inside-4cad",
          },
          {
            label: "Link 3",
            url: "https://www.theclevernest.com/p/highlights-from-google-i-o-c256",
          },
          {
            label: "Post 1",
            url: "https://www.linkedin.com/feed/update/urn:li:activity:7344711191694356480/",
          },
          {
            label: "Post 2",
            url: "https://www.linkedin.com/feed/update/urn:li:activity:7344293561565077505/",
          },
          {
            label: "Post 3",
            url: "https://www.linkedin.com/feed/update/urn:li:activity:7343269241615187969/",
          },
        ],
      },
      {
        image: em5,
        text: "ZeroSwap",
        body: "ZeroSwap is a Web 3.0 platform that enables gasless, multi-chain trading and DeFi solutions. I supported ZeroSwap as an Email Copywriter, creating weekly newsletters that simplified complex Web3 updates into engaging, easy-to-read content. My focus was on making highly technical information accessible, keeping the tone community-driven while highlighting new features, partnerships, and product updates. Proof of work:",
        links: [
          {
            label: "ZeroSwap-Weekly Crypto-NFT",
            url: "https://vinshikajain.notion.site/ZeroSwap-Weekly-Crypto-NFT-c8c2b0bc237941ee942d7d54c146b0ef",
          },
          {
            label: "ZeroSwap-Weekly Crypto-NFT",
            url: "https://vinshikajain.notion.site/ZeroSwap-Weekly-Crypto-NFT-74549b783f9c4e23b7c6a0d6d3a49b54",
          },
        ],
      },
    ],
  },
];

export default function PortfolioGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === selectedProject.carouselContent.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? selectedProject.carouselContent.length - 1 : prev - 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    if (!modalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, selectedProject]);

  return (
    <section className="w-full  bg-[#f3ede7] py-16 mb-1" id="portfolio">
      {/* Heading */}
      <motion.h3
        className="text-3xl md:text-4xl font-bold text-center text-[#4d2a2a] mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        PORTFOLIO
      </motion.h3>

      {/* Grid */}
      <motion.div
        className="max-w-7xl mx-auto bg-white shadow-md px-6 py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p, index) => (
            <motion.div
              key={p.id}
              className="relative h-64 overflow-hidden rounded-md cursor-pointer group"
              onClick={() => openModal(p)}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${p.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-white text-lg md:text-xl font-semibold text-center px-2">
                  {p.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <motion.div
            className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedProject.title}
              </h3>
              <button
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                onClick={closeModal}
              >
                ×
              </button>
            </div>

            {/* Content area (scrollable if long) */}
            <div className="flex-1 overflow-y-auto">
              <div className="relative">
                <div
                  className="overflow-hidden"
                  onTouchStart={(e) =>
                    (e.currentTarget.touchStartX = e.touches[0].clientX)
                  }
                  onTouchEnd={(e) => {
                    const touchEndX = e.changedTouches[0].clientX;
                    const touchStartX = e.currentTarget.touchStartX;

                    if (touchStartX - touchEndX > 50) nextSlide();
                    else if (touchEndX - touchStartX > 50) prevSlide();
                  }}
                >
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                  >
                    {selectedProject.carouselContent.map((content, index) => (
                      <div key={index} className="w-full flex-shrink-0 p-6">
                        <div className="flex flex-col lg:flex-row gap-6 items-start">
                          {/* Image */}
                          <div className="lg:w-1/2 w-full">
                            <div className="relative aspect-video rounded-lg overflow-hidden flex items-center justify-center bg-white">
                              <img
                                src={content.image}
                                alt={content.text}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>

                          {/* Text (scrolls if long) */}
                          <div className="lg:w-1/2 w-full space-y-4 overflow-y-auto max-h-[55vh] pr-2">
                            <h4 className="text-2xl font-bold text-gray-800 leading-tight">
                              {content.text}
                            </h4>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                              {content.body}
                            </p>

                            {content.links && (
                              <div className="flex flex-wrap gap-4 pt-2">
                                {content.links.map((l, i) => (
                                  <a
                                    key={i}
                                    href={l.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#4d2a2a] font-medium hover:underline"
                                  >
                                    {l.label}↗
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom navigation (always visible) */}
            {selectedProject.carouselContent.length > 1 && (
              <div className="flex justify-center items-center space-x-4 p-4 border-t border-gray-200 bg-white sticky bottom-0">
                <button
                  className="bg-white shadow p-3 rounded-full hover:bg-gray-50"
                  onClick={prevSlide}
                >
                  ◀
                </button>

                <div className="flex space-x-2">
                  {selectedProject.carouselContent.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? "bg-gray-800" : "bg-gray-300"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>

                <button
                  className="bg-white shadow p-3 rounded-full hover:bg-gray-50"
                  onClick={nextSlide}
                >
                  ▶
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
