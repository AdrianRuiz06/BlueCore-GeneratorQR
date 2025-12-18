import React from 'react'
import { Cookie, Settings, CheckCircle } from 'lucide-react'

export default function Cookies() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 animate-fade-in">
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center p-4 bg-orange-500/10 rounded-full mb-6">
                    <Cookie className="w-12 h-12 text-orange-400" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400">
                    Política de Cookies
                </h1>
                <p className="mt-4 text-slate-400">Cómo usamos los datos para mejorar tu experiencia.</p>
            </div>

            <div className="space-y-12 bg-slate-800/30 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-slate-700/50">

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-orange-200">¿Usamos Cookies?</h2>
                    <p className="text-slate-300">
                        Sí, pero mínimas. Usamos cookies principalmente a través de terceros como Google AdSense para personalizar la publicidad y asegurar que el sitio se mantenga gratuito.
                    </p>
                </section>

                <section className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50">
                        <div className="flex items-center gap-3 mb-4 text-blue-400">
                            <Settings className="w-6 h-6" />
                            <h3 className="font-bold">Cookies Técnicas</h3>
                        </div>
                        <p className="text-sm text-slate-400">Necesarias para que la web funcione (ej. recordar tu preferencia de idioma o sesión si la hubiera).</p>
                    </div>

                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50">
                        <div className="flex items-center gap-3 mb-4 text-green-400">
                            <CheckCircle className="w-6 h-6" />
                            <h3 className="font-bold">Cookies Publicitarias</h3>
                        </div>
                        <p className="text-sm text-slate-400">Gestionadas por Google AdSense. Permiten mostrar anuncios relevantes para ti. Puedes desactivarlas en la configuración de Google.</p>
                    </div>
                </section>

                <section className="pt-8 border-t border-slate-700/50">
                    <p className="text-sm text-slate-500 text-center">
                        Última actualización: {new Date().toLocaleDateString()}
                    </p>
                </section>
            </div>
        </div>
    )
}
