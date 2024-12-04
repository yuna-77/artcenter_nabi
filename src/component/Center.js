function Center({propsValue}) {
	let {main, iconArea, homepage, admin}=propsValue;
	//console.log({propsValue});

	return (
		<div className="center">
			<div className="main">
				<span>{main.title}</span>
				<span className="address">
					<>{main.address[0]}</>
					<>{main.address[1]}</>
				</span>
			</div>
			<div className="icon_area">
				<ul>
					{
						iconArea.map((d,i) =>
							<li key={i}>
								<a href=""><i className={d.icon} ></i></a>
							</li>
						)
					}
				</ul>
			</div>
			<div className="homepage">
				<ul>
					{
						homepage.map((d,i) =>
							<li key={i} ><a href="">{d.site}</a></li>
						)
					}
				</ul>
			</div>
			<div className="admin">
				<ul>
					<li>{admin.email}</li>
					<li>{admin.copy}</li>
				</ul>
			</div>
		</div>
	);
}

export default Center;