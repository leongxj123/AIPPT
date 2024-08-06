export default function handler(req, res) {
  res.status(200).json({ API_KEY: process.env.API_KEY });
}
