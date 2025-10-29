export type PokemonListResponse = {
    count: number;
    results: { name: string; url: string }[];
};

const API = "https://pokeapi.co/api/v2";

export async function getPokemonPage(limit = 20, offset = 0): Promise<PokemonListResponse> {
    try {
        const res = await fetch(`${API}/pokemon?limit=${limit}&offset=${offset}`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            console.error("❌ Error al obtener la lista de Pokémon:", res.statusText);
            throw new Error("No se pudo obtener la lista de Pokémon");
        }

        return res.json();
    } catch (err) {
        console.error("⚠️ Error al llamar a la API de Pokémon:", err);
        return { count: 0, results: [] }; 
    }
}

export async function getPokemon(name: string): Promise<any> {
    if (!name) throw new Error("Nombre de Pokémon no proporcionado");
    const cleanName = name.trim().toLowerCase();

    const res = await fetch(`${API}/pokemon/${cleanName}`, { next: { revalidate: 60 } });

    if (!res.ok) {
        console.error(`❌ Pokémon no encontrado: ${cleanName}`);
        throw new Error("Pokémon no encontrado");
    }

    return res.json();
}
