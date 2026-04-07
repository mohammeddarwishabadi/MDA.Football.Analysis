export function getBaseUrl() {
  return process.env.NEXTAUTH_URL || "http://localhost:3000";
}

export async function fetchApi<T>(path: string): Promise<T> {
  const res = await fetch(`${getBaseUrl()}${path}`, {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error(`Request failed for ${path}`);
  }

  const json = (await res.json()) as { success: boolean; data: T; error: string | null };
  if (!json.success) {
    throw new Error(json.error ?? `API error for ${path}`);
  }

  return json.data;
}
