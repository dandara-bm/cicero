
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title> Aula 08</title>
	<meta charset="UTF-8" />
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css" />
	<script type="text/javascript" src="aula08.js"></script>
	
</head>
<body>
	<div class="container">
		<table class="table" id="tabela">
		
		</table>
		<br />
		<input class="form-control" type="text" id="texto" />
		<br />
		<button class="btn btn-primary" id="btOK">OK</button>
		
	
	</div>

</body>
</html>
 function montarTabela(lista, idElemento){
	 var html = '';
		for(var i = 0; i < lista.length; i++) {
			html += '<tr><td>'+ lista[i] +'</td></tr>';
		}
		document.getElementById(idElemento).innerHTML = html;
 }

 
 document.addEventListener('DOMContentLoaded', function(){
	   nomes = ['Daiane','Maria','Ana'];
	   montarTabela(nomes, 'tabela');
	   
	   document.getElementById('btOK').addEventListener('click', function(){
	   nomes.push (document.getElementById('texto').value);
	   montarTabela(nomes, 'tabela');
	   });
 });
