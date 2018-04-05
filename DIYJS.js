window.onload=function(){

	var splashContainer = document.querySelector(".SplashContainer");

	var settingsContainer = document.querySelector(".settingsContainer");

	var settings = document.querySelector(".settings");
	var profile = document.querySelector(".profile");
	var savedSelections = document.querySelector(".savedSelections");

	var LogInContainer = document.getElementById("LogInContainer");
	var RegisterPageLink = document.getElementById("RegisterPageLink");
	var RegisterContainer = document.getElementById("RegisterContainer");
	var LogInReturnLink = document.getElementById("LogInReturnLink");

	var navigationHeader = document.querySelector(".navigationHeader");
	var browseFooter = document.querySelector(".browseFooter");
	var navigationClose = document.querySelector(".navigationClose")
	var navigationContainer = document.querySelector(".navigationContainer")

	var touchstartX = 0;
	var touchendX = 0;

	var remainder = 0;


	splashContainer.addEventListener('touchstart', function(event) {
	    touchstartX = event.changedTouches[0].screenX;
	}, false);

	splashContainer.addEventListener('touchend', function(event) {
	    touchendX = event.changedTouches[0].screenX;
		handleGesure();
	}, false); 

	function handleGesure() {
		if (touchendX < touchstartX) {
			remainder = touchstartX - touchendX;
			if (remainder >= 100) {
				LogInContainer.style.display = 'none';
				settingsContainer.style.display = 'grid';
				console.log("Left");
			}
		}

		if (touchendX > touchstartX) {
			remainder = touchendX - touchstartX;
			if (remainder >= 100) {
				LogInContainer.style.display = 'block';
				settingsContainer.style.display = 'none';
				console.log("Right");
			}
		}
	}

	settings.addEventListener("click", function(){
		LogInContainer.style.display = 'none';
		settingsContainer.style.display = 'grid';
		navigationContainer.classList.remove('menuTransition');
		navigationClose.classList.remove('menuTransition');
	}, false);


	profile.addEventListener("click", function(){
		LogInContainer.style.display = 'block';
		settingsContainer.style.display = 'none';
		navigationContainer.classList.remove('menuTransition');
		navigationClose.classList.remove('menuTransition');
	}, false);

	// Input Field label interaction ///////////////////////////////////////////////////////////////////////////////////

	navigationHeader.addEventListener("click", function(){
		navigationContainer.classList.add('menuTransition');
		navigationClose.classList.add('menuTransition');
	}, false);

	navigationClose.addEventListener("click", function(){
		navigationContainer.classList.remove('menuTransition');
		navigationClose.classList.remove('menuTransition');
	}, false);

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




	// Log in and register section switching ////////////////////////////////////////////////////////////////////////////

	if (RegisterPageLink) {
		RegisterPageLink.addEventListener("click", function(){
			LogInContainer.style.display = 'none';
			navigationHeader.style.display = 'none';
			browseFooter.style.display = 'none';
			RegisterContainer.style.display = 'block';
		}, false);
	} else {
		console.log("fuck");
	}

	if (LogInReturnLink) {
		LogInReturnLink.addEventListener("click", function(){
			LogInContainer.style.display = 'block';
			navigationHeader.style.display = 'block';
			browseFooter.style.display = 'block';
			RegisterContainer.style.display = 'none';
		}, false);
	} else {
		console.log("fuck");
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





	// Input Field label interaction ///////////////////////////////////////////////////////////////////////////////////

	(function() {
		// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
		if (!String.prototype.trim) {
			(function() {
				// Make sure we trim BOM and NBSP
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(rtrim, '');
				};
			})();
		}

		[].slice.call(document.querySelectorAll('input')).forEach(function(inputEl) {
			if (inputEl.value.trim() == '') {
				inputEl.classList.remove('inputActive');
			}

			inputEl.addEventListener('focus', function() {
				inputEl.classList.add('inputActive');
			} );

			inputEl.addEventListener('blur', function() {
				if (inputEl.value.trim() == '') {
					inputEl.classList.remove('inputActive');
				}
			} );

		} );
	})();

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


}	

var textChanger = document.querySelector("html");

function textSize(v) {
	textChanger.style.fontSize = v + "px";
	console.log(v);
}