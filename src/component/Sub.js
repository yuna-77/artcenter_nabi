function Sub({propsValue: {top, btm}}) {
	//console.log(top);

	return (
		<>
			<div className="sub">
				<div className="title">{top.title}</div>
				<div className="content">
					<ul>
						<li>{top.content[0]}</li>
						<li>{top.content[1]}</li>
					</ul>
				</div>
			</div>

			<div className="sub">
				<div className="title">{btm.title}</div>
				<div className="content">
					<ul>
						<li><a href="">{btm.content[0]}</a></li>
						<li><a href="">{btm.content[1]}</a></li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Sub;