import type { SessionNamespace } from './session';

// auth.d.ts
declare module '#auth-utils' {
  interface User extends SessionNamespace.IUser {}

  interface UserSession extends SessionNamespace.IData {}
}

export {};
