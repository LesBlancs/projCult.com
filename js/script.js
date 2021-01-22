


let myChart1 = document.getElementById("myChart1").getContext('2d');


var dataB = sessionStorage.getItem("data");
var temp = sessionStorage.getItem("resultAty");
document.getElementById('title2').innerText = temp;
sessionStorage.setItem("result2",temp);


let dataf = dataB.split(' ');

let labels1 = ['Extraverti', 'Introverti', 'Sensation', 'Intuition', 'Pensée', 'Sentiment', 'Jugement' ];

let chart1 = new Chart(myChart1, {
	
    type: 'radar',
    data: {
        labels: labels1,
        datasets: [
          {
            label: 'ton profil',
            fill: true,
            backgroundColor: "rgba(0, 80, 103, 0.2)",
            borderColor: "rgba(0, 80, 103, 0.75)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(232, 78, 14, 1)",
            data: dataf
          }
        ]
    },
    options: {
        title: {
            text: "atypie",
            display: true
        }
    }
});

