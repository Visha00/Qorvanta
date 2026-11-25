import React, { useMemo, useState } from 'react';
import {
  ArrowUpRight, ArrowRight, Menu, X, Sparkles, Code2, BrainCircuit,
  Smartphone, Palette, Megaphone, Cloud, ShieldCheck, BarChart3,
  Factory, GraduationCap, HeartPulse, ShoppingBag, Building2, Plane,
  Layers3, CheckCircle2, ChevronDown, Mail, Phone, MapPin, Send,
  Globe2, Workflow, Database, Search, Bot, Cpu, Monitor
} from 'lucide-react';

const serviceGroups = [
  { category:'AI & Data', icon:BrainCircuit, color:'violet', items:[
    ['Artificial Intelligence','Intelligent applications that automate work, improve decisions and unlock new opportunities.'],
    ['Machine Learning','Predictive models that learn from data and uncover patterns.'],
    ['Generative AI & LLMs','Custom copilots, conversational experiences and LLM-powered products.'],
    ['Agentic AI','AI agents that plan, reason and execute multi-step workflows.'],
    ['Computer Vision','Visual inspection, object detection and image intelligence.'],
    ['Natural Language Processing','Turn documents, conversations and unstructured text into useful insights.'],
    ['AI Chatbots','Always-on customer and employee support assistants.'],
    ['Data Engineering & Analytics','Reliable data pipelines, dashboards and predictive reporting.'],
    ['Intelligent Automation','RPA, document processing, recommendation and fraud detection.']
  ]},
  { category:'Build', icon:Code2, color:'blue', items:[
    ['Software Development','End-to-end custom software, from product discovery to deployment and support.'],
    ['Website Design','Modern, responsive websites designed around your brand and customers.'],
    ['Website Development','Fast, accessible and scalable web experiences and portals.'],
    ['Mobile App Development','Native-quality Android and iOS applications for your business.'],
    ['CRM Software Development','Customer relationship platforms that organize sales and service.'],
    ['E-commerce Website Development','Secure online stores with smooth shopping and checkout journeys.'],
    ['Web Portal Development','Purpose-built portals for education, healthcare, travel and real estate.'],
    ['Windows App Development','Desktop applications for specialized business workflows.'],
    ['Hybrid App Development','Cross-platform applications built for efficient delivery.'],
    ['Native App Development','Platform-specific mobile apps with rich device capabilities.']
  ]},
  { category:'Design', icon:Palette, color:'pink', items:[
    ['UI / UX Designing','Research-led interfaces that make digital products simple and delightful.'],
    ['Logo Design','Distinctive visual identities that make your brand recognizable.'],
    ['Brochure Design','Clear, polished marketing collateral for your business.'],
    ['Creative & Graphic Design','Consistent visual communication across digital touchpoints.']
  ]},
  { category:'Growth', icon:Megaphone, color:'orange', items:[
    ['Digital Marketing','Integrated digital campaigns that attract, engage and convert.'],
    ['SEO Services','Technical and content optimization to improve organic visibility.'],
    ['Search Engine Marketing','Paid search campaigns focused on qualified leads.'],
    ['Social Media Marketing','Build community and brand awareness across social platforms.'],
    ['Pay Per Click Management','Performance-focused PPC strategy, management and optimization.'],
    ['SEO Copywriting','Search-friendly content written for real people.'],
    ['Brand Consulting','Positioning and strategy that clarify your brand story.']
  ]},
  { category:'Integration', icon:Workflow, color:'green', items:[
    ['SharePoint Integration','Connect business tools and streamline collaboration with SharePoint.'],
    ['NetSuite Integration','Unify finance, operations and business data with NetSuite.'],
    ['SharePoint Development','Custom SharePoint portals, workflows and collaboration tools.'],
    ['NetSuite Consulting','Implementation guidance, optimization and ongoing support.'],
    ['B2B IT Solutions','Practical technology solutions for connected business operations.']
  ]},
  { category:'Enterprise & Industrial', icon:Factory, color:'cyan', items:[
    ['Software Testing','Functional, regression and quality assurance testing.'],
    ['Security Testing','Identify vulnerabilities and strengthen application security.'],
    ['Performance Testing','Validate speed, stability and scalability under load.'],
    ['Industrial Automation','Smart automation and connected systems for industrial operations.'],
    ['ERP & Business Software','Purpose-built systems for teams, processes and resources.'],
    ['Recruitment Services','Technology recruitment support to help teams find talent.']
  ]},
  { category:'Business Products', icon:Layers3, color:'yellow', items:[
    ['HR & Payroll Management','Manage employee records, attendance, leave and payroll.'],
    ['Jewellery Software','Inventory, billing and business management for jewellery stores.'],
    ['Real Estate Software','Property, lead and brokerage management solutions.'],
    ['Inventory Management','Track stock, purchasing and fulfillment in one place.'],
    ['Hospital Management','Coordinate patient, staff and hospital administration workflows.'],
    ['School Management','Simplify admissions, attendance, fees and communication.'],
    ['Healthcare Management','Digital tools for care delivery and healthcare administration.'],
    ['Banking & Trading Software','Purpose-built platforms for financial workflows.'],
    ['Travel & Event Management','Manage bookings, schedules and event operations.'],
    ['Salon & Wedding Management','Booking and planning tools for service businesses.'],
    ['Lead Management System','Capture, assign and track leads through your sales pipeline.']
  ]}
];

