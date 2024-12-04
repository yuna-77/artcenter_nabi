import { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

function UIScript(){
	useEffect(() => {
		let navList=document.querySelectorAll("nav > ul > li");
		let topBtn=document.getElementById("top");
		let sub=document.querySelectorAll("nav .sub");
		let aside=document.querySelector(".lnb .search");
	
		// aside
		aside.addEventListener("mouseenter", function(e){
			e.currentTarget.classList.add("active");
		});
		aside.addEventListener("mouseleave", function(e){
			e.currentTarget.classList.remove("active");
		});
		aside.addEventListener("click",function(e){
			e.preventDefault();
			aside.classList.toggle("actvie");
		});

		// nav
		navList.forEach(function(item, i){
			item.addEventListener("mouseenter", function(e){
				e.currentTarget.classList.add("active");
			});
	
			item.addEventListener("mouseleave", function(e){
				e.currentTarget.classList.remove("active");
			});
		});
	
		// sub click event
		sub.forEach(function(depth2,i){
			depth2.addEventListener("click",function(e){
				e.preventDefault();
				// sub가 활성화 아닐때 (=== false, not연산자로 변환)
				let subActive=depth2.classList.contains("active");

				if(!subActive){
					depth2.classList.add("active");
					gsap.to(depth2,{ duration: 0.5, height: depth2.scrollHeight, opacity: 1, ease: "power2.in"});
				}
				else{
					depth2.classList.remove("active");
					gsap.to(depth2,{ duration: 0.5, height: 0, opacity: 0, ease: "power2.out"});
				}
			});
		});
	
		// top btn
		window.addEventListener("scroll", function(){
	
			if(window.scrollY > 100) {
				gsap.to(topBtn, { duration: 0.3, opacity: 1, display: "block", delay: 0.3 });			
				//topBtn.style.display= "block";
			}
			else{
				gsap.to(topBtn, { duration: 0.3, opacity: 0, onComplate: function(){
					topBtn.style.display= "none"}
				});		
			}
		});
		topBtn.addEventListener("click",function(e){
			e.preventDefault();
			gsap.to(window, { duration: 0.5, scrollTo: 0, ease: "power2.out" });
		});
	});

	return(
		<></>
	);
}

export default UIScript;