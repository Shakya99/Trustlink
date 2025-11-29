import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Handshake, 
  Users, 
  Globe2, 
  Lock, 
  Scale, 
  Layout, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  MessageSquare,
  FileText,
  Star,
  Zap,
  CreditCard,
  Building2,
  Smartphone
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ShaderAnimation } from './components/ui/shader-animation';
import { TeamMember, MilestoneStep } from './types';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <ShieldCheck className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">TrustLink</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Features</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">How it Works</a>
          <a href="#trust-score" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Trust Score</a>
          <a href="#team" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Team</a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-600/20">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-950">
    <ShaderAnimation />
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8 animate-fade-in-up">
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
        The Future of Freelance Payments
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
        Securing Trust in <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
          Freelance Payments
        </span>
      </h1>
      
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
        Building a safer, more transparent ecosystem where freelancers get paid fairly and clients receive quality work—every single time.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2">
          Join the Platform
          <ArrowRight className="w-4 h-4" />
        </button>
        <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm">
          Learn More
        </button>
      </div>

      <div className="mt-20 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
        <div className="flex flex-col items-center gap-2">
          <Lock className="w-6 h-6 text-blue-400" />
          <span className="text-sm text-gray-400">100% Secure Escrow</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Scale className="w-6 h-6 text-purple-400" />
          <span className="text-sm text-gray-400">Fair Dispute Resolution</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Users className="w-6 h-6 text-indigo-400" />
          <span className="text-sm text-gray-400">Verified Profiles</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Globe2 className="w-6 h-6 text-cyan-400" />
          <span className="text-sm text-gray-400">Global Payments</span>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-10"></div>
  </section>
);

