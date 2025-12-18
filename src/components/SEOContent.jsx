import React from 'react'
import { Zap, ShieldCheck, Smartphone, Globe } from 'lucide-react'

export default function SEOContent() {
    return (
        <div className="space-y-16 py-12">
            {/* Benefits */}
            <section id="benefits">
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">¿Por qué usar APPQR?</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center hover:bg-slate-800 transition-all">
                        <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                        <h3 className="font-bold text-lg mb-2">Ultra Rápido</h3>
                        <p className="text-slate-400 text-sm">Generación instantánea en tu navegador. Sin tiempos de espera.</p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center hover:bg-slate-800 transition-all">
                        <ShieldCheck className="w-10 h-10 text-green-400 mx-auto mb-4" />
                        <h3 className="font-bold text-lg mb-2">100% Seguro</h3>
                        <p className="text-slate-400 text-sm">Tus datos no se envían a ningún servidor. Todo ocurre en tu dispositivo.</p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center hover:bg-slate-800 transition-all">
                        <Smartphone className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                        <h3 className="font-bold text-lg mb-2">Mobile First</h3>
                        <p className="text-slate-400 text-sm">Diseñado para funcionar perfectamente en cualquier móvil o tablet.</p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center hover:bg-slate-800 transition-all">
                        <Globe className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                        <h3 className="font-bold text-lg mb-2">Sin Registro</h3>
                        <p className="text-slate-400 text-sm">No necesitas cuenta ni email. Genera QRs ilimitados totalmente gratis.</p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">Preguntas Frecuentes</h2>
                <div className="space-y-4">
                    <details className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden group">
                        <summary className="p-6 cursor-pointer font-medium flex items-center justify-between hover:bg-slate-750 transition-colors">
                            ¿Son gratis los códigos QR generados?
                            <span className="text-blue-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-400">
                            Sí, APPQR es una herramienta 100% gratuita para uso personal y comercial. No cobramos nada y no hay límites de escaneos para los QRs estáticos que generas aquí.
                        </div>
                    </details>
                    <details className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden group">
                        <summary className="p-6 cursor-pointer font-medium flex items-center justify-between hover:bg-slate-750 transition-colors">
                            ¿Caducan los códigos QR?
                            <span className="text-blue-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-400">
                            No. Los códigos QR generados en APPQR son estáticos y contienen la información directamente en la imagen. Mientras la URL o los datos que pusiste sigan siendo válidos, el QR funcionará para siempre.
                        </div>
                    </details>
                    <details className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden group">
                        <summary className="p-6 cursor-pointer font-medium flex items-center justify-between hover:bg-slate-750 transition-colors">
                            ¿Qué tipo de información puedo guardar en un QR?
                            <span className="text-blue-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-400">
                            Puedes guardar enlaces web (URLs), texto plano, información de redes WiFi (SSID y clave), números de teléfono, direcciones de email, SMS predefinidos y más.
                        </div>
                    </details>
                </div>
            </section>
        </div>
    )
}
