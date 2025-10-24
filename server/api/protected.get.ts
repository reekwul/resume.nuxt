// server/api/protected.get.ts
export default defineEventHandler(async (event) => {
  // Если сессии нет, выбросит 401 ошибку
  const session = await requireUserSession(event);

  // session.user полностью типизирован!
  return { data: `Привет, ${session.user.name}!` };
});
