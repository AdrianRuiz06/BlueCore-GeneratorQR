import React from 'react'
import { FileText, AlertTriangle, Scale, Ban } from 'lucide-react'

export default function Terms() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 animate-fade-in">
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center p-4 bg-purple-500/10 rounded-full mb-6">
                    <FileText className="w-12 h-12 text-purple-400" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Términos y Condiciones
                </h1>
                <p className="mt-4 text-slate-400">Reglas claras, juego limpio.</p>
            </div>

            <div className="space-y-12 bg-slate-800/30 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-slate-700/50">

                {/* Sections */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3 text-pink-300">
                        <Scale className="w-6 h-6" />
                        <h2 className="text-2xl font-bold">1. Aceptación del Servicio</h2>
                    </div>
                    <p className="text-slate-300">
                        Al usar APPQR, aceptas operar bajo estos términos. Nuestra herramienta es gratuita y "tal cual" (as-is).
                    </p>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-3 text-red-300">
                        <Ban className="w-6 h-6" />
                        <h2 className="text-2xl font-bold">2. Uso Prohibido</h2>
                    </div>
                    <p className="text-slate-300">
                        Queda terminantemente prohibido usar nuestro generador para crear códigos QR que enlacen a:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 pt-4">
                        <li className="bg-slate-900/50 p-3 rounded-lg border border-red-900/30 text-red-200 text-sm">Contenido Malicioso / Virus</li>
                        <li className="bg-slate-900/50 p-3 rounded-lg border border-red-900/30 text-red-200 text-sm">Phishing o Estafas</li>
                        <li className="bg-slate-900/50 p-3 rounded-lg border border-red-900/30 text-red-200 text-sm">Contenido Ilegal</li>
                        <li className="bg-slate-900/50 p-3 rounded-lg border border-red-900/30 text-red-200 text-sm">Spam masivo</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-3 text-yellow-300">
                        <AlertTriangle className="w-6 h-6" />
                        <h2 className="text-2xl font-bold">3. Responsabilidad Limitada</h2>
                    </div>
                    <p className="text-slate-300">
                        APPQR no se hace responsable de daños directos o indirectos causados por el uso de la herramienta. Eres el único responsable del contenido que enlazas en tus códigos QR.
                    </p>
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
