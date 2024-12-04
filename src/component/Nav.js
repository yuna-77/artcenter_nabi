import data from "../data";

function Nav(){
	return(
		<nav>
			<ul>
				{
					data.nav.map((d,i) =>
						<li key={i}>
							<a href="">{d.a}</a>
							<ul className="sub">
								{
									d.ul.map((index,i) => 
										<li key={i}><a href="">{index}</a></li>
									)
								}
							</ul>
						</li>
					)
				}
			</ul>
		</nav>
	);
}

export default Nav;