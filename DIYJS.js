window.onload=function(){

	// Log in and register section switching ////////////////////////////////////////////////////////////////////////////

	var RegisterPageLink = document.getElementById("RegisterPageLink");
	var LogInContainer = document.getElementById("LogInContainer");
	var RegisterContainer = document.getElementById("RegisterContainer");
	var LogInReturnLink = document.getElementById("LogInReturnLink");

	if (RegisterPageLink) {
		RegisterPageLink.addEventListener("click", function(){
			LogInContainer.style.display = 'none';
			RegisterContainer.style.display = 'block';
		}, false);
	} else {
		console.log("fuck");
	}

	if (LogInReturnLink) {
		LogInReturnLink.addEventListener("click", function(){
			LogInContainer.style.display = 'block';
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