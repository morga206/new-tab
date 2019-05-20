// Using code from https://www.w3schools.com/howto/howto_js_media_queries.asp
// and https://codepen.io/omascaros/pen/CBapm

function randombg(bg_list){
	var random= Math.floor(Math.random() * bg_count) + 0;

	document.getElementById("randombg").style.backgroundImage=bg_list[random];
}


function aspectChange(aspect_listener) {
	if (aspect_listener.matches) { // If media query matches
		randombg(bg_16_9);
	} else {
		randombg(bg_4_3);
	}
}

var bg_4_3 = ["url('images/sunset_sans_deer_4_3.jpg')",
		"url('images/deer_sunset_4_3.png')",
		"url('images/aenami_7pm_4_3.jpg')",
		"url('images/aenami_ice_4_3.jpg')",
		"url('images/aenami_lunar_4_3.jpg')",
		"url('images/alena_aenami_rooflinesgirl_4_3.jpg')",
		"url('images/alena_aenami_witcher_4_3.jpg')"];

var bg_16_9 = ["url('images/sunset_sans_deer_1080.jpg')",
		"url('images/deer_sunset_1080.png')",
		"url('images/aenami_7pm_16_9.jpg')",
		"url('images/aenami_ice_16_9.jpg')",
		"url('images/aenami_lunar_16_9.jpg')",
		"url('images/alena_aenami_rooflinesgirl_16_9.jpg')",
		"url('images/alena_aenami_witcher_16_9.jpg')"];

var bg_count = bg_4_3.length;
var aspect_listener = window.matchMedia("(min-aspect-ratio: 16/9)")
aspectChange(aspect_listener) // Call listener function at run time
aspect_listener.addListener(aspectChange) // Attach listener function on state changes
