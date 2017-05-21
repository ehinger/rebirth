<!DOCTYPE html>
<html>

<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="DIYCSS.css">
</head>

<body>

	<div class="SplashContainer">

		<!-- Log in page section -->

		<div id="LogInContainer">
			<h1>Name!</h1>
			<p>Find and share assistive creations.</p>
			<h1>Log In</h1>

			<form class='LogIn' action='' method='post'>
				<input name="username" type="text">
				<label for="username">Username:</label>
				
				<input name="password" type="password">
				<label for="password">Password:</label>

				<input type="submit" value="Done" name="LogIn">

			</form>

			<p>Don't have an account?   <a id="RegisterPageLink" href="javascript:;">Make one.</a></p>
			<p>Maybe you just want to browse instead?   <br><a href="javascript:;">Go for it.</a></p>
		</div>


		<!-- register page section -->

		<div id="RegisterContainer">
			<h1>Register</h1>

			<form enctype="multipart/form-data" class='Register' action='' method='post'>

				<input class="fName" name="fName" type="text">
				<label>What's your name, friend?</label>

				<input class="usernameR" name="usernameR" type="text">
				<label>What'll your username be?</label>
				
				<input class="passwordR" name="passwordR" type="password">
				<label>What'll your password be?</label>
				
				<input name="password1R" type="password">
				<label>Type your password one more time.</label>
				
				<input type="submit" value="Make me an account!" name="register">

			</form>

			<p id="LogInReturnLink">Changed your mind?   <a href="javascript:;">Take me back.</a></p>
		</div>

	</div>

	<script type="text/javascript" src="DIYJS.js"></script>
</body>
</html>