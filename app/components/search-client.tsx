"use client";
export default function SearchClient() {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const q = new FormData(e.currentTarget).get("q") as string;
        if (q) window.location.href = `/pokedex/${q.toLowerCase()}`;
    };

    return (
        <form onSubmit={onSubmit} className="flex gap-2">
            <input
                name="q"
                placeholder="Buscar por nombre…"
                className="border rounded px-3 py-2 w-full"
            />
            <button
                type="submit"
                className="border rounded px-3 bg-gray-100 hover:bg-gray-200 transition"
            >
                Ir
            </button>
        </form>
    );
}
