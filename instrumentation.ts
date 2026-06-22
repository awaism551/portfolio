export async function register() {
  if (process.env.NODE_ENV !== "development") return;

  const originalConsoleError = console.error;

  console.error = (...args: unknown[]) => {
    const first = args[0];

    if (
      typeof first === "string" &&
      (first.includes("A tree hydrated but some attributes") ||
        first.includes("Hydration failed") ||
        first.includes("hydration-mismatch") ||
        first.includes("did not match"))
    ) {
      originalConsoleError(
        "[Hydration] Server/client attribute mismatch (often a browser extension). Full tree omitted — https://react.dev/link/hydration-mismatch"
      );
      return;
    }

    originalConsoleError(...args);
  };
}
