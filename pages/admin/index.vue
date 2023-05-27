<script lang="ts" setup>
definePageMeta({
  middleware: [
    'auth',
  ],
});

interface menuItem {
    name: string,
    link: string
}

const menuItems: menuItem[] = [
    { name: 'Test', link: 'Test' },
    { name: 'Test', link: 'Test' },
    { name: 'Test', link: 'Test' },
    { name: 'Test', link: 'Test' }
]
</script>

<template>
    <div class="panel__container">
        <div class="panel__wrapper container">
            <div class="panel__menu">
                <h2 class="mb-2 font-bold">Menu</h2>
                <ul>
                    <li v-for="item in menuItems">
                        {{ item.name }}
                    </li>
                </ul>
            </div>
            <div class="panel__content">
                Panel zarządzania sklepem
            </div>
        </div>
    </div>  
</template>