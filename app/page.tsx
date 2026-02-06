"use client";

import { PROJECTS, SKILLS } from "@/constants";
import { 
  Github, 
  ArrowUpRight, 
  Mail, 
  Code2, 
  User, 
  ChevronRight,
  Sparkles,
  ExternalLink
} from "lucide-react"; 
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#030303] text-slate-900 dark:text-slate-100 transition-colors duration-500 scroll-smooth overflow-x-hidden font-sans">
      
      {/* 1. Background System (Grid & Glow) */}
      <div className="fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 1h58v58H1V1z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
      </div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full z-0" />

      {/* 2. Hero Section */}
      <section className="relative pt-48 pb-32 px-6 max-w-7xl mx-auto text-center z-10">
        <Reveal>
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <Sparkles size={12} className="animate-pulse" />
              Open for Collaboration
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-center mb-8 leading-[0.85] uppercase italic">
            Digital <br /> 
            <span className="text-blue-600 dark:text-blue-500 not-italic tracking-normal">Architect</span>
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="max-w-xl mx-auto text-center text-slate-500 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-12">
            Saya <span className="text-slate-900 dark:text-white font-bold">Tevan</span> — Fokus menciptakan antarmuka yang bersih dan performa kode yang tak tertandingi.
          </p>
        </Reveal>
        
        <Reveal delay={0.6}>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#projects" className="group px-10 py-5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-blue-500/20">
              Explore Projects <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-10 py-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-white/10 transition-all">
              Get in Touch
            </a>
          </div>
        </Reveal>
      </section>

      {/* 3. About & Bento Skills */}
      <section id="about" className="relative py-32 px-6 max-w-7xl mx-auto z-10 border-t border-slate-200 dark:border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-2 text-blue-600 mb-6 font-black uppercase tracking-[0.2em] text-xs">
                <User size={16} /> 01. About Me
              </div>
              <h2 className="text-5xl font-black mb-8 leading-tight uppercase tracking-tighter">Membangun <br/>Masa Depan <br/>Web.</h2>
              <div className="space-y-6 text-slate-500 dark:text-slate-400 text-xl leading-relaxed">
                <p>
                  Bagi saya, kode adalah seni. Saya mengombinasikan estetika minimalis dengan struktur backend yang kokoh.
                </p>
                <p className="font-bold text-slate-900 dark:text-slate-200">
                  Saya tidak hanya membuat fitur; saya menciptakan pengalaman digital yang fungsional.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILLS.map((category, idx) => (
              <Reveal key={category.name} delay={idx * 0.1}>
                <div className="h-full p-8 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] rounded-[2.5rem] hover:bg-blue-600/[0.02] transition-all group">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-8 opacity-50 group-hover:opacity-100 transition-opacity">{category.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((skill) => (
                      <span key={skill} className="text-slate-800 dark:text-slate-200 font-bold text-sm">
                        {skill} <span className="text-blue-600 dark:text-blue-500 ml-1">•</span>
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Projects Section - Asymmetric Bento Grid */}
      <section id="projects" className="relative py-32 px-6 max-w-7xl mx-auto z-10 border-t border-slate-200 dark:border-white/5">
        <Reveal>
          <div className="mb-20">
            <div className="flex items-center gap-2 text-blue-600 mb-6 font-black uppercase tracking-[0.2em] text-xs">
              <Code2 size={16} /> 02. Selected Works
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">Proyek <br/>Unggulan.</h2>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <Reveal 
              key={index} 
              delay={index * 0.2} 
              className={index === 0 ? "md:col-span-12 lg:col-span-8" : "md:col-span-12 lg:col-span-4"}
            >
              <div className="group h-full flex flex-col">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:flex-1 bg-slate-100 dark:bg-white/5 rounded-[3rem] overflow-hidden mb-8 border border-slate-200 dark:border-white/5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-80 group-hover:opacity-100"
                  />
                  {/* Floating Tech Badges (Inside Image) */}
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[8px] font-black text-white uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* Overlay Link */}
                  <div className="absolute top-8 right-8 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <a href={project.githubUrl} target="_blank" className="p-4 rounded-full bg-white text-black hover:bg-blue-600 hover:text-white transition-all shadow-xl">
                      <Github size={20} />
                    </a>
                    <a href={project.demoUrl} target="_blank" className="p-4 rounded-full bg-white text-black hover:bg-blue-600 hover:text-white transition-all shadow-xl">
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>

                <div className="px-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Project 0{index + 1}</span>
                    <div className="h-[1px] w-12 bg-slate-200 dark:bg-white/10" />
                  </div>
                  <h3 className={`${index === 0 ? 'text-4xl' : 'text-2xl'} font-black mb-4 uppercase tracking-tight group-hover:text-blue-600 transition-colors`}>
                    {project.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6 text-lg font-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="py-40 px-6 max-w-7xl mx-auto z-10 border-t border-slate-200 dark:border-white/5 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-2 text-blue-600 mb-10 font-black uppercase tracking-[0.2em] text-xs">
            <Mail size={16} /> 03. Contact
          </div>
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-12 leading-[0.85]">
            Let's build <br/> something <br/> <span className="italic font-serif text-blue-600 lowercase tracking-normal">extraordinary</span>.
          </h2>
          <a 
            href="mailto:tevan@example.com" 
            className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-blue-500/10"
          >
            Say Hello <Mail size={24} />
          </a>
        </Reveal>
      </section>

      {/* 6. Footer */}
      <footer className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 italic">
        <p className="text-xs font-bold tracking-widest uppercase">© {new Date().getFullYear()} Tevan.</p>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
          <a href="#" className="hover:text-blue-600 transition-colors">GitHub</a>
          <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Instagram</a>
        </div>
      </footer>
    </div>
  );
}