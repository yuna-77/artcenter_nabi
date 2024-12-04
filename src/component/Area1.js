import data from "../data";

function Area1(){
	let {area1}=data;
	return(
		<>
			<section id="area1">
				<div className="title">
					<p>{area1.p}</p>
					<div className="label"> 
						<h2>{area1.h2}</h2>
						<a href="" className="more">+ more</a>			
					</div>
				</div>
				<Content/>
			</section>
		</>
	);
}

function Content(){
	return(
		<div className="cont">
			아트센터 나비는 문화적 욕구를 생명력 있는 활동으로 이끌어내는 매개자의 역할을 지향합니다.<br/>
			기술에 경도되지 않고 현 시대의 문화를 비판적으로 인식하려는 노력(critique)과<br/>
			새로운 눈으로 세계를 바라보고 표현할 수 있는 열린 태도(creativity), 그리고 이와 같은 의식을 공유하면서<br/>
			대안을 찾아가는 사람들의 모임(community)과 아트센터 나비는 함께 하겠습니다.<br/>
		</div>
	);
}

export default Area1;