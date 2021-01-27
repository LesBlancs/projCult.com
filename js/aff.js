var temp ="";
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
        $("#data").html(response.result.values);
        temp = response.result.values;
        alert(temp);
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
    














alert(temp);


    //var temp = "Horodateur,Entrer votre nom,email,Choisir l'heure de rendez vous,atypie,type,22/01/2021 07:30:29,test,test@test,10h-11h,22/01/2021 07:31:36,test2,test2@test,10h-11h,idealistes,guerisseur,22/01/2021 09:46:46,UNTEST,test@test.fr,14h-15h,gardien,supervisueur,22/01/2021 09:49:12,salut,salut@gmail.com,10h-11h,rationnel,marechal,22/01/2021 10:19:59,fabre,fabre@3il.fr,10h-11h,idealistes,guerisseur,27/01/2021 11:02:21,j,j@gdgf.f,11h-12h,0,0,27/01/2021 11:02:45,ja,raf@gmail,14h-15h,null,27/01/2021 11:35:44,test,test@te,14h-15h,êtes,gardien,27/01/2021 11:36:37,test,test@gm,11h-12h,êtes,gardien";
	
	var tempTab = [];
	
	for( let i=0;i<temp.length;i++) {
		tempTab = temp.split(",");
		
	}
	
	var categorie = [0,0,0,0];
	for( let i=0;i<tempTab.length;i++) {
		//alert(tempTab[i]);
		if( tempTab[i].match("guerisseur")) categorie[0]++;
		else if( tempTab[i].match("supervisueur")) categorie[1]++;
		else if( tempTab[i].match("marechal")) categorie[2]++;
		else if( tempTab[i].match("guerisseur")) categorie[3]++;
	
	}
	
	//alert(categorie);
	retour =[];
	

var config1 = {
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
var config2 = {
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
	
	
    window.onload = function() {
        var ctx = document.getElementById('chart-area').getContext('2d');
		
        window.myPie = new Chart(ctx, config1);
		var ctx = document.getElementById('chart-area2').getContext('2d');
		
        window.myPie = new Chart(ctx, config2);
    };



let nb =categorie[0]+categorie[1]+categorie[2]+categorie[3];
document.getElementById('nbPersonne').innerText = "nombre de personne ayant répondu au atyTest : "+nb;
document.getElementById('lien').innerText = "Lien du questionnaire : https://janes-r.github.io/projCult.com";

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  
  
  
  
  $('[data-text]').on('keyup', function(){
  $(this).attr('data-text', $(this).text());
});

