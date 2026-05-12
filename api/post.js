export const config = { runtime: "nodejs" };

let posts = [
  { id: 1, text: "最初の投稿です！" }
];

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST専用です" });

  const body = JSON.parse(req.body);

  const newPost = {
    id: Date.now(),
    text: body.text
  };

  posts.unshift(newPost);

  res.status(200).json({ ok: true, post: newPost });
}
