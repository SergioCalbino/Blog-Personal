import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"

function Contact() {
    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
    return (
        <Layout>
        <Helmet>
				<title>Murkiva | Contact </title>
				<meta name="description" content="Agencia de software y marketing digital"/>
				<meta name="keywords" content="agencia de software, agencia de marketing"/>
				<meta name="robots" content="all"/>
				<link rel="canonical" href="https://www.murkiva.com"/>
				<meta name="author" content="murkiva"/>

				 {/* Social Media Tags */}
				<meta property="og:title" content='Murkiva | Software Agency' />
				<meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
				<meta property="og:url" content="https://www.murkiva.com/" />
				<meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

				<meta name="twitter:title" content='Murkiva | Software Agency' />
				<meta
					name="twitter:description"
					content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
				/>
				<meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
				<meta name="twitter:card" content="summary_large_image" />
		

			</Helmet>
            <Navbar/>
            <div className="pt-28 ">

            Contact
            </div>
            <Footer/>
        </Layout>
    )
}

export default Contact