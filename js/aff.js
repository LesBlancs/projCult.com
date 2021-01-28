

var temp ="";

var temp2 = "";
var data2= [];
var retour =[];
var categorie = [0,0,0,0];
var config1;
var config2;

let categorie1 = [0,0,0,0];
var categorie2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
/*
const {google} = require('googleapis');
const keys = require('keys.json');

const client = new google.auth.JWT(
	keys.client_email, 
	null, 
	key.private_key,
	['https://www.googleapis.com/auth/spreadsheets']
);

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


    function makeApiCall() {
      var params = {
        // The ID of the spreadsheet to retrieve data from.
        spreadsheetId: '1iPU6hnVEWl2TCNVz2Zk3Fyq331HmzZlpM6o-9bBtsOo',  // TODO: Update placeholder value.

        // The A1 notation of the values to retrieve.
        range: 'Réponses au formulaire 3',  // TODO: Update placeholder value.

        // How values should be represented in the output.
        // The default render option is ValueRenderOption.FORMATTED_VALUE.
        valueRenderOption: 'FORMATTED_VALUE',  // TODO: Update placeholder value.

        // How dates, times, and durations should be represented in the output.
        // This is ignored if value_render_option is
        // FORMATTED_VALUE.
        // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
        dateTimeRenderOption: 'SERIAL_NUMBER',  // TODO: Update placeholder value.
      };

      var request = gapi.client.sheets.spreadsheets.values.get(params);
      request.then(function(response) {
        // TODO: Change code below to process the `response` object:
        $("#data").empty();
        //$("#data").html(response.result.values);
        temp = response.result.values;
	categorie1[0] = lanc();
	categorie2[0] = lanc();
        //alert("tp1 "+temp);
	      
	let nb =categorie1[0]+categorie1[1]+categorie1[2]+categorie1[3];
	document.getElementById('nbPersonne').innerText = "nombre de personne ayant répondu au atyTest : "+nb;
	
	 myPie1.update();
	 myPie2.update();    
         console.log(response.result.values);
      }, function(reason) {
        console.error('error: ' + reason.result.error.message);
      });
    }

    function initClient() {
      var API_KEY = 'AIzaSyAz6TlBAZrHtJ6f9UR9mdRMXV_wifWrINY';  // TODO: Update placeholder with desired API key.

      var CLIENT_ID = '1021725875690-r08u3n6aclvuog72ud8fqrn1rvm0f6hh.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.

      // TODO: Authorize using one of the following scopes:
      //   'https://www.googleapis.com/auth/drive'
      //   'https://www.googleapis.com/auth/drive.file'
      //   'https://www.googleapis.com/auth/drive.readonly'
      //   'https://www.googleapis.com/auth/spreadsheets'
      //   'https://www.googleapis.com/auth/spreadsheets.readonly'
      var SCOPE = 'https://www.googleapis.com/auth/spreadsheets.readonly';
	    
	    /*
	    gapi.client.init({
        'apiKey': '3379d05a4cacb1890cc85fef4a9ca4dce676db7f',
        'clientId': '100855812677045796937',
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(function() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });*/

      gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(function() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });
      
    }

    function handleClientLoad() {
      gapi.load('client:auth2', initClient);
    }

    function updateSignInStatus(isSignedIn) {
      if (isSignedIn) {
        makeApiCall();
      }
    }

    function handleSignInClick(event) {
      gapi.auth2.getAuthInstance().signIn();
    }

    function handleSignOutClick(event) {
      gapi.auth2.getAuthInstance().signOut();
    }
    



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
		if( tempTab[i].match("gardien")) categorie1[0]++;
		else if( tempTab[i].match("artisan")) categorie1[1]++;
		else if( tempTab[i].match("idealiste")) categorie1[2]++;
		else if( tempTab[i].match("rationnel")) categorie1[3]++;
		
		else if( tempTab[i].match("soutien")) categorie2[0]++;
		else if( tempTab[i].match("controleur")) categorie2[1]++;
		else if( tempTab[i].match("superviseur")) categorie2[2]++;
		else if( tempTab[i].match("protecteur")) categorie2[3]++;
		
		else if( tempTab[i].match("interprète")) categorie2[4]++;
		else if( tempTab[i].match("artisant")) categorie2[5]++;
		else if( tempTab[i].match("organisateur")) categorie2[6]++;
		else if( tempTab[i].match("compositeur")) categorie2[7]++;
		
		else if( tempTab[i].match("professeur")) categorie2[8]++;
		else if( tempTab[i].match("guerisseur")) categorie2[9]++;
		else if( tempTab[i].match("defenseur")) categorie2[10]++;
		else if( tempTab[i].match("conseiller")) categorie2[11]++;
		
		else if( tempTab[i].match("marechal")) categorie2[12]++;
		else if( tempTab[i].match("architecte")) categorie2[13]++;
		else if( tempTab[i].match("inventeur")) categorie2[14]++;
		else if( tempTab[i].match("cerveau")) categorie2[15]++;
		
	
	}
	//alert("categorie: "+categorie);
	
	//document.getElementById('lien').innerText = "Lien du questionnaire : https://janes-r.github.io/projCult.com";
	
	return categorie1,categorie2;
}	
//
//let nb =data2[0]+data2[1]+data2[2]+data2[3];
//document.getElementById('nbPersonne').innerText = "nombre de personne ayant répondu au atyTest : "+nb;
//alert(data2);

 //gardien artisan idealiste rationnel
var data1 = [3,6,3,5];
config1 = {
        type: 'doughnut',
        data: {
            labels: ["gardien", "artisan", "idealiste", "rationnel"],
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
                data: categorie1,
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

var data3 = [2,3,0,1,2,0,0,1,1,3,0,1,2,0,0,1];
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
                data: categorie2,
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
let nb =categorie1[0]+categorie1[1]+categorie1[2]+categorie1[3];
document.getElementById('nbPersonne').innerText = "nombre de personne ayant répondu au atyTest : "+nb;
window.onload = function() {
        	
		var ctx = document.getElementById('chart-area').getContext('2d');
        	window.myPie1 = new Chart(ctx, config1);
		var ctx = document.getElementById('chart-area2').getContext('2d');
		
        	window.myPie2 = new Chart(ctx, config2);
    		};


	
   
