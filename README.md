# 🍿 Chezzy

**Movie night, your way.** An ad-free discovery website with a black, red and gold theme, tiny dark-blue outlines, movie details and a native fullscreen video player.

🌐 **Watch Chezzy:** https://phillycheese704.github.io/chezzy/

## 🎬 Films, source files and licences

| Film | Copyright holder | Licence | Downloadable file and original studio |
| --- | --- | --- | --- |
| **Caminandes: Llama Drama** (2013, 1m30s) | © Pablo Vazquez, Beorn Leonard, Francesco Siddi; music and sound Jan Morgenstern | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) | [Wikimedia Commons verified film](https://commons.wikimedia.org/wiki/File:Caminandes-_Llama_Drama_-_Short_Movie.ogv) · [Blender Studio episode gallery](https://studio.blender.org/projects/caminandes-2/) |
| **Caminandes: Gran Dillama** (2013, 2m26s) | © Blender Foundation; directed by Pablo Vazquez | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [Wikimedia Commons verified film](https://commons.wikimedia.org/wiki/File:Caminandes_-_Gran_Dillama_-_Blender_Foundation%27s_new_Open_Movie.webm) · [Blender Studio episode 2](https://studio.blender.org/projects/caminandes-2/) |
| **Caminandes: Llamigos** (2016, 2m30s) | © Blender Foundation | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) | [Wikimedia Commons file](https://commons.wikimedia.org/wiki/File:Caminandes_3_-_Llamigos_-_Blender_Animated_Short.webm) · [Blender Studio](https://studio.blender.org/projects/caminandes-3/) |
| **Singularity** (2026, 6m31s) | © Blender Foundation | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | [Wikimedia Commons file](https://commons.wikimedia.org/wiki/File:SINGULARITY_-_Blender_Open_Movie-full_movie.webm) · [Blender Studio](https://studio.blender.org/projects/singularity/) |
| **Wing It!** (2023, 3m58s) | © Blender Foundation | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | [Wikimedia Commons file](https://commons.wikimedia.org/wiki/File:WING_IT%21_-_Blender_Open_Movie-full_movie.webm) · [Blender Studio](https://studio.blender.org/projects/wing-it/) |
| **Coffee Run** (2020, 3m05s) | © Blender Foundation | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | [Wikimedia Commons file](https://commons.wikimedia.org/wiki/File:Coffee_Run_-_Blender_Open_Movie-full_movie.webm) · [Blender Studio](https://studio.blender.org/projects/coffee-run/) |
| **Spring** (2019, 7m44s) | © Blender Foundation · Directed by Andy Goralczyk | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | [Wikimedia Commons file](https://commons.wikimedia.org/wiki/File:Spring_-_Blender_Open_Movie.webm) · [Blender Studio](https://studio.blender.org/projects/spring/) |

Credits: © Blender Foundation. All seven films are available for sharing under their respective Creative Commons Attribution licences. Streaming from Wikimedia Commons may use a lower-resolution transcode (format conversion); no new scenes or soundtrack are added. Chezzy is independent and not endorsed by Blender Studio. Film trademarks and logos are not used as Chezzy branding.

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

On iPad Safari, open https://phillycheese704.github.io/chezzy/?v=6 and refresh. The footer should read **v0.6**. You can use Safari Share → Add to Home Screen. Open the site online and save each film **before** going offline.

GitHub Pages runs the website code from the `main` branch root. It is not used to host full movie files.

## 📅 New in v0.5

Added **Wing It!** (2023), **Coffee Run** (2020) and **Spring** (2019), plus **Fantasy** and **Drama** filters. All three video files are hosted by Wikimedia Commons under CC BY 4.0; Chezzy still uses its own HTML5 player and opt-in offline storage. They have available 360p MPEG-4 QuickTime transcodes for iPad playback, although playback and storage depend on the browser and Wikimedia's API.

## 🦙 Caminandes collection (v0.6)

All three original Caminandes episodes are available in order in their own section. The **Caminandes** filter also shows these films within the searchable catalogue. The remaining four films are displayed in the main catalogue when the homepage first opens.

The film streams from Wikimedia Commons through the same Chezzy HTML5 player. Optional offline saving works separately for each movie. Each episode's licence appears in its details; the video for **Gran Dillama** is **CC BY-SA 3.0** (different from the cover art).

### Real covers and thumbnail credits

- **Llama Drama:** Wikimedia Commons video-frame preview from [the original CC BY 3.0 movie](https://commons.wikimedia.org/wiki/File:Caminandes-_Llama_Drama_-_Short_Movie.ogv); the film creators are Pablo Vazquez, Beorn Leonard and Francesco Siddi, with music/sound by Jan Morgenstern. We avoid [a separate thumbnail with a disputed copyright tag](https://commons.wikimedia.org/wiki/File:Pablo_Vazquez_-_Caminandes_-_Episode_1_-_Llama_Drama_-_Cover_thumbnail.png).
- **Gran Dillama:** [actual Blender Foundation official cover thumbnail](https://commons.wikimedia.org/wiki/File:Blender_Foundation_-_Caminandes_-_Episode_2_-_Gran_Dillama_-_Cover_thumbnail.png), **CC BY 3.0**, credited to Blender Foundation. The movie itself is CC BY-SA 3.0.
- **Llamigos:** [actual Blender Foundation official cover thumbnail](https://commons.wikimedia.org/wiki/File:Blender_Foundation_-_Caminandes_-_Episode_3_-_Llamigos_-_Cover_thumbnail.png), **CC BY 4.0**, credited to Blender Foundation. The movie itself is CC BY 3.0.

Thumbs load from Wikimedia Commons only when online; without a connection, Chezzy falls back to the illustrated emoji cards. No posters are invented or generated. We do not cache videos or copyrighted images without explicit user action; offline film copies are stored only after Save for offline.

