import React from 'react'
import AdSenseZone from '../components/AdSenseZone'
import InputPanel from '../components/InputPanel'
import StylePanel from '../components/StylePanel'
import QRPreview from '../components/QRPreview'
import SEOContent from '../components/SEOContent'
import useQRGenerator from '../hooks/useQRGenerator'

export default function Home() {
    const qrState = useQRGenerator()

    return (
        <div className="space-y-12">
            {/* Hero */}
            <section className="text-center space-y-4 py-12">
                <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    BlueCore GeneratorQR
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Crea códigos QR personalizados para WiFi, URL, Email y más. Sin registro, rápido y seguro.
                </p>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-900/50"
                    onClick={() => document.getElementById('generator').scrollIntoView({ behavior: 'smooth' })}
                >
                    Crear QR Ahora
                </button>
            </section>

            <AdSenseZone slot="top" />

            {/* Generator Section */}
            <div id="generator" className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Left: Controls */}
                <div className="lg:col-span-7 space-y-6">
                    <InputPanel state={qrState} />
                    <StylePanel state={qrState} />
                </div>

                {/* Right: Preview */}
                <div className="lg:col-span-5 sticky top-24">
                    <QRPreview state={qrState} />
                </div>
            </div>

            <AdSenseZone slot="middle" />

            <SEOContent />

            <AdSenseZone slot="bottom" />
        </div>
    )
}
