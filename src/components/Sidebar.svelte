<script lang="ts">

    import { ROUTES } from '@utils/router.ts';

    let { activePage } = $props();

</script>

<aside>
    {#each ROUTES as route}
    <p class="text-white">{route.name}</p>
    {/each}
</aside>



