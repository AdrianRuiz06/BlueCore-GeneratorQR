import React from 'react'
import { Link2, Type, Wifi, Mail, Phone, MessageSquare, Share2 } from 'lucide-react'

const TABS = [
    { id: 'url', icon: Link2, label: 'URL' },
    { id: 'wifi', icon: Wifi, label: 'WiFi' },
    { id: 'text', icon: Type, label: 'Texto' },
    { id: 'email', icon: Mail, label: 'Email' },
    { id: 'phone', icon: Phone, label: 'Tel' },
    { id: 'sms', icon: MessageSquare, label: 'SMS' },
]

export default function InputPanel({ state }) {
    const { type, setType, text, setText, wifiData, setWifiData } = state

    return (
        <div className="glass-panel rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-900/10">
            <div className="grid grid-cols-3 sm:flex sm:overflow-x-auto p-2 bg-slate-900/30 border-b border-slate-700/50 gap-2 no-scrollbar">
                {TABS.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setType(tab.id)}
                        className={`flex flex-col sm:flex-row items-center justify-center gap-2 px-2 py-2 sm:px-4 sm:py-3 rounded-xl text-[10px] sm:text-sm font-semibold transition-all duration-300
              ${type === tab.id
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                    >
                        <tab.icon className={`w-4 h-4 sm:w-4 sm:h-4 ${type === tab.id ? 'animate-pulse' : ''}`} />
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>

            <div className="p-4 md:p-8">
                {type === 'wifi' ? (
                    <div className="space-y-5 animate-fade-in">
                        <div className="group">
                            <label className="block text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Nombre de red (SSID)</label>
                            <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                value={wifiData.ssid} onChange={(e) => setWifiData({ ...wifiData, ssid: e.target.value })} placeholder="Ej: MiCasa_WiFi_5G" />
                        </div>
                        <div className="group">
                            <label className="block text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Contraseña</label>
                            <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                value={wifiData.password} onChange={(e) => setWifiData({ ...wifiData, password: e.target.value })} placeholder="Contraseña del WiFi" />
                        </div>
                        <div className="group">
                            <label className="block text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Seguridad</label>
                            <select className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                                value={wifiData.encryption} onChange={(e) => setWifiData({ ...wifiData, encryption: e.target.value })}>
                                <option value="WPA">WPA/WPA2 (Más común)</option>
                                <option value="WEP">WEP</option>
                                <option value="nopass">Sin contraseña (Abierta)</option>
                            </select>
                        </div>
                    </div>
                ) : (
                    <div className="animate-fade-in">
                        <label className="block text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                            {type === 'url' ? 'Pega tu enlace aquí' :
                                type === 'email' ? 'Correo electrónico' :
                                    type === 'phone' ? 'Número de móvil' : 'Contenido del QR'}
                        </label>
                        <div className="relative">
                            <input
                                type={type === 'email' ? 'email' : 'text'}
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 pl-12 text-white placeholder-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-lg"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder={type === 'url' ? 'https://www.tuweb.com' : 'Escribe aquí...'}
                            />
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                {type === 'url' && <Link2 className="w-5 h-5" />}
                                {type === 'text' && <Type className="w-5 h-5" />}
                                {type === 'email' && <Mail className="w-5 h-5" />}
                                {type === 'phone' && <Phone className="w-5 h-5" />}
                                {type === 'sms' && <MessageSquare className="w-5 h-5" />}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
