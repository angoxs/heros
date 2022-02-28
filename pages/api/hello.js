// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function handler(req, res) {
  const { data, error } = useSWR("/api/user/123", fetcher);
  res.status(200).json({ name: "John Doe" });
}
