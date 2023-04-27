<script setup>
import Header from "./Header.vue";
import Card from "./Card.vue";
const n = 4;
let cards = [];

for (let i = 0; i < n; i++) {
    const card = {
        id: i,
        title: `Project ${i}`,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra nulla nec sapien vestibulum aliquam.",
        image: "https://via.placeholder.com/400x300",
    };
    cards.push(card);
}
</script>

<template>
    <div class="w-screen h-screen bg-gray-100">
        <Header />
        <div class="flex flex-wrap justify-center">
            <div v-for="card in cards" :key="card.id" class="w-5/12 m-4">
                <router-link :to="{ name: 'card', params: { id: card.id } }">
                    <Card :card="card" />
                </router-link>
            </div>
        </div>
    </div>
</template>
