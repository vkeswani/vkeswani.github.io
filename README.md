# vkeswani.github.io
Hello World!
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>WPC</title>
	 <link rel='stylesheet' type='text/css' href='code.css'/>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
</head>
<body>
	<h1>
		WEIGHT PERCENTILE CALCULATOR
	</h1>
	<p><b>Enter your name</b>
		<input type="text" id="name" style="width=200px">
		<button onclick="sayHello();">GO</button>
	</p>
	<div id="content"></div>
	<div id="custom-select" style="align:center">
		<select id='mySelect' align="center" onchange="index()">
			<option>Select your gender:</option>
			<option value="1">Male</option>
			<option value="2">Female</option>
		</select>

		
	</div>
	<p id="percentile"><b>Enter your weight in kilograms</b>
		<input type="type" id="weight">
		<button onclick="calPercentile();">GO</button>
	</p>
	<div id="result"></div>
	<script type="text/javascript" src="code.js"></script>
</body>
</html>
