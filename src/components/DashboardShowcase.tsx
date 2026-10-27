// src/components/DashboardShowcase.tsx
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { DASHBOARDS } from '../data/dashboards';

/**
 * Embute o painel real (HTML estático em /public) dentro do case do projeto.
 * O iframe preserva o layout, o CSS e a interatividade originais do dashboard.
 */
const DashboardShowcase: React.FC<{ projectId: string }> = ({ projectId }) => {
  const list = DASHBOARDS.filter(d => d.projectId === projectId);
  const [sel, setSel] = useState(0);
  if (list.length === 0) return null;

  const dash = list[sel];
  const src = `${import.meta.env.BASE_URL}${dash.file}`;

  return (
    <section className="mt-10 mb-4">
      <div className="flex items-baseline justify-between flex-wrap gap-3 mb-4">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-400">
            O painel que entreguei
          </h3>
          <p className="text-sm text-zinc-500 mt-1">{dash.subtitle}</p>
        </div>

        <div className="flex items-center gap-2">
          {list.length > 1 &&
            list.map((d, i) => (
              <button
                key={d.id}
                onClick={() => setSel(i)}
                className={`px-4 py-1.5 rounded-full text-xs border transition-colors ${
                  i === sel
                    ? 'bg-zinc-900 text-white border-zinc-900'
                    : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400'
                }`}
              >
                {d.title.split('·')[0].trim()}
              </button>
            ))}
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400 transition-colors"
          >
            Abrir em tela cheia <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="border border-zinc-200 bg-white overflow-hidden">
        <iframe
          key={dash.id}
          src={src}
          title={dash.title}
          loading="lazy"
          className="w-full block border-0"
          style={{ height: dash.height }}
        />
      </div>

      <p className="mt-3 text-[11.5px] leading-relaxed text-zinc-400">
        Este é o painel original da entrega — mesma estrutura, mesmo layout e mesma navegação por
        abas, filtros e dias. Os dados foram anonimizados para o portfólio: todos os números estão
        embaralhados e nenhum cliente, marca, ponto de medição ou data aparece identificado. Nenhum
        dado sensível dos clientes originais é compartilhado.
      </p>
    </section>
  );
};

export default DashboardShowcase;