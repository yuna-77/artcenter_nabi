import Center from "./Center";
import Sub from "./Sub";
import data from "../data";

function Footer() {
	return (
		<footer id="footer">
			<div className="info">
				<Center propsValue={data.center} />
				<Sub propsValue={data.sub} />
			</div>
			<a href="" id="top">TOP</a>
		</footer>
	);
}

export default Footer;