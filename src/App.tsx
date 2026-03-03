/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  BarChart3, 
  Code2, 
  Search, 
  Brain, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  FileText,
  ChevronDown,
  ExternalLink,
  Target,
  Zap,
  Layers,
  TrendingUp
} from 'lucide-react';
import { PROJECTS, SKILLS } from './constants';

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">{children}</h2>
    {subtitle && <p className="text-zinc-500 max-w-2xl">{subtitle}</p>}
    <div className="h-1 w-20 bg-zinc-900 mt-6" />
  </div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tighter">TATYANA ELIA</span>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            <button onClick={() => scrollTo('sobre')} className="hover:text-zinc-500 transition-colors">Sobre</button>
            <button onClick={() => scrollTo('projetos')} className="hover:text-zinc-500 transition-colors">Projetos</button>
            <button onClick={() => scrollTo('metodologia')} className="hover:text-zinc-500 transition-colors">Metodologia</button>
            <button onClick={() => scrollTo('contato')} className="hover:text-zinc-500 transition-colors">Contato</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="max-w-4xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 bg-zinc-900 text-white text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
              Product Thinker
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
              Psicologia + Dados + <br />
              UX + Tecnologia
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 mb-10 max-w-2xl leading-relaxed">
              Transformo comportamento humano e dados em decisões de produto. Especialista em percepção, análise e construção de soluções centradas no usuário.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollTo('projetos')}
                className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-none hover:bg-zinc-800 transition-all flex items-center gap-2 group no-print"
              >
                Ver Projetos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollTo('contato')}
                className="px-8 py-4 border-2 border-zinc-900 text-zinc-900 font-bold rounded-none hover:bg-zinc-900 hover:text-white transition-all no-print"
              >
                Falar Comigo
              </button>
              <button 
                type="button"
                onClick={() => window.print()}
                className="px-8 py-4 text-zinc-500 font-bold hover:text-zinc-900 transition-all flex items-center gap-2 cursor-pointer no-print relative z-20"
              >
                <FileText className="w-4 h-4" /> Baixar CV (PDF)
              </button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollTo('sobre')}
        >
          <ChevronDown className="w-6 h-6 text-zinc-400" />
        </motion.div>

        {/* Background Accents */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-zinc-200 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-zinc-200 rounded-full blur-3xl opacity-50 -z-10" />
      </section>

      {/* About Section (Product Lens) */}
      <section id="sobre" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-columns-2 gap-16 items-start">
            <div>
              <SectionTitle subtitle="Como eu penso e resolvo problemas de produto.">
                Lógica de Produto
              </SectionTitle>
              <div className="space-y-8">
                <div className="p-8 bg-zinc-50 border-l-4 border-zinc-900">
                  <h3 className="text-xl font-bold mb-2">O Problema que Resolvo</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Produtos falham quando ignoram comportamento, dados ou contexto estratégico. Minha atuação foca em eliminar esse gap, garantindo que cada decisão técnica tenha um propósito humano e comercial.
                  </p>
                </div>
                <p className="text-lg text-zinc-700 leading-relaxed">
                  Sou a intersecção entre <strong>Product Discovery</strong> e <strong>Product Delivery</strong>. Não apenas entendo o que precisa ser construído, mas como deve ser executado para gerar impacto real.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Psicologia', desc: 'Entendimento profundo de comportamento e motivação.', icon: Brain },
                { title: 'Dados', desc: 'Validação rigorosa de hipóteses e métricas.', icon: BarChart3 },
                { title: 'Design', desc: 'Experiência do usuário centrada na simplicidade.', icon: Layers },
                { title: 'Tecnologia', desc: 'Visão técnica para garantir viabilidade e escala.', icon: Code2 },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 border border-zinc-100 bg-zinc-50/50"
                >
                  <item.icon className="w-8 h-8 mb-4 text-zinc-900" />
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Cases reais onde raciocínio estratégico e execução técnica se encontram.">
            Projetos & Impacto
          </SectionTitle>
          
          <div className="space-y-20">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-4">
                    <div className="sticky top-32">
                      <div className="flex gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-zinc-200 text-zinc-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-3xl font-bold mb-2 group-hover:text-zinc-600 transition-colors">{project.title}</h3>
                      <p className="text-zinc-500 font-medium italic mb-6">{project.tagline}</p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-8 bg-white p-8 md:p-12 shadow-sm border border-zinc-100">
                    <div className="grid sm:grid-cols-2 gap-10">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-2">
                            <Target className="w-3 h-3" /> Contexto
                          </h4>
                          <p className="text-zinc-700 text-sm leading-relaxed">{project.context}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-2">
                            <Zap className="w-3 h-3" /> Hipótese
                          </h4>
                          <p className="text-zinc-700 text-sm leading-relaxed">{project.hypothesis}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-2">
                            <Search className="w-3 h-3" /> Análise
                          </h4>
                          <p className="text-zinc-700 text-sm leading-relaxed">{project.analysis}</p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-2">
                            <Layers className="w-3 h-3" /> Decisão
                          </h4>
                          <p className="text-zinc-700 text-sm leading-relaxed">{project.decision}</p>
                        </div>
                        <div className="p-6 bg-zinc-900 text-white">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
                            <TrendingUp className="w-3 h-3" /> Impacto Mensurável
                          </h4>
                          <p className="text-white font-medium leading-relaxed">{project.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodologia" className="py-24 bg-zinc-900 text-white px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Como Eu Penso Produto</h2>
            <p className="text-zinc-400 max-w-2xl">Frameworks de decisão e conexão entre comportamento e métricas.</p>
            <div className="h-1 w-20 bg-white mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center font-bold text-zinc-500">01</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 italic">Conexão Comportamental</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Meu maior diferencial é conectar o comportamento humano (Psicologia) com métricas de negócio. Não olho apenas para o que o usuário faz, mas para a motivação cognitiva por trás de cada clique.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center font-bold text-zinc-500">02</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 italic">Priorização Estratégica</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Utilizo frameworks como RICE e Opportunity Solution Tree para garantir que a energia da equipe esteja sempre no que gera mais valor com o menor esforço possível.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 p-8 md:p-12 border border-zinc-700">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8">Meu Framework de Decisão</h4>
              <ul className="space-y-6">
                {[
                  { name: 'RICE', desc: 'Reach, Impact, Confidence, Effort' },
                  { name: 'Impact vs Effort', desc: 'Matriz de valor rápido vs complexidade' },
                  { name: 'Opportunity Solution Tree', desc: 'Mapeamento de problemas para soluções' },
                  { name: 'Context + Timing', desc: 'O dado certo na hora certa' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-between group cursor-default">
                    <span className="font-bold text-lg group-hover:text-zinc-300 transition-colors">{item.name}</span>
                    <span className="text-xs text-zinc-500 uppercase tracking-widest">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-800/20 skew-x-12 translate-x-1/4 -z-0" />
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Ferramentas traduzidas em impacto estratégico.">
            Stack Técnica & Estratégica
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {SKILLS.map((skill, i) => {
              const Icon = { Database, BarChart3, Code2, Search, Brain }[skill.icon] || Code2;
              return (
                <div key={i} className="group">
                  <div className="mb-4 p-4 bg-zinc-50 inline-block group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold mb-2">{skill.name}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">{skill.impact}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">Vamos construir o próximo grande produto?</h2>
          <p className="text-xl text-zinc-600 mb-12">
            Estou sempre aberto a conversas sobre estratégia de produto, análise de dados e comportamento humano.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <a href="mailto:eliatatyana@gmail.com" className="flex items-center gap-3 text-lg font-bold hover:text-zinc-500 transition-colors">
              <Mail className="w-6 h-6" /> eliatatyana@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/tatyanaelia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-bold hover:text-zinc-500 transition-colors">
              <Linkedin className="w-6 h-6" /> LinkedIn
            </a>
            <a href="https://github.com/tatyanaelia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-bold hover:text-zinc-500 transition-colors">
              <Github className="w-6 h-6" /> GitHub
            </a>
          </div>

          <div className="p-12 bg-zinc-900 text-white text-left relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 italic">"Uma profissional que entende comportamento humano, valida com dados e constrói soluções tecnicamente viáveis."</h3>
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">— Visão de Produto</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-200 bg-zinc-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-bold tracking-tighter">TATYANA ELIA</span>
          <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} — Desenvolvido com foco em estratégia e impacto.</p>
          <div className="flex gap-6 no-print">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-zinc-400 hover:text-zinc-900 text-sm font-bold uppercase tracking-widest">Voltar ao Topo</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
