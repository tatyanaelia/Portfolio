// src/data/dashboards.ts
// ---------------------------------------------------------------------------
// Painéis reais embutidos no portfólio.
//
// O arquivo apontado em `src` é o HTML original da entrega — mesma estrutura,
// mesmo layout, mesma navegação — com os dados anonimizados:
// · todos os números foram embaralhados;
// · nenhum cliente, marca, ponto de medição ou data aparece identificado;
// · os textos de diagnóstico foram reescritos em forma genérica.
// Ele vive em /public, então é servido como arquivo estático pelo Vite.
// ---------------------------------------------------------------------------

export interface DashboardEmbed {
  id: string;
  /** id do projeto em constants.ts ao qual este painel pertence */
  projectId: string;
  title: string;
  subtitle: string;
  /** caminho dentro de /public, sem barra inicial */
  file: string;
  /** altura do quadro no desktop, em px */
  height: number;
}

export const DASHBOARDS: DashboardEmbed[] = [
  {
    id: 'audiensee-praca',
    projectId: 'audiensee-kpis',
    title: 'Painel tecnoperceptivo de praça de alimentação',
    subtitle:
      'Dashboard HTML autocontido · sete dias de medição, oito pontos de sensor, leitura diária e consolidada',
    file: 'painel-audiensee-demo.html',
    height: 980
  }
];