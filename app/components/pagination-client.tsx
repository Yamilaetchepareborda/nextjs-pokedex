"use client";

import { useRouter, useSearchParams } from "next/navigation";

type PaginationClientProps = {
    currentPage: number;
    totalPages: number;
};

export default function PaginationClient({ currentPage, totalPages }: PaginationClientProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const goToPage = (page: number) => {
        // ✅ Evitamos ir a páginas inválidas
        if (page < 1 || page > totalPages) return;

        // ✅ Actualizamos el parámetro 'page' en la URL
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        router.push(`/pokedex?${params.toString()}`);
    };

    return (
        <nav className="flex justify-between pt-4">
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`border px-3 py-1 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
                    }`}
            >
                ← Anterior
            </button>

            <span>
                Página {currentPage} de {totalPages}
            </span>

            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className={`border px-3 py-1 rounded ${currentPage >= totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
                    }`}
            >
                Siguiente →
            </button>
        </nav>
    );
}