const ProblemsSolutions = () => {
  const problems = [
    {
      title: "Payment Security",
      problem: "Freelancers fear ghosting; Clients fear low quality.",
      solution: "Milestone-based escrow payments ensure fairness for both parties.",
      icon: Lock,
      color: "blue"
    },
    {
      title: "Trust & Transparency",
      problem: "Hard to verify legitimacy and reliability.",
      solution: "Two-way trust scores and verified KYC profiles build instant credibility.",
      icon: ShieldCheck,
      color: "purple"
    },
    {
      title: "Fragmented Workflow",
      problem: "Juggling WhatsApp, Notion, Drive, PayPal.",
      solution: "All-in-one platform for chat, tasks, and payments.",
      icon: Layout,
      color: "indigo"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Macro Problems We Solve</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The freelance economy is broken. We are fixing the foundation with trust, security, and unified tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <div key={idx} className="group relative bg-slate-900/50 border border-white/5 rounded-2xl p-8 hover:bg-slate-900 transition-colors duration-300 overflow-hidden">
              <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity`}>
                 <item.icon className={`w-32 h-32 text-${item.color}-500`} />
              </div>
              <div className={`w-12 h-12 rounded-lg bg-${item.color}-500/10 flex items-center justify-center mb-6`}>
                <item.icon className={`w-6 h-6 text-${item.color}-500`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{item.title}</h3>
              <div className="space-y-4 relative z-10">
                <div className="bg-red-500/5 border border-red-500/10 rounded-lg p-4">
                  <p className="text-sm text-red-200">
                    <span className="font-semibold text-red-400 block mb-1 flex items-center gap-2">
                       <Zap className="w-3 h-3" /> Problem
                    </span>
                    {item.problem}
                  </p>
                </div>
                <div className="bg-green-500/5 border border-green-500/10 rounded-lg p-4">
                  <p className="text-sm text-green-200">
                    <span className="font-semibold text-green-400 block mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3" /> Solution
                    </span>
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MoneyFlow = () => {
  const steps: MilestoneStep[] = [
    { id: 1, title: "Client Deposits", description: "Funds placed in secure escrow before work begins." },
    { id: 2, title: "Milestone Release", description: "Work delivered in parts. Funds released upon approval." },
    { id: 3, title: "Dispute Protection", description: "Evidence-backed resolution if things go wrong." },
    { id: 4, title: "Rewards & Boosts", description: "Earn bonuses and reputation for great work." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold mb-4 border border-purple-500/20">
              TRANSPARENT PROCESS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How the Money Flows</h2>
            <p className="text-gray-400 mb-12 text-lg">
              We've redesigned the payment flow to protect both sides. No more chasing invoices, no more non-payment anxiety.
            </p>

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={step.id} className="flex gap-4">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-900/50">
                      0{step.id}
                    </div>
                    {idx !== steps.length - 1 && <div className="w-0.5 h-full bg-blue-600/20 my-2"></div>}
                  </div>
                  <div className="pb-8">
                    <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
            <div className="relative bg-slate-950 border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <span className="text-gray-400 text-sm font-medium">Escrow Status</span>
                <span className="text-green-400 text-sm font-medium flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Secure & Active
                </span>
              </div>
              
              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-4 border border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-indigo-400" />
                     </div>
                     <div>
                       <div className="text-white font-medium">Deposit</div>
                       <div className="text-xs text-gray-500">Milestone 1</div>
                     </div>
                   </div>
                   <span className="text-white font-mono">$2,500.00</span>
                </div>
                
                <div className="flex justify-center">
                   <ArrowRight className="w-5 h-5 text-gray-600 rotate-90" />
                </div>

                <div className="bg-slate-900 rounded-xl p-4 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Lock className="w-5 h-5 text-blue-400" />
                     </div>
                     <div>
                       <div className="text-blue-200 font-medium">Escrow Vault</div>
                       <div className="text-xs text-blue-400/60">Funds Locked</div>
                     </div>
                   </div>
                   <span className="text-blue-400 font-mono font-bold">$2,500.00</span>
                </div>

                <div className="flex justify-center">
                   <ArrowRight className="w-5 h-5 text-gray-600 rotate-90" />
                </div>

                <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5 flex items-center justify-between opacity-50">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Users className="w-5 h-5 text-green-400" />
                     </div>
                     <div>
                       <div className="text-white font-medium">Freelancer Payout</div>
                       <div className="text-xs text-gray-500">Pending Approval</div>
                     </div>
                   </div>
                   <span className="text-gray-400 font-mono">$2,500.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TwoWayTrust = () => {
  const data = [
    { name: 'Jan', score: 65 },
    { name: 'Feb', score: 72 },
    { name: 'Mar', score: 78 },
    { name: 'Apr', score: 85 },
    { name: 'May', score: 92 },
    { name: 'Jun', score: 98 },
  ];

  return (
    <section id="trust-score" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Two-Way Trust: Rating Clients Too</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trust shouldn't just be earned by freelancers. Our ecosystem holds clients accountable with public trust profiles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
           {/* Chart / Visual */}
           <div className="bg-slate-900 border border-white/5 rounded-2xl p-6 shadow-xl">
             <div className="flex items-center justify-between mb-8">
               <div>
                 <h3 className="text-lg font-semibold text-white">Trust Score Growth</h3>
                 <p className="text-sm text-gray-400">Your reputation directly impacts your fees.</p>
               </div>
               <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-sm font-bold flex items-center gap-1">
                 <TrendingUp className="w-4 h-4" /> +12%
               </div>
             </div>
             
             <div className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={data}>
                   <defs>
                     <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                       <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                   <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                   <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
                   <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#fff' }}
                      itemStyle={{ color: '#818cf8' }}
                   />
                   <Area type="monotone" dataKey="score" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                 </AreaChart>
               </ResponsiveContainer>
             </div>
           </div>

           {/* Metrics Grid */}
           <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl hover:bg-slate-900 transition-all">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Handshake className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Payment Reliability</h4>
                <p className="text-sm text-gray-400">Track how often clients pay on time and without disputes.</p>
              </div>
              <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl hover:bg-slate-900 transition-all">
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Communication Score</h4>
                <p className="text-sm text-gray-400">Response time and clarity metrics for smoother projects.</p>
              </div>
              <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl hover:bg-slate-900 transition-all">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5 text-indigo-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Dispute Ratio</h4>
                <p className="text-sm text-gray-400">Low disputes mean higher trust and better matching.</p>
              </div>
              <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl hover:bg-slate-900 transition-all">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Repeat Hire Rate</h4>
                <p className="text-sm text-gray-400">Shows long-term satisfaction from previous engagements.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const UnifiedWorkflow = () => {
  return (
    <section className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stop Juggling 5 Different Tools</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Fragmented workflows lead to lost data and delays. We unify chat, files, tasks, and payments in one seamless interface.
        </p>
        
        <div className="relative p-1 rounded-3xl bg-gradient-to-b from-blue-500/20 to-purple-500/20 max-w-5xl mx-auto">
          <div className="bg-slate-950 rounded-[22px] overflow-hidden border border-white/5 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
               {/* Step 1 */}
               <div className="p-8 hover:bg-white/5 transition-colors">
                 <div className="flex items-center justify-center gap-4 mb-6 opacity-70">
                    <Smartphone className="w-8 h-8 text-green-400" />
                    <MessageSquare className="w-8 h-8 text-blue-400" />
                 </div>
                 <h3 className="text-white font-bold text-lg mb-2">Native Communication</h3>
                 <p className="text-sm text-gray-400">Replace WhatsApp & Slack with built-in, context-aware project chat.</p>
               </div>
               
               {/* Step 2 */}
               <div className="p-8 hover:bg-white/5 transition-colors">
                 <div className="flex items-center justify-center gap-4 mb-6 opacity-70">
                    <FileText className="w-8 h-8 text-orange-400" />
                    <CheckCircle2 className="w-8 h-8 text-purple-400" />
                 </div>
                 <h3 className="text-white font-bold text-lg mb-2">Integrated Management</h3>
                 <p className="text-sm text-gray-400">Tasks, milestones, and file approvals in one timeline.</p>
               </div>

               {/* Step 3 */}
               <div className="p-8 hover:bg-white/5 transition-colors">
                 <div className="flex items-center justify-center gap-4 mb-6 opacity-70">
                    <CreditCard className="w-8 h-8 text-indigo-400" />
                    <Building2 className="w-8 h-8 text-cyan-400" />
                 </div>
                 <h3 className="text-white font-bold text-lg mb-2">Global Payouts</h3>
                 <p className="text-sm text-gray-400">Accept payments globally with automated tax compliance.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const team: TeamMember[] = [
    { name: "Shakya Lokhande", role: "Founder", initials: "SL" },
    { name: "Shubham Aswal", role: "Co-Founder", initials: "SA" },
    { name: "Siddharth Mohan", role: "Business Lead", initials: "SM" },
    { name: "Aditya Gupta", role: "Tech Lead", initials: "AG" },
  ];

  return (
    <section id="team" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Our Dedicated Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="group p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-xl font-bold text-white mb-4 shadow-lg group-hover:shadow-indigo-500/25 transition-shadow">
                {member.initials}
              </div>
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-blue-400 text-sm font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 bg-slate-950 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
           <div className="flex items-center gap-2 mb-4">
             <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
               <ShieldCheck className="text-white w-3 h-3" />
             </div>
             <span className="font-bold text-lg text-white">TrustLink</span>
           </div>
           <p className="text-gray-400 text-sm max-w-sm">
             A secure, more transparent ecosystem where freelancers get paid fairly and clients receive quality work every single time.
           </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Trust Score</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Escrow Agreement</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} TrustLink. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
           {/* Social icons placeholders */}
           <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
           <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
           <span className="hover:text-white cursor-pointer transition-colors">GitHub</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <ProblemsSolutions />
        <MoneyFlow />
        <TwoWayTrust />
        <UnifiedWorkflow />
        <div className="py-24 bg-indigo-600/10 border-y border-indigo-500/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to work with peace of mind?</h2>
             <p className="text-indigo-200 text-lg mb-8">Join the platform building the future of secure freelance work.</p>
             <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-xl shadow-indigo-600/20">
               Join the Waitlist
             </button>
          </div>
        </div>
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
