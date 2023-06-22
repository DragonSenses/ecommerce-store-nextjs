export async function POST(req, res) {
  const body = JSON.parse(req.body);

  return new res.sendStatus(405);
}