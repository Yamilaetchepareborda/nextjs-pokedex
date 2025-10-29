"use client";

type PokemonCardProps = {
    name: string;
    url: string;
};

export default function PokemonCard({ name, url }: PokemonCardProps) {
    // ✳️ Extraemos el ID desde la URL de la PokéAPI
    const id = url.match(/\/pokemon\/(\d+)\//)?.[1] ?? "0";

    // URL de la imagen oficial del Pokémon
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    return (
        <a
            href={`/pokedex/${name}`}
            className="block border rounded-lg p-3 text-center bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition"
        >
            <div className="w-full h-32 flex justify-center items-center">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-24 h-24 object-contain"
                    onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
                    }}
                />
            </div>

            <p className="mt-2 text-sm font-medium capitalize">{name}</p>
        </a>
    );
}
