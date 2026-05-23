<Layout page="Categories">
    <div class="flex min-h-screen bg-bg-light dark:bg-bg-dark">
        <main class="flex-1 p-6">
            <div>
                <h1 class="text-2xl font-bold text-black dark:text-white">
                    Categories
                </h1>
                <h4 class="text-gray-600 dark:text-gray-400">
                    Gestiona tus categorías de productos
                </h4>
                <div class="flex justify-end items-center mb-6">
                    <button
                        class="bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                        +
                    </button>
                </div>
            </div>

            <!-- Stats -->
            <div
                class="grid grid-cols-4 grid-rows gap-4"
            >
                <!-- All categories -->
                <div
                    class=" bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6"
                >
                    <div class="font-semibold text-gray-600 dark:text-gray-400">
                        Total categorias
                    </div>
                    <div class="font-semibold text-gray-600 dark:text-gray-400">
                        5
                    </div>
                    <div class="font-semibold text-gray-600 dark:text-gray-400">
                        Todas las categorias
                    </div>
                </div>

                <!-- Main categories -->
                <div
                    class=" bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6"
                >
                    <div class="font-semibold text-gray-600 dark:text-gray-400">
                        Categrías principales
                    </div>
                    <div class="font-semibold text-gray-600 dark:text-gray-400">
                        5
                    </div>
                    <div class="font-semibold text-gray-600 dark:text-gray-400">
                        Categorías raíz
                    </div>
                </div>

                <!-- Subcategories -->
                <div
                    class=" bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6"
                >
                    <div class="font-semibold text-gray-600 dark:text-gray-400">
                        Subcategorías
                    </div>
                    <div class="font-semibold text-gray-600 dark:text-gray-400">
                        5
                    </div>
                    <div class="font-semibold text-gray-600 dark:text-gray-400">
                        Categorías hijas
                    </div>
                </div>

                <!-- All products -->
                <div
                    class=" bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6" 
                >
                    <div class="font-semibold text-gray-600 dark:text-gray-400">
                        <iconify-icon icon="mdi:folder-outline" />
                        Productos asignados
                    </div>
                    <div class="font-semibold text-gray-600 dark:text-gray-400">
                        500
                    </div>
                    <div class="font-semibold text-gray-600 dark:text-gray-400">
                        En todas las categorías
                    </div>
                </div>
            </div>
        </main>
    </div>
</Layout>
