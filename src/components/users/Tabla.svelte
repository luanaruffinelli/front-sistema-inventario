<script lang="ts">
    import Delete from "./Delete.svelte";
    import { onMount } from "svelte";
    import Edit from "./Edit.svelte";

    let userSelected = $state([]);
    let deleteDialog = $state(false);
    let editDialog = $state(false);
    let users: any = $state([]);

    onMount(async () => {
        let data: any = await fetch("https://dummyjson.com/users");
        data = await data.json();
        console.log(data);

        users = data.users;
    });
</script>

<Delete bind:deleteDialog user={userSelected} />
<Edit bind:editDialog user={userSelected} />

<table class="flex-1 width-100">
    <thead>
        <tr>
            <th class="">Nombre completo</th>
            <th class="">Email</th>
            <th class="">Acciones</th>
        </tr>
    </thead>

    <tbody>
        {#each users as user}
            <tr>
                <td class="">{user.firstName} {user.lastName}</td>
                <td class="">{user.email}</td>
                <td class="">
                    <div class="flex justify-center gap-2">
                        <button 
                            aria-label="Editar" 
                            onclick={() => (editDialog = true, userSelected = user)}
                            class="bg-gray-500 hover:bg-gray-600 dark:bg-gray-300 dark:hover:bg-gray-500  text-white font-bold py-2 px-4 rounded dark:bg-gray-700 dark:hover:bg-gray-600">
                            Editar
                        </button>
                        <button 
                            aria-label="Eliminar" 
                            onclick={() => (deleteDialog = true, userSelected = user)}
                                class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded 
                                dark:bg-gray-800 dark:hover:bg-gray-600">
                            Eliminar</button
                        >
                    </div>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
