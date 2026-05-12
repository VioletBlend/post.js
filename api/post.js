export default function handler(req, res) {
  // ★ CORS 対応（Chrome拡張を許可）
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST専用です" });
  }

  const body = JSON.parse(req.body);

  res.status(200).json({
    message: "投稿を受け付けました",
    data: body
  });
}
