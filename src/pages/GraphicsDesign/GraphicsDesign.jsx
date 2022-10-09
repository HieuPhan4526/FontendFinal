import React from 'react'
import BannerButton from '../../components/BannerButton/BannerButton'
import BannerSlider from '../../components/BannerSlider/BannerSlider'
import CategoriesDetail from '../../components/CategoriesDetail/CategoriesDetail'
import "./GraphicsDesign.css"
export default function GraphicsDesign() {
    return (
        <div className='container'>
            <div className='categories-banner'>
                <div style={{
                    background: "url(https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3f1b7ea10295936b6846bcff0afd38cf-1626595415203/graphics-design-desktop.png)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "10px 10px 10px 10px"
                }}>
                    <img style={{ opacity: 0, width: "100%", height: 260 }} src={require("../../assets/img/graphics-design-desktop.webp")} alt="" />
                </div>
                <div className='categories-banner-content'>
                    <h1 className='title'>Graphics & Design</h1>
                    <p>Designs to make you stand out.</p>
                    <BannerButton />
                </div>
            </div>
            <div className='categories-swiper'>
                <h2 className="pt-4 font-weight-bold">Most popular in Graphics &amp; Design</h2>
                <BannerSlider />
            </div>
            <div className="categories-detail">
                <h2 className="pt-4 font-weight-bold">Explore Graphics & Design</h2>
                <CategoriesDetail/>
            </div>
        </div>

    )
}
