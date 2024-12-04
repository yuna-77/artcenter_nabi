import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css/pagination';
import 'swiper/css';
import data from "../data";

function GallerySwiper(){
	const pagination= {
		clickable: true,
		el: '.swiper-pagination',
		/*
		renderBullet: function (index, className) {
		  return '<span class="' + className + '">' + (index + 1) + '</span>';
		}, //숫자 삽입
		*/
	};

	return(
		<>
			<Swiper
				speed={1000}
				loop={true}
				pagination={pagination}
				slidesPerView={1}

				modules={[Pagination]}
				className="gallery mainSwiper"
			>
				{
					data.swiper_slide.map((d,i) =>
						<SwiperSlide key={i}>
							<img src={`/images/${d.img}`} alt={d.alt}/>
							<div className="author">
								<span>{d.author[0]}</span>
								<span>{d.author[1]}</span>
							</div>
						</SwiperSlide>
					)
				}
			</Swiper>
			<div className="swiper-pagination"></div>
		</>
	);
}

export default GallerySwiper;