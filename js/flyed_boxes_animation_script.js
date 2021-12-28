/*
** flyed blocks
** @use svg.js
**
*/

	function Gauss() {
		var ready = false;
		var second = 0.0;
		
		this.next = function(mean, dev) {
			mean = mean == undefined ? 0.0 : mean;
			dev = dev == undefined ? 1.0 : dev;
			
			if (this.ready) {
				this.ready = false;
				//return this.second * dev + mean;
				var GN = ((this.second * dev + mean) + 2.72) / 5.44;
				return GN;
			}
			else {
				var u, v, s;
				do {
					u = 2.0 * Math.random() - 1.0;
					v = 2.0 * Math.random() - 1.0;
					s = u * u + v * v;
				} while (s > 1.0 || s == 0.0);
				
				var r = Math.sqrt(-2.0 * Math.log(s) / s);
				this.second = r * u;
				this.ready = true;
				//return r * v * dev + mean;
				var GN = ((r * v * dev + mean) + 2.72) / 5.44;
				return GN;
			}
		};
	}



	document.addEventListener('DOMContentLoaded', function(){

		var total_elements = 121;
		g = new Gauss(); 
		
		for (var i = 0; i < total_elements; i++)
		{
			var variants = [ 
					'animation-block__sample_xl',
					'animation-block__sample_l',
					'animation-block__sample_m',
					'animation-block__sample_s'
				];
			
			//процентное соотношение блоков
			var variants_density_limit 	= [20, 30, 30, 20];
			var percent_per_item 		= (100 / total_elements );
			var items_posted			= [];

			//console.log (g.next());
			
			var left  		= Math.random();
			var top  		= Math.round( Math.random() * 100 ) ;
			var opacity 	= Math.random() * 0.15 ;
			var size_id  	= Math.floor( g.next() * 4);
			var size_class  = variants[ size_id ];

			// скорость зависит от размера блока. 
			// большие движутся медленнее, чем мелкие
			if (size_id < 1 ){
				var speed 		= Math.round( Math.random() * 10000 ) + 70000 ;
			} 
			else if (size_id > 2 ){
				var speed 		= Math.round( Math.random() * 10000 ) + 40000 ;
			} 
			else {
				var speed 		= Math.round( Math.random() * 10000 ) + 55000 ;
			}
			
			var parent 	= document.querySelector('.animation-block__topBackground');
			var child	= document.createElement('div');
			
			// configure blocks
			child.classList.add('animation-block__sample', size_class );
			child.style.top 	=  top + '%';
			child.style.opacity =  opacity;
			
			// add animation
			child.animate({ 
				left : ['100%', '-190px']
			}, { 
				duration: speed,
				iterations: Infinity,
				iterationStart : left,
				easing: 'linear',
			});
			
			//paste
			parent.appendChild(child);			
			
		}
		

	});
