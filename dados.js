// =============================================================================
// dados.js
// -----------------------------------------------------------------------------
// Este é o arquivo "central" de dados do projeto Método BPO.
// Ele faz 3 coisas:
//   1) Guarda a configuração do Firebase (a mesma que você já tinha).
//   2) Define o conteúdo PADRÃO da página (usado como fallback caso o
//      Firestore ainda não tenha nada salvo, ou caso a conexão falhe).
//   3) Exporta funções prontas para LER e SALVAR o conteúdo no Firestore.
//
// Tanto o site (site.html) quanto o painel de controle (painel-controle.html)
// importam este arquivo. Por isso ele deve ficar no MESMO repositório/pasta
// que os dois, com esse nome exato: dados.js
//
//   import { ... } from './dados.js';
//
// Se for hospedar em domínios diferentes, ajuste o caminho do import nos
// outros dois arquivos.
// =============================================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// -----------------------------------------------------------------------------
// 1) CONFIGURAÇÃO DO FIREBASE (a mesma que você enviou)
// -----------------------------------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyC_BiV0IZRFhTBKH1-ZbuG0PxEceIME5NU",
  authDomain: "marcusviniciuscliente.firebaseapp.com",
  projectId: "marcusviniciuscliente",
  storageBucket: "marcusviniciuscliente.firebasestorage.app",
  messagingSenderId: "254045911066",
  appId: "1:254045911066:web:65a69dde9fc5b0985e79a3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Onde o conteúdo fica guardado dentro do Firestore:
// coleção "site", documento "conteudo"
const COLECAO = "site";
const DOCUMENTO = "conteudo";
const refConteudo = doc(db, COLECAO, DOCUMENTO);

