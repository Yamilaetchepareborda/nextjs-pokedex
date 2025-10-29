export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-semibold mb-4 text-red-500">Mini Pokédex ⚡</h1>
      <p className="text-lg text-gray-600 mb-8">Explorá la Pokédex de la primera generación.</p>
      <a
        href="/pokedex"
        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        Ir a la Pokédex
      </a>
    </main>
  );
}
