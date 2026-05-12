export default function handler(req, res) {
  res.status(200).json([
    { id: 1, text: "こんにちは！これはダミーTLです" },
    { id: 2, text: "Chrome拡張機能から取得しています" }
  ]);
}
