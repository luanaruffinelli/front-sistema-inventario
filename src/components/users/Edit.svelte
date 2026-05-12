<script lang="ts">
    import { idText } from "typescript";

    let { user, editDialog = $bindable(false) } = $props();
    let id = $props.id();
</script>

{#if editDialog}
    <div class="w-full h-full top-0 left-0 fixed flex items-center bg-transparent justify-center backdrop-blur-xl flex-col">
        <form class="w-96 p-4 rounded-md text-black  bg-white">
            <button 
                aria-label='Cerrar' 
                class="close" 
                onclick={() => editDialog = false}>x</button
            >
        
            <h2 class="text-lg font-bold"> Editar usuario</h2>
            <hr>

            <div class="mb-4 flex flex-col">
                <label for="username">Nombre completo:</label>
                <input type="text" id={'username-${id}'} name="username" value={user.username} class="border border-gray-400 rounded-md p-2" />
            </div>
            <div class="mb-4 flex flex-col">
                <label for="email">Correo Electrónico:</label>
                <input type="text" id={'email-${id}'} name="email" value={user.email} class="border border-gray-400 rounded-md p-2" />
            </div>
        </form>
    </div>
{/if}