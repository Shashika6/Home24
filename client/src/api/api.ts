type RequestOptions = RequestInit & { authToken?: string };

const api = async <T>(url: string, options?: RequestOptions): Promise<T> => {
  try {
    const headers: HeadersInit = { "Content-Type": "application/json" };

    if (options?.authToken) {
      headers["Authorization"] = `Bearer ${options.authToken}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

export default api;
