import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-screen h-screen bg-gray-100">
      <div className="m-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Seja bem-vindo ao, <strong>Guest</strong>. 📦
          </h1>
          <p className="mt-6 ml-1 mr-1 text-lg leading-8 text-gray-600">
            Gerencie seus produtos e mantenha seu estoque organizado com nossa
            plataforma de gestão.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/signin">
              <button className="w-[150px] rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white">
                Entrar
              </button>
            </Link>
            <button className="text-sm font-semibold leading-6 text-gray-900">
              <Link href="/signup">
                <p className="hover:text-yellow-500">
                  Cadastre-se <span>→</span>
                </p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
