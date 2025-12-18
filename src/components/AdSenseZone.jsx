import React from 'react'

export default function AdSenseZone({ slot }) {
    // Visualmente más atractivo y menos intrusivo mientras no haya anuncios reales
    return (
        <div className="w-full max-w-4xl mx-auto my-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <div className="border border-slate-700/50 bg-slate-900/30 rounded-xl p-4 flex flex-col items-center justify-center min-h-[100px] border-dashed">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Espacio Publicitario</span>
                <span className="text-sm text-slate-600">Aquí aparecerá tu anuncio optimizado</span>
            </div>
        </div>
    )
}
