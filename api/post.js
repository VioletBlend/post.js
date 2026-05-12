import { kv } from "@vercel/kv";

export const config = { runtime: "nodejs" };

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST専用です" });

  const body = JSON.parse(req.body);

  const newPost = {
    id: Date.now(),
    text: body.text,
    time: new Date().toISOString()
  };

  // 既存の投稿を取得
  const posts = (await kv.get("posts")) || [];

  // 新しい投稿を先頭に追加
  posts.unshift(newPost);

  // 保存
  await kv.set("posts", posts);

  res.status(200).json({ ok: true, post: newPost });
}
