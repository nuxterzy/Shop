<script lang="ts" setup>

const submit = () => {

}

const restorePassword = () => {

}
</script>

<template>
    <div class="form__container">
        <label class="form__label" for="login">
            <input
                type="text"
                id="login"
                placeholder="Login *"
                class="form__input"
            />
            <span class="form__span">Login *</span>
        </label>

        <label class="form__label mt-4" for="password">
            <input
                type="password"
                id="password"
                placeholder="Hasło *"
                class="form__input"
            />
            <span class="form__span">Hasło *</span>
        </label>

        <div class="flex justify-center gap-2">
            <button class="button mt-4" @click.prevent="submit">Zaloguj się</button>
            <button class="button button--dark mt-4" @click.prevent="restorePassword">Przypomnij hasło</button>
        </div>
    </div>
</template>
