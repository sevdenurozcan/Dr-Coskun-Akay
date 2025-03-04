'use client';
import "../css/SlidingMakaleler.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




function SlidingMakaleler() {

    return (

        <div>
            <div className='header-makale'>
                <h2>MAKALELERİMİZ</h2>
            </div>
            <div className='slideshow-con'>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={2}
                    navigation={true}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >


                    <SwiperSlide className='mySlides'>
                        <img src="/images/glutatyon.jpg" alt="Glutatyon tedavisi" className='imgg' />
                        <h4>Glutatyon Tedavisi</h4>
                        <p className="par">Glutatyon vücudumuzdaki hücrelerde yapılan ve detoks safhalarının iki fazında da rol oynayan en güçlü antioksidanlardan birisidir.</p>
                    </SwiperSlide>
                    <SwiperSlide className='mySlides'>
                        <img src="/images/kan.jpg" alt="Ozon güvenilir bir yöntem midir?" className='imgg' />
                        <h4>Ozon Güvenilir Bir Yöntem Midir?</h4>
                        <p className="par">Ozon tedavisinin yapılmaması gereken bazı durumlar haricinde ozon terapi uzman hekim kontrolünde yapıldığında yan etki olasılığı çok düşük ve etkili bir tedavi yöntemidir.</p>
                    </SwiperSlide>
                    <SwiperSlide className='mySlides'>
                        <img src="/images/kanser.jpg" alt="Kanser ve ozon tedavisi" className='imgg' />
                        <h4>Kanser ve Ozon Tedavisi</h4>
                        <p className="par">Kanser toplumların korkulu rüyası olmaya devam eden, tedavisi oldukça zahmetli ve uzun süreli bir hastalıktır.</p>
                    </SwiperSlide>
                    <SwiperSlide className='mySlides'>
                        <img src="/images/romatizma.jpg" alt="Romatizma ve ozon tedavisi" className='imgg' />
                        <h4>Romatizma ve Ozon Tedavisi</h4>
                        <p className="par">Halk arasında romatizma olarak bilinen hastalıklar 150’den fazla hastalığın ortak adıdır.</p>
                    </SwiperSlide>
                    <SwiperSlide className='mySlides'>
                        <img src="/images/vitamind.jpg" alt="D vitamini ve hastalıklarla ilişkisi" className='imgg' />
                        <h4>D Vitamini ve Hastalıklarla İlişkisi</h4>
                        <p className="par">D vitamini bir hormon öncü molekülüdür ve iki formda bulunur. Ergokalsiferol (vitamin D2) bitkilerde ve bazı balıklarda bulunur. </p>
                    </SwiperSlide>
                    <SwiperSlide className='mySlides'>
                        <img src="/images/diyabet.jpg" alt="Ozon ile diyabet tedavisi" className='imgg' />
                        <h4>Diyabette Ozon Tedavisi</h4>
                        <p className="par">Diyabet, yani şeker hastalığı, pankreastan yetersiz düzeyde insulin hormonu salgılanması ya da hücrelerin insulin hormonuna karşı gösterdiği direnç sonucu ortaya çıkar.</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default SlidingMakaleler;
