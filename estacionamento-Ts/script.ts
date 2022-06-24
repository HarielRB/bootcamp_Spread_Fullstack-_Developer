// criando a interface de veiculos

interface Veiculo{
    nome: String;
    placa: String;
    entrada: Date | string;
}

(function() {

    // essa constante não é jquery
    const $ = (query : string): HTMLInputElement | null=> document.querySelector(query);

    function calcTempo(mil: number){
        const min = Math.floor(mil/60000);
        const sec = Math.floor((mil % 60000)/1000)
        return `${min}m e ${sec}s`;
    }
    
    function patio(){
        function ler(): Veiculo[]{
            // verificando se no local storage existe o atributo patio 

            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }

        function salvar(veiculos: Veiculo[]){
            localStorage.setItem("patio", JSON.stringify(veiculos))
        }

        function adicionar(veiculo: Veiculo, salva?: boolean){
            // função para criar a row que armazenará os dados de determinado veículo   
            const row = document.createElement("tr")
            //var data : String = `${veiculo.entrada.getDay()}/${veiculo.entrada.getMonth()}/${veiculo.entrada.getFullYear()}`
            row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
                <button class="delete" data-placa="${veiculo.placa}">Excluir</button>
            </td>`

            row.querySelector(".delete")?.addEventListener("click", function(){
                remover(this.dataset.placa)
            });
            $("#patio")?.appendChild(row);
            if(salva){
                salvar([...ler(), veiculo])
            }
            
        }

        function remover(placa: string){
            const {entrada, nome} = ler().find(veiculo => veiculo.placa === placa)
            const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());
            if(!confirm(`O veículo ${nome} permaneceu por ${tempo}. Deseja encerrar?`)) return;
            salvar(ler().filter(veiculo => veiculo.placa !== placa))
            render();
        }

        function render(){
            // função que apaga, caso haja valores no patio e sobreescreve com os valores encontrados atualmente
            $("#patio")!.innerHTML = "";
            const patio = ler()
            if(patio.length){
                patio.forEach(veiculo=> adicionar(veiculo))
            }
        }

        return {ler, adicionar, salvar, remover, render}
    }

    patio().render();
    //o interrogação é quando o atributo pode ser opicional
    $("#cadastrar")?.addEventListener("click", () => {
        const nome = $("#nome")?.value
        const placa = $("#placa")?.value

        if(!nome || !placa){
            // caso os valores de nome e placa sejam nulos há o retorno
            alert("Os campos Nome e Placa são obrigatórios")
            return 
        }
        patio().adicionar({nome, placa, entrada: new Date().toISOString()}, true);
    });
})();