

import { Layout } from 'components/layouts';
import { FavoritePokemons } from 'components/pokemon';
import { NoFavorites } from 'components/ui';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { useState } from 'react';
import { localFavorites } from 'utils';

const FavoritesPage: NextPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons);
    }, [])


    return (
        <Layout title='Favorite Pokémons' >

            {
                favoritePokemons.length === 0
                    ? <NoFavorites />
                    : <FavoritePokemons favoritePokemons={favoritePokemons} />
            }

        </Layout>
    )
}

export default FavoritesPage;

