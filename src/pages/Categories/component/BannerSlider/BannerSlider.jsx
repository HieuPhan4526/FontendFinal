import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "./BannerSlider.css"
export default function BannerSlider(props) {
  const sliderOnPages = [
    {
      id: 1,
      slideList: [
        { title: "Minimalist Logo Design", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png" },
        { title: "Architecture & Interior Design", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png" },
        { title: "Image Editing", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101624/Photoshop%20Editing_2x.png" },
        { title: "NFT Art", img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/fc6c7b8c1d155625e7878252a09c4437-1653222039380/Nft%20Art%20%281%29.png" },
        { title: "T-Shirts & Merchandise", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101623/T-Shirts%20_%20Merchandise_2x.png" },
        { title: "Illustration", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101633/Illustration_2x.png" },
        { title: "Business Cards Design", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285646/Resume%20Writing.png" },
        { title: "Social Media Design", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101621/Social%20Media%20Design_2x.png" },
        { title: "Graphics for Streamers", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101632/Graphics%20for%20Streamers_2x.png" },
      ]
    },
    {
      id: 2,
      slideList: [
        { title: "SEO", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278710/SEO_2x.png" },
        { title: "Social Media Marketing", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278701/Social%20Media%20Marketing_2x.png" },
        { title: "Video Marketing", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278703/Video%20Marketing_2x.png" },
        { title: "Music Promotion", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278721/Music%20Promotion_2x.png" },
        { title: "Social Media Advertising", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278720/Social%20Media%20Advertising_2x.png" },
        { title: "E-Commerce Marketing", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278707/E-Commerce%20Marketing_2x.png" },
        { title: "Email Marketing", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278711/Email%20Marketing_2x.png" },
        { title: "SEM", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278716/SEM_2x.png" },
      ]
    },
    {
      id: 3,
      slideList: [
        { title: "Articles & Blog Posts", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285644/Articles%20_%20Blog%20Posts.png" },
        { title: "Translation", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285630/Translation.png" },
        { title: "Ghostwriting", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285651/Ghostwriting.png" },
        { title: "Proofreading & Editing", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285643/Proofreading%20_%20Editing.png" },
        { title: "Resume Writing", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285646/Resume%20Writing.png" },
        { title: "Website Content", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285650/Website%20Content.png" },
        { title: "Product Descriptions", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285639/Product%20Descriptions.png" },
        { title: "Scriptwriting", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285629/Scriptwriting.png" },
        { title: "Book Editing", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285638/Book%20Editing.png" },
      ]
    },
    {
      id: 4,
      slideList: [
        { title: "Video Editing", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670390/Video%20Editing.png" },
        { title: "Video Ads & Commercials", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670370/Short%20Video%20Ads.png" },
        { title: "Whiteboard & Animated Explainers", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/4e99f7989f6e3ea9fc115fc017051455-1630332866288/Whiteboard%20_%20Animated%20Explainers.png" },
        { title: "E-Commerce Product Videos", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670387/E-Commerce%20Product%20Videos.png" },
        { title: "Social Media Videos", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/9d0390ca87e4f946f4b4126d5cd15332-1653292063612/Social%20Media%20Videos%20icon%29.png" },
        { title: "Character Animation", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670382/Character%20Animation.png" },
        { title: "Logo Animation", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670372/Logo%20Animation.png" },
        { title: "Visual Effects", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670391/Visual%20Effects.png" },
        { title: "3D Product Animation", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670388/3D%20Product%20Animation.png" },
      ]
    },
    {
      id: 5,
      slideList: [
        { title: "Voice Over", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323563/Voice%20Over_2x.png" },
        { title: "Producers & Composers", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323574/Producers_Composers_2x.png" },
        { title: "Singers & Vocalists", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323569/Singers_Vocalists_2x.png" },
        { title: "Mixing & Mastering", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323569/Mixing_Mastering_2x.png" },
        { title: "Session Musicians", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323556/Session%20Musicians_2x.png" },
        { title: "Songwriters", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323560/Songwriters_2x.png" },
        { title: "Podcast Editing", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323553/Podcast%20Editing_2x.png" },
        { title: "Beats", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323551/Beats%20%28Beat%20Making%29_2x.png" },
        { title: "Sound Design", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323558/Sound%20Design_2x.png" },
      ]
    },
    {
      id: 6,
      slideList: [
        { title: "WordPress Developers", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/b6701ed1ebb288b30d0a845b6b87c071-1626182044816/WordPress%20Developers_2x.png" },
        { title: "Shopify Developers", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/b6701ed1ebb288b30d0a845b6b87c071-1626182044812/Shopify%20Developers_2x.png" },
        { title: "Wix Developers", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/b6701ed1ebb288b30d0a845b6b87c071-1626182044829/Wix%20Developers_2x.png" },
        { title: "Android Developers", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/b6701ed1ebb288b30d0a845b6b87c071-1626182044823/Android%20Developers_2x.png" },
        { title: "iOS Developers", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/b6701ed1ebb288b30d0a845b6b87c071-1626182044806/iOS%20Developers_2x.png" },
        { title: "Unity Developers", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/b6701ed1ebb288b30d0a845b6b87c071-1626182044819/Unity%20Developers_2x.png" },
        { title: "Python Developers", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/b6701ed1ebb288b30d0a845b6b87c071-1626182044812/Python%20Developers_2x.png" },
        { title: "JavaScript Developers", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/b6701ed1ebb288b30d0a845b6b87c071-1626182044826/JavaScript%20Developers_2x.png" },
        { title: "HTML & CSS Developers", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/d10b2d17b529a4f9e4fcea0cc4036259-1627221464843/Html%20and%20Css.png" },
      ]
    },
    {
      id: 7,
      slideList: [
        { title: "E-Commerce Store Manager", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720709/Frame%20691311670.png" },
        { title: "Lead Generation", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/01450128a7a217803cc1883e43cf26ec-1631621994546/sales.png" },
        { title: "Accounting & Bookkeeping", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720700/Frame%20691311530.png" },
        { title: "Patent Applications", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720691/Frame%20691311671.png" },
        { title: "CRM Management", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720693/Frame%20691311667.png" },
        { title: "Business Plans", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720698/Frame%20691311672.png" },
        { title: "Business Consulting", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720713/Frame%20691311668.png" },
        { title: "Customer Care", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720693/Frame%20691311667.png" },
        { title: "Legal Consulting", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720691/Frame%20691311671.png" },
        { title: "Market Research", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720697/Frame%20691311666.png" },
        { title: "Virtual Assistant", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/70958cf8c8b29ab96cabd1b1bc065490-1630317720690/Frame%20691311673.png" },
      ]
    },
    {
      id: 8,
      slideList: [
        { title: "Astrology & Psychics", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/bc52d09000ec9f63b016aa744d321514-1630332267516/Astrology%20_%20Psychics.png" },
        { title: "Arts & Crafts", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/bc52d09000ec9f63b016aa744d321514-1630332267494/Arts%20_%20Crafts.png" },
        { title: "Online Tutoring", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/bc52d09000ec9f63b016aa744d321514-1630332267509/Online%20Tutoring.png" },
        { title: "Game Coaching", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/bc52d09000ec9f63b016aa744d321514-1630332267510/Game%20Coaching.png" },
        { title: "Modeling & Acting", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/bc52d09000ec9f63b016aa744d321514-1630332267504/Modeling%20_%20Acting.png" },
        { title: "Life Coaching", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/bc52d09000ec9f63b016aa744d321514-1630332267502/Life%20Coaching.png" },
        { title: "Wellness", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/bc52d09000ec9f63b016aa744d321514-1630332267508/Health_%20Nutrition%20_%20Fitness.png" },
        { title: "Fitness Lessons", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/bc52d09000ec9f63b016aa744d321514-1630332267503/Fitness%20Lessons.png" },
        { title: "Personal Stylists", img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/bc52d09000ec9f63b016aa744d321514-1630332267511/Personal%20Stylists.png" },
      ]
    },
  ]
  return sliderOnPages.map((slider, index) => {
    if (props.id === slider.id) {
      return (
        <div key={index}>
          <Swiper
            slidesPerView={4}
            slidesPerGroup={5}
            speed={600}
            spaceBetween={10}
            className="mySwiper"
          >
            {slider.slideList.map((list, index) => {
              return <SwiperSlide className='w-auto' key={index}>
                <div className='banner-slide' >
                  <img src={list.img} alt="" />
                  <span className='font-weight-bold p-2'>{list.title}</span>
                  <span className='font-weight-bold'>
                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path></svg>
                  </span>
                </div>
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      )
    }
  })

}
