import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo variant="light" className="h-8 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading RegTech provider offering comprehensive identity verification 
              and compliance APIs for modern businesses.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com/regaurd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/company/regaurd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/regaurd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:hello@regaurd.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">KYC APIs</a></li>
              <li><Link to="/apis/kyb" className="text-gray-400 hover:text-white transition-colors">KYB Solutions</Link></li>
              <li><Link to="/apis/aml" className="text-gray-400 hover:text-white transition-colors">AML Screening</Link></li>
              <li><Link to="/apis/due-diligence" className="text-gray-400 hover:text-white transition-colors">Due Diligence</Link></li>
              <li><Link to="/apis" className="text-gray-400 hover:text-white transition-colors">All APIs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources/developer-docs" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/resources/developer-docs" className="text-gray-400 hover:text-white transition-colors">API Reference</Link></li>
              <li><Link to="/resources/developer-docs" className="text-gray-400 hover:text-white transition-colors">Guides & Tutorials</Link></li>
              <li><a href="https://status.regaurd.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Status Page</a></li>
              <li><Link to="/resources/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Regaurd. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">SOC 2 Compliant</span>
              <span className="text-gray-400 text-sm">GDPR Ready</span>
              <span className="text-gray-400 text-sm">ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};