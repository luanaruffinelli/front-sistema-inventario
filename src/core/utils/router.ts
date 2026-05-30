export const ROUTES = [
    {
        path: "/",
        icon: "boxicons:home",
        name: "Panel",
        public: false,
    },
    {
        path: "/auth/login",
        icon: "mdi:login",
        name: "Iniciar Sesion",
        public: true,
    },
    {
        path: "/users",
        icon: "lucide:users",
        name: "Usuarios",
        public: false
    },
    {
        path: "/categories",
        icon: "tabler:tag",
        name: "Categorías",
        public: false
    },
    {
        path: "/products",
        icon: "fluent-mdl2:product",
        name: "Productos",
        public: false
    },
    {
        path: "/providers",
        icon: "mdi:truck-outline",
        name: "Proveedores",
        public: false
    }
    
]