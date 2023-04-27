<script>
export default {
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
};
</script>

<template>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img :src="card.image" alt="card" class="w-full h-60 object-cover" />
        <div class="p-4">
            <p class="text-lg font-medium text-gray-900">
                {{ card.title }}
            </p>
            <p class="text-gray-600 text-justify">{{ card.description }}</p>
        </div>
    </div>
</template>
