import React, { useEffect, useRef } from 'react'
import QRCode from 'qrcode'
import { Download, Copy } from 'lucide-react'
import { toPng, toSvg } from 'html-to-image'

export default function QRPreview({ state }) {
    const { getQRData, options } = state
    const canvasRef = useRef(null)
    const qrWrapperRef = useRef(null)

    useEffect(() => {
        const generateQR = async () => {
            try {
                if (canvasRef.current) {
                    await QRCode.toCanvas(canvasRef.current, getQRData(), {
                        width: 1000, // High res for download
                        margin: options.margin,
                        color: options.color,
                        errorCorrectionLevel: options.errorCorrectionLevel
                    })
                }
            } catch (err) {
                console.error(err)
            }
        }
        generateQR()
    }, [getQRData, options])

    const handleDownload = async (format) => {
        if (!qrWrapperRef.current) return
        try {
            const dataUrl = await toPng(qrWrapperRef.current, { cacheBust: true, backgroundColor: options.color.light })
            const link = document.createElement('a')
            link.download = `appqr.${format}`
            link.href = dataUrl
            link.click()
        } catch (err) {
            console.error('Error downloading', err)
        }
    }

    const handleCopy = async () => {
        if (!canvasRef.current) return;
        canvasRef.current.toBlob(blob => navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]))
        alert('QR Copiado al portapapeles')
    }

    return (
        <div className="lg:sticky lg:top-24 space-y-4">
            {/* Main Card - Shrink wrap perfectly */}
            <div className="flex justify-center">
                <div className="bg-white rounded-xl p-2 shadow-2xl inline-flex items-center justify-center relative overflow-hidden">
                    {/* Decorative Grid - Hidden on mobile */}
                    <div className="hidden md:block absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />

                    {/* QR Wrapper - Zero extra space on mobile */}
                    <div ref={qrWrapperRef} className="relative z-10 bg-white rounded p-0 leading-none flex">
                        <canvas ref={canvasRef} className="block" style={{ width: '200px', height: 'auto', maxWidth: '100%', aspectRatio: '1/1' }} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <button onClick={() => handleDownload('png')} className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-blue-900/30">
                    <Download className="w-5 h-5" /> PNG
                </button>
                <button onClick={() => handleDownload('svg')} className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-slate-900/30">
                    <Download className="w-5 h-5" /> SVG
                </button>
                <button onClick={handleCopy} className="col-span-2 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium py-3 px-4 rounded-xl border border-slate-700 transition-all">
                    <Copy className="w-4 h-4" /> Copiar al portapapeles
                </button>
            </div>
        </div>
    )
}
