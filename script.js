const questoes = [
    {
        pergunta: "Para o licenciamento de um veículo em outro Estado, deve-se:",
        alternativas: [
            "obrigatoriamente alterar os números das suas placas",
            "pedir autorização ao Conselho Nacional de Trânsito.",
            "dar ciência ao Departamento de Trânsito do Estado de origem.",
            "pedir autorização ao Conselho de Trânsito do Estado de origem."
        ],
        correta: "dar ciência ao Departamento de Trânsito do Estado de origem."
    },
    {
        pergunta: `As subdivisões da pista de rolamento, com ou sem separações demarcadas, cuja largura permite a circulação
         de um veículo com segurança, são chamadas: `,
        alternativas: [
            "vias públicas",
            "faixas de segurança",
            "passagens de nível",
            "faixas de trânsito"
        ],
        correta: "faixas de segurança"
    },
    {
        pergunta: "O código de Trânsito Brasileiro classifica uma via de acesso a áreas restritas como:",
        alternativas: [
            "preferencial",
            "local",
            "trânsito de nível",
            "particular"
        ],
        correta: "particular"
    },
    {
        pergunta: "Se o candidato à habilitação for reprovado no exame teórico, ele só poderá realizar novo exame após:",
        alternativas: [
            "não há prazo mínimo definido",
            "15 dias após a divulgação do resultado",
            "6 dias da divulgação do resultado",
            "3 dias da divulgação do resultado"
        ],
        correta: "15 dias após a divulgação do resultado"
    },

    {
        pergunta: `Algumas situações que ocorrem no trânsito podem levar ao condutor a torna-se inabilitado. 
        Entre elas estão:
        <br>I. se a Carteira Nacional de Habilitação for roubada.
        <br>II. se o exame médico estiver com prazo de validade vencido.
        <br>III. se a Carteira Nacional de Habilitação for cassada.
        <br>É correto o que consta em:`,
        alternativas: ["I e II", "III", "I, II e III", "II, III"],
        correta: "III"
    },
    {
        pergunta: "Os veículos que têm prioridade no trânsito são destinados a:",
        alternativas: [
            "prestação de serviços de utilidade pública, apenas",
            "polícia, ambulância e prestação de serviços de utilidade pública, apenas",
            "socorro de incêndio e salvamento, polícia, fiscalização e operação de trânsito e ambulância",
            "prestação de serviços à rede de energia elétrica, apenas"
        ],
        correta: "socorro de incêndio e salvamento, polícia, fiscalização e operação de trânsito e ambulância"
    },
    {
        pergunta: `Solicitar sinalização, fiscalização e implantação de equipamentos de segurança, por escrito, aos órgãos 
        ou entidades do Sistema Nacional de Trânsito(SNT), bem como sugerir alterações em normas, legislação e outros assuntos
        pertinentes ao Código de Trânsito Brasileiro(CTB), é um direito: `,
        alternativas: [
            "exclusivo de condutores habilitados na categoria D.",
            "apenas dos advogados.",
            "exclusivo de motoristas profissionais.",
            "de todo cidadão ou entidade civil."
        ],
        correta: "de todo cidadão ou entidade civil."
    },
    {
        pergunta: `Como é chamado um veículo automotor de duas ou três rodas, provido de motor de combustão interna, cuja 
        cilindrada não exceda a 50 cm³, ou de motor de propulsão elétrica com potência máxima de 4 kW e que alcança, no máximo,
        a velocidade de 50 km/h?`,
        alternativas: ["Motocicleta", "Reboque", "Bicicleta", "Ciclomotor"],
        correta: "Ciclomotor"
    },
    {
        pergunta: "Estacionamento significa parar o veículo:",
        alternativas: [
            "durante o tempo necessário para embarque e desembarque de passageiro.",
            "pelo tempo necessário para fazer uma manobra com segurança.",
            "antes da faixa de retenção para aguardar o sinal verde.",
            "por tempo superior ao necessário para embarque e desembarque de passageiros."
        ],
        correta: "por tempo superior ao necessário para embarque e desembarque de passageiros."
    },
    {
        pergunta: "Ao condutor que tenha Permissão para Dirigir será conferida a Carteira Nacional de Habilitação após um ano:",
        alternativas: [
            "desde que não tenha cometido nenhuma infração gravíssima ou grave, nem seja reincidente em infração média.",
            "desde que não tenha cometido nenhuma infração.",
            "desde que não tenha cometido  nenhuma infração grave ou gravíssima, apenas.",
            "desde que não tenha cometido nenhuma infração gravíssima, apenas."
        ],
        correta: "desde que não tenha cometido nenhuma infração gravíssima ou grave, nem seja reincidente em infração média."
    },
    {
        pergunta: `Seu amigo está voltando de uma festa e é parado em uma blitz. Como bebeu um pouco ele se recusa a fazer o 
        teste do bafômetro. O que pode acontecer?`,
        alternativas: [
            "Nada é um direito do cidadão recusar tal teste.",
            "Será autuado pela infração do Art. 165-A",
            "Receberá flagrante pelo crime do Art. 306, caso esteja com a capacidade psicomotora alterada.",
            "Alternativas B e C estão corretas."
        ],
        correta: "Alternativas B e C estão corretas."
    },
    {
        pergunta: "Qual dos equipamentos indicados é obrigatório para automóveis?",
        alternativas: [
            "vidros elétricos",
            "kit de primeiros socorros.",
            "o para-choque",
            "kit multimídia com bluetooth"
        ],
        correta: "o para-choque"
    },
    {
        pergunta: "Ao Departamento Estadual de Trânsito (DETRAN), órgão executivo, cabe, entre outras, a atribuição de:",
        alternativas: [
            "sugerir mudanças na Legislação de Trânsito.",
            "expedir a Carteira Nacional de Habilitação.",
            "estabelecer os modelos das placas de veículo.",
            "regulamentar o serviço de aluguel de veículos"
        ],
        correta: "expedir a Carteira Nacional de Habilitação."
    },
    {
        pergunta: "Segundo a classificação de Código de Trânsito Brasileiro, uma via de trânsito rápido e caracterizada:",
        alternativas: [
            "pela alta velocidade nela desenvolvida.",
            "por faixas interceptando e distribuindo o trânsito, com acessos especiais.",
            `pelo trânsito livre, sem interseções em nível com acessos especiais, sem acessibilidade direta aos lotes lindeiros 
            e sem travessia de pedestres em nível`,
            "por faixas de acesso às àreas de estacionamento"
        ],
        correta: `pelo trânsito livre, sem interseções em nível com acessos especiais, sem acessibilidade direta aos lotes 
        lindeiros e sem travessia de pedestres em nível`
    },
    {
        pergunta: "A fotocópia da CNH:",
        alternativas: [
            "é válida e subtitui o documento original quando autenticada em cartório.",
            "não é válida para substituir o documento original, nem para comprovar o direito de seu portador de dirigir",
            "é válida quando apresentada junto com o documento de identidade do portador e os documentos do veículo.",
            "é válida quando apresentada junto com o documento de identidade"
        ],
        correta: "não é válida para substituir o documento original, nem para comprovar o direito de seu portador de dirigir"
    },
    {
        pergunta: "De acordo com a Legislação de Trânsito, os veículos, quanto a sua categoria, são classificados em:",
        alternativas: [
            "oficial, representação diplomática, aluguel e de policia",
            "oficial, aluguel, particular e carga",
            "oficial, aluguel, carga e corrida",
            "oficial, representação diplomática, particular, aluguel e aprendizagem"

        ],
        correta: "oficial, representação diplomática, particular, aluguel e aprendizagem"
    },
    {
        pergunta: `Conforme o CTB, o candidato à primeira habilitação deverá submeter-se a exames realizados pelo órgão 
        executivo de trânsito na seguinte ordem:`,
        alternativas: [
            "prova teórica, aptidão física e mental, avaliação psicológica e prova prática de direção",
            "aptidão física e mental, avaliação psicológica, prova teórica e prova prática de direção veicular",
            "aptidão física e mental, avaliação psicológica, prova prática e prova teórica",
            "prova teórica, avaliação psicológica e prova prática"
        ],
        correta: "aptidão física e mental, avaliação psicológica, prova prática e prova teórica"
    },
    {
        pergunta: `As passarelas são construídas em locais de difícil acesso para os pedestres, como em rodovias. O correto é
        o pedestre:
        <br>I. se estiver muito longe, atravessar em nível mesmo.
        <br>II. atravessar em nível, agitando um pano.
        <br>III. caminhar até a passarela e efetuar a travessia com segurança.
        <br>É correto o que consta em:`,
        alternativas: ["II e III", "I e III", "I e II", "III"],
        correta: "III"
    },
    {
        pergunta: "Significa mudança de característica do veículo:",
        alternativas: ["o pneu liso.", "a falta de freio.", "a descarga livre", "o rebaixamento da suspensão e a mudança de cor"],
        correta: "o rebaixamento da suspensão e a mudança de cor"
    },
    {
        pergunta: "Quanto à tração, pela Legislação de Trânsito, os veículos são:",
        alternativas: [
            "animal, propulsão humana, automóvel e motocicleta",
            "animal, propulsão humana, charrete e carroça",
            "animal, propulsão humana, automotor e reboque ou semirreboque",
            "animal, propulsão humana, ônibus e caminhão"
        ],
        correta: "animal, propulsão humana, automotor e reboque ou semirreboque"
    },
    {
        pergunta: "Um infrator poderá se candidatar à reabilitação decorridos:",
        alternativas: [
            "10 meses de casação da Carteira Nacional de Habilitação",
            "24 meses de casação da Carteira Nacional de Habilitação",
            "18 meses de casação da Carteira Nacional de Habilitação",
            "12 meses de casação da Carteira Nacional de Habilitação"
        ],
        correta: "24 meses de casação da Carteira Nacional de Habilitação"
    },
    {
        pergunta: "O candidato que está em processo de formação de condutores poderá conduzir veículo automotor:",
        alternativas: [
            "acompanhado de instrutor autorizado e portando a Licença de Aprendizagem de Direção Veicular- LADV",
            "sozinho, desde que porte o Certificado de Registro e Licenciamento de Veículo - CRLV",
            "sozinho, desde que esteja portando a Licença de Aprendizagem de Direção Veicular  - LADV",
            "acompanhado de condutor habilitado na categoria 'D' "
        ],
        correta: "acompanhado de instrutor autorizado e portando a Licença de Aprendizagem de Direção Veicular- LADV"
    },
    {
        pergunta: "Faz parte dos equipamentos obrigatórios dos automóveis:",
        alternativas: [
            "espelho retrovisor externo do lado direito",
            "rádio",
            "conta-giros",
            "cinto de segurança"
        ],
        correta: "cinto de segurança"
    },
    {
        pergunta: `Assinale V ou F para as punições a que está sujeito um condutor julgado culpado de acidente com vítimas:
        <br> ( ) curso de reciclagem.
        <br> ( ) exames de aptidão física e mental.
        <br> ( ) exame teórico sobre legislação.
        <br> ( ) exame de noções de informática.
        <br> ( ) exame de direção veicular.
        <br>A sequência correta é:
        `,
        alternativas: [
            "F, F, V,V e F.",
            "v, V, F, V e F",
            "F, V, F, V e F",
            "V, V, V, F e V"
        ],
        correta: "V, V, V, F e V"
    },
    {
        pergunta: `É obrigatório, em veiculo de passeio, transportar crianças menores de 10 anos que não tenham atingido 1,45 m 
        de altura: `,
        alternativas: [
            "no banco de trás, sem outros cuidados.",
            "no banco de trás, com sistema de retenção próprio para a idade e cinto de segurança.",
            "em qualquer local do veículo.",
            "no colo de um adulto, desde que os dois estejam de cinto."
        ],
        correta: "no banco de trás, com sistema de retenção próprio para a idade e cinto de segurança."
    },
    {
        pergunta: "O limite de velocidade permitido em vias coletoras, quando não sinalizadas, é de:",
        alternativas: ["80 km/h", "40 km/h", "60 km/h", "30 km/h"],
        correta: "40 km/h"
    },
    {
        pergunta: `O pedestre está no meio da travessia da via quando o semáforo fica verde para os veículos. Qual a atitude 
        correta do condutor de veículo motorizado?`,
        alternativas: [
            "Sinalizar para o pedestre que ele deve desistir da travessia.",
            "Por o carro em movimento de forma lenta sem colocar o pedestre em risco.",
            "Buzinar para o pedestre.",
            "Aguardar o final da travessia."

        ],
        correta: "Aguardar o final da travessia."
    },
    {
        pergunta: `Um condutor responde ao agente de trânsito que está emitindo uma multa por estacionamento em local proibido:
        <br> - Infelizmente estacionei neste local porque não conhecia esta placa
        <br> Neste caso, a atitude do agente será:`,
        alternativas: [
            "anular a multa, pois o cidadão desconhecia a sinalização do local.",
            "emitir a multa e notificar o infrator, pois nenhum condutor pode alegar desconhecimento da legislação de trânsito.",
            "levar o caso para um conselho de agentes para que a maioria decida o que fazer.",
            "emitir a multa e mandar prender o infrator por desacato."
        ],
        correta: "emitir a multa e mandar prender o infrator por desacato."
    },
    {
        pergunta: "É proibido a todo condutor de veiculo:",
        alternativas: [
            "prestar socorro a vítimas de acidentes.",
            "nas rodovias, parar o veículo no acostamento e aguardar a oportunidade para cruzar a pista",
            "aproximar o veículo da guia de calçada (meio-fio), nas vias urbanas, para desembarque de passageiros",
            "dirigir sem acionar o limpador de para-brisa durante chuva"
        ],
        correta: "dirigir sem acionar o limpador de para-brisa durante chuva"
    },
    {
        pergunta: `Em vias rurais sem sinalização regulamentadora, a velocidade máxima permitida para automóveis e motocicletas 
        é de:`,
        alternativas: [
            "70 km/h, quando em rodovia",
            "70 km/h, quando em estrada",
            "80 km/h, quando em rodovia",
            "60 km/h, quando em estrada"
        ],
        correta: "60 km/h, quando em estrada"
    },
    {
        pergunta: "Os passageiros, que estão no veículo, ao desembarcar devem:",
        alternativas: [
            "escolher por qual dos lados querem descer",
            "descer sempre pelo lado esquerdo",
            "descer sempre pelo lado da calçada",
            "usar a porta que estiver mais proxima"
        ],
        correta: "descer sempre pelo lado da calçada"
    },
    {
        pergunta: `Um condutor com 75 anos, habilitado na categoria 'B' desde os 18 anos e na categoria 'A' desde os 20 anos, 
        deve renovar seu exame de aptidão física e mental a cada:`,
        alternativas: ["3 anos", "2 anos", "5 anos",
            "não precisa mais renovar a habilitação, pois é considerado uma pessoa experiente na direção veicular"],
        correta: "3 anos"
    },
    {
        pergunta: "Segundo o Código de Trânsito Brasileiro, as vias urbanas classificam-se em:",
        alternativas: [
            "vias de acesso, de ligação, radiais e diametrais.",
            "vias expressas, arteriais, coletivas e locais.",
            "vias locais, de trânsito rápido, expressas e preferenciais",
            "vias locais, coletoras, arteriais e de trânsito rápido"
        ],
        correta: "vias locais, coletoras, arteriais e de trânsito rápido"
    },
    {
        pergunta: "A Carteira Nacional de Habilitação permite a quem possuí-la o direito de dirigir:",
        alternativas: [
            "veículos automotores, apenas na localidade onde foi emitida.",
            "qualquer tipo de veículo, apenas na localidade onde foi emitida.",
            "qualquer tipo de veículo automotor",
            "veículos automotores, apra os quais foi habilitado, em todo território nacional"
        ],
        correta: "veículos automotores, apra os quais foi habilitado, em todo território nacional"
    },
    {
        pergunta: `Em qual das situações abaixo, poderá ser agravada a pena, para os casos de homicidio culposo cometido pelo 
        condutor na direção de veículo automotor:`,
        alternativas: [
            "utilizando veículo sem placa ou com placa adulterada",
            "praticado na faixa de pedestres",
            "com Permissão para Dirigir ou Carteira de Habilitação de categoria diferente da do veículo",
            "todas as alternativas estão corretas"
        ],
        correta: ""
    },
    {
        pergunta: "O condutor habilitado apenas na categoria 'B' poderá dirigir veículo:",
        alternativas: [
            "motorizado de 2 rodas",
            `com peso menor que 3.500 kg e que não tenha mais de 8 lugares, sem contar o condutor. Além de motor-casa cujo 
            peso não exceda a 6.000 kg ou cuja lotação não exceda a 8 lugares, sem contar o condutor`,
            "de transporte de carga, cujo PBT exceda a 3.500 kg",
            "de transporte coletivo de passageiros e que tenha mais de 8 lugares, sem contar o do condutor"
        ],
        correta: ""
    },
    {
        pergunta: "O condutor está em uma via de mão dupla e pretende virar à direita. Para isso, ele deverá posicionar o veículo:",
        alternativas: [
            "o máximo possível do bordo direito da via",
            "mais ao centro possível da via",
            "o máximo possível do bordo esquerdo da via",
            "não há uma posição definida"
        ],
        correta: ""
    },
    {
        pergunta: "É importante conhecer as leis de trânsito para:",
        alternativas: [
            "conduzir de acordo com o que é determinado, sem cometer infrações.",
            "mostrar para seus amigos que você sabe tudo e estudou muito.",
            "poder fazer coisas erradas e ter argumentos para discutir com o agente",
            "criticar os erros de outras pessoas com muita propriedade"
        ]
        ,
        correta: "conduzir de acordo com o que é determinado, sem cometer infrações."
    },
    {
        pergunta: "O condutor que estíver habilitado na categoria 'E' NÃO poderá dirigir:",
        alternativas: [
            "automóveis",
            "veículo motorizado com peso bruto total até 3.500 kg",
            "veículo motorizado com até 8 lugares, sem contar o do condutor",
            "motocicletas"
        ],
        correta: ""
    },
    {
        pergunta: `Em uma blitz, para comprovar que é habilitado o condutor deverá apresentar:
        <br> I. CNH válida, impressa ou digital.
        <br> II. PPD válida, impressa ou digital.
        <br> III. Registro do Veículo e CPF.
        <br>As alternativas corretas são:`,
        alternativas: ["I, II e III", "II e III", "I e II", "I e III"],
        correta: ""
    },
    {
        pergunta: "A educação para o trânsito, que está prevista no CTB, é um direito de todos e tem por finalidade:",
        alternativas: [
            "promover a reciclagem dos condutores infratores",
            "conscientizar consutores e pedestres para que haja respeito e cidadania no trânsito.",
            "possibilitar o treinamento dos candidatos à obtenção de CNH.",
            "reciclar os especialistas na área do trânsito"
        ],
        correta: ""
    },
    {
        pergunta: "Nas cidades, é proibido buzinar:",
        alternativas: [
            "entre 10 horas da noite e 6 horas da manhã", "entre 8 horas da noite e 7 horas da manhã",
            "entre 6 horas da tarde e 6 horas da manhã", "entre 6 horas da tarde e 10 horas da noite"],
        correta: ""
    },
    {
        pergunta: "Segundo o CTB, a identificação externa de um veículo é feita por meio:",
        alternativas: [
            "do número do motor, gravado obrigatoriamente nos vidros",
            "da placa traseira apenas, com caracteres iguais ao do registro",
            "da placa dianteira apenas, com caracteres iguais ao do registro",
            "das placas dianteira e traseira (ou só a traseira no caso das motos), com caracteres iguais ao do registro do veículo"
        ],
        correta: ""
    },
    {
        pergunta: `Diante das alternativas: 
        <br>I. transitar com velocidade superior à máxima em mais de 50km/h
        <br>II. Afastar-se do veículo do local doa cidente, para fugir à responsabilidade penal ou civil.
        <br>III.Conduzir veículo automotor com capacidade psicomotora alterada em razão da influência de álcool.
        <br>IV. Participar de rachas
        <br>Quais são crimes de trânsito:
        `,
        alternativas: ["I e II", "I, II, III e IV", "II e III", "II, III e IV"],
        correta: ""
    },
    {
        pergunta: "È proibido transportar em motocicletas:",
        alternativas: [
            "passageiros com capacete",
            "passageiros que estejam usando tênis",
            "crianças menores de 10 anos ou sem condições de se cuidar",
            "crianças menores de 12 anos"
        ],
        correta: ""
    },
    {
        pergunta: `Segundo o Código de Trânsito Brasileiro:
        <br>I. A educação para o trânsito é um direito de todos os cidadãos e um dever dos componentes do Sistema Nacional de
        Trânsito
        <br>II. O condutor deverá, a todo momento, ter domínio de seu veículo, dirigindo-o com atenção e cuidados indispensáveis
        à segurança do trânsito
        <br> Os veículos que se deslocam sobre trilhos terão preferência de passagem sobre os demais, respeitadas as normas de
        circulação
        <br> È correto o que consta APENAS em:`,
        alternativas: ["I, II e III", "I e II", "I e III", "II"],
        correta: ""
    },
    {
        pergunta: "A idade mínima de 21 anos é exigida aos condutores:",
        alternativas: [
            "das categorias 'B' e 'C'",
            "de transporte coletivo de passageiros e de escolares",
            "de ciclomotores",
            "de motocicletas com mais de 180 cc"
        ],
        correta: ""
    },
    {
        pergunta: "É correto afirmar que o ciclista deve:",
        alternativas: [
            "circular observndo somente as regras impostas aos pedestres, mesmo quando não está desmontado",
            "respeitar o CTB e, consequentemente, a legislação e sinalização das vias",
            "transitar em clçadas somente onde não haja movimento de pedestres",
            "trafegar em faixas exclusivas para ônibus, desde que não haja fluxo no local"
        ],
        correta: ""
    },
    {
        pergunta: "Com o veículo em circulação, um dos documentos de porte obrigatórop é:",
        alternativas: [
            "a Carteira Nacional de Habilitação (CNH), dentro da validade",
            "o Manual do Propietario entegue pelo fabricante",
            "a fotocopia do documento de habilitação acompanhado da carteira de identidade",
            "o comprovante de pagamento do Seguro Obrigatório"
        ],
        correta: ""
    },
    {
        pergunta: "",
        alternativas: ["", "", "", ""],
        correta: ""
    },
    {
        pergunta: "",
        alternativas: ["", "", "", ""],
        correta: ""
    },
];

 


function montarQuiz() {
    const form = document.getElementById("quizForm");
    questoes.forEach((q, i) => {
        let div = document.createElement("div");
        div.innerHTML = `<p>${i + 1}. ${q.pergunta}</p>`;
        q.alternativas.forEach(alt => {
            div.innerHTML += `
          <label>
            <input type="radio" name="q${i}" value="${alt}"> ${alt}
          </label><br>`;
        });
        form.appendChild(div);
    });
}

function verificar() {
    let certas = 0;
    let resultadoHTML = "<h3>Resultados:</h3>";

    questoes.forEach((q, i) => {
        let marcada = document.querySelector(`input[name="q${i}"]:checked`);
        if (marcada && marcada.value === q.correta) {
            certas++;
            resultadoHTML += `<p style="color:green">Questão ${i + 1}: Correta ✅</p>`;
        } else {
            resultadoHTML += `<p style="color:red">Questão ${i + 1}: Errada ❌ (Correta: ${q.correta})</p>`;
        }
    });

    let nota = (certas / questoes.length) * 10;
    resultadoHTML += `<p><b>Nota final:</b> ${nota.toFixed(1)}</p>`;
    document.getElementById("resultado").innerHTML = resultadoHTML;
}

montarQuiz();
  