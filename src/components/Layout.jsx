import React, { useState } from 'react'
import { Menu, X, Rocket, Shield, Info, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Layout({ children }) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 overflow-x-hidden w-full">
            <header className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl text-blue-400">
                        <Rocket className="w-6 h-6" />
                        <span>BlueCore GeneratorQR</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
                        <Link to="/" className="hover:text-white transition-colors">Generador</Link>
                        <a href="#benefits" className="hover:text-white transition-colors">Beneficios</a>
                        <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                    </nav>

                    <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-slate-800 border-b border-slate-700 p-4 flex flex-col gap-4">
                        <Link to="/" className="block py-2" onClick={() => setMenuOpen(false)}>Generador</Link>
                        <a href="#benefits" className="block py-2" onClick={() => setMenuOpen(false)}>Beneficios</a>
                        <a href="#faq" className="block py-2" onClick={() => setMenuOpen(false)}>FAQ</a>
                    </div>
                )}
            </header>

            <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
                {children}
            </main>

            <footer className="border-t border-slate-800 bg-slate-900 py-12 text-slate-400 text-sm">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-bold text-slate-200 mb-4">BlueCore GeneratorQR</h3>
                        <p>Generador de códigos QR profesional y gratuito. Crea, personaliza y descarga tus QRs en segundos.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-200 mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link to="/privacy" className="hover:text-blue-400">Política de Privacidad</Link></li>
                            <li><Link to="/terms" className="hover:text-blue-400">Términos de Uso</Link></li>
                            <li><Link to="/cookies" className="hover:text-blue-400">Política de Cookies</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-200 mb-4">Contacto</h3>
                        <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> contacto@appqr.com</p>
                    </div>
                </div>
                <div className="text-center mt-12 text-slate-600">
                    © {new Date().getFullYear()} BlueCore GeneratorQR. Todos los derechos reservados.
                </div>
            </footer>
        </div>
    )
}
