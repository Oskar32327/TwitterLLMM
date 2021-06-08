const contenedorCentral = document.getElementById("contenedorCentral");
const contenedorTendencia = document.getElementById("tendencia");
const contenedorSugerencia = document.getElementById("sugerencia");
var parse, xmlDOM;

function getDocumentXML(xmlDocument){
	parser = new DOMParser();
	xmlDOM = parser.parseFromString(xmlDocument, "text/xml");
	console.log(xmlDOM);
	addTweet(xmlDOM);
}

function openFile(event) {
    var input = event.target;
    var reader = new FileReader();

    reader.readAsText(input.files[0]);

    
    reader.onload = function(){
        var text = reader.result;
        var XMLdocument = removeWhiteSpace(text);

        getDocumentXML(XMLdocument);
    };

};

function removeWhiteSpace(xmlDoc){
xmlDoc = xmlDoc.replace(/>\s*/g, '>');
	xmlDoc = xmlDoc.replace(/\s*</g, '<'); 
	return xmlDoc;
}

function addTweet(xmlDOM){
	var listaTwitter = xmlDOM.getElementsByTagName("twit");
	for (var tweets = 0; tweets < listaTwitter.length; tweets++) {
		var twit = document.createElement('div');
		var divimg = document.createElement('div');
		divimg.classList.add('imagenes-centrales');


		var title = document.createElement('h2');
		title.innerText=listaTwitter[tweets].childNodes[0].firstChild.nodeValue;
		twit.appendChild(title);

		var arroba = document.createElement('h4');
		arroba.innerText=listaTwitter[tweets].childNodes[1].firstChild.nodeValue;
		twit.appendChild(arroba);

		var textoTweet = document.createElement('p');
		textoTweet.innerText=listaTwitter[tweets].childNodes[2].firstChild.nodeValue;
		twit.appendChild(textoTweet);

		var img = document.createElement('img');
		img.src = listaTwitter[tweets].childNodes[3].firstChild.nodeValue;
		divimg.appendChild(img);

		twit.appendChild(divimg);
		var acheerre = document.createElement('hr');
		twit.appendChild(acheerre);
	console.log("ESTO ES UN EASTER EGG ELIAS ;)");
		contenedorCentral.appendChild(twit);
	}

	var listaTendencias = xmlDOM.getElementsByTagName("tendencia");
	for (var tendencias = 0; tendencias < listaTendencias.length; tendencias++) {
		var tendenciaa = document.createElement('div');
		tendenciaa.classList.add('InfoContenedorDerecha');


		var title = document.createElement('p');
		title.innerHTML=listaTendencias[tendencias].childNodes[0].firstChild.nodeValue
		tendenciaa.appendChild(title);

		var img = document.createElement('img');
		img.src = listaTendencias[tendencias].childNodes[1].firstChild.nodeValue;
		tendenciaa.appendChild(img);

		contenedorTendencia.appendChild(tendenciaa);
	}

	var listaSugerencia = xmlDOM.getElementsByTagName("sugerencia");
	for (var sugerencia = 0; sugerencia < listaSugerencia.length; sugerencia++) {
		var sugerenciaa = document.createElement('div');
		sugerenciaa.classList.add('InfoContenedorDerecha');

		var img = document.createElement('img');
		img.src = listaSugerencia[sugerencia].childNodes[0].firstChild.nodeValue;
		sugerenciaa.appendChild(img);

		var title1 = document.createElement('p');
		title1.innerHTML=listaSugerencia[sugerencia].childNodes[1].firstChild.nodeValue
		sugerenciaa.appendChild(title1);

		var boton = document.createElement('button');
		boton.innerText="Seguir";
		sugerenciaa.appendChild(boton);

		contenedorSugerencia.appendChild(sugerenciaa);
	}
}