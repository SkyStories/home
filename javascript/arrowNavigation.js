/**
 * Bodgy way to do arrow navigation. 
 * Hides all the elements, and then only shows elements with a certain id.
 * When id is 1, do nothing
 * When there is no element at id x+1, do nothing
 * When id cannot be parsed, do nothing
 * @author laifrank2002
 * @version 2018-12-16
 */

var ArrowNavigation = {
	current_article: 0,
	
	initialize: function()
	{
		var MAXTRIES = 10000;
		var tries = 0;
		
		var lastArticle = false;
		// scans all the numbers until it hits an error, then assigns that as the current article number 
		do
		{
			// PREVENTS INFINITE LOOPS WHILE I'M DEBUGGING
			tries ++;
			if (tries >= MAXTRIES)
			{
				break;
			}
			
			try {
				if(document.getElementById((ArrowNavigation.current_article+1).toString()))
				{
					ArrowNavigation.current_article++;
					console.log(ArrowNavigation.current_article);
				}
				else
				{
					lastArticle = true;
					(document.getElementById(ArrowNavigation.current_article.toString())).classList.remove("invisible");
					console.log("Last article is: " + ArrowNavigation.current_article);
				}
			}
			catch(exception)
			{
				lastArticle = true;
			}
		} while(!lastArticle);
	},
	
	articleLeft: function()
	{
		// prevents 0s
		if (ArrowNavigation.current_article > 1)
		{
			(document.getElementById(ArrowNavigation.current_article.toString())).classList.add("invisible") // hides last article
			ArrowNavigation.current_article --;
			(document.getElementById(ArrowNavigation.current_article.toString())).classList.remove("invisible"); // shows next article
			console.log("Navigated to: " + ArrowNavigation.current_article);
		}
	},
	
	articleRight: function()
	{
		// prevents going too far 
		if (document.getElementById((ArrowNavigation.current_article+1).toString()))
		{
			(document.getElementById(ArrowNavigation.current_article.toString())).classList.add("invisible") // hides last article
			ArrowNavigation.current_article ++;
			(document.getElementById(ArrowNavigation.current_article.toString())).classList.remove("invisible"); // shows next article
			console.log("Navigated to: " + ArrowNavigation.current_article);
		}
	},
}