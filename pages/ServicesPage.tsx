import React from 'react';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-48 bg-white text-black min-h-screen pb-40">
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-32">
        <span className="text-[10px] font-bold tracking-[0.6em] text-[#165a72] mb-8 block uppercase">WHAT WE DO</span>
        <h1 className="font-heading text-7xl md:text-[10vw] font-bold tracking-tighter uppercase leading-[0.8] mb-12 text-[#165a72]">
          Our <br /><span className="text-[#ed1c24]/30 italic">Services</span>
        </h1>
      </section>

      <section className="px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5">
          {SERVICES.map((s, i) => (
            <div key={s.id} className="p-16 bg-white hover:bg-[#165a72]/5 transition-all group min-h-[500px] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#165a72]/50 mb-12 block uppercase tracking-widest">Division / 0{i + 1}</span>
                <h3 className="font-heading text-4xl font-bold uppercase mb-8 text-black group-hover:text-[#165a72] transition-colors">{s.title.split('. ')[1]}</h3>
                <p className="text-black/70 text-lg leading-relaxed mb-12 font-medium">{s.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.features.map(f => (
                  <span key={f} className="text-[9px] font-bold uppercase tracking-[0.2em] px-5 py-2 border border-black/5 rounded-full text-black/60 group-hover:border-[#165a72]/20 group-hover:text-[#165a72] transition-colors">{f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;