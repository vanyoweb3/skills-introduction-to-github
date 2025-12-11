export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-blue-200 after:via-blue-200 after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-blue-900 after:opacity-40 pointer-events-none before:lg:h-[360px] before:lg:w-[720px] after:lg:h-[360px] after:lg:w-[400px] sm:translate-y-0">
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Next.js with Speed Insights</h1>
        <p className="mt-4 text-center text-xl text-gray-600">
          Vercel Speed Insights has been installed and configured!
        </p>
        <p className="mt-2 text-center text-lg text-gray-500">
          Check your Vercel dashboard to see real-time performance metrics.
        </p>
      </div>
    </main>
  )
}
