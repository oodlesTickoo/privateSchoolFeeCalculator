/**
 * Sand-Signika theme for Highcharts JS
 * @author Torstein Honsi
 */

// Load the fonts
Highcharts.createElement('link', {
	// href: 'https://fonts.googleapis.com/css?family=Signika:400,700',
	//href: 'https://fonts.googleapis.com/css?family=Unica+One',
 	href: 'https://fonts.googleapis.com/css?family=Dosis:400,600',
	rel: 'stylesheet',
	type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

// Add the background image to the container
// Highcharts.wrap(Highcharts.Chart.prototype, 'getContainer', function (proceed) {
// 	proceed.call(this);
// 	this.container.style.background = 'url(http://www.highcharts.com/samples/graphics/sand.png)';
// });
     // Make monochrome colors and set them as default for all pies
/*     Highcharts.getOptions().plotOptions.pie.colors = (function () {
         var colors = [],
             base = Highcharts.getOptions().colors[0],
             i;

         for (i = 0; i < 10; i += 1) {

             colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
         }
         return colors;
     }());

     Highcharts.getOptions().plotOptions.column.colors = (function () {
         var colors = [],
             base = Highcharts.getOptions().colors[0],
             i;

         for (i = 0; i < 10; i += 1) {

             colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
         }
         return colors;
     }());*/

var perShapeGradient = {
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 0
        };
Highcharts.theme = {
	// colors: ["#006DB0", "#4997D0", "#0095B6", "#42C0FB"],
	// colors: ["#7d2f86","#7b5aa7", "#b478d2",  "#c4a6f7"],
	  //colors: ["rgba(116, 232, 228, 0.9)","rgba(144, 237, 125, 0.9)","rgba(242, 123, 123, 0.9)","rgba(0,0,255, 0.9)"],
	  //colors: ["#74e8e4","#90ed7d","#f27b7b","#FFBC75"],
	 // color: ['rgba(0,0,255, 0.5)'],
	colors: [{
            linearGradient: perShapeGradient,
            stops: [
            	[0, '#78caf8'],
                [1, '#2e96d0']
                ]
            }, {
            linearGradient: perShapeGradient,
            stops: [
                [0, '#90ed7d'],
                [1, '#76c466']
                ]
            }, {
            linearGradient: perShapeGradient,
            stops: [
                [0, '#e28585' ],
                [1, '#ce5c5c']
                ]},{
            linearGradient: perShapeGradient,
            stops: [
                [0, '#3F3F3F'],
                [1, '#6E6F6F']
                ]}, 
        ],
		// colors: ["#3f7b82","#8bc3b9", "#b4d4c0",  "#acd2bb"], blue1
		// colors: ["#3f7b82","#558381","#8bc3b9", "#b4d4c0"], blue2
		// colors: ["#225802","#728239","#88872b","#bbc46b"], green
	// colors: ["#8298a8","#a5d0d7", "#d0cbb6",  "#d7b0ac"], bright
	// colors: ["#7c8f78","#5f526a","#6f8266","#c0b6c1"],	 


		// colors: ["#FE0001", "#F5DE1D", "#0271BB", "#039349", "#F5DE1D", "#F99321", "#eeaaee",
		// "#93278B", "#DF5353", "#7798BF", "#aaeeee"],
		 
	chart: {
		backgroundColor: null,
		style: {
			// fontFamily: "Signika, serif"
			//fontFamily: "'Unica One', sans-serif"
			fontFamily: "Dosis, sans-serif"
		}
	},
	// title: {
	// 	style: {
	// 		color: 'black',
	// 		fontSize: '16px',
	// 		fontWeight: 'bold'
	// 	}
	// },
	title: {
		style: {
			color: '#000',
			textTransform: 'uppercase',
			fontWeight: 'bold',
			fontSize: '20px'
		}
	},
	subtitle: {
		style: {
			color: 'black'
		}
	},
	tooltip: {
		borderWidth: 0
	},
	legend: {
		itemStyle: {
			fontWeight: 'bold',
			fontSize: '13px'
		}
	},
	// xAxis: {
	// 	labels: {
	// 		style: {
	// 			color: '#6e6e70'
	// 		}
	// 	}
	// },
	// yAxis: {
	// 	labels: {
	// 		style: {
	// 			color: '#6e6e70'
	// 		}
	// 	}
	// },
	xAxis: {
		gridLineColor: '#707073',
		labels: {
			style: {
				color: '#000',
				fontWeight: 'bold'
			}
		},
		lineColor: '#707073',
		minorGridLineColor: '#505053',
		tickColor: '#707073',
		title: {
			style: {
				color: '#A0A0A3'

			}
		}
	},
	yAxis: {
		gridLineColor: '#707073',
		labels: {
			style: {
				color: '#000',
				fontWeight: 'bold'
			}
		},
		lineColor: '#707073',
		minorGridLineColor: '#505053',
		tickColor: '#707073',
		tickWidth: 1,
		title: {
			style: {
				color: '#000',
				fontWeight: 'bold'
			}
		}
	},
	plotOptions: {
		series: {
			shadow: true
		},
		candlestick: {
			lineColor: '#404048'
		},
		map: {
			shadow: false
		}
	},

	// Highstock specific
	navigator: {
		xAxis: {
			gridLineColor: '#D0D0D8'
		}
	},
	rangeSelector: {
		buttonTheme: {
			fill: 'white',
			stroke: '#C0C0C8',
			'stroke-width': 1,
			states: {
				select: {
					fill: '#D0D0D8'
				}
			}
		}
	},
	scrollbar: {
		trackBorderColor: '#C0C0C8'
	},

	// General
	background2: '#E0E0E8'

};
// Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
// 	  return Highcharts.Color(color).setOpacity(0.5).get('rgba');
//     });
    
// Apply the theme
Highcharts.setOptions(Highcharts.theme);

Highcharts.setOptions({lang: {
			thousandsSep: ','
		}});
