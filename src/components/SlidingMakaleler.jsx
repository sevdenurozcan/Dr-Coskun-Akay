import React from 'react'
import "../css/SlidingMakaleler.css"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from "../images/glutatyon.jpg";
import img2 from "../images/kan.jpg";
import img3 from "../images/kanser.jpg";
import img4 from "../images/romatizma.jpg";
import img5 from "../images/vitamind.jpg";
import img6 from "../images/diyabet.jpg";



function SlidingMakaleler() {

    const screenWidth = document.getElementById("demo").innerHTML

    return (

        <div>
            <h2>MAKALELERİMİZ</h2>
            <div className='slideshow-con'>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={2}
                    navigation={true}  // Fix navigation
                    pagination={{ clickable: true, dynamicBullets: true }}
                    scrollbar={{ draggable: true }}  // Allow scrolling
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >


                    <SwiperSlide className='mySlides'>
                        <img src={img1} alt="Glutatyon tedavisi" className='imgg' />
                        <h4>Glutatyon Tedavisi</h4>
                        <p style={{ width: "75%" }}>Glutatyon vücudumuzdaki hücrelerde yapılan ve detoks safhalarının iki fazında da rol oynayan en güçlü antioksidanlardan birisidir.</p>
                    </SwiperSlide>
                    <SwiperSlide className='mySlides'>
                        <img src={img2} alt="Ozon güvenilir bir yöntem midir?" className='imgg' />
                        <h4>Ozon Güvenilir Bir Yöntem Midir?</h4>
                        <p style={{ width: "75%" }}>Ozon tedavisinin yapılmaması gereken bazı durumlar haricinde ozon terapi uzman hekim kontrolünde yapıldığında yan etki olasılığı çok düşük ve etkili bir tedavi yöntemidir.</p>
                    </SwiperSlide>
                    <SwiperSlide className='mySlides'>
                        <img src={img3} alt="Kanser ve ozon tedavisi" className='imgg' />
                        <h4>Kanser ve Ozon Tedavisi</h4>
                        <p style={{ width: "75%" }}>Kanser toplumların korkulu rüyası olmaya devam eden, tedavisi oldukça zahmetli ve uzun süreli bir hastalıktır.</p>
                    </SwiperSlide>
                    <SwiperSlide className='mySlides'>
                        <img src={img4} alt="Romatizma ve ozon tedavisi" className='imgg' />
                        <h4>Romatizma ve Ozon Tedavisi</h4>
                        <p style={{ width: "75%" }}>Halk arasında romatizma olarak bilinen hastalıklar 150’den fazla hastalığın ortak adıdır.</p>
                    </SwiperSlide>
                    <SwiperSlide className='mySlides'>
                        <img src={img5} alt="D vitamini ve hastalıklarla ilişkisi" className='imgg' />
                        <h4>D Vitamini ve Hastalıklarla İlişkisi</h4>
                        <p style={{ width: "75%" }}>D vitamini bir hormon öncü molekülüdür ve iki formda bulunur. Ergokalsiferol (vitamin D2) bitkilerde ve bazı balıklarda bulunur. </p>
                    </SwiperSlide>
                    <SwiperSlide className='mySlides'>
                        <img src={img6} alt="Ozon ile diyabet tedavisi" className='imgg' />
                        <h4>Diyabette Ozon Tedavisi</h4>
                        <p style={{ width: "75%" }}>Diyabet, yani şeker hastalığı, pankreastan yetersiz düzeyde insulin hormonu salgılanması ya da hücrelerin insulin hormonuna karşı gösterdiği direnç sonucu ortaya çıkar.</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default SlidingMakaleler;
