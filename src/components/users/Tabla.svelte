<script lang="ts">
    import Delete from "./Delete.svelte";
    import Edit from "./Edit.svelte";
    import { userModel } from "./user.svelte";
    import { onMount } from "svelte";


    onMount(async () => {
        await userModel.getUsers();
    });
</script>

<Delete { userModel } />
<Edit { userModel } />

<table class="flex-1 width-100">
    <thead>
        <tr>
            <th class="">Nombre completo</th>
            <th class="">Email</th>
            <th class="">Acciones</th>
        </tr>
    </thead>

    <tbody>
        {#each userModel.users as user}
            <tr>
                <td class="">{user.fullName}</td>
                <td class="">{user.email}</td>
                <td class="">
                    <div class="flex justify-center gap-2">
                        <button 
                            aria-label="Editar" 
                            onclick={() => userModel.showEditModal(user)}
                            class="bg-gray-500 hover:bg-gray-600 dark:bg-gray-300 dark:hover:bg-gray-500  
                            text-white font-bold py-2 px-4 rounded dark:bg-gray-700 dark:hover:bg-gray-600"
                        >
                            Editar
                        </button>
                        <button 
                            aria-label="Eliminar" 
                            onclick={() => userModel.showDeleteModal(user)}
                                class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded 
                                dark:bg-gray-800 dark:hover:bg-gray-600"
                            >
                                Eliminar
                            </button>
                    </div>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
