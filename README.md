Basic demonstration of observed size limits on WebSocket message on CloudFlare workers.

Run the Cloudflare worker in dev mode like:
`wrangler dev`

Then browse to the `index.html` file.  This page has a simple form for sending WebSocket messages of a specified size to the worker.

When a message is received by the worker's message event listener it logs `message ${Date.now()}`.  The message event listener does nothing else.

Note that messages longer than 1,100,000 chars will fail.  Either with no log message or with the following error:

```
Error: The script will never generate a response. at line 0, col -2
{
  "exceptionDetails": {
    "columnNumber": -2,
    "exception": {
      "className": "Error",
      "description": "Error: The script will never generate a response.",
      "preview": {
        "description": "Error: The script will never generate a response.",
        "entries": null,
        "overflow": false,
        "properties": [
          {
            "name": "stack",
            "subtype": null,
            "type": "string",
            "value": "Error: The script will never generate a response.",
            "valuePreview": null
          },
          {
            "name": "message",
            "subtype": null,
            "type": "string",
            "value": "The script will never generate a response.",
            "valuePreview": null
          }
        ],
        "subtype": "error",
        "type": "object"
      },
      "subtype": "error",
      "type": "object",
      "value": null
    },
    "lineNumber": 0,
    "text": "Uncaught (in response)",
    "url": "undefined"
  },
  "timestamp": 1645746147205
}

```
