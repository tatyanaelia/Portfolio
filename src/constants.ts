import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'habilita-plus',
    title: 'Habilita+',
    tagline: 'Fundadora & PM | Marketplace de Serviços Educacionais',
    context: 'Com as atualizações na regulamentação da CNH no Brasil, candidatos enfrentavam insegurança para encontrar instrutores licenciados com transparência. O processo tornava-se fonte de ansiedade, especialmente para quem tem medo de dirigir ou dificuldades específicas.',
    hypothesis: 'Uma plataforma centralizada, conectada a dados oficiais e estruturada como marketplace, permitiria unir candidatos e instrutores credenciados de forma segura e transparente, reduzindo fricção e aumentando a confiança.',
    analysis: 'Levantamento da nova regulamentação da CNH e análise de comportamento em plataformas informais. Identifiquei ausência de validação oficial, falta de critérios de comparação e forte componente emocional na decisão. A dor era psicológica e reputacional.',
    decision: 'Estruturei como um e-commerce de serviços com integração via API para validação de licenciamento, sistema de avaliações e tags de especialização. Priorizei segurança regulatória, transparência e experiência centrada na dor do usuário.',
    impact: 'Estruturação completa do modelo de marketplace com lógica de validação regulatória, reduzindo a incerteza em testes conceituais e aumentando em 70% a intenção de contratação comparado à busca informal.',
    tags: ['Marketplace', 'Product Management', 'RegTech', 'UX Strategy']
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
