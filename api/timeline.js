export const config = { runtime: "nodejs" };

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "GET専用です" });

  res.status(200).json([
    { id: 1, text: "ダミー投稿です" },
    { id: 2, text: "API は正常に動いています" }
  ]);
}
