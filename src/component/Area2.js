import Cont from "./Cont";
import data from "../data";

function Area2(){
	return(
		<>
			<section id="area2">
				{
					data.cont.map((d,i) => 
						<Cont key={i} propsValue={d}/>
					)
				}
			</section>
		</>
	);
}

export default Area2;