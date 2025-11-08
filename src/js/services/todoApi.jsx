const API_BASE_URL = "https://playground.4geeks.com/todo";

export const todoApi = {
  // Crear usuario si no existe
  createUser: async (username) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${username}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        console.log("Usuario creado exitosamente");
      } else if (response.status === 400) {
        console.log("El usuario ya existe");
      }
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  },

  // Cargar todas las tareas (GET)
  loadTasks: async (username) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${username}`);

      if (response.ok) {
        const data = await response.json();
        return data.todos || [];
      } else if (response.status === 404) {
        await todoApi.createUser(username);
        return await todoApi.loadTasks(username);
      }
    } catch (error) {
      console.error("Error al cargar tareas:", error);
      return [];
    }
  },

  // Agregar una tarea (POST)
  addTask: async (username, taskText) => {
    try {
      const newTaskObj = {
        label: taskText,
        is_done: false
      };

      const response = await fetch(`${API_BASE_URL}/todos/${username}`, {
        method: "POST",
        body: JSON.stringify(newTaskObj),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        console.log("Tarea agregada exitosamente");
        return true;
      } else {
        console.error("Error al agregar tarea:", response.status);
        return false;
      }
    } catch (error) {
      console.error("Error al agregar tarea:", error);
      return false;
    }
  },

  // Eliminar una tarea (DELETE)
  deleteTask: async (taskId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${taskId}`, {
        method: "DELETE"
      });

      if (response.ok) {
        console.log("Tarea eliminada exitosamente");
        return true;
      } else {
        console.error("Error al eliminar tarea:", response.status);
        return false;
      }
    } catch (error) {
      console.error("Error al eliminar tarea:", error);
      return false;
    }
  },

  // Eliminar todas las tareas
  deleteAllTasks: async (tasks) => {
    try {
      for (const task of tasks) {
        await todoApi.deleteTask(task.id);
      }
      console.log("Todas las tareas eliminadas");
      return true;
    } catch (error) {
      console.error("Error al eliminar todas las tareas:", error);
      return false;
    }
  }
};