if (!process.env.REACT_APP_API_BASE_URL) {
  throw new Error("❌ Falta REACT_APP_API_BASE_URL en el .env");
}
const BASE_URL = process.env.REACT_APP_API_BASE_URL;


function buildHeaders(token, extra = {}) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...extra,
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

async function request(path, { method = "GET", body, token, headers } = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: buildHeaders(token, headers),
    body: body ? JSON.stringify(body) : undefined,
  });

  let data = null;
  const text = await res.text();
  try { data = text ? JSON.parse(text) : null; } catch { data = text || null; }

  if (!res.ok) {
    const err = new Error(
      (data && (data.message || data.error)) ||
      `HTTP ${res.status}`
    );
    err.status = res.status;
    err.data = data;
    throw err;
  }

  return data;
}

export const http = {
  get: (p, opts) => request(p, { method: "GET", ...opts }),
  post: (p, body, opts) => request(p, { method: "POST", body, ...opts }),
  del: (p, opts) => request(p, { method: "DELETE", ...opts }),
};
