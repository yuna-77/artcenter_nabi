document.addEventListener("load",function(){
	let navList=document.querySelectorAll("nav > ul > li");
	let topBtn=document.getElementById("#top");


	// nav
	navList.forEach(function(item, i){
		item.addEventListener("mouseenter", function(e){
			e.currentTarget.firstElementChild.classList.add("active");
		});

		item.addEventListener("mouseleave", function(e){
			e.currentTarget.firstElementChild.classList.remove("active");
		});
	});

	// top btn
	window.addEventListener("scroll", function(){
		let h=window.scrollY;

		if(h > 100) {
			topBtn.style.display= "block";
		}
		else{
			topBtn.style.display= "none";
		}
	});
	topBtn.addEventListener("click",function(e){
		e.preventDefault();
		Window.scrollTo({top: 0, behavior: "smooth"});
	});

});













/* swiper */
const mainSwiper = new Swiper(".mainSwiper",{
	speed:1000,
	loop: true,
	pagination: {
		clickable: true,
		el: ".mainSwiper .swiper-pagination",
	},
	slideperview: 1
});