const industries = [
  [Monitor,'Technology','Next-gen software and IT solutions'],
  [ShoppingBag,'E-commerce','Digital storefronts and retail platforms'],
  [BarChart3,'FinTech & Banking','Secure financial and payment platforms'],
  [Globe2,'Logistics & Shipping','Smarter supply chain and fleet systems'],
  [Factory,'Manufacturing','Automation, inspection and ERP systems'],
  [GraduationCap,'Education','Interactive learning environments'],
  [Plane,'Travel','Booking and trip-planning experiences'],
  [HeartPulse,'Healthcare','Patient portals and medical platforms'],
  [Building2,'Real Estate / PropTech','Property and brokerage technology'],
  [BrainCircuit,'AI & Machine Learning','Predictive analytics and intelligent systems']
];
const technologies = ['React','React Native','JavaScript','TypeScript','Node.js','Python','Java','PHP','Laravel','Angular','Vue.js','Flutter','Kotlin','Swift','HTML5','CSS3','AWS','Microsoft Azure','Google Cloud','Docker','Kubernetes','MongoDB','MySQL','PostgreSQL','Redis','SharePoint','NetSuite','TensorFlow','PyTorch','LangChain'];

function Header(){
  const [open,setOpen]=useState(false);
  return <header className="header"><div className="container nav">
    <a className="brand" href="#home"><span className="brand-mark"><Sparkles size={19}/></span>Qorvanta Technologies<span className="brand-dot">.</span></a>
    <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
    <nav className={open?'nav-links open':'nav-links'} onClick={()=>setOpen(false)}>
      <a href="#services">Services <ChevronDown size={14}/></a><a href="#industries">Industries</a><a href="#technology">Technology</a><a href="#about">About</a><a href="#contact">Contact</a>
      <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16}/></a>
    </nav>
  </div></header>
}

function Hero(){
 return <section className="hero" id="home"><div className="hero-grid"></div><div className="container hero-inner">
   <div className="hero-copy"><div className="eyebrow light"><span className="pulse"></span> DIGITAL INNOVATION, BUILT AROUND YOU</div>
    <h1>Build what's next.<br/><span>Make it matter.</span></h1>
    <p>We turn ambitious ideas into intelligent digital products. From AI and custom software to mobile apps and digital growth, Qorvanta Technologies helps your business move forward.</p>
    <div className="hero-actions"><a className="btn btn-primary" href="#contact">Start a project <ArrowUpRight size={18}/></a><a className="text-link light-link" href="#services">Explore our services <ArrowRight size={17}/></a></div>
    <div className="hero-proof"><div className="proof-avatars"><b>AI</b><b>UX</b><b>IT</b></div><span>One team. Ideas to impact.</span></div>
   </div>
   <div className="hero-art"><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="orb-core"><Sparkles size={48}/></div><div className="float-card card-ai"><BrainCircuit/><span><b>AI-powered</b><small>Intelligent solutions</small></span></div><div className="float-card card-code"><Code2/><span><b>Built to scale</b><small>Modern engineering</small></span></div><div className="float-card card-growth"><BarChart3/><span><b>Growth focused</b><small>Measurable outcomes</small></span></div><div className="art-caption">IDEAS <span>→</span> INNOVATION <span>→</span> IMPACT</div></div>
 </div><div className="container hero-bottom"><span>YOUR DIGITAL TRANSFORMATION PARTNER</span><span className="scroll-line"></span><a href="#services">SCROLL TO EXPLORE ↓</a></div></section>
}

