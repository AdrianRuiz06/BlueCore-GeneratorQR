import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Layout from './components/Layout'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'

function App() {
    return (
        <Router>
            <Helmet>
                <title>BlueCore GeneratorQR</title>
                <meta name="theme-color" content="#0f172a" />
            </Helmet>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cookies" element={<Cookies />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
