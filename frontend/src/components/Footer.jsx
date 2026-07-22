
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-[auto_auto_auto_auto] gap-8 md:gap-12">
                    
                    {/* Brand - Takes only what it needs */}
                    <div className="w-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/logo.png" alt="Technical Drawers" className="h-10" />
                            <span className="font-extrabold text-xl">
                                Technical <span className="text-accent">Drawers</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Equipping Kenya's next generation of STEM professionals.
                        </p>
                        
                        {/* Social Media Icons */}
                        <div className="flex items-center gap-3 mt-5">
                            {/* Instagram - Gradient */}
                            <a
                                href=" https://www.instagram.com/technicaldrawers?igsh=MWlvbW9oenhtaXg2aQ== "
                                target="_blank"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                                style={{ background: 'radial-gradient(circle at 30% 110%, #ffdb70, #e4405f, #c13584, #833ab4, #5851db)' }}
                            >
                                <i className="fab fa-instagram text-white text-sm"></i>
                            </a>

                            {/* Facebook - Official Blue */}
                            <a
                                href="https://www.facebook.com/share/1DN8YCYcr9/"
                                target="_blank"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                                style={{ background: '#1877F2' }}
                            >
                                <i className="fab fa-facebook-f text-white text-sm"></i>
                            </a>

                            {/* TikTok - Black */}
                            <a
                                href="#"
                                aria-label="TikTok"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                                style={{ background: '#000000' }}
                            >
                                <i className="fab fa-tiktok text-white text-sm"></i>
                            </a>

                        </div>
                    </div>

                    {/* Quick Links - Takes only what it needs */}
                    <div className="w-auto">
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-accent transition">Home</Link></li>
                            <li><Link to="/products" className="text-gray-400 hover:text-accent transition">Products</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-accent transition">Our Blog</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-accent transition">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-accent transition">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact - Takes only what it needs */}
                    <div className="w-auto">
                        <h4 className="font-bold text-lg mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-400">
                                <i className="fas fa-map-marker-alt text-gray-400"></i>
                                Haile Selassie Ave, Nairobi
                            </li>
                            <li className="flex items-center gap-2 text-gray-400">
                                <i className="fas fa-envelope text-gray-400"></i>
                                <a href="mailto:info@technicaldrawers.co.ke" className="hover:text-accent transition">info@technicaldrawers.co.ke</a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-400">
                                <i className="fas fa-phone-alt text-gray-400"></i>
                                <a href="tel:+254700000000" className="hover:text-accent transition">+254 700 000 000</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter - Takes only what it needs */}
                    <div className="w-auto">
                        <h4 className="font-bold text-lg mb-4">Stay in the loop</h4>
                        <p className="text-gray-400 text-sm mb-4">We'll let you know when new stock arrives.</p>
                        <form 
                            className="flex flex-col sm:flex-row gap-2"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const email = e.target.querySelector('input').value;
                                if (email) {
                                    window.open(
                                        `https://wa.me/254700000000?text=Hello%20Technical%20Drawers%2C%20I'd%20like%20to%20subscribe%20to%20your%20newsletter.%20My%20email%20is%20${encodeURIComponent(email)}`,
                                        '_blank'
                                    );
                                    e.target.querySelector('input').value = '';
                                }
                            }}
                        >
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:border-accent"
                                required 
                            />
                            <button 
                                type="submit" 
                                className="bg-accent hover:bg-accent-hover text-primary font-bold px-4 py-2 rounded-lg transition whitespace-nowrap"
                            >
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>&copy; 2026 Technical Drawers. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy-policy" className="hover:text-accent transition">Privacy Policy</Link>
                        <Link to="/terms-conditions" className="hover:text-accent transition">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
