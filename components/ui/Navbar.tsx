import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";


export const Navbar = () => {

    const { theme } = useTheme()

    return (
        <nav style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '0 20px',
            backgroundColor: theme?.colors.gray900.value
        }} >

            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                alt="Icon"
                width={70}
                height={70}
            />

            <NextLink href={'/'} passHref >
                <Link>
                    <Text color='white' h2 >P</Text>
                    <Text color='white' h3 >okémon</Text>
                </Link>
            </NextLink>

            <Spacer css={{
                flex: 1
            }} />


            <NextLink href={'/favorites'} passHref >
                <Link css={{ marginRight: '10px' }} >
                    <Text>Favoritos</Text>
                </Link>
            </NextLink>

        </nav>
    );
}
