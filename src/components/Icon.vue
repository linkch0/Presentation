<script>
export default {
    props: {
        icon: {
            type: String,
            default: "fa-solid fa-font-awesome",
        },
        name: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            default: "#",
        },
    },
};
</script>

<template>
    <a
        :href="link"
        class="flex items-center space-x-2 hover:text-gray-600 hover:underline"
    >
        <font-awesome-icon :icon="icon" />
        <!-- hidden when screen size is too small -->
        <span class="text-lg hidden sm:block">{{ name }}</span>
    </a>
</template>
