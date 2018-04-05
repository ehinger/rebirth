window.onload=function(){


	var touchstartX = 0;
	var touchstartY = 0;
	var touchendX = 0;
	var touchendY = 0;

	var remainder = 0;

	var LogInContainer = document.getElementById("LogInContainer");

	LogInContainer.addEventListener('touchstart', function(event) {
	    touchstartX = event.changedTouches[0].screenX;
	}, false);

	LogInContainer.addEventListener('touchend', function(event) {
	    touchendX = event.changedTouches[0].screenX;
		handleGesure();
	}, false); 

	function handleGesure() {
		var swiped = 'swiped: ';
		if (touchendX < touchstartX) {
			remainder = touchstartX - touchendX;
			console.log(remainder);
		}
		if (touchendX > touchstartX) {
			remainder = touchendX - touchstartX;
			console.log(remainder);
		}
	}

	// Input Field label interaction ///////////////////////////////////////////////////////////////////////////////////

	var navigationHeader = document.querySelector(".navigationHeader");
	var browseFooter = document.querySelector(".browseFooter");
	var navigationClose = document.querySelector(".navigationClose")
	var navigationContainer = document.querySelector(".navigationContainer")

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

	var RegisterPageLink = document.getElementById("RegisterPageLink");
	var RegisterContainer = document.getElementById("RegisterContainer");
	var LogInReturnLink = document.getElementById("LogInReturnLink");

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