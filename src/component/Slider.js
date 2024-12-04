import GallerySwiper from "./GallerySwiper";

function Slider(){
	return(
		<div className="slider">
			<GallerySwiper/>
			<SliderContent/>
		</div>
	);
}

function SliderContent(){
	return(
		<div className="content">
			<div className="info">
				<p>2021.11.01-2022.01.31</p>
				<a href="">
					<strong>Nabi's Current Project :</strong>
					<strong>Neotopia: Data and humanity</strong>
				</a>	
			</div>		
		</div>
	);
}

export default Slider;