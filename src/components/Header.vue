<script setup>
import Icon from "./Icon.vue";
const avatar = "https://avatars.githubusercontent.com/u/42287169?v=4";
const title = "Link Chen's Project Presentation";
const email = "link@connect.hku.hk";
const github = "https://github.com/HeroLink";
const bilibili = "https://space.bilibili.com/33514662";
</script>

<template>
    <header class="flex items-center justify-between px-10 py-6">
        <div class="flex items-center">
            <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                    :src="avatar"
                    alt="Avatar"
                    class="w-full h-full object-cover"
                />
            </div>
            <h1 class="text-2xl font-bold hidden sm:block">
                {{ title }}
            </h1>
        </div>
        <div class="flex items-center space-x-4">
            <Icon
                icon="fa-solid fa-envelope"
                name="Email"
                :link="'mailto:' + email"
            />
            <Icon icon="fa-brands fa-github" name="GitHub" :link="github" />
            <Icon
                icon="fa-brands fa-bilibili"
                name="Bilibili"
                :link="bilibili"
            />
        </div>
    </header>
</template>

<style></style>
