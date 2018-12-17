/**
 * Pure Javascript includer. Any object with an "include_html" attribute
 * Will have its insides replaced with the contents of the referenced file.
 * Run ONCE at the start of a page to include ALL of the HTML.
 * @author laifrank2002
 * @version 2018-12-16
 */
var ATTRIBUTE = "include_html";
function includeHTML () {
	var file_objects;
	var index;
	var element;
	var file;
	var xhttp;
	
	file_objects = document.getElementsByTagName("*");
	for (index = 0; index < file_objects.length; index++)
	{
		element = file_objects[index];
		file = element.getAttribute(ATTRIBUTE);
		if(file)
		{
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {element.innerHTML = this.responseText;};
					if (this.status == 404) {element.innerHTML = "Page not found.";};
					element.removeAttribute("include_html");
					includeHTML();
				}
			}
			xhttp.open("GET",file,true);
			xhttp.send();
			
			return;
		}
	}
}