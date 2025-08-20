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
        pergunta: "As subdivisões da pista de rolamento, com ou sem separações demarcadas, cuja largura permite a circulação de um veículo com segurança, são chamadas: ",
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
        pergunta: "Solicitar sinalização, fiscalização e implantação de equipamentos de segurança, por escrito, aos órgãos ou entidades do Sistema Nacional de Trânsito (SNT), bem como sugerir alterações em normas, legislação e outros assuntos pertinentes ao Código de Trânsito Brasileiro (CTB), é um direito:",
        alternativas: [
            "exclusivo de condutores habilitados na categoria D.",
            "apenas dos advogados.",
            "exclusivo de motoristas profissionais.",
            "de todo cidadão ou entidade civil."
        ],
        correta: "de todo cidadão ou entidade civil."
    },
    {
        pergunta: "Como é chamado um veículo automotor de duas ou três rodas, provido de motor de combustão interna, cuja cilindrada não exceda a 50 cm³, ou de motor de propulsão elétrica com potência máxima de 4 kW e que alcança, no máximo, a velocidade de 50 km/h?",
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
        pergunta: "Seu amigo está voltando de uma festa e é parado em uma blitz. Como bebeu um pouco ele se recusa a fazer o teste do bafômetro. O que pode acontecer?",
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
            "pelo trânsito livre, sem interseções em nível com acessos especiais, sem acessibilidade direta aos lotes lindeiros e sem travessia de pedestres em nível",
            "por faixas de acesso às àreas de estacionamento"
        ],
        correta: "pelo trânsito livre, sem interseções em nível com acessos especiais, sem acessibilidade direta aos lotes lindeiros e sem travessia de pedestres em nível"
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
        pergunta: "Conforme o CTB, o candidato à primeira habilitação deverá submeter-se a exames realizados pelo órgão executivo de trânsito na seguinte ordem:",
        alternativas: [
            "prova teórica, aptidão física e mental, avaliação psicológica e prova prática de direção",
            "aptidão física e mental, avaliação psicológica, prova teórica e prova prática de direção veicular",
            "aptidão física e mental, avaliação psicológica, prova prática e prova teórica",
            "prova teórica, avaliação psicológica e prova prática"
        ],
        correta: "aptidão física e mental, avaliação psicológica, prova prática e prova teórica"
    },
    {
        pergunta: `As passarelas são construídas em locais de difícil acesso para os pedestres, como em rodovias. O correto é o pedestre:
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
  