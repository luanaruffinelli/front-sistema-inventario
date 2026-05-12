<script lang="ts">

    let { user, deleteDialog = $bindable(false) } = $props();

</script>

{#if deleteDialog}
    <dialog open={deleteDialog} class="w-full h-full top-0 left-0 fixed flex items-center bg-transparent justify-center backdrop-blur-xl">
        <div class="bg-white p-4 rounded-md w-100 dark:bg-gray-800 relative">
            <button 
                aria-label='Cerrar' 
                class="close" 
                onclick={() => deleteDialog = false}>x</button
            >
            <div class="p-4">
                <h2 class="text-lg font-bold">Desea eliminar el usuario {user.firstName} {user.lastName}?</h2>
            </div>
        </div>
        
    </dialog>

    <dialog open={deleteDialog} class="w-full h-full top-0 left-0 fixed flex items-center bg-transparent justify-center backdrop-blur-xl">
        <div class="bg-white p-4 rounded-md w-100 dark:bg-gray-800 relative">
            <button 
                aria-label='Cerrar' 
                class="close" 
                onclick={() => deleteDialog = false}>x</button
            >
            <div class="p-4">
                <h2 class="text-lg font-bold">Desea eliminar el usuario {user.firstName} {user.lastName}?</h2>
            </div>
        </div>
        
    </dialog>
{/if}