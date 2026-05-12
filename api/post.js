export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST専用です" });
  }

  const body = JSON.parse(req.body);

  res.status(200).json({
    message: "投稿を受け付けました",
    data: body
  });
}
