import Link from "next/link";
import { getPokemonPage } from "@/app/lib/pokeapi";
import PokemonCard from "@/app/components/pokemon-card";
import SearchClient from "@/app/components/search-client";
import PaginationClient from "@/app/components/pagination-client";

type PokemonListResult = {
    name: string;
    url: string;
};

function getOffset(searchParams: { page?: string }) {
    const page = Number(searchParams.page ?? "1");
    return { page, offset: (page - 1) * 20 };
}

export default async function Pokedex(props: { searchParams: Promise<{ page?: string }> }) {
    const searchParams = await props.searchParams;

    const { page, offset } = getOffset(searchParams);
    const limit = 20;
    const totalPokemons = 151; 
    const totalPages = Math.ceil(totalPokemons / limit);

    const data = await getPokemonPage(limit, offset);

    return (
        <main className="max-w-4xl mx-auto p-6 space-y-4">
            <h1 className="text-2xl font-semibold">Pokédex</h1>

            {/* 🔍 Formulario de búsqueda */}
            <SearchClient />

            {/* 🧩 Lista de Pokémon */}
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.results.map((p: PokemonListResult) => (
                    <li key={p.name}>
                        <PokemonCard name={p.name} url={p.url} />
                    </li>
                ))}
            </ul>

            {/* 🔽 Navegación entre páginas */}
            <PaginationClient currentPage={page} totalPages={totalPages} />
        </main>
    );
}
