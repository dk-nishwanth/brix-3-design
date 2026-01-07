import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { JOBS } from '../constants';

const CareerPage: React.FC = () => {
  return (
    <div className="pt-48 bg-white text-black min-h-screen pb-40">
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-40 text-center">
        <h1 className="font-heading text-7xl md:text-[11vw] font-bold tracking-tighter uppercase leading-[0.8] mb-12 text-[#165a72]">
          WISH TO <br /><span className="text-[#ed1c24] italic">JOIN US?</span>
        </h1>
      </section>

      <section className="px-6 md:px-12 max-w-4xl mx-auto space-y-12">
        {JOBS.map(job => (
          <div key={job.id} className="p-16 border-l-8 border-[#165a72] bg-[#f9f9f9] hover:bg-white transition-all group shadow-sm hover:shadow-2xl">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h3 className="font-heading text-4xl font-bold uppercase mb-4 text-[#165a72]">{job.title}</h3>
                <span className="text-[10px] font-bold tracking-widest text-black/60 uppercase">{job.experience} / {job.location}</span>
              </div>
              <button className="p-4 bg-white border border-[#165a72]/20 rounded-full hover:bg-[#ed1c24] hover:text-white transition-all">
                 <ArrowUpRight size={24} />
              </button>
            </div>
            <p className="text-xl text-black/80 mb-12 font-medium">{job.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CareerPage;