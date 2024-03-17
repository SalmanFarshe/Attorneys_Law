// root js file
// flex slider start
$(document).ready(function () {
	$(".flex-next").html('<i class="fa fa-chevron-right" aria-hidden="true"></i>');
	$(".flex-prev").html('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
});
$(".slide-image").each(function () {
	var bg = $(this).data("bg");
	var pos = $(this).data("flex-start");
	$(this).css({
		"background-image": "url(" + bg + ")",
		"transform-origin": pos,
	});
});
$(".flex-slider").flexslider({
	slideshow: true,
	slideshowSpeed: 3000,
	animationSpeed: 1000,
	controlNav: false,
	// autoplay
	pauseOnAction: true,
	after: function (slider) {
		if (!slider.playing) {
			slider.play();
		}
	},
	//autoplay
});
// flex slider end

// counter
var countingNomber1 = setInterval(counter1, 10);
var countingNomber2 = setInterval(counter2, 30);
var countingNomber3 = setInterval(counter3, 50);
var countingNomber4 = setInterval(counter4, 100);
var count1 = 1;
var count2 = 1;
var count3 = 1;
var count4 = 1;
var countNumber1 = document.querySelector(".count-number-1");
var countNumber2 = document.querySelector(".count-number-2");
var countNumber3 = document.querySelector(".count-number-3");
var countNumber4 = document.querySelector(".count-number-4");
function counter1() {
	count1 + 400;
	count1++;
	countNumber1.innerHTML = count1;
	if (count1 == 549) {
		clearInterval(countingNomber1);
	}
}
function counter2() {
	count2++;
	countNumber2.innerHTML = count2;
	if (count2 == 247) {
		clearInterval(countingNomber2);
	}
}
function counter3() {
	count3++;
	countNumber3.innerHTML = count3;
	if (count3 == 60) {
		clearInterval(countingNomber3);
	}
}
function counter4() {
	count4++;
	countNumber4.innerHTML = count4;
	if (count4 == 20) {
		clearInterval(countingNomber4);
	}
}

// responsive mobile menu
var faBars = document.querySelector(".fa-bars");
var faTimes = document.querySelector(".fa-times");
var menu = document.querySelector(".menu");
var empty = document.querySelector(".empty");
faBars.addEventListener("click", function () {
	menu.classList.remove("menu");
	menu.classList.add("menu1");
	faTimes.style.visibility = "visible";
	faBars.style.visibility = "hidden";
	faTimes.style.color = "white";
});
faTimes.addEventListener("click", function () {
	faTimes.style.visibility = "hidden";
	faBars.style.visibility = "visible";
	menu.classList.add("menu");
});
empty.addEventListener("click", function () {
	faTimes.style.visibility = "hidden";
	faBars.style.visibility = "visible";
	menu.classList.add("menu");
});

// sticky navigation
window.onscroll = function () {
	scrollFunction();
};
function scrollFunction() {
	var sticky = document.getElementById("sticky");
	if (window.pageYOffset >= 100) {
		sticky.classList.add("sticky");
	} else {
		sticky.classList.remove("sticky");
	}
}

// preloader
function webPreloader(){
	document.querySelector(".preloader").style.display = "none"
}
