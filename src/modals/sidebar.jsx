import Link from 'next/link';
import Image from 'next/image';
import ImagePopup from './ImagePopup';
import React, { useState } from 'react';

import Logo from "@assets/img/logo/logo.png";
import sidebar_img_1 from "@assets/img/portfolio/img01.jpeg";
import sidebar_img_2 from "@assets/img/portfolio/img02.jpeg";
import sidebar_img_3 from "@assets/img/portfolio/img03.jpeg";
import sidebar_img_4 from "@assets/img/portfolio/img04.jpeg";
import sidebar_img_5 from "@assets/img/portfolio/img05.jpeg";
import sidebar_img_6 from "@assets/img/portfolio/img06.jpeg";
import sidebar_img_7 from "@assets/img/portfolio/img07.jpeg";
import sidebar_img_8 from "@assets/img/portfolio/img08.jpeg";
import MobileMenus from '../layout/headers/mobile-menus';
const images =  [
    {id: 1, img: sidebar_img_1 }, 
    {id: 2, img: sidebar_img_2 }, 
    {id: 3, img: sidebar_img_3 }, 
    {id: 4, img: sidebar_img_4 }, 
    {id: 5, img: sidebar_img_5 }, 
    {id: 6, img: sidebar_img_6 },
    {id: 7, img: sidebar_img_7 },
    {id: 8, img: sidebar_img_8 },
]


const Sidebar = ({sidebarOpen, setSidebarOpen, home_three}) => {
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const img = images.map((item) => item.img.src);

    return (
        <>
            <div className={`offcanvas__area ${sidebarOpen ? "offcanvas-opened" : ""} ${home_three ? "home-3-pos" : ""}`}>
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__close">
                        <button className="offcanvas__close-btn offcanvas-close-btn" onClick={() => setSidebarOpen(false)}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1 1L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                <div className="offcanvas__content">
                    <div className="offcanvas__top mb-50 d-flex justify-content-between align-items-center">
                        <div className="offcanvas__logo logo">
                            <Link href="/">
                            <Image src={Logo} alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="mobile-menu fix d-lg-none"></div>
                    <div className="tp-mobile-menu-pos mean-container d-lg-none">
                        <MobileMenus />
                    </div>
                    <div className="offcanvas__popup">
                        <p>Innovative Solutions & Skilled Approaches from Digital Hub Transform Your Online Presence, Increase Engagement, & Strengthen Your Brand.</p>
                        <div className="offcanvas__popup-gallery">
                            <h4 className="offcanvas__title">Gallery</h4>
                            {images.map((item, i) => 
                                <a key={i} style={{ cursor: "pointer" }} 
                                onClick={() => handleImagePopup(i)} 
                                className="popup-image">
                                    <Image src={item.img} alt="theme-pure" />
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="offcanvas__contact">
                        <h4 className="offcanvas__title">Contacts</h4>
                        <div className="offcanvas__contact-content d-flex">
                            <div className="offcanvas__contact-content-icon">
                            <i className="fa-sharp fa-solid fa-location-dot"></i>
                            </div>
                            <div className="offcanvas__contact-content-content">
                            <a href="https://www.google.com/maps/place/Digital+Hub+Bangladesh+Ltd/@23.7435577,90.3690644,17z/data=!3m1!4b1!4m6!3m5!1s0x3755bf4b960369c5:0x222c3f3f9659150c!8m2!3d23.7435577!4d90.3716393!16s%2Fg%2F1ptxg88m0?entry=ttu">89/A, Road 8A, Dhanmondi, Dhaka 1209
</a>
                            </div>
                        </div>
                        <div className="offcanvas__contact-content d-flex">
                            <div className="offcanvas__contact-content-icon">
                            <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="offcanvas__contact-content-content">
                            <a href="mailto:info@digitalhubbd.com">info@digitalhubbd.com</a>
                            </div>
                        </div>
                        <div className="offcanvas__contact-content d-flex">
                            <div className="offcanvas__contact-content-icon">
                            <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="offcanvas__contact-content-content">
                            <a href="tel:01309-514133"> 01309-514133</a>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas__social"> 
                        <a className="icon facebook" href="https://www.facebook.com/digitalhubbangladesh"><i className="fab fa-facebook-f"></i></a>
                        <a className="icon twitter" href="https://twitter.com/DigitalHub94539"><i className="fab fa-twitter"></i></a>
                        <a className="icon youtube" href="#"><i className="fab fa-youtube"></i></a>
                        <a className="icon linkedin" href="https://www.linkedin.com/in/digital-hub-limited-a987052a0/"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                </div>
            </div>
         <div className={`body-overlay ${sidebarOpen && "opened"}`} onClick={() => setSidebarOpen(false)}></div>

         {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
        </>
    );
};

export default Sidebar;