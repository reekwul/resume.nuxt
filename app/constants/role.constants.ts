import type { SessionNamespace } from '#shared/types/session';

const ROLE: Record<string, SessionNamespace.RoleType> = {
  GUEST: 'guest',
  FINDER: 'finder',
  ADMIN: 'admin',
};

export default {
  ROLE,
};
