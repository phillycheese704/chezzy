# 🍿 Chezzy

**Movie night, your way.** A small movie discovery site with no Chezzy-run adverts with a dark black, cinema-red and gold theme (and very subtle blue outlines).

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

- Link to the official source until we have checked the **exact** film file and all relevant rights.
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
- Installable/offline-friendly site shell with \`sw.js\`.

### 📵 Offline support

After visiting once while connected, the service worker caches Chezzy's HTML, CSS, JavaScript, manifest and icon. The **catalogue and animation** can work offline, as long as the browser keeps its cache. **Films themselves do not play offline** and are **never secretly downloaded**. The embedded player requires an internet connection. Video is never cached by Chezzy.
