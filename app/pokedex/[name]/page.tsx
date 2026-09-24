import Link from "next/link";
import { getPokemon } from "@/app/lib/pokeapi";
import StatsBar from "@/app/components/stats-bar";

type PokemonPageProps = {
    params: Promise<{ name: string }>;
};

type PokemonType = {
    type: { name: string };
};

type PokemonStat = {
    base_stat: number;
    stat: { name: string };
};

export default async function PokemonPage({ params }: PokemonPageProps) {
    const { name } = await params;
    const pokemon = await getPokemon(name);

    return (
        <main className="max-w-2xl mx-auto p-6 space-y-4">
            <Link href="/pokedex" className="text-sm underline">
                ← Volver
            </Link>

            <header className="flex items-center gap-4">
                {pokemon.sprites.front_default && (
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        width={96}
                        height={96}
                    />
                )}
                <div>
                    <h1 className="text-2xl font-semibold capitalize">{pokemon.name}</h1>
                    <p className="text-sm text-gray-500">
                        Tipos:{" "}
                        {pokemon.types
                            .map((t: PokemonType) => t.type.name)
                            .join(", ")}{" "}
                        — Altura: {pokemon.height / 10} m — Peso: {pokemon.weight / 10} kg
                    </p>
                </div>
            </header>

            <section>
                <h2 className="font-medium mb-2">Base stats</h2>
                <div className="space-y-2">
                    {pokemon.stats.map((s: PokemonStat) => (
                        <StatsBar
                            key={s.stat.name}
                            label={s.stat.name}
                            value={s.base_stat}
                            max={200}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
