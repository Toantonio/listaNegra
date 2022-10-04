const dividaController = {
    devedor: new Devedor,
    devedor: [],
    erros: false,
    botaosalva: document.getElementById("salvar"),

    getDataFrom: function (){
        this.devedor.usenome = document.getElementById('nome').value;
        this.devedor.prod = document.getElementById('prod').value;
        this.devedor.hora = document.getElementById('data').value;
        this.devedor.valor = document.getElementById('valor').value;

    },
    updateDataFrom: function(devedor = new Devedor){
        document.getElementById('nome').value = devedor.nome;
        document.getElementById('prod').value = devedor.prod;
        document.getElementById('data').value = devedor.data;
        document.getElementById('valor').value = devedor.valor;
    }



















}