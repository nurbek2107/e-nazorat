window.onload = function() {

var chart = new CanvasJS.Chart("chartContainer", {
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	exportEnabled: true,
	animationEnabled: true,

	data: [{
		type: "pie",
		startAngle: 25,
		toolTipContent: "<b> {label} </b>: {y}%",
		showInLegend: "true",
		legendText: "{label}",
		indexLabelFontSize: 16,
		indexLabel: " {y}%",
		dataPoints: [
			{ y: 50, label: "1 Guardian" },
			{ y: 5, label: "2 Guardians" },
			{ y: 20, label: "3 Guardians" },
			{ y: 25, label: "3+ Guardians" },

		]
	}]
});
chart.render();

}