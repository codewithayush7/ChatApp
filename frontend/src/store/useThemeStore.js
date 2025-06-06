import { create } from 'zustand';

export const useThemeStore=create((set) => {
    const getInitialTheme=() =>
        typeof window!=='undefined'
            ? localStorage.getItem('chat-theme')||'light'
            :'light';

    return {
        theme: getInitialTheme(),
        setTheme: (theme) => {
            localStorage.setItem('chat-theme', theme);
            set({ theme });
        },
    };
});
