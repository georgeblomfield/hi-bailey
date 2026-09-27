// Serves index.html straight from the GitHub repo, so edits on GitHub go live within a minute.
const SRC = "https://raw.githubusercontent.com/georgeblomfield/hi-bailey/main/index.html";

export default {
  async fetch() {
    const r = await fetch(SRC, { cf: { cacheTtl: 60, cacheEverything: true } });
    if (!r.ok) return new Response("Bailey is still a legend, but the page is loading. Try again.", { status: 502 });
    return new Response(await r.text(), {
      headers: { "content-type": "text/html;charset=UTF-8", "cache-control": "public, max-age=60" }
    });
  }
};
