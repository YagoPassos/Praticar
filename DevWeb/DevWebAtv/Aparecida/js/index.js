const pacientes = {
    // Objeto pacientes

    // Elementos (Arrays) para armazenar e processar os dados vindo da tabela
    nome: [],
    peso: [],
    altura: [],
    gordura: [],
    imc: [],
    paciente_aux: [],

    // Função para preencher os elementos do objeto
    preencher: function () {
        let info_nome = document.querySelectorAll('.info-nome');
        let info_peso = document.querySelectorAll('.info-peso');
        let info_altura = document.querySelectorAll('.info-altura');
        let info_gordura = document.querySelectorAll('.info-gordura');

        for (i = 0; i < info_nome.length; i++) {
            this.nome[i] = info_nome[i].innerHTML;
            this.peso[i] = info_peso[i].innerHTML;
            this.altura[i] = info_altura[i].innerHTML;
            this.gordura[i] = info_gordura[i].innerHTML;
        }
    },
    // Função para calcular o IMC com os dados das Arrays
    calcular: function () {

        for (i = 0; i < this.nome.length; i++) {
            this.imc[i] = this.peso[i] / Math.pow(this.altura[i], 2)
        }
    },
    // Usando os dados das Arrays, escreve o resultado do calculo presente na Array do elemento imc na tabela
    escrever: function () {
        let info_imc = document.querySelectorAll('.info-imc');

        for (i = 0; i < this.nome.length; i++) {
            info_imc[i].innerHTML = this.imc[i].toFixed(2);
        }
    },
    // Função para adicionar uma nova linha (TR) na tabela
    adicionarPaciente: function () {
        this.paciente_aux = document.createElement('tr');
        this.paciente_aux.className = "paciente";

        // Criando as colunas (tds) para a linha criada acima
        let cont = [
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td')
        ];
        // Passando os valores do formulario e atribuindo a classe de cada uma

        let nome = document.querySelector('#addForm').nome.value;
        let peso = document.querySelector('#addForm').peso.value;
        let altura = document.querySelector('#addForm').altura.value;
        let gordura = document.querySelector('#addForm').gordura.value;

        cont[0].textContent = nome;
        cont[0].className = "info-nome";
        cont[1].textContent = peso;
        cont[1].className = "info-peso";
        cont[2].textContent = altura;
        cont[2].className = "info-altura";
        cont[3].textContent = gordura;
        cont[3].className = "info-gordura";
        cont[4].textContent = '0';
        cont[4].className = "info-imc";

        if (peso <= 0 || peso >= 400 || altura <= 0 || altura >= 3) {
            if (peso <= 0 || peso >= 400) { alert('Peso Inválido') };
            if (altura <= 0 || altura >= 3) { alert('Altura Inválida') };
        }
        else {
            for (i = 0; i < cont.length; i++) { this.paciente_aux.appendChild(cont[i]) }

            var tabela = document.querySelector('#tabela-pacientes');

            tabela.appendChild(this.paciente_aux);

            // Executa novamente as funções para atualizar os elemtentos do objeto e a tabela
            pacientes.preencher();
            pacientes.calcular();
            pacientes.escrever();
        }
    }
}
