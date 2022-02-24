export async function handleRequest(request: Request): Promise<Response> {
  const upgradeHeader = request.headers.get("Upgrade")
  if (!upgradeHeader || upgradeHeader !== "websocket") {
    return new Response("Expected Upgrade: websocket", { status: 426 })
  }

  const webSocketPair = new WebSocketPair()
  const client = webSocketPair[0], server = webSocketPair[1]

  server.accept();
  server.addEventListener("message", (event) => {
    console.error("message", Date.now());
  });
  

  return new Response(null, {
    status: 101,
    webSocket: client
  });
}
