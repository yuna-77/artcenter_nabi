function Cont({propsValue: {title, img, alt, strong, span}}){

	return(
		<div className="cont">
			<div className="title">{title}</div>		
			<div className="visual">
				<a href=""> 
					<div className="image">
						<img src={`/images/${img}`} alt={alt}/>
					</div>
					<div className="desc">
						<strong>{strong}</strong>
						<span>{span}</span>
					</div>
					<div className="hover">+</div>
				</a>
			</div>
		</div>
	);
}

export default Cont;