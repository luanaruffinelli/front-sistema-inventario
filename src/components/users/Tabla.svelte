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

<table>
    <thead>
        <tr>
            <th>Nombre completo</th>
            <th>Email</th>
        </tr>
    </thead>

    <tbody>
        {#each users as user}
            <tr>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
            </tr>
        {/each}
    </tbody>
</table>
