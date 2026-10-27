import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'stone-atribuicao',
    title: 'Stone · Engenharia de Atribuição',
    tagline: 'Arquitetura de dados · Reconstrução de pipeline · Confiança no número',
    context: 'A área de growth não conseguia dizer de onde vinha cada lead. O dashboard antigo e a base nova mostravam números diferentes para a mesma pergunta, ninguém sabia qual dos dois estava certo, e as decisões de investimento eram tomadas assim mesmo. O problema não era de ferramenta, era de definição: cada fonte tinha uma regra própria, reescrita em cascata por quem veio antes.',
    hypothesis: 'Se a origem for resolvida na hora da captação, e não remontada depois por tentativa e erro, dá para sustentar duas leituras ao mesmo tempo: uma fonte exclusiva, que fecha no total, e potencializadores sobrepostos, que mostram o que ajudou a converter. Com a origem estável, produtos de ciclos diferentes passam a ser comparáveis sob a mesma régua.',
    analysis: 'Mapeei o fluxo ponta a ponta antes de desenhar qualquer coisa, e a auditoria mostrou onde o número vazava. Só 24% das capturas chegavam com parâmetro de origem, embora 73% trouxessem URL. O faturamento somava R$ 1,5 milhão de duplicação, porque a mesma venda era contada uma vez por formulário preenchido. Nas contas, 287 duplicatas (8,2%) — num caso extremo, uma única conta aparecia pendurada em 35 capturas da mesma pessoa. A marca declarada na campanha divergia do funil em 2.137 credenciamentos. E a régua antiga descartava 312 credenciamentos legítimos.',
    decision: 'Troquei a reconstrução pela parametrização na origem, via gerador de links, e organizei tudo numa matriz de fonte e potencializador. A fonte é resolvida por uma cascata de níveis que grava em cada linha como foi decidida e com qual grau de confiança: o dado informa o quanto ele mesmo é confiável. Travas de unicidade garantem que receita e conta sejam contadas uma vez por identidade. O investimento de mídia passou a ser pareado com o funil por chave composta (dia, marca, campanha e conjunto de anúncio), e a cobertura desse pareamento viaja junto de cada indicador, para que ninguém leia um CPL sem saber que fatia do gasto ele representa. Antes de cada publicação, roda um roteiro de verificação em SQL com 24 etapas encadeadas, que compara os totais camada a camada e trava a carga em vez de publicar número quebrado.',
    impact: 'Pela primeira vez a empresa enxerga a origem real de cada lead, e essa leitura hoje decide alocação de esforço e de verba. As duplicações de receita e de conta foram eliminadas, e CPL, CPA e ROAS passaram a ser divulgados com a cobertura ao lado. A leitura por potencializador expôs diferenças de até 16 vezes entre iniciativas antes tratadas como equivalentes (11,3% contra 0,7% de conversão), e a quebra por produto revelou dois perfis de aquisição distintos, um de volume e outro de ticket, que o indicador agregado escondia. A divergência residual entre as camadas ficou em 0,03%.',
    tags: ['Arquitetura de Dados', 'Atribuição & MarTech', 'BigQuery & SQL', 'Growth', 'Product Thinking']
  },
  {
    id: 'audiensee-kpis',
    title: 'AudienSee.ai · KPIs e Dicionário de Percepção',
    tagline: 'Head de Dados + Product Owner · Padronização + Personalização por cliente',
    context: 'A AudienSee mede comportamento no mundo físico com sensores de visão computacional. Cada projeto nascia com sua própria conta: um cliente chamava de engajamento o que o outro chamava de permanência, cada relatório calculava a mesma métrica de um jeito, e o cliente recebia um número sem saber como ele tinha sido formado. Sem régua comum, dois eventos da mesma marca não conversavam entre si.',
    hypothesis: 'Se cada indicador tiver uma definição única, escrita e publicada junto do relatório, o número para de ser uma caixa-preta e vira argumento. E se a régua for a mesma para todos, a personalização pode ficar onde ela realmente importa — na planta física e no objetivo de cada cliente — em vez de ficar na conta.',
    analysis: 'Revisei como cada KPI vinha sendo calculada e encontrei os pontos onde a medição inflava sozinha: atributos como gênero e faixa etária eram contados por detecção, não por pessoa, então quem ficava mais tempo pesava mais no perfil do público; a mesma pessoa atravessando dois sensores da mesma área virava dois visitantes; e não havia corte mínimo de qualidade de imagem, então leitura ruim entrava na média junto com leitura boa. Também cruzei os dados com contagem física feita em campo, para saber se o sensor estava contando o mundo ou contando a si mesmo.',
    decision: 'Padronizei um conjunto de KPIs proprietárias — visitantes únicos, tempo de visita, atenção absoluta, engajamento de ciclo completo, ROO (permanência qualificada) e ROE (engajamento emocional) — sobre o MGP, o Modelo Geral da Percepção, que lê o porquê do comportamento e não só a contagem de corpos. Fixei perfil por pessoa (moda das detecções ao longo da visita), adotei corte de qualidade de imagem com quatro níveis auditáveis, e deduplicação entre sensores da mesma área. Cada entrega passou a sair com um dicionário: a regra de cálculo de cada indicador, a fonte e a janela usadas. A personalização ficou no mapeamento de sensor para área, desenhado sobre a planta de cada cliente, e na curadoria de quais KPIs lideram o relatório conforme o objetivo da ativação.',
    impact: 'A régua única virou o padrão da casa e sustentou entregas para EMBRAER no Farnborough Airshow, ABB na FENASUCRO e TIM no Rock in Rio, com relatórios em português e inglês, dashboards diários e deck executivo. Os números passaram a bater com a contagem observada em campo, o que mudou a conversa com o cliente: em vez de discutir se o dado estava certo, passou-se a discutir o que fazer com ele — rodízio de equipe no estande, ajuste de fluxo de fila, redesenho de ambientação. E, por serem comparáveis entre si, as edições de um mesmo cliente passaram a formar série histórica.',
    tags: ['Product Owner', 'KPIs & Métricas', 'Visão Computacional', 'Governança de Dados', 'Psicologia Aplicada']
  },
  {
    id: 'campus-party',
    title: 'Campus Party · Brasília x Goiás',
    tagline: 'Análise comparativa multi-edição · Da métrica à decisão de curadoria',
    context: 'Duas edições do mesmo evento em praças muito diferentes: uma de grande escala, com perfil nacional e institucional, outra regional, com público jovem-adulto. A organização precisava entender se a edição menor estava entregando menos ou apenas entregando diferente — e isso não se responde comparando número de visitantes.',
    hypothesis: 'Comparar edições por volume premia sempre a maior. Se a comparação for feita por densidade de engajamento e por qualidade da experiência, área por área, aparece o que de fato distingue uma praça da outra e o que é replicável de uma para a outra.',
    analysis: 'Medi quatro áreas nas duas edições — Estande do Governo, Arkave, Arena Drone e Palco Principal — olhando permanência, recorrência de interação, reação do público e os blocos de percepção do nosso modelo de leitura. O retrato foi assimétrico de um jeito útil: a praça maior concentrava os picos emocionais e simbólicos, sobretudo no palco, mas acumulava fricções sensoriais no estande, com ruído, fluxo apertado e espera longa. A praça regional entregava engajamento estável e permanência consistente, porém com bloco emocional mais baixo: experiência funcional, pouco simbólica. A curva diária se repetia nas duas, com concentração no meio do fim de semana e queda no último dia.',
    decision: 'Em vez de um ranking entre praças, entreguei um comparativo por área com recomendação acionável em cada uma: replicar na praça regional o modelo de microexperiências da maior, adotando número de interações por visitante como KPI; redesenhar fluxo e ambientação para reduzir sobrecarga sensorial nas duas edições; posicionar a Arkave como carro-chefe de engajamento imersivo; conectar as missões da Arena Drone a temas da realidade local; e usar as sessões de melhor percepção como referência de curadoria para o palco. Tratei os dias de pico como janelas de conversão máxima e os dias de menor fluxo como espaço de nicho, mentoria e continuidade.',
    impact: 'O comparativo transformou percepção em critério de gestão. A praça maior entregava os picos, mas perdia parte do público antes do fim da experiência; a regional retinha de forma mais homogênea, com cerca de metade do potencial emocional ainda inexplorado — e foi exatamente aí que as recomendações foram concentradas. Indicadores de percepção e reação viraram KPI padrão para avaliar parceiros e ativações, com playbook de design de experiência por área e base definida para dashboards comparativos entre edições futuras. A leitura deixou de ser "uma praça é maior" e passou a ser onde cada uma ganha, o que custa caro em experiência e o que vale repetir.',
    tags: ['Análise Comparativa', 'Percepção & Comportamento', 'Experiência de Público', 'Storytelling de Dados']
  },
  {
    id: 'banco-dados-autoras',
    title: 'Banco de Dados para Autoras Independentes',
    tagline: 'Visão de produto + Estruturação + Impacto Social',
    context: 'Autoras independentes enfrentavam dificuldades para catalogar obras e encontrar parcerias, resultando em baixa visibilidade e fragmentação do mercado.',
    hypothesis: 'Acreditava-se que uma estrutura centralizada e normalizada de dados permitiria não apenas a organização, mas a descoberta ativa de talentos e o fomento de uma comunidade econômica.',
    analysis: 'Realizei pesquisas qualitativas com 20 autoras e analisei a estrutura de metadados de grandes plataformas (Amazon, Goodreads) para identificar lacunas de representação.',
    decision: 'Optei por uma arquitetura SQL robusta com foco em relacionamentos complexos (gêneros, influências, colaborações) em vez de uma lista simples, priorizando a escalabilidade da rede.',
    impact: 'Estruturação completa do modelo de dados que serviu de base para o MVP, reduzindo o tempo de busca por informações em 60% durante os testes iniciais.',
    tags: ['SQL', 'Product Vision', 'Social Impact']
  },
  {
    id: 'pipoca-agil',
    title: 'Projeto Web Fullstack (Pipoca Ágil)',
    tagline: 'Colaboração + Priorização + Visão Técnica',
    context: 'Necessidade de uma plataforma colaborativa para gerenciar fluxos de trabalho ágeis em equipes multidisciplinares.',
    hypothesis: 'A integração direta entre o feedback do usuário e o roadmap de desenvolvimento reduziria o desperdício de features não utilizadas.',
    analysis: 'Mapeamento de jornada do usuário e identificação de gargalos na comunicação entre design e engenharia.',
    decision: 'Priorizei o desenvolvimento de um dashboard centralizado de tarefas com foco em transparência radical, focado na usabilidade, integrando os steps dos squads de design e desenvolvimento',
    impact: 'Melhoria na velocidade de entrega (velocity) da equipe em 25% e maior alinhamento estratégico entre os stakeholders.',
    tags: ['Fullstack', 'Agile', 'Prioritization']
  }
];

export const SKILLS: Skill[] = [
  {
    name: 'SQL',
    impact: 'Extração e análise profunda para tomada de decisão baseada em evidências.',
    icon: 'Database'
  },
  {
    name: 'Power BI',
    impact: 'Visualização estratégica de dados para alinhar stakeholders e KPIs.',
    icon: 'BarChart3'
  },
  {
    name: 'Python',
    impact: 'Prototipagem rápida, automação de processos e análise exploratória.',
    icon: 'Code2'
  },
  {
    name: 'UX Research',
    impact: 'Validação de hipóteses através de métodos qualitativos e quantitativos.',
    icon: 'Search'
  },
  {
    name: 'Psicologia',
    impact: 'Leitura comportamental para entender o "porquê" por trás dos dados.',
    icon: 'Brain'
  }
];