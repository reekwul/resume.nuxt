// types/session.ts
export namespace SessionNamespace {
    export type ThemeType = 'light' | 'dark';
    export type LanguageType = 'ru' | 'en';
    export type RoleType = 'guest' | 'finder' | 'admin';
    export type ProviderType = 'local' | 'google' | 'github';

    export interface IPreferences {
        theme: ThemeType;
        language: LanguageType;
    }

    export interface IUser {
        id: number;
        name: string;
        email: string;
        emailVerified: boolean;
        role: RoleType;
        provider: ProviderType;
        createdAt: string;
        updatedAt: string;
    }

    export interface IData {
        user: IUser;
        lastLogin: string;
        preferences: IPreferences;
    }
}

// Экспортируем короткие алиасы для удобства
export type SessionData = SessionNamespace.IData;
export type SessionUser = SessionNamespace.IUser;
export type SessionPreferences = SessionNamespace.IPreferences;
export type UserRole = SessionNamespace.RoleType;
export type AuthProvider = SessionNamespace.ProviderType;
