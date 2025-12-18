import React from 'react'
import { Palette, Maximize } from 'lucide-react'

export default function StylePanel({ state }) {
    const { options, setOptions, bgStyle, setBgStyle } = state

    const handleColorChange = (key, value) => {
        setOptions(prev => ({
            ...prev,
            color: { ...prev.color, [key]: value }
        }))
    }

    return (
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden shadow-xl p-4 md:p-6 space-y-4 md:space-y-6">
            <div className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                <Palette className="w-5 h-5 text-purple-400" />
                <span>Personalización</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Colors */}
                <div className="space-y-3">
                    <label className="block text-sm font-medium text-slate-400">Color del QR</label>
                    <div className="flex items-center gap-3">
                        <input type="color" value={options.color.dark} onChange={(e) => handleColorChange('dark', e.target.value)}
                            className="h-10 w-14 rounded cursor-pointer bg-transparent border-0" />
                        <span className="text-sm font-mono text-slate-500">{options.color.dark}</span>
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="block text-sm font-medium text-slate-400">Color de Fondo</label>
                    <div className="flex items-center gap-3">
                        <input type="color" value={options.color.light} onChange={(e) => handleColorChange('light', e.target.value)}
                            className="h-10 w-14 rounded cursor-pointer bg-transparent border-0" disabled={bgStyle === 'transparent'} />
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="transp" checked={bgStyle === 'transparent'}
                                onChange={(e) => {
                                    setBgStyle(e.target.checked ? 'transparent' : 'color');
                                    if (e.target.checked) handleColorChange('light', '#ffffff00'); // Set alpha 0
                                    else handleColorChange('light', '#ffffff');
                                }}
                                className="rounded bg-slate-900 border-slate-600 text-blue-500 focus:ring-blue-500" />
                            <label htmlFor="transp" className="text-sm text-slate-400">Transparente</label>
                        </div>
                    </div>
                </div>

                {/* Size/Margin */}
                <div className="space-y-3">
                    <label className="block text-sm font-medium text-slate-400">Margen</label>
                    <input type="range" min="0" max="5" value={options.margin}
                        onChange={(e) => setOptions(prev => ({ ...prev, margin: parseInt(e.target.value) }))}
                        className="w-full accent-blue-500" />
                </div>

                <div className="space-y-3">
                    <label className="block text-sm font-medium text-slate-400">Corrección de Error (Complejidad)</label>
                    <select value={options.errorCorrectionLevel}
                        onChange={(e) => setOptions(prev => ({ ...prev, errorCorrectionLevel: e.target.value }))}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white text-sm">
                        <option value="L">L - Baja (7%)</option>
                        <option value="M">M - Media (15%)</option>
                        <option value="Q">Q - Alta (25%)</option>
                        <option value="H">H - Máxima (30%)</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
