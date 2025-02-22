import { NavigateFunction } from 'react-router-dom';
import { toast } from 'sonner';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { USERS } from '../mock-data';

export interface User {
   id: number;
   firstName: string;
   lastName: string;
   email: string;
   address: string;
   password: string;
}

type loginProps = {
   email: string;
   password: string;
   navigate: NavigateFunction;
};
type signupProps = { newUser: Omit<User, 'id'>; navigate: NavigateFunction };

interface UserState {
   currentUser: Omit<User, 'password'> | null;
   users: User[];
   login: ({ email, password, navigate }: loginProps) => void;
   logout: () => void;
   signup: ({ newUser, navigate }: signupProps) => void;
   updateUser: (
      updatedUser: Omit<User, 'id' | 'password'> & {
         currentPassword?: string;
         newPassword?: string;
      }
   ) => boolean;
}

export const useUserStore = create<UserState>()(
   persist(
      (set, get) => ({
         currentUser: null,
         users: USERS,
         login: ({ email, password, navigate }) => {
            const user = get().users.find(
               (u) => u.email === email && u.password === password
            );

            if (user) {
               const { password: _, ...userWithoutPassword } = user;
               set({ currentUser: userWithoutPassword });
               toast.success('Successfully logged in!');
               navigate('/');
            } else {
               toast.error('Invalid email or password');
            }
         },
         logout: () => {
            set({ currentUser: null });
            toast.success('Logged out successfully');
         },
         signup: ({ newUser, navigate }) => {
            const { users } = get();

            if (users.some((u) => u.email === newUser.email)) {
               toast.error('Email already exists');
               return;
            }

            const newId = Math.max(...users.map((u) => u.id), 0) + 1;
            const createdUser = { ...newUser, id: newId };

            set({ users: [...users, createdUser] });
            set({ currentUser: createdUser });
            toast.success('Account created successfully!');

            navigate('/');
         },
         updateUser: (updatedUser) => {
            try {
               const { currentUser, users } = get();
               if (!currentUser) return false;

               const userIndex = users.findIndex(
                  (u) => u.id === currentUser.id
               );
               if (userIndex === -1) return false;

               if (updatedUser.newPassword) {
                  if (
                     users[userIndex].password !== updatedUser.currentPassword
                  ) {
                     toast.error('Current password is incorrect');
                     return false;
                  }

                  // if new password is the same as the current password, don't update it
                  if (users[userIndex].password === updatedUser.newPassword) {
                     toast.error(
                        'New password is the same as the current password'
                     );
                     return false;
                  }
               }

               const updatedUsers = [...users];
               const { currentPassword, newPassword, ...profileUpdates } =
                  updatedUser;

               updatedUsers[userIndex] = {
                  ...updatedUsers[userIndex], // Existing user data
                  ...profileUpdates, // Spread profile updates (firstName, lastName, email, address)
                  password: newPassword || updatedUsers[userIndex].password, // Handle password update if exists
               };

               const { password: _, ...newCurrentUser } =
                  updatedUsers[userIndex];

               set({
                  users: updatedUsers,
                  currentUser: newCurrentUser,
               });
               toast.success('Profile updated successfully');
               return true;
            } catch (error) {
               toast.error('Failed to update profile');
               return false;
            }
         },
      }),
      {
         name: 'user-storage',
         partialize: (state) => ({
            users: state.users,
            currentUser: state.currentUser,
         }),
      }
   )
);
