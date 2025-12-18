import React from 'react'
import { Shield, Lock, Eye, Server } from 'lucide-react'

export default function Privacy() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 animate-fade-in">
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center p-4 bg-blue-500/10 rounded-full mb-6">
                    <Shield className="w-12 h-12 text-blue-400" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    Política de Privacidad
                </h1>
                <p className="mt-4 text-slate-400">Transparencia total sobre tus datos.</p>
            </div>

            <div className="space-y-12 bg-slate-800/30 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-slate-700/50">

                <section className="space-y-4">
                    <div className="flex items-center gap-3 text-blue-300">
                        <Lock className="w-6 h-6" />
                        <h2 className="text-2xl font-bold">1. Privacidad Local (Client-Side)</h2>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                        APPQR funciona con una arquitectura <strong>"Client-Side First"</strong>. Esto significa que cuando generas un código QR:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-400">
                        <li>Tus datos (URLs, contraseñas WiFi, teléfonos) <strong>NUNCA</strong> salen de tu dispositivo.</li>
                        <li>No almacenamos tu información en ninguna base de datos.</li>
                        <li>La generación de la imagen ocurre en la memoria de tu navegador.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-3 text-purple-300">
                        <Eye className="w-6 h-6" />
                        <h2 className="text-2xl font-bold">2. Cookies y Publicidad</h2>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                        Utilizamos <strong>Google AdSense</strong> para mostrar anuncios que nos ayudan a mantener esta herramienta gratuita. Google puede utilizar cookies:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-400">
                        <li>Cookies de publicidad para mostrarte anuncios relevantes basados en tus intereses.</li>
                        <li>Cookies analíticas para entender cómo se usa nuestra web (de forma anónima).</li>
                        <li>Puedes gestionar tus preferencias de publicidad directamente en Google.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-3 text-emerald-300">
                        <Server className="w-6 h-6" />
                        <h2 className="text-2xl font-bold">3. Datos de Navegación</h2>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                        No recopilamos datos personales identificables (PII) como tu nombre o dirección real. Solo recopilamos datos técnicos anónimos (tipo de dispositivo, navegador) para asegurar que la App funcione correctamente en tu móvil u ordenador.
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
