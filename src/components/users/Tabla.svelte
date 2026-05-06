<script lang="ts">
    import { onMount } from "svelte";

    let users: any = $state([]);

    onMount(async () => {
        let data: any = await fetch("https://dummyjson.com/users");
        data = await data.json();
        console.log(data);

        users = data.users;
    });
</script>

<table class="flex-1 width-100">
    <thead>
        <tr>
            <th class="border border-red-500 text-left">Nombre completo</th>
            <th class="border border-red-500">Email</th>
            <th class="border border-red-500">Acciones</th>
        </tr>
    </thead>

    <tbody>
        {#each users as user}
            <tr>
                <td class="border border-blue-500">{user.firstName} {user.lastName}</td>
                <td class="border border-blue-500">{user.email}</td>
                <td class="border border-blue-500">
                    <div class="flex justify-center gap-2">
                        <button aria-label="Editar" class="bg-gray-500 hover:bg-gray-600 dark:bg-gray-300 dark:hover:bg-gray-500  text-white font-bold py-2 px-4 rounded dark:bg-gray-700 dark:hover:bg-gray-600">
                            Editar
                        </button>
                        <button aria-label="Eliminar" class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded dark:bg-gray-800 dark:hover:bg-gray-600">
                            Eliminar
                        </button>
                    </div>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
