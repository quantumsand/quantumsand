# Quantum Sand UI Artwork

Blender animated scenes are rendered with alpha transparency backgrounds.

This allows for randomised pastel colour backgrounds in the video playback.

Or anything else you can imagine as a background layer.

The alpha transparent PNG frames are directly transcoded into VP9 webm videos with a boomerang style looping effect.

The boomerang style effect is a short, back-and-forth video effect.

The `ffmpeg` transcode command is fairly simple.

The boomerang effect is achieved using `ffmpeg` with VP9 video as the output.
