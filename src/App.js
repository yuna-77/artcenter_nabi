import Area1 from './component/Area1';
import Area2 from './component/Area2';
import Area3 from './component/Area3';
import Area4 from './component/Area4';
import Footer from './component/Footer';
import SkipNav from './component/SkipNav';
import Start from './component/Start';
import UIScript from './component/UIScript';
import './css/style.css';
import './css/reset.css';

function App(){
	return(	
		<div className="wrap">
			<SkipNav/>
			<Start/>

			<Area1/>
			<Area2/>
			<Area3/>
			<Area4/>

			<Footer/>
			<a href="" id="top">TOP</a>
			<UIScript/>
		</div>
	);
}

export default App;