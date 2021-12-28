/*
** Bottom animation
** @use svg.js
**
*/

/**
** анимация нижней полосы
**/

function getRandomDelay() {
	return Math.floor( Math.random() * 2000 / 200 ) * 200;
}

function getRandomDuration() {
	return Math.floor( Math.random() * 4000 / 100 ) * 100 + 3000;
}

function getRandomName() {
	var names = ['default_twitch', 'high_twitch', 'low_twitch' ];
	var id = Math.floor( Math.random() * 3 );
	return names[id];
}

/*	*/
SVG.on(document, 'DOMContentLoaded', function()
{
	for (let i = 0; i < 28; i++) 
	{
		var block 		= SVG('#svg-animation-bottom #fill_box_' + i );
		var delay 		= getRandomDelay() + 'ms';
		var duration	= getRandomDuration() + 'ms';
		var name		= getRandomName();
		
		block.css('animation-delay', 	delay );
		block.css('animation-duration', duration );
		block.css('animation-name',		name );
	}	
});
