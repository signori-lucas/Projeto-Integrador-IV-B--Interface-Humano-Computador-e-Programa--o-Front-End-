// Dados mockados do portal (simulam o retorno de uma API)

const noticias = [
  {
    id: 1,
    titulo: "Nova política de trabalho híbrido entra em vigor em novembro",
    resumo: "A partir de 1º de novembro, todas as áreas poderão adotar o modelo de 3 dias presenciais e 2 remotos.",
    texto: "Após a pesquisa de clima realizada no último trimestre, a diretoria aprovou a nova política de trabalho híbrido. A partir de 1º de novembro, as equipes poderão combinar com seus gestores 3 dias presenciais e 2 dias remotos por semana. O documento completo da política está disponível com o RH, e as dúvidas podem ser enviadas pelo canal interno de atendimento.",
    categoria: "Políticas",
    autor: "Recursos Humanos",
    data: "2026-10-16",
    destaque: true,
    imagem: "https://picsum.photos/seed/conecta-hibrido/800/450",
    imagemAlt: "Ambiente de escritório"
  },
  {
    id: 2,
    titulo: "Resultados do 3º trimestre superam as metas",
    resumo: "Crescimento de 12% na receita e expansão para duas novas regiões marcam o período.",
    texto: "O terceiro trimestre de 2026 fechou com crescimento de 12% na receita em relação ao mesmo período do ano anterior. Além disso, iniciamos operações em duas novas regiões. A diretoria agradece o empenho de todos os times e convida para a apresentação de resultados no auditório principal na próxima sexta-feira.",
    categoria: "Comunicados",
    autor: "Diretoria",
    data: "2026-10-14",
    imagem: "https://picsum.photos/seed/conecta-resultados/800/450",
    imagemAlt: "Apresentação de resultados"
  },
  {
    id: 3,
    titulo: "Campanha Outubro Rosa: participe das ações",
    resumo: "Palestras, caminhada e atendimento de saúde gratuito ao longo do mês.",
    texto: "Durante todo o mês de outubro, a empresa promove ações de conscientização sobre a prevenção do câncer de mama. Teremos palestra com especialistas no dia 22, caminhada solidária no dia 26 e atendimento de saúde gratuito no ambulatório. Use rosa às sextas-feiras e participe!",
    categoria: "Cultura",
    autor: "Comitê de Bem-Estar",
    data: "2026-10-10",
    imagem: "https://picsum.photos/seed/conecta-outubro-rosa/800/450",
    imagemAlt: "Campanha Outubro Rosa"
  },
  {
    id: 4,
    titulo: "Inscrições abertas para o programa de mentoria 2027",
    resumo: "Colaboradores podem se inscrever como mentores ou mentorados até 31 de outubro.",
    texto: "O programa de mentoria conecta profissionais experientes a colegas que desejam acelerar seu desenvolvimento. As inscrições para a edição 2027 ficam abertas até 31 de outubro pelo portal de RH. Os pares serão formados em novembro e os encontros começam em fevereiro.",
    categoria: "Desenvolvimento",
    autor: "Universidade Corporativa",
    data: "2026-10-08"
  },
  {
    id: 5,
    titulo: "Atualização do Código de Conduta",
    resumo: "Novas seções sobre uso de inteligência artificial e proteção de dados foram incluídas.",
    texto: "O Código de Conduta foi revisado e agora inclui orientações sobre o uso responsável de ferramentas de inteligência artificial e o tratamento de dados pessoais conforme a LGPD. Todos os colaboradores devem ler o documento e confirmar a ciência até 15 de novembro.",
    categoria: "Políticas",
    autor: "Compliance",
    data: "2026-10-03"
  },
  {
    id: 6,
    titulo: "Festa de fim de ano: reserve a data!",
    resumo: "A confraternização será no dia 12 de dezembro. Mais detalhes em breve.",
    texto: "A tradicional confraternização de fim de ano acontecerá no dia 12 de dezembro, a partir das 19h. Local, atrações e confirmação de presença serão divulgados nas próximas semanas. Reserve a data!",
    categoria: "Cultura",
    autor: "Comunicação Interna",
    data: "2026-09-29",
    imagem: "https://picsum.photos/seed/conecta-festa/800/450",
    imagemAlt: "Confraternização de fim de ano"
  }
];

// mes: 1 a 12
const aniversariantes = [
  { nome: "Mariana Costa",    setor: "Marketing",        dia: 18, mes: 10 },
  { nome: "Rafael Oliveira",  setor: "Tecnologia",       dia: 20, mes: 10 },
  { nome: "Juliana Martins",  setor: "Financeiro",       dia: 23, mes: 10 },
  { nome: "Pedro Henrique",   setor: "Comercial",        dia: 27, mes: 10 },
  { nome: "Camila Souza",     setor: "Recursos Humanos", dia: 2,  mes: 11 },
  { nome: "Lucas Ferreira",   setor: "Tecnologia",       dia: 5,  mes: 11 },
  { nome: "Beatriz Almeida",  setor: "Jurídico",         dia: 11, mes: 11 },
  { nome: "Gabriel Rocha",    setor: "Operações",        dia: 3,  mes: 9  },
  { nome: "Fernanda Lima",    setor: "Atendimento",      dia: 15, mes: 1  }
];
