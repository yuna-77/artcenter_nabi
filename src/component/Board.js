function Board({propsValue}) {
	let { title, article }=propsValue;
	//console.log({propsValue});
	// console.log(title); // object로 받아지니까 map()없이 바로  title에서 받기

	return (
		<>
			<div className="title">Notice</div>
			<div className="content">
				<div className="inner">					
					<div className="top">
						<strong>{title.date}</strong>
						<p>{title.p}</p>
						<span>{title.sub}</span>
					</div>

					<ul className="article">
						{
							article.map(d =>
								<li key={`id${d.id}`}>
									<a href="">{d.category} {d.p}</a>
									<span>{d.date}</span>
								</li>
							)
						}
					</ul>
				</div>
			</div>
		</>
	);
}

export default Board;