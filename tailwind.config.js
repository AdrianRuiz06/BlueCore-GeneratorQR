/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            colors: {
                slate: {
                    750: '#2d3748', // Custom shade often used
                }
            }
        },
    },
    plugins: [],
}
