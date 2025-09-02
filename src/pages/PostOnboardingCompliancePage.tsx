import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SignUpModal } from '../components/SignUpModal';
import { 
  Shield, 
  Eye, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users, 
  FileText,
  Play,
  BookOpen,
  Star,
  ArrowRight,
  Zap,
  Globe,
  BarChart3,
  Search,
  Bell,
  Database
} from 'lucide-react';

export const PostOnboardingCompliancePage: React.FC = () => {
  const [signUpModal, setSignUpModal] = useState<{ isOpen: boolean; type: 'signup' | 'demo' | 'trial' }>({
    isOpen: false,
    type: 'signup'
  });

  const openSignUpModal = (type: 'signup' | 'demo' | 'trial') => {
    setSignUpModal({ isOpen: true, type });
  };

  const closeSignUpModal = () => {
    setSignUpModal({ isOpen: false, type: 'signup' });
  };

  const keyFeatures = [
    {
      icon: Eye,
      title: 'Continuous Customer Monitoring for India',
      description: 'Real-time surveillance of customer behavior, transaction patterns, and risk profile changes with automated alerts for suspicious activities as per RBI guidelines and PMLA requirements.'
    },
    {
      icon: TrendingUp,
      title: 'RBI-Compliant Dynamic Risk Scoring',
      description: 'AI-powered risk assessment that adapts to changing customer circumstances, RBI regulatory updates, and emerging threat patterns specific to the Indian financial landscape.'
    },
    {
      icon: AlertTriangle,
      title: 'Automated RBI Compliance Alerts',
      description: 'Intelligent notification system that flags potential RBI compliance violations, PMLA breaches, and required regulatory actions in real-time for Indian financial institutions.'
    },
    {
      icon: FileText,
      title: 'Indian Regulatory Reporting Automation',
      description: 'Streamlined generation of STR (Suspicious Transaction Reports), CTR, FIU-IND reports, and other RBI regulatory reports with automated data collection and submission workflows.'
    },
    {
      icon: Database,
      title: 'RBI Audit-Ready Documentation',
      description: 'Complete documentation of all compliance activities, decisions, and customer interactions for RBI examination readiness and PMLA audit requirements.'
    },
    {
      icon: Search,
      title: 'India-Specific Analytics Dashboard',
      description: 'Executive-level insights into RBI compliance performance, Indian market risk trends, and operational efficiency with customizable reporting for Indian financial institutions.'
    }
  ];

  const benefits = [
    'Reduce RBI compliance operational costs by up to 65% through intelligent automation',
    'Achieve 99.7% accuracy in suspicious activity detection as per PMLA requirements',
    'Decrease false positive alerts by 80% with advanced behavioral analytics tuned for Indian markets',
    'Ensure 100% RBI, PMLA, and FEMA compliance with automated monitoring and reporting',
    'Improve customer retention by 25% through proactive risk management in Indian banking',
    'Reduce manual compliance workload by 90% with RBI-compliant intelligent workflows',
    'Enable real-time RBI examination readiness with comprehensive audit documentation',
    'Scale compliance operations across Indian branches without proportional staffing increase'
  ];

  const useCases = [
    {
      icon: Shield,
      title: 'Banks & NBFCs',
      description: 'Continuous monitoring of account holders for PMLA compliance, transaction monitoring as per RBI guidelines, and automated regulatory reporting to FIU-IND.',
      metrics: '200+ Banks Trust Us'
    },
    {
      icon: TrendingUp,
      title: 'Investment Management',
      description: 'Ongoing due diligence for investment clients, beneficial ownership tracking as per Companies Act, and SEBI compliance monitoring for Indian markets.',
      metrics: '150+ Investment Firms'
    },
    {
      icon: Globe,
      title: 'Cryptocurrency Platforms',
      description: 'Real-time monitoring of crypto users, transaction analysis, and compliance with evolving Indian digital asset regulations and RBI guidelines.',
      metrics: '50+ Crypto Platforms'
    },
    {
      icon: Users,
      title: 'Insurance Companies',
      description: 'Continuous policy holder monitoring, claims fraud detection, and IRDAI compliance for Indian insurance operations with automated regulatory reporting.',
      metrics: '100+ Insurance Providers'
    },
    {
      icon: BarChart3,
      title: 'Fintech & Payment Companies',
      description: 'Ongoing customer risk assessment, payment fraud monitoring, and compliance with RBI payment service regulations and NPCI guidelines.',
      metrics: '300+ Fintech Companies'
    },
    {
      icon: FileText,
      title: 'Wealth Management',
      description: 'Continuous client monitoring, suitability assessments, and compliance with SEBI wealth management regulations and Indian tax compliance requirements.',
      metrics: '80+ Wealth Managers'
    }
  ];

  const complianceFrameworks = [
    'RBI Guidelines',
    'PMLA Compliance',
    'FEMA Regulations',
    'SEBI Regulations',
    'Sanctions Screening',
    'FIU-IND Reporting',
    'Negative Profile Checks',
    'KYC Norms (India)',
    'PEP Screening',
    'Adverse Media Monitoring',
    'NPCI Standards',
    'Companies Act 2013',
  ];

  const stats = [
    { value: '500+', label: 'Financial Institutions', description: 'Trust our compliance solutions' },
    { value: '99.7%', label: 'Detection Accuracy', description: 'In suspicious activity identification per PMLA' },
    { value: '65%', label: 'Cost Reduction', description: 'In RBI compliance operations' },
    { value: '24/7', label: 'Monitoring', description: 'Continuous RBI compliance surveillance' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Post Onboarding Compliance India - Continuous Customer Monitoring | Reguard</title>
        <meta name="description" content="Advanced post-onboarding compliance solution for Indian financial institutions. Continuous customer monitoring, RBI compliance, and automated regulatory reporting. Reduce compliance costs by 65% with AI-powered surveillance." />
        <meta name="keywords" content="post onboarding compliance India, continuous customer monitoring India, RBI compliance, PMLA monitoring, ongoing due diligence India, AML monitoring India, transaction monitoring India, regulatory compliance automation India, suspicious activity detection, compliance surveillance, financial crime prevention India, regulatory reporting India, KYC India, customer lifecycle management India" />
        <link rel="canonical" href="https://reguard.com/solutions/post-onboarding-compliance" />
        <meta property="og:title" content="Post Onboarding Compliance India - Continuous Customer Monitoring" />
        <meta property="og:description" content="AI-powered post-onboarding compliance solution for Indian financial institutions with RBI compliance, continuous monitoring, and automated regulatory reporting." />
        <meta property="og:url" content="https://reguard.com/solutions/post-onboarding-compliance" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Shield size={32} className="text-white" />
                </div>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Enterprise Solution
                </span>
              </div>
              
              <h1 className="font-gilroy text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Post Onboarding
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Compliance for India
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Continuous customer monitoring and compliance surveillance specifically designed for Indian financial institutions. 
                Our AI-powered platform ensures ongoing RBI, PMLA, and FEMA compliance, detects emerging risks, and 
                automates regulatory workflows throughout the entire customer lifecycle in India.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => openSignUpModal('demo')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2"
                >
                  <Play size={20} />
                  <span>Request Demo</span>
                </button>
                <button 
                  onClick={() => openSignUpModal('trial')}
                  className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2"
                >
                  <BookOpen size={20} />
                  <span>Start Free Trial</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <CheckCircle size={24} className="text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Real-time Monitoring</h3>
                      <p className="text-gray-300 text-sm">24/7 customer surveillance</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <TrendingUp size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Dynamic Risk Scoring</h3>
                      <p className="text-gray-300 text-sm">AI-powered risk assessment</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Bell size={24} className="text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Automated Alerts</h3>
                      <p className="text-gray-300 text-sm">Intelligent compliance notifications</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <FileText size={24} className="text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Regulatory Reporting</h3>
                      <p className="text-gray-300 text-sm">Automated compliance documentation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gilroy text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Post-Onboarding Features
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced capabilities specifically designed for financial institutions to ensure continuous 
              RBI compliance and risk management throughout the entire customer relationship lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="font-gilroy text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="font-inter text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-gilroy text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Measurable Business Impact
              </h2>
              <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
                Our post-onboarding compliance solution delivers quantifiable results for financial institutions 
                that directly impact your bottom line while ensuring RBI regulatory adherence and risk mitigation.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle size={24} className="text-green-600 mt-1 flex-shrink-0" />
                    <p className="font-inter text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <h3 className="font-gilroy text-2xl font-bold text-gray-900 mb-6">ROI Calculator</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Annual RBI Compliance Costs</span>
                    <span className="text-2xl font-bold text-red-600">-65%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-900">PMLA False Positive Reduction</span>
                    <span className="text-2xl font-bold text-green-600">-80%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-900">STR Detection Accuracy</span>
                    <span className="text-2xl font-bold text-blue-600">99.7%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Manual Compliance Work Reduction</span>
                    <span className="text-2xl font-bold text-purple-600">-90%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gilroy text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Major Financial Sectors Applications
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for different financial sectors with RBI-specific compliance 
              requirements and risk management needs for the Indian market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-indigo-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <useCase.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-gilroy text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">{useCase.title}</h3>
                    <span className="text-sm text-indigo-600 font-semibold bg-indigo-50 px-3 py-1.5 rounded-full">{useCase.metrics}</span>
                  </div>
                </div>
                <p className="font-inter text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gilroy text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Regulatory Compliance Coverage
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage of major regulatory frameworks and compliance requirements 
              across RBI, SEBI, and other financial sector regulators.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-100 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Shield size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-xs leading-tight">{framework}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
            <div className="flex items-center justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl font-medium text-gray-900 mb-8 italic">
              "Reguard's Post Onboarding Compliance solution has transformed our ongoing customer 
              monitoring for RBI compliance. We've reduced our PMLA compliance costs by 60% while improving our STR detection 
              accuracy to 99.8%. The automated FIU-IND reporting alone saves us 40 hours per week."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                alt="Customer"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                <p className="text-gray-600">Chief Compliance Officer, Leading Indian Private Bank</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-gilroy text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Compliance Operations?
          </h2>
          <p className="font-inter text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Join over 500 financial institutions that trust Reguard for their post-onboarding 
            compliance needs. Start your journey to automated, intelligent compliance today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openSignUpModal('demo')}
              className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl flex items-center space-x-2 justify-center"
            >
              <Play size={20} />
              <span>Schedule Demo</span>
            </button>
            <button 
              onClick={() => openSignUpModal('trial')}
              className="border-2 border-white hover:bg-white hover:text-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2 justify-center"
            >
              <ArrowRight size={20} />
              <span>Start Free Trial</span>
            </button>
          </div>
          <div className="mt-8">
            <p className="text-indigo-200 text-sm">
              No credit card required • 30-day free trial • Full feature access
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <SignUpModal
        isOpen={signUpModal.isOpen}
        onClose={closeSignUpModal}
        type={signUpModal.type}
      />
    </div>
  );
};