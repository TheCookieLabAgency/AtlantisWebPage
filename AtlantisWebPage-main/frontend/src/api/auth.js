import { http } from "./client";

// Registro
export async function registerUser(payload) {
  // payload:
  // { name, identification_type_id: 1|2, identification, email, cellphone }
  const data = await http.post("/api/register", payload);
  return data?.data; // incluye name, email, slug, etc.
}

// Login: devuelve { token }
export async function loginUser({ identification, password }) {
  const data = await http.post("/api/login", { identification, password });
  return { token: data?.token };
}


export async function listFavoritePrograms(token) {
  const data = await http.get("/api/favorite-programs", { token });
  return data; // estructura según docs
}

export async function addFavoriteProgram(token, { object_id, name }) {
  const data = await http.post("/api/favorite-programs", { object_id, name }, { token });
  return data;
}

export async function deleteFavoriteProgram(token, slug) {
  const data = await http.del(`/api/favorite-programs/${slug}`, { token });
  return data;
}
