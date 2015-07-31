//example: https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=matrix+incategory:films

$(function() {
	
	$("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        $("#broughtform").submit();
    }
  });
	
	
	$('#button').on('click', function (){
		$('#results').empty();
		
		var searchTerm = document.getElementById("search").value;
		
		var wikiURL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + searchTerm;
//		alert(wikiURL);
		
		$.ajax({
			url: wikiURL, 
			dataType: "jsonp",
			success: function(data) {
				var result = data["query"]["search"],
						length = result.length;
//				alert(result);
				
				//iterates through search results
				for (var i=0;i<length;i++){
					result[i];
					
					//append results to #results div
					$('<div class="wiki"></div>').append("<a href='https://en.wikipedia.org/wiki/" + result[i]["title"] + "' target='_blank'><h1 class='title'>"+result[i]["title"]+"</h1></a>")
									.append("<h2 class='snippet'>"+result[i]["snippet"]+"</h2>")
									.appendTo('#results').fadeIn(8000);

				}
			}});
		
	
	});

	
//	https://en.wikipedia.org/wiki/
//	'<a href="' + baseURL + term + '" target="_blank">'
	
	
//alert('hello');
	
//var searchTerm = document.getElementById('search');
	
//function checkAndSubmit() {
//            var searchForm = document.getElementById ("searchForm");
//            var searchTerm = document.getElementById ("searchField");
//		 
//		 				var wikiSearch = wikiBaseURL + searchTerm;
//
//            if (searchField.value.length == 0) {
//                alert ("Please specify the term(s) to search!");
//                return;
//            }
//            searchForm.submit();
//}// end checkAndSubmit function
	
//function doSearch(){
//	alert('gwen');
//    var searchTerm = document.getElementById("search");
////			
//		var wikiURL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + searchTerm;
////    
////			//.ajax more robust than .getJSON
//			$.ajax({
//			url: wikiURL, 
//			dataType: "jsonp",
//			success: function(data) {
//				alert(data);
//				onReturn(data);
//				
//			}
//    
////				doAJAXCall("searchpage.php?q="+s.value, onReturn);
//    }).error(function(e){ //include .error to handle failed ajax requests
				
			//display error message
//	});// end .error function
//
//
//}//ends function doSearch()
	
	
//	 function onReturn(results)
//     {
//     // decode your results variable here in the appropriate way
//     // e.g. into a JSON object 
//     var d = document.getElementById("results");
//
//     var res = "<ul>";
//
//     for (var i=0; i<results.lenght; i++)
//         res = res + "<li>"+i.text+"</li>";
//
//     res = res + "</li>";
//     d.innerHTML = res; 
//     }
	
	

		
});// ends document.ready