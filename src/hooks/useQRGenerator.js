import { useState, useCallback } from 'react'

const DEFAULT_OPTIONS = {
    width: 300,
    margin: 2,
    color: {
        dark: '#000000',
        light: '#ffffff'
    },
    errorCorrectionLevel: 'M'
}

export default function useQRGenerator() {
    const [type, setType] = useState('url') // url, text, email, wifi, phone, sms, social
    const [text, setText] = useState('https://example.com')
    const [options, setOptions] = useState(DEFAULT_OPTIONS)
    const [wifiData, setWifiData] = useState({ ssid: '', password: '', encryption: 'WPA' })
    const [bgStyle, setBgStyle] = useState('color') // color, transparent

    // Helper to generate QR string based on type
    const getQRData = useCallback(() => {
        switch (type) {
            case 'url':
            case 'text':
                return text
            case 'wifi':
                return `WIFI:S:${wifiData.ssid};T:${wifiData.encryption};P:${wifiData.password};;`
            case 'email':
                return `mailto:${text}`
            case 'phone':
                return `tel:${text}`
            case 'sms':
                return `smsto:${text}`
            default:
                return text
        }
    }, [type, text, wifiData])

    return {
        type, setType,
        text, setText,
        options, setOptions,
        wifiData, setWifiData,
        bgStyle, setBgStyle,
        getQRData
    }
}