// -----------------------------------------------------------------------------
// 2) CONTEÚDO PADRÃO (fallback)
//    É exatamente o texto que já estava no site. Se o Firestore ainda
//    estiver vazio (primeiro uso), o site mostra isso e o painel de
//    controle usa isso como ponto de partida para você editar.
// -----------------------------------------------------------------------------
const conteudoPadrao = {
  hero: {
    badge: "MÉTODO INTENSIVO • VAGAS LIMITADAS",
    tituloPre: "APRENDA A OPERAR EM",
    tituloDestaque: "7 DIAS",
    subtitulo: "Mesmo que você esteja começando do zero absoluto.",
    descricao:
      "Aprenda um método simples, direto e prático para dar seus primeiros passos nas operações de trade sem perder tempo com teorias desnecessárias e complicadas, agora com suporte individual no WhatsApp e mentoria por videoconferência direta com o professor!",
    selos: ["✔ Método Intensivo", "✔ Acesso Imediato", "✔ Para Iniciantes", "✔ Suporte no WhatsApp"],
    botaoTexto: "QUERO COMEÇAR AGORA",
  },

  stats: [
    { valor: "4.892+", label: "Alunos Formados" },
    { valor: "4.9/5", label: "Avaliação Média" },
    { valor: "98,4%", label: "Índice de Satisfação" },
    { valor: "7 Dias", label: "Garantia Incondicional" },
  ],

  benefits: {
    tag: "Grade de Aprendizado",
    titulo: "O QUE VOCÊ VAI APRENDER",
    descricao:
      "Uma trilha lógica de estudos estruturada em módulos curtos e diretos para transformar você em um operador consciente, com o passo a passo completo.",
    cards: [
      { titulo: "Introdução ao Mercado", descricao: "Entenda os fundamentos do trade e como dar seus primeiros passos." },
      { titulo: "Leitura de Gráfico", descricao: "Aprenda a analisar velas (candlesticks), suportes, resistências e as tendências de preços com clareza visual e sem complicação." },
      { titulo: "Setup para Iniciantes", descricao: "Domine a estratégia matemática exata do Método BPO, projetada para quem tem pouco tempo e precisa de precisão nas entradas." },
      { titulo: "Gestão de Risco", descricao: "O pilar mais importante. Aprenda a calcular o tamanho dos seus lotes e como proteger seu capital para nunca expor sua banca." },
      { titulo: "Controle Emocional", descricao: "Desenvolva a psicologia operacional dos traders de sucesso para evitar decisões precipitadas, ansiedade ou ganância." },
      { titulo: "Execução de Operações", descricao: "O passo a passo do clique a clique. Como abrir ordens de compra e venda, posicionar Stop Loss e definir metas de ganho." },
      { titulo: "Disciplina de Trader", descricao: "Como criar uma rotina focada, registrar seu diário de operações e mensurar sua evolução dia após dia nas suas operações." },
      { titulo: "Primeiros Resultados", descricao: "Saia do simulador para o mercado real com segurança, aplicando o checklist operacional do BPO para os seus primeiros trades." },
    ],
  },

  perfilAluno: {
    tag: "Perfil do Aluno Ideal",
    titulo: "ESSE CURSO É PARA VOCÊ QUE:",
    descricao:
      "Se você se identifica com uma ou mais das situações abaixo, o Método BPO foi feito sob medida para acelerar o seu aprendizado de forma organizada.",
    itens: [
      "Nunca operou antes",
      "Já tentou aprender sozinho e se frustrou",
      "Está cansado de conteúdos confusos e teóricos",
      "Quer um método objetivo e direto ao ponto",
      "Tem pouco tempo disponível por dia",
      "Deseja aprender de forma prática e aplicada",
    ],
  },

  incluso: {
    tag: "Acesso Completo",
    titulo: "O QUE ESTÁ INCLUSO NO TREINAMENTO",
    descricao:
      "Você receberá um pacote completo com absolutamente tudo o que precisa para aprender, treinar e colher os primeiros resultados sem precisar adquirir ferramentas complementares.",
    itens: [
      { texto: "100% em Vídeo Aulas", destaque: false },
      { texto: "Linguagem Simples e Objetiva", destaque: false },
      { texto: "Método Super Intensivo", destaque: false },
      { texto: "Conteúdo Selecionado", destaque: false },
      { texto: "Estratégia para Iniciantes", destaque: false },
      { texto: "Passo a Passo Estruturado", destaque: false },
      { texto: "Gestão de Risco e Disciplina", destaque: false },
      { texto: "Do Zero ao Primeiro Trade", destaque: true },
      { texto: "Suporte VIP Individual no WhatsApp para Alunos", destaque: true },
      { texto: "Acesso Imediato", destaque: false },
      { texto: "Aprenda no Seu Ritmo", destaque: false },
    ],
  },

  differentials: {
    tag: "Nossos Diferenciais",
    titulo: "POR QUE ESCOLHER O BPO",
    descricao:
      "Nossa metodologia foi desenhada para superar as barreiras clássicas que fazem 90% dos traders iniciantes desistirem nas primeiras semanas.",
    cards: [
      { titulo: "Método direto ao ponto", descricao: "Sem enrolação teórica desnecessária. Vamos direto às técnicas operacionais." },
      { titulo: "Foco em iniciantes", descricao: "Criado para quem está começando do zero absoluto e nunca abriu um gráfico." },
      { titulo: "Acesso imediato", descricao: "Compre agora e comece a estudar em menos de 2 minutos por e-mail." },
      { titulo: "Gestão de risco", descricao: "Aprenda as regras fundamentais de sobrevivência para proteger seu patrimônio." },
      { titulo: "Linguagem simples", descricao: "Sem jargões técnicos incompreensíveis. Explicações transparentes e didáticas." },
      { titulo: "Resultado mais rápido", descricao: "Estruturado para você aprender e fazer seus primeiros simulados em 7 dias." },
    ],
  },

  warranty: {
    titulo: "VOCÊ NÃO TEM RISCO",
    texto:
      "Você terá acesso imediato ao conteúdo e poderá iniciar seus estudos hoje mesmo. Estude as aulas, aplique o método e faça seus primeiros simulados. Se em até <strong>7 dias</strong> você achar que o treinamento não é para você, basta nos enviar um e-mail para receber 100% do seu dinheiro de volta. Sem burocracias, de forma direta e transparente.",
  },

  pricing: {
    tag: "Condição Única",
    titulo: "Sua Oportunidade de Começar Hoje",
    descricao: "Acesso imediato e completo a toda a estrutura do Método BPO por um valor absurdamente promocional.",
    desconto: "70% OFF",
    precoDe: "De R$ 497,00",
    precoPor: "R$ 147,00",
    parcelas: "12x de R$ 14,67",
    linkPagamento: "https://pay.hotmart.com/W106188599O",
    botaoTexto: "QUERO INSCREVER-ME PELA HOTMART",
  },

  testimonials: [
    {
      iniciais: "FH",
      nome: "Flávio Heleno",
      mensagens: [
        { tipo: "recebida", texto: "Muito bom o curso. Estudar sozinho é perda de tempo, eu estava preparado e não sabia. O método BPO me destravou.", hora: "15:13" },
        { tipo: "recebida", texto: "O método BPO revolucionou nosso dia a dia.", hora: "15:15" },
        { tipo: "enviada", texto: "Top, feliz em saber...", hora: "15:17" },
      ],
    },
    {
      iniciais: "JE",
      nome: "José Emilio Barros",
      mensagens: [
        { tipo: "recebida", texto: "Aulas bem estruturadas, professor com ótima didática, conteúdo relevante e material de boa qualidade disponibilizado para estudo.", hora: "13:05" },
        { tipo: "enviada", texto: "Que bom que gostou amigo fico feliz.", hora: "13:07" },
      ],
    },
    {
      iniciais: "RM",
      nome: "Renata Machado",
      mensagens: [
        { tipo: "recebida", texto: "Minha experiência está sendo ótima, tem me auxiliado bastante no dia a dia com o treinamento que adquiri. Nós que somos dessa área todos os dias aparecem novidades eles são bem atualizados e com a comunicação assertiva e clara para retirada de dúvidas.", hora: "10:00" },
        { tipo: "enviada", texto: "Top, que obrigado pelo feedback.", hora: "10:02" },
      ],
    },
    {
      iniciais: "YS",
      nome: "Yanca Souza",
      mensagens: [
        { tipo: "recebida", texto: "Gostaria de expressar minha profunda gratidão ao curso e especialmente à equipe de suporte, que tem sido simplesmente maravilhosa em toda a minha jornada. Sempre atenciosos, rápidos nas respostas e extremamente competentes, vocês fazem toda a diferença na experiência de aprendizado.", hora: "09:08" },
        { tipo: "enviada", texto: "Fiquei até sem palavras...", hora: "09:10" },
      ],
    },
  ],

  faq: [
    { pergunta: "Preciso ter experiência?", resposta: "Não! O Método BPO foi desenvolvido especificamente para iniciantes do zero absoluto. Você aprenderá desde como funciona um gráfico até como realizar suas primeiras operações." },
    { pergunta: "Quanto tempo tenho acesso?", resposta: "O seu acesso ao curso é imediato e segue as diretrizes padrão da plataforma oficial após a confirmação do pagamento, permitindo que você assista e revise as aulas sempre que quiser." },
    { pergunta: "Recebo suporte?", resposta: "Sim! Além do suporte completo na área de membros, você terá acesso ao nosso Suporte VIP Individual diretamente no WhatsApp para tirar dúvidas em tempo real com quem entende do mercado!" },
    { pergunta: "Em quanto tempo vou aprender?", resposta: "O conteúdo é estruturado em um formato intensivo pensado para que, dedicando cerca de 30 a 60 minutos por dia, você consiga assimilar o método e operar em contas de simulação em até 7 dias." },
  ],
};

