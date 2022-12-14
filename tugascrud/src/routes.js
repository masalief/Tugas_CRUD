import Home from "./pages/Home.vue";
import Add from "./pages/Add.vue";
import Update from "./pages/Update.vue";
import Delete from "./pages/Delete.vue";

export default [
    
    {
        path : "/",
        component : Home,
    },

    {
        path : "/add",
        component : Add,
    },

    {
        path : "/update/:id",
        component : Update,
    },

    {
        path : "/delete",
        component : Delete,
    },
]