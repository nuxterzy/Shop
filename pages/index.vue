<script lang="ts" setup>
const test = ref('')
const products = ref([])

const addProduct = () => {
    products.value.push(test.value)
}

</script>

<template>
    <p>Twoja wiadomość: {{ test }}</p>

    <input v-model="test" type="text" />
    <button @click.prevent="addProduct">Dodaj</button>

    <p><strong>Lista produktow:</strong></p>
    <ul>
        <li v-for="item in products">
            {{ item }}
        </li>
    </ul>
</template>