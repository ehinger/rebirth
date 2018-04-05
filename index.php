<!DOCTYPE html>
<html>

<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="DIYCSS.css">
</head>

<body>

	<div class="SplashContainer">

		<!-- menu navigation and navigation list screen -->

		<div class="navigationContainer">
			<div class="navigationClose">
				<div class="lineL"></div>
				<div class="lineR"></div>
			</div>
			<p class="savedSelections navLinks"><b>Saved<br>Selections</b></p>
			<p class="profile navLinks"><b>Profile</b></p>
			<p class="settings navLinks"><b>Settings</b></p>
		</div>
		<div class="navigationHeader">
			<h2>Menu</h2>
		</div>
<!-- 
		<div class="yourSettingsPage">
			<label> Font size:</label>
			<input class="textSize" type="range" name="textSize" min="12" max="20" onchange="textSize(this.value)"></input>
		</div>
 -->
		<!-- Log in page section -->

		<div id="LogInContainer">
			<h1>Name!</h1>
			<p>Find and share assistive creations.</p>
			<h2>Log In</h2>

			<form class='LogIn' action='' method='post'>
				<input name="username" type="text">
				<label for="username">Username:</label>
				
				<input name="password" type="password">
				<label for="password">Password:</label>

				<input type="submit" value="Done" name="LogIn">

			</form>

			<p>Don't have an account?   <a id="RegisterPageLink" href="javascript:;">Make one.</a></p>

		</div>

		<!-- register page section -->

		<div id="RegisterContainer">
			<h2>Register</h2>

			<form enctype="multipart/form-data" class='Register' action='' method='post'>

				<input class="fName" name="fName" type="text">
				<label>What's your name, friend?</label>

				<input class="usernameR" name="usernameR" type="text">
				<label>What'll your username be?</label>
				
				<input class="passwordR" name="passwordR" type="password">
				<label>What'll your password be?</label>
				
				<input name="password1R" type="password">
				<label>Type your password once more.</label>
				
				<input type="submit" value="Make me an account!" name="register">

			</form>

			<p id="LogInReturnLink">Changed your mind?   <a href="javascript:;">Take me back.</a></p>
		</div>

		<!-- menu screen and content screen switch -->

		<div class="browseFooter">
			<h2>Browse</h2>
		</div>

	</div>

	<script type="text/javascript" src="DIYJS.js"></script>
</body>
</html>