function Lnb(){
	return(
		<div className="lnb">
			<Plus/>
			<Search/>
		</div>
	);
}

function Plus(){
	return(
		<div className="plus">
			<a href=""><i className="fa fa-plus"></i></a>
		</div>
	);
}

function Search(){
	return(
		<div className="search">
			<i className="fa fa-search"></i>
			<img src="/images/click_msg.png" alt="clisk message"/>
		</div>
	);
}

export default Lnb;