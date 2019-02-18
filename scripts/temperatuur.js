var ctx = document.getElementById("myChartTemperatuur").getContext('2d');
var temperatuur = [2, 5];

var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Aantal dagen boven 0℃", "Aantal dagen onder 0℃"],
        datasets: [{
            label: 'Temperatuur',
            data: temperatuur,
            backgroundColor: [
                'rgb(0, 85, 160, 0.5)',
                'rgb(5, 137, 255, 0.1)',
            ],
            borderColor: [
                'rgb(0, 82, 136)',
                'rgb(0, 82, 136)',
            ],
            borderWidth: 1,
            hoverBorderColor: [
                'rgb(214, 238, 255, 0.5)',
                'rgb(63, 111, 145, 0.5)',
            ],
            hoverBorderWidth: 5

        }]
    },
    // options: {
        // cutoutPercentage: 35
        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             beginAtZero:true
        //         }
        //     }]
        // }
    // }
});