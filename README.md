# 🍿 Chezzy

**Movie night, your way.** A small, ad-free movie discovery site with a dark black, cinema-red and gold theme (and very subtle blue outlines).

🌐 **Website:** https://phillycheese704.github.io/chezzy/

> **Status:** First version. Currently Chezzy links to the filmmakers' official websites to watch the films. It does **not** host or embed movie files.

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
- **Second tap**: title, year, description, creator, subtitle status, licence and an official-source watch button.
- Search and category filters; responsive layout for iPad, phone and desktop.
- Installable/offline-friendly site shell with \`sw.js\`.

### 📵 Offline support

After visiting once while connected, the service worker caches Chezzy's HTML, CSS, JavaScript, manifest and icon. The **catalogue and animation** can work offline, as long as the browser keeps its cache. **Films themselves do not play offline** and are **never secretly downloaded**. Official-source watch links require an internet connection.

## 🚀 Publish on GitHub Pages

In the repo, open **Settings → Pages**, choose **Deploy from a branch**, then select **main** and **/(root)** and save. GitHub Pages may take a short while to publish the first version. Relative file paths ensure this works on the \`/chezzy/\` subpath.

## 🧾 Project code licence

No separate open-source licence has been added for the Chezzy website code yet. The movie licences above apply to the respective films, **not** automatically to this website's code, design or branding.
