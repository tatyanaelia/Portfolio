import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'habilita-plus',
    title: 'Stone',
    tagline: 'Analista de planejamento',
    context: 'Uma nova área em growth de geração de demanda precisa estruturar a padronização de como capta os dados até uma mensuração que balize diferentes produtos para avaliar performance e retorno.',
    hypothesis: 'Se a classificação da origem for resolvida na captação, e não reconstruída depois, é possível sustentar dois eixos de leitura: uma fonte exclusiva, que fecha no total, e potencializadores sobrepostos, que mostram o que ajudou a converter. Com a origem estável, produtos de ciclos distintos passam a ser comparáveis sob a mesma régua.',
    analysis: 'Mapeei o fluxo ponta a ponta antes de desenhar o modelo. A maior parte das capturas não trazia parâmetro de origem, a marca declarada na campanha divergia do que o funil registrava, e a contagem estava no grão do formulário, não da pessoa. As fontes também se cruzavam na prática: um creator impulsionado não é mídia paga. O problema não era de ferramenta, era de definição.',
    decision: 'Estruturei uma matriz de fonte e potencializador com parametrização na origem, via gerador de links. A fonte é resolvida por uma cascata de níveis que grava em cada linha o modo e o grau de confiança, o dado informa o quanto ele mesmo é confiável. Travas de unicidade garantem que receita e conta sejam contadas uma vez por identidade, e as regras legadas ficam restritas à correção do histórico. Priorizei pipeline auditável.',
    impact: 'Transparência inédita sobre a origem real de cada lead por canal e fonte, hoje usada para decidir alocação de esforço e investimento. A leitura por potencializador expôs diferenças de ordem de grandeza entre iniciativas antes tratadas como equivalentes, e a quebra por produto revelou perfis de aquisição distintos, um de volume, outro de ticket, que o indicador agregado escondia.',
    tags: ['Arquitetura de Dados', 'Atribuição & MarTech', 'Business Intelligence', 'Growth', 'Product Thinking']
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
    id: 'audiensee-mgp',
    title: 'Audiensee / MGP',
    tagline: 'Modelo Conceitual + Métrica Proprietária + Percepção Aplicada',
    context: 'A medição de audiência tradicional falha em capturar a profundidade da percepção e o engajamento real em nichos específicos.',
    hypothesis: 'A partir do algoritmo proprietário MGP, para medir não apenas dados independentes, mas cruzados com sentido para interpretar a percepção, agora é necessário automatizar o processo e refinar a IA.',
    analysis: 'Estudo de modelos psicométricos cruzados com métricas de engajamento, abordando a dor de um mercado que não consegue mensurar o mundo físico com precisão.',
    decision: 'Trabalhei no modelo MGP (Modelo Geral da Percepção) com objetivo de entender o PORQUÊ do comportamento do público e suas preferências, para entregar dados de valor e não apenas contagem de corpos presentes em um evento.',
    impact: 'Implementação de um novo framework de análise que alterou a estratégia de conteúdo da marca, focando em retenção de alta qualidade.',
    tags: ['Data Analytics', 'Psychology', 'Product Strategy']
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
