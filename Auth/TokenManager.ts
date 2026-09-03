
let accessToken: string | null = null;

export const getAccessToken = (): string | null => accessToken;

export const setAccessToken = (token: string | null): void => {
  accessToken = token;
};

let onTokenRefreshedCallback: (() => void) | null = null;

export const onTokenRefreshed = (callback: () => void): void => {
  onTokenRefreshedCallback = callback;
};

export const notifyTokenRefreshed = (): void => onTokenRefreshedCallback?.();

let isRefreshing = false;
let failedQueue: {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}[] = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((p) => {
    if (error) p.reject(error);
    else if (token) p.resolve(token);
  });
  failedQueue = [];
};

const requestNewAccessToken = async (refreshUrl: string): Promise<string> => {
  const res = await fetch(refreshUrl, {
    method: "POST",
    credentials: "include",
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
  });
  const data = await res.json().catch(() => null);
  const newToken = data?.metadata?.accessToken;
  if (!res.ok || !newToken) {
    throw new Error("No access token in refresh response");
  }
  setAccessToken(newToken);
  return newToken;
};

export const ensureFreshAccessToken = async (
  refreshUrl: string,
): Promise<string> => {
  if (isRefreshing) {
    return new Promise<string>((resolve, reject) => {
      failedQueue.push({ resolve, reject });
    });
  }
  isRefreshing = true;
  try {
    const newToken = await requestNewAccessToken(refreshUrl);
    processQueue(null, newToken);
    notifyTokenRefreshed();
    return newToken;
  } catch (err) {
    processQueue(err);
    throw err;
  } finally {
    isRefreshing = false;
  }
};
