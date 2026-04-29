<script lang="ts">

    import { ROUTES } from '@utils/router.ts';

    let { activePage } = $props();

</script>

<aside class="bg-blue-400 dark:bg-blue-800 w-48 flex flex-col gap-2 p-2">
    <div class="p-2">
        <h1 class="text-center text-lg font-bold text-black dark:text-white uppercase border-b">Mi inventario</h1>
    </div>

    {#each ROUTES.filter(x => !x.public) as route}
    <a href={route.path} class="text-blue-950 dark:text-white text-md px-4 py-1 bg-blue-500 dark:bg-blue-600 rounded-md">{route.name}</a>
    {/each}
</aside>



