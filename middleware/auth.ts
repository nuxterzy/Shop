export default defineNuxtRouteMiddleware((to, from) => {
    return navigateTo('/admin/login');
});