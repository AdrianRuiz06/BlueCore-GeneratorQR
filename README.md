# 🔷 BlueCore GeneratorQR

**BlueCore GeneratorQR** es una aplicación web progresiva (PWA) moderna y profesional diseñada para generar códigos QR personalizados de alta calidad. 

Construida con las últimas tecnologías web (**React, Vite, Tailwind CSS**), está optimizada para el rendimiento, el SEO y la monetización con **Google AdSense**.

![BlueCore GeneratorQR Screenshot](public/logo.png)

## ✨ Características Principales

*   **⚡ Generación Instantánea**: Crea QRs para URLs, WiFi, Email, Teléfono, SMS y Texto plano en tiempo real.
*   **🎨 Personalización Avanzada**:
    *   Selecciona colores personalizados (QR y fondo).
    *   Soporte para fondos transparentes.
    *   Ajuste de márgenes y niveles de corrección de error.
*   **📱 Diseño PWA (Mobile-First)**:
    *   Instalable como App nativa en **Android, iOS y Windows**.
    *   Diseño "Glassmorphism" premium con modo oscuro.
    *   Experiencia de usuario fluida y receptiva.
*   **💰 Lista para Monetizar**:
    *   Espacios reservados para **Google AdSense** (Top, Middle, Bottom).
    *   Páginas legales incluidas y cumpliendo normativas (Privacidad, Términos, Cookies).
*   **🔍 SEO Optimizado**:
    *   Meta etiquetas dinámicas con `react-helmet-async`.
    *   Contenido semántico y FAQs para mejorar el posicionamiento.
*   **🔒 Privacidad Total**: Arquitectura "Client-Side First". Los datos nunca salen del dispositivo del usuario.

## 🛠️ Tecnologías Utilizadas

*   **React 18**: Librería de UI.
*   **Vite**: Build tool de próxima generación (ultra rápido).
*   **Tailwind CSS**: Framework de estilos para un diseño moderno.
*   **QRCode**: Librería robusta para la generación de matrices QR.
*   **Lucide React**: Iconografía moderna y ligera.
*   **HTML-to-Image**: Para la exportación de los QRs en alta calidad.

## 🚀 Instalación y Ejecución Local

Sigue estos pasos para ejecutar el proyecto en tu ordenador:

1.  **Clonar el repositorio** (o descargar el código):
    ```bash
    git clone https://github.com/AdrianRuiz06/BlueCore-GeneratorQR.git
    cd BlueCore-GeneratorQR
    ```

2.  **Instalar dependencias**:
    Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

## 📦 Despliegue (Deploy)

Para subir tu web a internet (gratis), te recomendamos **Netlify** o **Vercel**:

1.  **Construir el proyecto**:
    ```bash
    npm run build
    ```
    Esto creará una carpeta `dist/` optimizada para producción.

2.  **Subir**:
    *   **En Vercel/Netlify**: Simplemente conecta tu repositorio de GitHub (`AdrianRuiz06/BlueCore-GeneratorQR`) y el despliegue será automático.

## 📝 Configuración de AdSense

El proyecto viene con componentes `AdSenseZone.jsx` listos para usar.
Para activar los anuncios reales:
1.  Ve a `src/components/AdSenseZone.jsx`.
2.  Descomenta el código de producción o reemplaza el contenido del `return` con el script que te da Google AdSense (`<ins class="adsbygoogle"...>`).

## 📄 Licencia

Este proyecto es propiedad de **BlueCore**. Todos los derechos reservados.

---
© 2025 BlueCore GeneratorQR. Creado con ❤️ y código limpio.
