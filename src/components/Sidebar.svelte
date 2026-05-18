<script lang="ts">

    import { ROUTES } from '@utils/router.ts';
    import { appStore } from '@core/utils/store.svelte';

    let { activePage } = $props();

</script>

<aside class="bg-gray-400 dark:bg-gray-800 w-48 flex flex-col gap-2 p-2 transition-colors duration-300">
    <div class="p-2">
        <h1 class="text-center text-lg font-bold text-black dark:text-white uppercase border-b">Mi inventario</h1>
    </div>

    {#each ROUTES.filter(x => !x.public) as route}
    <a href={route.path} class="text-blue-950 dark:text-white text-md px-4 py-1 bg-blue-500 dark:bg-blue-600 rounded-md">{route.name}</a>
    {/each}

    <div class="p-2 flex justify-center">
        <button
            onclick={() => appStore.toggleDarkMode()}
        >
            {appStore.isDarkMode ? "☀️" : "🌙"}
        </button>
    </div>
</aside>



