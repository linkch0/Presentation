<script setup>
// Reveal.js and plugins
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/simple.css";
import "highlight.js/styles/atom-one-dark.css";
import Reveal from "reveal.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Search from "reveal.js/plugin/search/search.esm.js";
import Notes from "reveal.js/plugin/notes/notes.esm.js";
import Math from "reveal.js/plugin/math/math.esm.js";
import Zoom from "reveal.js/plugin/zoom/zoom.esm.js";
// Vue
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
console.log("Id from route", route.params.id);

// Init Reveal.js after the component is mounted
const n = 3;

onMounted(() => {
    let deck = new Reveal({
        plugins: [Highlight, Markdown, Search, Notes, Math, Zoom],
    });
    deck.initialize({
        history: true,
        slideNumber: "c/t",
    });
});

const md = `
## Markdown support - Slide1

Write content using inline or external Markdown $1+1=2$.
Instructions and **more** *info* available in the [docs](https://revealjs.com/markdown/).

---

## Markdown support - Slide2

This is the second slide.
          `;
</script>

<template>
    <div class="w-screen h-screen">
        <div class="reveal">
            <div class="slides">
                <section>Title</section>
                <section>
                    <section>Test plugins</section>
                    <section data-auto-animate>
                        Syntax highlight with auto animation
                        <pre data-id="code-animation">
                            <code class="hljs javascript" data-trim data-line-numbers>
                            // main.js
                            import { createApp } from 'vue'
                            import { createRouter, createWebHistory } from 'vue-router'
                            import App from './App.vue'
                            import Home from './views/Home.vue'
                        </code>
                        </pre>
                    </section>
                    <section data-auto-animate>
                        Syntax highlight with auto animation
                        <pre data-id="code-animation">
                            <code class="hljs javascript" data-trim data-line-numbers>
                            // main.js
                            import { createApp } from 'vue'
                            import { createRouter, createWebHistory } from 'vue-router'
                            import App from './App.vue'
                            import Home from './views/Home.vue'

                            const router = createRouter({
                            history: createWebHistory('/myapp/'),
                            routes: [
                                { path: '/', component: Home }
                                // other routes...
                            ]
                            })

                            const app = createApp(App)
                            app.use(router)
                            app.mount('#app')
                        </code>
                        </pre>
                    </section>
                    <section data-markdown>
                        <!-- Contents of v-html are inserted as plain HTML -->
                        <div v-html="md"></div>
                    </section>
                    <section>
                        <p>Search content.</p>
                        Press CTRL+Shift+F to search slide content.
                    </section>
                    <section>
                        <p>Notes</p>
                        <p>
                            Press S on your keyboard to enter the speaker notes
                        </p>
                        <aside class="notes">
                            Oh hey, these are some notes. They'll be hidden in
                            your presentation, but you can see them if you open
                            the speaker notes window (hit 's' on your keyboard).
                        </aside>
                    </section>
                    <section>
                        <p>Math</p>
                        <p>
                            Use LaTeX syntax to include mathematics in your
                            slides.
                        </p>
                        <p>
                            For example, the following will display an inline
                            formula: <code>$f(x) = x^2$</code>
                        </p>
                        <p>
                            And this will display a formula in display mode:
                            <code>
                                \begin{aligned} \dot{x} &amp; = \sigma(y-x) \\
                                \dot{y} &amp; = \rho x - y - xz \\ \dot{z} &amp;
                                = -\beta z + xy \end{aligned}
                            </code>
                        </p>
                    </section>
                    <section>
                        <p>Zoom</p>
                        <p>
                            Alt+click to zoom in on elements (CTRL+click in
                            Linux).
                        </p>
                    </section>
                </section>
                <section v-for="i in n" :key="i">
                    <section>Section{{ i }}</section>
                    <section v-for="j in n" :key="j">{{ i }}.{{ j }}</section>
                </section>
                <section>End</section>
            </div>
        </div>
    </div>
</template>
