var ctx = document.getElementById("myChartAfstand").getContext('2d');
var afstand = [50, 48, 51, 20, 51, 45, 55];

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["11/2", "12/2", "13/2", "14/2", "15/2", "16/2", "17/2"],
        datasets: [{
            label: 'Afstand afgelegd per dag',
            data: afstand,
            backgroundColor: [
                'rgba(0, 82, 136, 0.5)',
                'rgba(0, 82, 136, 0.5)',
                'rgba(0, 82, 136, 0.5)',
                'rgba(0, 82, 136, 0.5)',
                'rgba(0, 82, 136, 0.5)',
                'rgba(0, 82, 136, 0.5)',
                'rgba(0, 82, 136, 0.5)',

            ],
            borderColor: [
                'rgb(214, 238, 255)',
                'rgb(214, 238, 255)',
                'rgb(214, 238, 255)',
                'rgb(214, 238, 255)',
                'rgb(214, 238, 255)',
                'rgb(214, 238, 255)',
                'rgb(214, 238, 255)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                // display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Datum'
                }
            }],
                        
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                // display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'x10000 km'
                }
            }]
        }
    }
});



