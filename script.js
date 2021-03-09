function carregarMaisFilmes(){
	var maisFilmes = document.getElementById("mais");
	var btnCarregarMais = document.getElementById("btnCarregarMais");

	if(mais.style.display == "none"){
		maisFilmes.style.display = "inline";
		btnCarregarMais.innerHTML = "- Carregar menos filmes";
	}
	else{
		maisFilmes.style.display = "none";
		btnCarregarMais.innerHTML = "+ Carregar mais filmes";
	}
}

function carregarMaisAvaliacoes(){
	var maisAvaliacoes = document.getElementById("mais2");
	var btnCarregarMais2 = document.getElementById("btnCarregarMais2");

	if(mais2.style.display == "none"){
		maisAvaliacoes.style.display = "inline";
		btnCarregarMais2.innerHTML = "- Carregar menos avaliações";
	}
	else{
		maisAvaliacoes.style.display = "none";
		btnCarregarMais2.innerHTML = "+ Carregar mais avaliações";
	}
}

function pesquisarFilme(){
	var filmePesquisa = document.getElementById("pesquisar").value;
	buscarFilme(filmePesquisa);
}

function buscarFilme(filmePesquisa){
	axios.get("http://www.omdbapi.com/?t="+filmePesquisa)
	.then(function (response) {
		console.log(response);
	})
  	.catch(function (error) {
    	console.log(error);
  	});
}
