
	var e = 0;
	var i = 0;
	
	var s = 0;
	var n = 0;
	
	var t = 0;
	var f = 0;
	
	var j = 0;
	var p = 0;
	
	var nb_alea = 0;
	
	var l8c = "";
	var bonne_rep = 0; var nb_questions = 10;
	var nb_erreurs = 0; var mem_nb_alea="";
	var jouer=false;
	var resultatTest ="";
	
	alert("questionnaire qui mesure et catégorise votre personnalité a but ludique inspirer du questionnaire MBTI");
	
	function debuter()
	{
		jouer = true;
		bonne_rep = 0; nb_questions = 40;
		nb_erreurs = 0; mem_nb_alea="";
		init();
		suivant();
	}
	
	function init()
	{
		document.getElementById('restant').innerText = nb_questions;
		<!--document.getElementById('resDePers').innerText = l8c; 	-->
	}
	function valider(num_rep) {
	
		if(jouer==false){
			return;
		}
		
		if(nb_alea <=10) {
			if(num_rep ==1){
				e++;
			}
			else {
				i++
			}
		}
		else if(nb_alea <=20) {
			if(num_rep ==1){
				s++;
			}
			else {
				n++;
			}
		}
		else if(nb_alea <=30) {
			if(num_rep ==1){
				t++;
			}
			else {
				f++;
			}
		}
		else {
			if(num_rep ==1){
				j++;
			}
			else {
				p++;
			}
		}
		l8c = ""+e+i+s+n+t+f+j+p+"";

		
		if(num_rep != bonne_rep ) {
			nb_erreurs++;
		}
		nb_questions--;
		
		
		if(nb_questions==0){
			jouer=false;
			
			if(s>n && j>p) {
				resultatTest +="vous ete un gardien et de type ";
				
				if(e>i &&f>t){
					resultatTest += "soutien";
				}
				else if( e<i && f<t){
					resultatTest += "controleur";
				}
				else if( e>i && f<t){
					resultatTest += "supervisueur";
				}
				else {
					resultatTest += "protecteur";
				}
			}
			else if(s>n && p>j){
				resultatTest +="vous ete un artisans et de type ";
				if(e>i &&f>t){
					resultatTest += "interprete";
				}
				else if( e<i && f<t){
					resultatTest += "artisant";
				}
				else if( e>i && f<t){
					resultatTest += "organisateur";
				}
				else {
					resultatTest += "compositeur";
				}
			}
			else if(n>s && f>t) {	
				resultatTest +="vous ete un idealistes et de type ";
				if(e>i &&j>p){
					resultatTest += "professeur";
				}
				else if( e<i && j<p){
					resultatTest += "guerisseur";
				}
				else if( e>i && j<p){
					resultatTest += "defenseur";
				}
				else {
					resultatTest += "conseiller";
				}
			}
			else if(n>s && t>f) {
				resultatTest +="vous ete un rationnel et de type ";
				if(e>i &&j>p){
					resultatTest += "marechal";
				}
				else if( e<i && j<p){
					resultatTest += "architecte";
				}
				else if( e>i && j<p){
					resultatTest += "inventeur";
				}
				else {
					resultatTest += "cerveau";
				}
			}else  {
				alert("erreur refaite le test");
			}
			
			var temp = e+ " "+i+ " "+s+ " "+n+ " "+t+ " "+f+ " "+j+ " "+p;
			sessionStorage.setItem("data",temp);
			document.getElementById('result').removeAttribute('disabled');
			document.getElementById('result').removeAttribute('hidden');
			//document.cookie = "data = "+e+ " "+i+ " "+s+ " "+n+ " "+t+ " "+f+ " "+j+ " "+p+"";
			//document.cookie =	"username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
			//var x = document.cookie;
			//window.alert("allert12 "+x);
			
		e = 0;
		i = 0;
	
		s = 0;
		n = 0;
	
		t = 0;
		f = 0;
	
		j = 0;
		p = 0;
			
		}
		init();
		suivant();
	}
	function resultat(){
		
		sessionStorage.setItem("resultAty",resultatTest);
	}
	function suivant(){
		
		var indice; 
		var test = true;
		nb_alea = 0;
		
		if( jouer== false)
			return;
		
		while(test == true){
			nb_alea = Math.floor(Math.random()*(40)+1);
			if(mem_nb_alea.indexOf("-" + nb_alea + "-" )>-1){
				nb_alea = Math.floor(Math.random()*(40)+1);
			}
			else{
				test = false;
				mem_nb_alea += "-" +nb_alea + "-";
			}
		}	
		
		var chaine_question = questions(nb_alea);
		//alert(chaine_question);
		
		var tab_question = chaine_question.split('*');
		document.getElementById('question').innerText = tab_question[0];
		
		for(indice=1;indice<5;indice++){
			document.getElementById('rep'+ indice ).innerText = tab_question[indice];
		}
		bonne_rep = tab_question[5];
	}
	
	function getVal(){
		
		var donnee = e+" "+i+" "+s+" "+n+" "+t+" "+f+" "+j+" "+p;
		alert("essaye");
		return donnee;
	}
	
