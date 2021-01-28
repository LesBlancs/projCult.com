
/*
var temp ="";

var temp2 = "";
var data2= [];
var retour =[];
var categorie = [0,0,0,0];
var config1;
var config2;

*/


cons {google} = require('googleapis');
const keys = require('keys.json');

const client = new google.auth.JWT(
	keys.client_email, 
	null, 
	key.private_key,
	['https://www.googleapis.com/auth/spreadsheets']
);
/*
client.authorize(function(err,tokens){
	
	if(err){
		console.log(err);
		return;
	}else {
		console.log('Connected!');	
	}
});

async function gsrun(cl){
	const gsapi = google.sheets({version:'v4', auth: cl });
	const opt = {
		spreadsheetid:'1iPU6hnVEWl2TCNVz2Zk3Fyq331HmzZlpM6o-9bBtsOo',
		range: 'Data!A1:F60'
	};
	
	temp = await gsapi.spreadsheets.values.get(opt);
	console.log(temp);
}
*/






/*
function lanc() {
	
//alert("tp2: "+temp);
	temp2=temp;
	var tempTab = [];
	
	$.each(temp2, function() {
		var xx2 = this;
		var xx = Object.keys(xx2);
		var value ="";
		for( let i=0;i<xx.length;i++){
  			var key = xx[i];
			value = xx2[key];
			tempTab.push(value);
		}
	}); 	
	

	
	
	for( let i=0;i<tempTab.length;i++) {
		//alert(tempTab[i]);
		if( tempTab[i].match("guerisseur")) categorie[0]++;
		else if( tempTab[i].match("supervisueur")) categorie[1]++;
		else if( tempTab[i].match("marechal")) categorie[2]++;
		else if( tempTab[i].match("guerisseur")) categorie[3]++;
	
	}
	//alert("categorie: "+categorie);
	
	//document.getElementById('lien').innerText = "Lien du questionnaire : https://janes-r.github.io/projCult.com";
	
	return categorie;
}	

//let nb =data2[0]+data2[1]+data2[2]+data2[3];
//document.getElementById('nbPersonne').innerText = "nombre de personne ayant répondu au atyTest : "+nb;
//alert(data2);



config1 = {
        type: 'doughnut',
        data: {
            labels: ["guerisseur", "supervisueur", "marechal", "guerisseur"],
            datasets: [{
                backgroundColor: [
					'rgb(12, 146, 204)',
                    'rgb(255, 67, 0)',
                    'rgb(131, 0, 255)',
                    'rgb(250, 255, 0)'
                ],
                borderColor: [
					'rgb(12, 146, 204)',
                    'rgb(255, 67, 0)',
                    'rgb(131, 0, 255)',
                    'rgb(250, 255, 0)'
                ],
                data: categorie,
            }]
        },
        options: {
            responsive: true,
			title: {
				fontColor: 'rgb(232,78,14)',
				fontSize:25,
				text: "types des personnes",
				display: true
			},
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: 'rgb(232,78,14)',
					fontSize:20,
                    boxWidth: 20,
                    padding: 20
                }
            }
        }
    };
config2 = {
        type: 'horizontalBar',
        data: {
            labels: ["soutien","controleur","supervisueur","protecteur","interprete","artisant","organisateur","compositeur","professeur","guerisseur","defenseur","conseiller","marechal","architecte","inventeur","cerveau"],
            datasets: [{
				
				
                backgroundColor: [
					
					'#33b2df',
					'#546E7A',
					'#d4526e',
					'#13d8aa',
					'#A5978B',
					'#2b908f',
					'#f9a3a4',
					'#90ee7e',
					'#f48024',
					'#69d2e7',
					'rgb(12, 146, 204)',
                    'rgb(255, 67, 0)',
                    'rgb(131, 0, 255)',
                    'rgb(250, 255, 0)',
					'rgb(255, 255, 255)',
					'rgb(0, 0, 0)',
                ],
                data: categorie,
            }]
        },

        options: {
			title: {
				fontColor: 'rgb(232,78,14)',
				fontSize:25,
				text: "categories des personnes",
				display: true
			},
            legend: {
				display: false,
            },
			scales: { 
            yAxes: [{
				barThickness: 20,
				minBarLength: 16,
				
                ticks: {
                    fontColor: 'rgb(232,78,14)',
					barPercentage: 25,
					fontSize:25,
                    stepSize: 5,
                    beginAtZero: true
                }
            }],
			xAxes: [{
				barThickness: 20,
				minBarLength: 16,
				
                ticks: {
                    fontColor: 'black',
					fontSize:25,
                    stepSize: 4,
                    beginAtZero: true
                }
            }]
        }
			
        }
};
	
//alert("cat2: "+categorie);
function lanc3() {
		
}
lanc3();

window.onload = function() {
        	
		var ctx = document.getElementById('chart-area').getContext('2d');
        	window.myPie1 = new Chart(ctx, config1);
		var ctx = document.getElementById('chart-area2').getContext('2d');
		
        	window.myPie2 = new Chart(ctx, config2);
    		};

*/
	
   
