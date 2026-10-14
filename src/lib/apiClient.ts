const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api/v1";

export const apiClient = async (
  endpoint: string,
  options: RequestInit = {},
) => {
  try {
    const response = await fetch(`${BACKEND_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }

    return data;
  } catch (error: any) {
    console.error("API Fetch Error:", error.message);
    throw error;
  }
};