// -----------------------------------------------------------------------------
// 3) FUNÇÕES DE LEITURA E ESCRITA
// -----------------------------------------------------------------------------

/** Busca o conteúdo salvo uma única vez (não fica "escutando" mudanças). */
async function buscarConteudo() {
  try {
    const snap = await getDoc(refConteudo);
    return snap.exists() ? snap.data() : conteudoPadrao;
  } catch (erro) {
    console.error("[dados.js] Erro ao buscar conteúdo, usando padrão:", erro);
    return conteudoPadrao;
  }
}

/**
 * Fica "escutando" o documento no Firestore em tempo real.
 * Toda vez que o conteúdo mudar (por exemplo, quando o cliente salva algo
 * no painel de controle), a função `callback` é chamada de novo com os
 * dados atualizados. É isso que faz o site atualizar sozinho, sem F5.
 * Retorna uma função para cancelar a escuta, se precisar.
 */
function ouvirConteudo(callback) {
  return onSnapshot(
    refConteudo,
    (snap) => {
      callback(snap.exists() ? snap.data() : conteudoPadrao);
    },
    (erro) => {
      console.error("[dados.js] Erro ao escutar conteúdo, usando padrão:", erro);
      callback(conteudoPadrao);
    }
  );
}

/** Salva (sobrescreve) o conteúdo inteiro no Firestore. Usado pelo painel de controle. */
async function salvarConteudo(dados) {
  await setDoc(refConteudo, dados);
}

export { db, refConteudo, conteudoPadrao, buscarConteudo, ouvirConteudo, salvarConteudo };
