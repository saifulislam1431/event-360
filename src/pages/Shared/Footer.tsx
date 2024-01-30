import { ArrowRight, ArrowUpCircle, Euro, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#111617] p-10">
            <div className="footer text-[#E2E8F0]">
                <aside>
                    <Link to="/" className="text-2xl md:text-3xl font-bold">Event <span className="logo-style">360</span></Link>
                </aside>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <Link to="/" className="link link-hover">Pricing</Link>
                    <Link to="/" className="link link-hover">Overview</Link>
                    <Link to="/" className="link link-hover">Browse</Link>
                    <Link to="/" className="link link-hover">Accessibility</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Solutions</h6>
                    <Link to="/" className="link link-hover">Brainstorming</Link>
                    <Link to="/" className="link link-hover">Ideation</Link>
                    <Link to="/" className="link link-hover">Wireframing</Link>
                    <Link to="/" className="link link-hover">Research</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <Link to="/" className="link link-hover">Help Center</Link>
                    <Link to="/" className="link link-hover">Blog</Link>
                    <Link to="/" className="link link-hover">Tutorials</Link>
                    <Link to="/" className="link link-hover">FAQs</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <Link to="/" className="link link-hover">Contact Us</Link>
                    <Link to="/" className="link link-hover">Developers</Link>
                    <Link to="/" className="link link-hover">Documentation</Link>
                    <Link to="/" className="link link-hover">Integrations</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to="/" className="link link-hover">About</Link>
                    <Link to="/" className="link link-hover">Press</Link>
                    <Link to="/" className="link link-hover">Events</Link>
                    <Link to="/" className="link link-hover inline-flex items-center gap-1">Request Demo <ArrowRight /></Link>
                </nav>
            </div>



            <div className="w-full my-4 border-t"></div>
            <div className="footer items-center text-[#E2E8F0] text-xs">
                <aside className="items-center grid-flow-col">
                    <p> @ 2023. All rights reserved.</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <Link to="/">Terms</Link>
                    <Link to="/">Privacy</Link>
                    <Link to="/">Contact</Link>
                    <button className="inline-flex items-center gap-1"><Globe className="w-3 h-3" /> EN</button>
                    <button className="inline-flex items-center gap-1"><Euro className="w-3 h-3" /> EUR</button>
                    <button><ArrowUpCircle className="w-4 h-4" /></button>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;