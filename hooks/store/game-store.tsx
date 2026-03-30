import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface User {
  id: string;
  name: string;
}

interface GameState {
  users: User[];
  addUser: (user: User) => void;
  editUser: (userId: string, user: User) => void;
  deleteUser: (userId: string) => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      users: [],
      addUser: (u) => {
        set((state) => ({ users: [...state.users, u] }));
      },
      editUser: (userId, updatedUser) => {
        set((state) => ({
          users: state.users.map((user) =>
            user.id === userId ? updatedUser : user
          ),
        }));
      },
      deleteUser: (userId) => {
        set((state) => ({
          users: state.users.filter((user) => user.id !== userId),
        }));
      },
    }),
    {
      name: "game-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
