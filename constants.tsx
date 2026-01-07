
import React from 'react';
import { Service, Project, Job } from './types';

export const HERO_SLIDES = [
  { 
    title: "Professional Excellence", 
    text: "Fostering innovation and professional service delivery in modern workspaces" 
  },
  { 
    title: "Delivering TRUST", 
    text: "Your Preferred Knowledge Transfer Partner in Technology Excellence" 
  },
  { 
    title: "Technology Innovation Hub", 
    text: "Enabling excellence through cutting-edge software solutions and training" 
  },
  { 
    title: "Software Development", 
    text: "Premium Knowledge Transfer for software engineering and development teams" 
  },
  { 
    title: "Modern Tech Solutions", 
    text: "Enabling young minds with lasting efficiency through technology and innovation" 
  },
  { 
    title: "Startup & Enterprise Ready", 
    text: "Scalable knowledge transfer solutions for growing technology companies" 
  }
];

export const SERVICES: Service[] = [
  {
    id: 'atd',
    title: '01. Advance Technology Domain',
    description: 'Premium knowledge transfer on advance technology, enablement programs, vendor neutral programs, OEM enablement & certification programs, CLOUD, SDx, Infrastructure automation tools, learning & development domain',
    features: ['OEM Enablement & Certification Programs', 'Cloud & SDx Technologies', 'Infrastructure Automation Tools', 'Vendor Neutral Programs']
  },
  {
    id: 'ld',
    title: '02. Learning & Development Domain',
    description: 'Enabling potential minds and its creativity through fostering programs on noetic science, leadership & management, coaching, business skills, behavioural skills and cross culture',
    features: ['SOSE / Noetic Science', 'Business Skill', 'Leadership and Management', 'Behavioural Skill Program', 'Coaching', 'Cross-Culture']
  },
  {
    id: 'dcg',
    title: '03. Domain Compliances & Governance',
    description: "To validate 'RESKILL TO STAY RELEVANT' in the evolving world of applied science, we render services for project management and expert, ITIL-SERIES, JIRA Project management, CEM, CISA, CISM, CISSP, certified data centre professional and specialist and certified IT management",
    features: ['ITIL-SERIES', 'JIRA Project Management', 'CEM', 'CISA/CISM/CISSP', 'Certified Data Centre Professional', 'Certified IT Management']
  },
  {
    id: 'psd',
    title: '04. Professional Service Domain',
    description: 'The magnitude maximizes to render services on Infosec, VA/PT, mobile security scanning and reporting, baseline auditing, IT infrastructure auditing, readiness auditing, comprehensive auditing, knowledge management services, project management & implementation program',
    features: ['Infosec & VA/PT Services', 'Mobile Security Scanning', 'Baseline Auditing', 'IT Infrastructure Auditing', 'Knowledge Management Services', 'Project Management']
  }
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'Knowledge Transfer Programs', category: 'Training', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop', year: '2024' },
  { id: '2', title: 'OEM Certification Programs', category: 'Certification', image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=800&auto=format&fit=crop', year: '2024' },
  { id: '3', title: 'Leadership Development', category: 'L&D', image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=800&auto=format&fit=crop', year: '2023' },
  { id: '4', title: 'IT Infrastructure Auditing', category: 'Professional Services', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop', year: '2023' },
  { id: '5', title: 'Cyber Security Training', category: 'Security', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop', year: '2023' },
  { id: '6', title: 'Cloud Enablement', category: 'Technology', image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=800&auto=format&fit=crop', year: '2024' }
];

export const JOBS: Job[] = [
  {
    id: 'exec-sales',
    title: 'Executive - Sales, Inside',
    experience: '3-4 years',
    location: 'Chennai & Bangalore',
    description: 'High profile appointment fixing | meeting calendar initiation | meeting follow ups. Clientele data maintenance | willing to travel to complete the CAF Protocols.',
    skills: 'Interested in people handling and networking. Should possess with high telephone mannerism, strong verbal and written communication, along with corporate e-mail etiquettes.',
    qualification: 'Any Degree',
    salary: 'At par with Service sales - Industry'
  },
  {
    id: 'sme-l3',
    title: 'Subject Matter Expert - Level 3, Data Communication',
    experience: '5+ years',
    location: 'Bangalore',
    description: 'Lead technical training sessions and knowledge transfer programs in data communication technologies.',
    skills: 'Expert knowledge in networking, data communication protocols, and training delivery.',
    qualification: 'B.Tech/M.Tech in Computer Science or related field',
    salary: 'Competitive'
  }
];

export const CLIENTS = [
  { name: 'Extreme Networks', logo: 'https://logo.clearbit.com/extremenetworks.com' },
  { name: 'Wipro', logo: 'https://logo.clearbit.com/wipro.com' },
  { name: 'Infosys', logo: 'https://logo.clearbit.com/infosys.com' },
  { name: 'TCS', logo: 'https://logo.clearbit.com/tcs.com' },
  { name: 'Tech Mahindra', logo: 'https://logo.clearbit.com/techmahindra.com' },
  { name: 'HCL Technologies', logo: 'https://logo.clearbit.com/hcltech.com' },
  { name: 'Accenture', logo: 'https://logo.clearbit.com/accenture.com' },
  { name: 'Cognizant', logo: 'https://logo.clearbit.com/cognizant.com' }
];

export const PARTNERS = [
  {
    id: 'sose',
    name: 'SoSE - Transformational Leadership',
    description: 'A leader in delivering noetic science, bringing the globe into a transformational vector. Time and energy are the primitive by-product of active learning and then it moves towards orderliness which is essential for brewing IQ, enabling this aspect through a profound technique spreads fragrance to our personality, enjoy the transformation by witnessing the delta, enabling this to the millennials to mitigate and overcome frictions in life is what we devote to deliver.'
  },
  {
    id: 'sna',
    name: 'SNA - Savant Networks Academy',
    description: 'Savant Networks Academy a lineage of BRIX Networks (P) Ltd to foster Industry-Academia touch through our unique ECOSYSTEM and DNA CULTURE.'
  }
];
