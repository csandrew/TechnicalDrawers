import React from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Footer = () => {
    return (
        <footer className="bg-primary text-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-3">
                            <img src="/logo.png" alt="Technical Drawers" className="h-10 w-auto" />
                            <span className="text-lg font-semibold">Technical<span className="text-golden">Drawers</span></span>
                        </div>
                        <p className="mt-4 text-sm text-gray-200 mb-5">Equipping Kenya's next generation of professionals.</p>
                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 bg-instagram"
                            >
                                <i className="fab fa-instagram text-white text-lg"></i>
                            </a>
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 bg-facebook"
                            >
                                <i className="fab fa-facebook-f text-white text-lg"></i>
                            </a>
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 bg-twitter"
                            >
                                <i className="fab fa-twitter text-white text-lg"></i>
                            </a>
                            <a
                                href="#"
                                aria-label="TikTok"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 bg-tiktok"
                            >
                                <i className="fab fa-tiktok text-white text-lg"></i>
                            </a>
                            <a
                                href="#"
                                aria-label="YouTube"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 bg-youtube"
                            >
                                <i className="fab fa-youtube text-white text-lg"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-golden">Home</Link></li>
                            <li><Link to="/products" className="hover:text-golden">Products</Link></li>
                            <li><Link to="/about" className="hover:text-golden">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-golden">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-200">
                            <li className="flex items-start gap-2"><i className="fas fa-map-marker-alt mt-1"></i><span>Haile Selassie Avenue, Nairobi</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-envelope mt-1"></i><a href="mailto:info@technicaldrawers.co.ke" className="hover:text-golden">info@technicaldrawers.co.ke</a></li>
                            <li className="flex items-start gap-2"><i className="fas fa-phone-alt mt-1"></i><a href="tel:+254700000000" className="hover:text-golden">+254 700 000 000</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Stay in the loop</h4>
                        <p className="text-sm text-gray-200">We'll let you know when new stock arrives.</p>
                        <form
                            className="mt-4 flex gap-2"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const email = e.target.querySelector('input').value;
                                if (email) {
                                    window.open(
                                        `https://wa.me/254700000000?text=Hello%20Technical%20Drawers%2C%20I'd%20like%20to%20subscribe%20to%20your%20newsletter.%20My%20email%20is%20${encodeURIComponent(email)}`,
                                        '_blank'
                                    );
                                    e.target.querySelector('input').value = '';
                                    toast.success('Check your WhatsApp!');
                                }
                            }}
                        >
                            <input type="email" placeholder="Your email address" required className="flex-1 px-3 py-2 border rounded bg-white text-gray-800" />
                            <button type="submit" className="bg-accent text-primary px-4 rounded hover:bg-accent-hover">
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-8 border-t pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
                    <p>&copy; 2026 Technical Drawers. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link to="/privacy-policy" className="hover:text-golden">Privacy Policy</Link>
                        <Link to="/terms-conditions" className="hover:text-golden">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;