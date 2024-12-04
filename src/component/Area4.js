import Board from "./Board";
import data from "../data";

function Area4() {
	let {area4}=data;
;
	return (
		<section id="area4">
			<div className="video">
				<div className="title">What's ON</div>
				<div className="content">
					<video id="main-video" src="images/video/nabi_artist_residency.mp4" autoplay muted></video>				
				</div>
			</div>
			<div className="board">
				<Board propsValue={area4.board}/>
			</div>
			<div className="poster">
				<div className="title">나비미래연구소</div>
				<div className="content">
					<a href=""> <img src="/images/nabi_studies_img1.png" alt="phoster"/> </a>
				</div>			
			</div>
		</section>
	);
}

export default Area4;