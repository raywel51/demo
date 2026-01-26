import {Elysia} from "elysia";
import {html, Html} from "@elysiajs/html";

const app = new Elysia()
    .use(html()) // เรียกใช้งาน Plugin
    .get("/", () => (
        <html lang="en">
        <head>
            <title>Welcome to Elysia</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body
            class="bg-gradient-to-br from-indigo-900 via-slate-900 to-black flex items-center justify-center h-screen text-white">
        <div class="text-center group">
            <div class="text-8xl mb-6 animate-bounce">🦊</div>
            <h1 class="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
                Elysia HTML Plugin
            </h1>
            <p class="text-slate-400 text-xl mb-8">
                Rendering HTML with JSX is now seamless.
            </p>
            <div class="flex gap-4 justify-center">
                <button
                    class="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                    Get Started
                </button>
                <button
                    class="border border-slate-700 px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                    Github
                </button>
            </div>
        </div>
        </body>
        </html>
    ))
    .listen(3333);

console.log(
    `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);