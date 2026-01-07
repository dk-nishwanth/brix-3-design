import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const KernMetadata = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[10px] font-bold tracking-[0.4em] text-[#165a72]/70 uppercase">{label}</span>
    <span className="text-xs font-medium text-black/80 tracking-wider uppercase">{value}</span>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="pt-48 bg-white text-black min-h-screen">
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-40">
        <div className="flex gap-4 mb-16">
          <KernMetadata label="ABOUT US" value="BRiX Network" />
          <KernMetadata label="FOUNDED" value="Nov 2014" />
        </div>
        <h1 className="font-heading text-6xl md:text-[11vw] font-bold tracking-tighter uppercase leading-[0.8] mb-12 text-[#165a72]">
          Delivering <br /><span className="text-black/5">Trust Through</span><br /><span className="text-[#ed1c24] italic">Knowledge</span>
        </h1>
      </section>

      <section className="py-40 bg-[#f8f9fa] border-y border-black/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="font-heading text-5xl font-bold uppercase tracking-tighter mb-12 text-[#165a72]">Our DNA Culture</h2>
            <div className="grid sm:grid-cols-2 gap-px bg-black/10">
              {[
                { t: 'Innovation', d: 'Pushing boundaries through cutting-edge solutions.', c: '#165a72' },
                { t: 'Excellence', d: 'Quality in every knowledge transfer initiative.', c: '#ed1c24' },
                { t: 'Collaboration', d: 'Culture of inclusiveness and shared success.', c: '#165a72' },
                { t: 'Transformation', d: 'Empowering individuals to thrive.', c: '#ed1c24' }
              ].map(v => (
                <div key={v.t} className="p-12 bg-white flex flex-col justify-between aspect-square group">
                  <h4 className={`font-heading font-bold uppercase tracking-widest transition-colors group-hover:text-black`} style={{ color: v.c + '40' }}>{v.t}</h4>
                  <p className="text-[10px] text-black/60 leading-relaxed uppercase tracking-widest">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square bg-[#165a72] p-16 flex flex-col justify-end text-white shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80" alt="Story Background" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h3 className="font-heading text-6xl font-bold uppercase mb-8 leading-none">Brick by Brick.</h3>
              <p className="text-lg opacity-60 font-light max-w-sm mb-12">BRiX Network is an Authorized Training Partner of Extreme Networks across PAN India.</p>
              <div className="w-20 h-20 bg-[#ed1c24] flex items-center justify-center rounded-full group cursor-pointer hover:scale-110 transition-transform">
                 <ArrowUpRight size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;