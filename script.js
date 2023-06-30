function navegarPara(tela) {
  var conteudo = document.getElementById('conteudo');

  if (tela === 'calculadora') {
    conteudo.innerHTML = '<div class="container-calculadora">' +
                          '<input type="text" class="entrada-calculadora" id="entrada-calc" readonly>' +
                          '<div class="botoes-calculadora">' +
                            '<button class="btn btn-info" onclick="adicionarAoInput(\'9\')">9</button>' +
                            '<button class="btn btn-info" onclick="adicionarAoInput(\'8\')">8</button>' +
                            '<button class="btn btn-info" onclick="adicionarAoInput(\'7\')">7</button>' +
                            '<button class="btn btn-info" onclick="adicionarAoInput(\'6\')">6</button>' +
                            '<button class="btn btn-info" onclick="adicionarAoInput(\'5\')">5</button>' +
                            '<button class="btn btn-info" onclick="adicionarAoInput(\'4\')">4</button>' +
                            '<button class="btn btn-info" onclick="adicionarAoInput(\'3\')">3</button>' +
                            '<button class="btn btn-info" onclick="adicionarAoInput(\'2\')">2</button>' +
                            '<button class="btn btn-info" onclick="adicionarAoInput(\'1\')">1</button>' +
                            '<button class="btn btn-info" onclick="adicionarAoInput(\'0\')">0</button>' +
                            '<button class="btn btn-dark" onclick="adicionarAoInput(\'+\')">+</button>' +
                            '<button class="btn btn-dark" onclick="adicionarAoInput(\'-\')">-</button>' +
                            '<button class="btn btn-dark" onclick="adicionarAoInput(\'*\')">*</button>' +
                            '<button class="btn btn-dark" onclick="adicionarAoInput(\'/\')">/</button>' +
                            '<button class="btn btn-dark" onclick="adicionarAoInput(\'.\')">.</button>' +
                            '<button class="btn btn-primary" onclick="calcular()">=</button>' +
                            '<button class="btn btn-danger" onclick="apagar()">C</button>' +
                          '</div>' +
                        '</div>';
  } else if (tela === 'imc') {
    conteudo.innerHTML = '<div class="container-principal">' +
                          '<h2>Cálculo de IMC</h2>' +
                          '<div class="form-group">' +
                            '<input type="text" class="form-control" id="peso" placeholder="Peso (kg)">' +
                          '</div>' +
                          '<div class="form-group">' +
                            '<input type="text" class="form-control" id="altura" placeholder="Altura (m)">' +
                          '</div>' +
                          '<div class="form-group">' +
                            '<button class="btn btn-primary" onclick="calcularIMC()">Calcular</button>' +
                          '</div>' +
                          '<div id="resultado"></div>' +
                        '</div>';
  } else if (tela === 'formulario') {
    conteudo.innerHTML = '<div class="container-principal">' +
                          '<h2>Formulário</h2>' +
                          '<div class="form-group">' +
                            '<input type="text" class="form-control" id="nome" placeholder="Nome">' +
                          '</div>' +
                          '<div class="form-group">' +
                            '<input type="email" class="form-control" id="email" placeholder="Email">' +
                          '</div>' +
                          '<div class="form-group">' +
                            '<input type="tel" class="form-control" id="telefone" placeholder="Telefone">' +
                          '</div>' +
                          '<div class="form-group">' +
                            '<input type="password" class="form-control" id="senha" placeholder="Senha">' +
                          '</div>' +
                          '<div class="form-group">' +
                            '<button class="btn btn-primary" onclick="enviarFormulario()">Enviar</button>' +
                          '</div>' +
                          '<div id="mensagem"></div>' +
                        '</div>';
  }
}

function adicionarAoInput(valor) {
  var input = document.getElementById('entrada-calc');
  input.value += valor;
}

function calcular() {
  var input = document.getElementById('entrada-calc');
  var resultado = eval(input.value);
  input.value = resultado;
}

function apagar() {
  var input = document.getElementById('entrada-calc');
  input.value = '';
}

function calcularIMC() {
  var pesoInput = document.getElementById('peso');
  var alturaInput = document.getElementById('altura');
  var resultado = document.getElementById('resultado');
  
  var peso = parseFloat(pesoInput.value);
  var altura = parseFloat(alturaInput.value);
  
  if (!isNaN(peso) && peso !== 0 && !isNaN(altura) && altura !== 0) {
    var imc = peso / (altura * altura);
    resultado.innerHTML = 'Seu IMC é: ' + imc.toFixed(2);
  } else {
    resultado.innerHTML = 'Por favor, insira valores válidos para o cálculo do IMC.';
  }
}

function enviarFormulario() {
  var nomeInput = document.getElementById('nome');
  var emailInput = document.getElementById('email');
  var telefoneInput = document.getElementById('telefone');
  var senhaInput = document.getElementById('senha');
  var mensagemDiv = document.getElementById('mensagem');
  
  var formData = {
    nome: nomeInput.value,
    email: emailInput.value,
    telefone: telefoneInput.value,
    senha: senhaInput.value
  };
  
  var jsonData = JSON.stringify(formData, null, 2);
  mensagemDiv.innerHTML = 'Dados do formulário:<br>' + jsonData;
}
