# 🍿 Chezzy

**Movie night, your way.** A small movie discovery site with no Chezzy-run adverts, using a black, cinema-red and gold theme (and very subtle blue outlines).

🌐 **Website:** https://phillycheese704.github.io/chezzy/

> **Status:** First version. Films play inside Chezzy through the filmmakers' **official YouTube embeds**. Chezzy does **not** upload or host video files.

## 🎬 Films and credits

| Film | Creator | Original source | Licence information |
| --- | --- | --- | --- |
| **Caminandes: Llamigos** (2016) | © Blender Foundation | [Blender Studio — Caminandes 3](https://studio.blender.org/projects/caminandes-3/) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/); see [Blender's sharing notes](https://studio.blender.org/remixing/) |
| **Singularity** (2026) | © Blender Foundation | [Blender Studio — Singularity](https://studio.blender.org/projects/singularity/) | [Official Blender Studio licensing page — CC BY 4.0](https://studio.blender.org/projects/singularity/pages/licensing/) |

**Attribution:** (CC) Blender Foundation | [studio.blender.org](https://studio.blender.org/)

These movie entries use original Chezzy shapes/emoji instead of copied film posters, branding, screenshots, audio or video. The Blender Foundation and Blender Studio do not sponsor or endorse Chezzy. Trademarks, logos, third-party materials and any separately excluded assets are **not** automatically covered by a film's Creative Commons licence.

### ⚖️ Copyright safety

- Use the filmmaker's official embeds and source links; don't reupload files without checking the **exact** film and all relevant rights.
- Only host videos, music, subtitles or thumbnails after checking their licensing and providing appropriate attribution.
- For CC BY content, credit the creator, provide a source and licence link, and say if changes were made.
- A "free download" does **not** by itself grant permission to republish.
- No film can be guaranteed lawful everywhere without checking the relevant laws and rights.

## 🍿 Site features

- Dark theme: **black + red + gold** with very subtle dark-blue outlines.
- **First tap** on a film: popcorn animation.
- **Second tap**: title, runtime, description, creator, subtitle status, licence and an in-site Play button.
- **Third tap (Play)**: opens the official Blender Studio YouTube embed in a dedicated 16:9 cinema player; YouTube's built-in player offers fullscreen when supported.
- YouTube may display its own advertising or cookies. Chezzy does not control that.
- Search and category filters; responsive layout for iPad, phone and desktop.
- Installable/offline-friendly site shell with `sw.js`.

### 📵 Offline support

After visiting once while connected, the service worker caches Chezzy's HTML, CSS, JavaScript, manifest and icon. It tries the network first for new website code, then uses cached files if offline. The **catalogue and animation** can work offline, as long as the browser keeps its cache. **Films themselves do not play offline** and are **never secretly downloaded**. The embedded player requires an internet connection. Video is never cached by Chezzy.

## 📺 Official embedded videos

| Film | Official Blender Studio upload |
| --- | --- |
| **Caminandes: Llamigos** | https://www.youtube.com/watch?v=L6mLFxGRFI4 |
| **Singularity** | https://www.youtube.com/watch?v=l5OZu-IrXpw |

Tap a movie **once for popcorn**, **again for details**, then **Play movie here**. This loads an official YouTube player inside Chezzy. The player includes a fullscreen control where supported; if embedding or fullscreen is unavailable, open the **Watch on official YouTube** link. The main Play button also opens YouTube as a fallback when JavaScript isn't running. iPad compatibility may vary by browser.

Embeds use YouTube's privacy-enhanced (`youtube-nocookie.com`) domain and only load after clicking Play. YouTube may still use cookies or show its own ads. Films **will not work offline**.

YouTube guidance: [Embedding videos](https://support.google.com/youtube/answer/171780?hl=en-GB) · [Embedded player options](https://developers.google.com/youtube/player_parameters).

## 🚀 Publish on GitHub Pages

Go to **Settings → Pages → Deploy from a branch**. Choose `main` and `/(root)`, then Save.

## 🧾 Code licensing

No separate software licence is assigned to the Chezzy website code at this stage. The CC licences above cover the respective films, not automatically the Chezzy branding or design.

### Troubleshooting on iPad

If a movie button seems unresponsive after an update, open the site in Safari and refresh the page. The site footer should say **v0.3**. You can also use the **Watch on official YouTube** backup link under each film. Videos require the internet, and fullscreen depends on your device and YouTube.
