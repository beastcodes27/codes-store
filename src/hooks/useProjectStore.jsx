import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useProjectStore = create(
  persist(
    (set) => ({
      projects: [],
      addProject: (project) =>
        set((state) => ({ projects: [...state.projects, project] })),
      updateProject: (updatedProject) =>
        set((state) => ({
          projects: state.projects.map((project) =>
            project.id === updatedProject.id ? updatedProject : project
          ),
        })),
      deleteProject: (id) =>
        set((state) => ({ projects: state.projects.filter((p) => p.id !== id) })),
    }),
    { name: 'project-storage' }
  )
);

export default useProjectStore;