function ServiceSection(){
 const [active,setActive]=useState('All');
 const [query,setQuery]=useState('');
 const categories=['All',...serviceGroups.map(g=>g.category)];
 const services=useMemo(()=>serviceGroups.flatMap(g=>g.items.map(([name,desc])=>({name,desc,category:g.category,icon:g.icon,color:g.color}))).filter(s=>(active==='All'||s.category===active)&&(`${s.name} ${s.desc}`.toLowerCase().includes(query.toLowerCase()))),[active,query]);
 return <section className="section services-section" id="services"><div className="container">
  <div className="section-head"><div><div className="eyebrow">WHAT WE DO</div><h2>Services that move<br/><span>business forward.</span></h2></div><p>From the first spark of an idea to the systems that scale it, our team brings strategy, design and engineering together.</p></div>
  <div className="service-toolbar"><div className="filters">{categories.map(c=><button key={c} className={active===c?'filter active':'filter'} onClick={()=>setActive(c)}>{c}</button>)}</div><label className="search-box"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Find a service..."/></label></div>
  <div className="service-grid">{services.map((s,i)=>{const Icon=s.icon;return <article className="service-card" key={s.name}><div className={`service-icon ${s.color}`}><Icon size={22}/></div><div className="service-meta">{s.category}</div><h3>{s.name}</h3><p>{s.desc}</p><a href="#contact" aria-label={`Ask about ${s.name}`} className="card-arrow"><ArrowUpRight size={19}/></a></article>})}</div>
  {services.length===0&&<div className="empty-state">No services found. Try another search.</div>}
  <div className="service-foot"><span><b>{services.length}+</b> capabilities to help you grow</span><a className="text-link" href="#contact">Need something custom? Talk to us <ArrowUpRight size={17}/></a></div>
 </div></section>
}

function Industries(){return <section className="section industries-section" id="industries"><div className="container"><div className="section-head"><div><div className="eyebrow">WHO WE SERVE</div><h2>Built for your<br/><span>industry.</span></h2></div><p>We design and build digital solutions for ambitious teams across industries — adapting the technology to the way you work.</p></div><div className="industry-grid">{industries.map(([Icon,name,desc],i)=><div className="industry-card" key={name}><span className="industry-number">0{i+1}</span><Icon size={26}/><h3>{name}</h3><p>{desc}</p><ArrowUpRight className="industry-arrow" size={18}/></div>)}</div></div></section>}

