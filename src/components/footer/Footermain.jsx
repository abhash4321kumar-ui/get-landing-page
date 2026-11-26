import React from 'react'

const Footermain = () => {
  return (
     <footer className="bg-[#183153] text-slate-300 font-sans pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
    {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12">
          
        {/* Column 1: Brand Info & Social Icons */}
          <div>
        {/* Brand Logo */}
            <div className="flex items-center gap-3 mb-5">
            {/* Custom SVG Travel Emblem */}
              <div className="w-10 h-10 rounded-lg bg-[#224068] flex items-center justify-center shrink-0 border border-slate-600/40">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-white font-bold text-lg tracking-tight leading-none">
                  Multi Destinations
                </h2>
                <span className="inline-block mt-1 bg-orange-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  Travel Fantasies Made True
                </span>
              </div>
            </div>

        {/* Description */}
            <p className="text-sm leading-relaxed text-slate-300 max-w-xs mb-6">
              Creating unforgettable Kashmir travel experiences since 2010. Your trusted partner for authentic Kashmiri adventures.
            </p>

        {/* Social Media Buttons */}
            <div className="flex items-center gap-3">
            {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-md bg-[#223e66] hover:bg-[#2c4f80] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>
              </a>

            {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-md bg-[#223e66] hover:bg-[#2c4f80] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

            {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-9 h-9 rounded-md bg-[#223e66] hover:bg-[#2c4f80] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

        {/* Column 2: Explore Links */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider pb-3 mb-5 border-b border-slate-600/50">
              EXPLORE
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-white transition-colors">
                  Tours
                </a>
              </li>
              <li>
                <a href="#hotels" className="hover:text-white transition-colors">
                  Hotels
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider pb-3 mb-5 border-b border-slate-600/50">
              CONTACT US
            </h3>
            <ul className="space-y-4 text-sm">
            {/* Toll Free Phone */}
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-sky-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:18008890856" className="hover:text-white transition-colors">
                  1800 889 0856 (Toll Free)
                </a>
              </li>

              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-sky-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919419297657" className="hover:text-white transition-colors">
                  +91-94192 97657
                </a>
              </li>

              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-sky-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@themultidestinations.com" className="hover:text-white transition-colors break-all">
                  contact@themultidestinations.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-sky-400 shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">
                  1st Floor, Pulloo Complex, Munawara Abad, Srinagar, J&amp;K 190001
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-600/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© 2026 Multi Destinations. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-slate-500">•</span>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footermain