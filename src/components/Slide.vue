<script setup>
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/simple.css";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import { onBeforeUnmount, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
console.log("Id from route", route.params.id);

// Init Reveal.js after the component is mounted
const n = 3;

onMounted(() => {
    let deck = new Reveal({
        plugins: [Markdown],
    });
    deck.initialize({
        history: true,
    });
});
</script>

<template>
    <div class="w-screen h-screen">
        <div class="reveal">
            <div class="slides">
                <section>Title</section>
                <section v-for="i in n" :key="i">
                    <section>Section{{ i }}</section>
                    <section v-for="j in n" :key="j">{{ i }}.{{ j }}</section>
                </section>
                <section>End</section>
            </div>
        </div>
    </div>
</template>
