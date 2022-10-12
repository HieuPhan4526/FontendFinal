import React from 'react'
import BannerButton from './component/BannerButton/BannerButton'
import BannerSlider from './component/BannerSlider/BannerSlider'
import CategoriesDetail from './component/CategoriesDetail/CategoriesDetail'
import "./Categories.css"
export default function Categories(props) {
    const CategoriesPages = [
        { id: 1, url: "/categories/graphics-design", name: "Graphics & Design", slogan: "Designs to make you stand out.", banner: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3f1b7ea10295936b6846bcff0afd38cf-1626595415203/graphics-design-desktop.png" },
        { id: 2, url: "/categories/digital-marketing", name: "Digital Marketing", slogan: "Build your brand. Grow your business.", banner: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3f1b7ea10295936b6846bcff0afd38cf-1626595415207/digital-marketing-desktop.png" },
        { id: 3, url: "/categories/writing-translation", name: "Writing & Translation", slogan: "Get your words across—in any language.", banner: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/42593ecc6f1e40fd735892b99f001ea4-1631622804534/writing%20_%20translation.png" },
        { id: 4, url: "/categories/video-animation", name: "Video & Animation", slogan: "Bring your story to life with creative videos.", banner: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/0f6552319e77504dc5f59479b7ad83f1-1631622668242/Video%20_%20Animation.png" },
        { id: 5, url: "/categories/music-audio", name: "Music & Audio", slogan: "Don't miss a beat. Bring your sound to life.", banner: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3f1b7ea10295936b6846bcff0afd38cf-1626595415210/music-audio-desktop.png" },
        { id: 6, url: "/categories/programing-tech", name: "Programming & Tech", slogan: "You think it. A programmer develops it.", banner: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3f1b7ea10295936b6846bcff0afd38cf-1626595415213/programming-tech-desktop.png" },
        { id: 7, url: "/categories/business", name: "Business", slogan: "Take your business to the next level.", banner: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/dfda78b6f6a73b6a9994070c056c0271-1631623279971/Business.png" },
        { id: 8, url: "/categories/lifestyle", name: "Lifestyle", slogan: "Your life. Your style. Find the balance", banner: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/9a9549b2f566b136fc15be5a34c49edd-1631623052332/Lifestyle.png" },
    ]
    return CategoriesPages.map((page, index) => {
        if (page.url === props.match.path) {
            return (
                <div className='container' key={index}>
                    <div className='categories-banner'>
                        <div style={{
                            background: `url(${page.banner})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            borderRadius: "10px 10px 10px 10px"
                        }}>
                            <img style={{ opacity: 0, width: "100%", height: 260 }} alt="" />
                        </div>
                        <div className='categories-banner-content'>
                            <h1 className='title'>{page.name}</h1>
                            <p>{page.slogan}</p>
                            <BannerButton id={page.id} />
                        </div>
                    </div>
                    <div className='categories-swiper'>
                        <h2 className="pt-4 font-weight-bold">Most popular in {page.name}</h2>
                        <BannerSlider id={page.id}/>
                    </div>
                    <div className="categories-detail">
                        <h2 className="pt-4 font-weight-bold">Explore {page.name}</h2>
                        <CategoriesDetail id={page.id}/>
                    </div>
                    <div className='cate-video-container' id='cate-video' onClick={() => {
                        document.getElementById("cate-video").style.display = "none"
                        document.getElementById("video").pause()
                    }}>
                        <video id='video' className='cate-video' width="900" height="550" controls="controls" loop>
                            <source src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd_nl/v1/video-attachments/generic_asset/asset/ab0907217c9f9a2c1d2eee677beb7619-1626082923646/how_fiverr_works" type="video/mp4" />
                            Error Message
                        </video>
                    </div>
                </div>

            )
        }
    })

}
