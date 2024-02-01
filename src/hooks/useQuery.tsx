import { useEffect, useState } from "react";

export default function useQuery<T>({
  fetchFunction,
}: {
  fetchFunction: () => Promise<T>;
}) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetchFunction();
        setData(res);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFunction]);

  return { data, isLoading };
}
