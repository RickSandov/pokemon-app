import { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
    title?: string
}

const origin = typeof window === "undefined" ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Ricardo Sandoval" />
                <meta name="description" content="Pokedex  " />
                <meta name="keywords" content="xxx, pokemon, pokedex" />

                <meta property="og:title" content={`Info ${title}`} />
                <meta property="og:description" content={`Información acerca de ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0 20px '
            }} >
                {children}
            </main>
        </>
    )
}

export default Layout