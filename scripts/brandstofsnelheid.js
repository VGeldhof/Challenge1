var ctx = document.getElementById("myChart").getContext('2d');
var snelheid = [12, 12.4, 11.9, 10, 11.6, 12.1, 12.4];
var brandstof = [10, 9, 8, 7, 5, 3, 1];

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["11/2", "12/2", "13/2", "14/2", "15/2", "16/2", "17/2"],
        datasets: [{
            label: 'Snelheid (x10000km/u)',
            data: snelheid,
            backgroundColor: [
                'rgb(214, 238, 255, 0.5)',
            ],
            borderColor: [
                'rgb(0, 82, 136)',
            ],
            borderWidth: 1,
            // fill: false
        },

        {
            label: 'Brandstof (liter)',
            data: brandstof,
            backgroundColor: [
                'rgb(0, 82, 136, 0.5)',
            ],
            borderColor: [
                'rgb(214, 238, 255)',

            ],
            borderWidth: 1,
            // fill: false
        }]

       
    },
    options: {
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Datum'
                }
            }],
                        
            yAxes: [{
                ticks: {
                    beginAtZero: false
                },
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: ''
                }
            }]
        }
    }
});