function TechStack(){return <section className="section tech-section" id="technology"><div className="container tech-layout"><div><div className="eyebrow">OUR STACK</div><h2>Technology for<br/><span>what's ahead.</span></h2><p className="section-description">We choose the right tools for the job — reliable, modern technologies that help your products stay flexible, secure and ready to scale.</p><a href="#contact" className="btn btn-dark">Discuss your tech stack <ArrowUpRight size={17}/></a></div><div className="tech-panel"><div className="tech-panel-top"><span><Cpu size={18}/> TECHNOLOGIES WE WORK WITH</span><span>30+ tools</span></div><div className="tech-cloud">{technologies.map((t,i)=><span key={t} className={i%5===0?'tech-chip featured':''}>{t}</span>)}</div><div className="tech-note"><CheckCircle2 size={17}/> The right technology, selected for your goals.</div></div></div></section>}

function About(){return <section className="section about-section" id="about"><div className="container about-layout"><div className="about-visual"><div className="about-big">Q<span>.</span></div><div className="about-stamp"><Sparkles size={22}/><b>IDEAS INTO<br/>IMPACT</b></div><div className="about-small">THINK BIG. BUILD SMART.</div></div><div className="about-copy"><div className="eyebrow">A LITTLE ABOUT QORVANTA TECHNOLOGIES</div><h2>Technology is powerful.<br/><span>People make it matter.</span></h2><p>We're a digital solutions partner for businesses ready to take the next step. Our multidisciplinary team combines thoughtful strategy, purposeful design and dependable engineering to solve real business challenges.</p><p>Whether you're launching a new product, modernizing an existing platform or automating a process, we work alongside you from discovery to delivery.</p><div className="about-points"><span><CheckCircle2/> Collaborative by design</span><span><CheckCircle2/> Focused on outcomes</span><span><CheckCircle2/> Built for the long term</span></div><a className="text-link" href="#contact">Get to know our team <ArrowUpRight size={17}/></a></div></div></section>}

function Contact(){const [form,setForm]=useState({name:'',email:'',phone:'',service:'',message:''});const [sent,setSent]=useState(false);
 const update=e=>setForm({...form,[e.target.name]:e.target.value});
 const submit=e=>{e.preventDefault();const subject=encodeURIComponent(`New project enquiry from ${form.name}`);const body=encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`);window.location.href=`mailto:hello@techify.example?subject=${subject}&body=${body}`;setSent(true)};
 return <section className="contact-section" id="contact"><div className="container contact-layout"><div className="contact-copy"><div className="eyebrow light">HAVE A PROJECT IN MIND?</div><h2>Let's make<br/><span>something great.</span></h2><p>Tell us where you want to go. We'll help you figure out the best way to get there.</p><div className="contact-detail"><span><Mail size={18}/></span><div><small>EMAIL US</small><b>vishalsingh156153@gmail.com</b></div></div><div className="contact-detail"><span><Phone size={18}/></span><div><small>CALL OUR TEAM</small><b>+91 8073150258</b></div></div><div className="contact-detail"><span><MapPin size={18}/></span><div><small>LOCATION</small><b>Bengaluru, India</b></div></div></div>
 <form className="contact-form" onSubmit={submit}><div className="form-title"><span>START A CONVERSATION</span><h3>Tell us about your idea.</h3></div><div className="form-row"><label>Your name<input required name="name" value={form.name} onChange={update} placeholder="Full name"/></label><label>Email address<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@company.com"/></label></div><div className="form-row"><label>Phone number<input name="phone" value={form.phone} onChange={update} placeholder="+91"/></label><label>What do you need?<select name="service" value={form.service} onChange={update}><option value="">Select a service</option>{serviceGroups.flatMap(g=>g.items.map(x=>x[0])).map(s=><option key={s}>{s}</option>)}</select></label></div><label>Tell us a little about your project<textarea required name="message" rows="4" value={form.message} onChange={update} placeholder="What are you looking to build?"/></label><button className="btn btn-primary submit-btn" type="submit">Send enquiry <Send size={17}/></button>{sent&&<p className="form-hint">Your email app should open with the enquiry details. Update the placeholder email in Contact.jsx before launch.</p>}</form>
 </div></section>
}

function Footer(){return <footer className="footer"><div className="container"><div className="footer-top"><a className="brand footer-brand" href="#home"><span className="brand-mark"><Sparkles size={19}/></span>Qorvanta Technologies<span className="brand-dot">.</span></a><p>Ideas deserve great technology.<br/>Let's build what's next.</p><a href="#home" className="back-top">BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Qorvanta Technologies. All rights reserved.</span><span>Designed with purpose. Built for progress.</span><div><a href="#services">Services</a><a href="#contact">Contact</a></div></div></div></footer>}

export default function App(){return <><Header/><main><Hero/><div className="trust-strip"><div className="container trust-inner"><span>STRATEGY</span><i>✳</i><span>DESIGN</span><i>✳</i><span>ENGINEERING</span><i>✳</i><span>GROWTH</span><i>✳</i><span>INNOVATION</span></div></div><ServiceSection/><Industries/><TechStack/><About/><Contact/></main><Footer/></>}
