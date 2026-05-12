export const config = { runtime: "nodejs" };

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST専用です" });

  let body;

  try {
    // Node.js runtime では req.body は文字列
    body = JSON.parse(req.body);
  } catch (e) {
    console.error("JSON parse error:", e);
    return res.status(400).json({ error: "Invalid JSON" });
  }

  if (!body.text || typeof body.text !== "string") {
    return res.status(400).json({ error: "text がありません" });
  }

  const newPost = {
    id: Date.now(),
    text: body.text
  };

  res.status(200).json({ ok: true, post: newPost });
}
