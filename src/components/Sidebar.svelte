<script lang="ts">

    import { ROUTES } from '@utils/router.ts';

    let { activePage } = $props();

</script>

<aside class="bg-blue-800 w-48 flex flex-col gap-2 p-2">
    {#each ROUTES.filter(x => !x.public) as route}
    <a href={route.path} class="text-white text-xl p-1 bg-blue-600">{route.name}</a>
    {/each}
</aside>



