$(document).ready(function() {
	//declaring array for cities
	var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
	//create options for drop down list
	$(cities).each(function(index, element){
		$("select").append("<option value='" + element + "'>" + element + "</option>")
	//set background based on city selection
	$("select").click(setBackground);
	});
});

//apply background for selected city
function setBackground(e) {
	e.preventDefault();

	//declaring variable for city
	var city = $("#city-type").val();

	//check if city variable matches NYC string
	if(city === "NYC") {
		//set background to .nyc class
		$("body").attr("class","nyc");
	}
	//check if city variable matches SF string	
	else if(city === "SF") {
		//set background to .sf class
		$("body").attr("class","sf");
	}
	//check if city variable matches LA string
	else if(city === "LA") {
		//set background to .la class
		$("body").attr("class","la");
	}
	//check if city variable matches ATX string
	else if(city === "ATX") {
		//set background to .austin class
		$("body").attr("class","austin");
	}
    //check if city variable matches SYD string
	else if(city === "SYD") {
		//set background to .sydney class
		$("body").attr("class","sydney");
	}
}