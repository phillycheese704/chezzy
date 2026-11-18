# 🍿 Chezzy

**Movie night, your way.** An ad-free discovery website with a black, red and gold theme, tiny dark-blue outlines, movie details and a native fullscreen video player.

🌐 **Watch Chezzy:** https://phillycheese704.github.io/chezzy/

## 🎬 Films, source files and licences

| Film | Copyright holder | Licence | Downloadable file and original studio |
| --- | --- | --- | --- |
| **Caminandes: Llamigos** (2016, 2m30s) | © Blender Foundation | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) | [Wikimedia Commons file](https://commons.wikimedia.org/wiki/File:Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm) · [Blender Studio](https://studio.blender.org/projects/caminandes-3/) |
| **Singularity** (2026, 6m31s) | © Blender Foundation | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | [Wikimedia Commons file](https://commons.wikimedia.org/wiki/File:SINGULARITY_-_Blender_Open_Movie-full_movie.webm) · [Blender Studio](https://studio.blender.org/projects/singularity/) |

Credits: © Blender Foundation. The films are available for sharing under their respective Creative Commons Attribution licences. Streaming from Wikimedia Commons may use a lower-resolution transcode (format conversion); no new scenes or soundtrack are added. Chezzy is independent and not endorsed by Blender Studio. Film trademarks and logos are not used as Chezzy branding.

## 🍿 How it works

1. Tap a film once for popcorn; tap it again for its title, description, length, creator, subtitle status and licence.
2. Press **Watch on Chezzy**. The browser's native video controls support full screen on compatible devices.
3. Video is streamed from Wikimedia Commons directly into a native HTML5 player — **not YouTube**. The video is not uploaded into the GitHub repo.
4. If a source format fails on your device, open the Wikimedia Commons file link to try another format.

## 📥 Offline film saving

1. While online, open movie details and tap **Save for offline**.
2. Keep the site open while the progress increases. Videos are not saved automatically.
3. After the save confirms success, select **Watch on Chezzy** to play the copy even in Airplane Mode.
4. **Download to Files** can export a saved copy to Safari Downloads / the iPad Files app where supported.
5. **Remove saved film** releases browser storage.

Technical notes: The site shell is cached by `sw.js` after an online visit. Movies are stored as Blobs in IndexedDB and played from local blob URLs, not from a YouTube embed. Saving requires Wikimedia Commons to permit the browser's cross-origin download, and enough free space. Some formats or device/browser versions may not play. Browsers including Safari can remove stored website data, so offline browser saves cannot be guaranteed permanent. A file saved to the iPad Files app is a more durable backup.

## ⚖️ Copyright safety

- Verify the rights of each exact movie file, not just whether it can be downloaded for free.
- Credit creators; link to sources and licences; state whether a video was modified.
- Check any separately licensed subtitles, music, covers or trademarks before reusing them.
- The film licences above do not automatically apply to Chezzy's branding or website code.
- No website can guarantee copyright compliance in every jurisdiction. Ask a trusted adult for help reviewing any uncertain content before adding it.

## 📱 iPad and GitHub Pages

On iPad Safari, open https://phillycheese704.github.io/chezzy/?v=4 and refresh. The footer should read **v0.4**. You can use Safari Share → Add to Home Screen. Open the site online and save each film **before** going offline.

GitHub Pages runs the website code from the `main` branch root. It is not used to host full movie files.
