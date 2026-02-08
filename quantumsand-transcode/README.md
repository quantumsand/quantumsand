# Quantum Sand Transcode

A RubyGem for transcoding various files within Quantum Sand.

Please see:
https://video.stackexchange.com/questions/19590/convert-mp4-to-webm-without-quality-loss-with-ffmpeg
(user contributions licensed under CC BY-SA)

This RubyGem will automate the following `ffmpeg` commands as necessary...

Using two-pass Constant Quality mode for transcoding to VP9 WebM:

```bash
ffmpeg -i input.mp4 -b:v 0 -crf 30 -pass 1 -an -f webm -y /dev/null
ffmpeg -i input.mp4 -b:v 0 -crf 30 -pass 2 output.webm
```

If you want to scale the video, such as to 720p, change the second line to this:
```bash
ffmpeg -i input.mp4 -vf scale=-1:720 -b:v 0 -crf 30 -pass 2 output.webm
```

Sometimes you need to add remapping for the 5.1 channels:
```bash
-af "channelmap=channel_layout=5.1"
```

To create a square video something like 720 pixels:
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 15 -filter_complex "[0:v]split=2[blur][vid];[blur]scale=720:720:force_original_aspect_ratio=increase,crop=720:720,boxblur=luma_radius=min(h\,w)/20:luma_power=1:chroma_radius=min(cw\,ch)/20:chroma_power=1[bg];[vid]scale=720:720:force_original_aspect_ratio=decrease[ov];[bg][ov]overlay=(W-w)/2:(H-h)/2" Instagramized.mp4
```

To create a lossless VP9, the `-lossless 1` option of ffmpeg’s VP9 encoder enables lossless quality mode, but with a potentially enormous increase in filesize.

All you need is this:
```bash
ffmpeg -i input.mp4 -lossless 1 output.webm
```

To turn PNG rendered frames from Blender into a boomerang style video:

```bash
ffmpeg -i %04d.png  -filter_complex "[0]reverse[r];[0][r]concat=n=2:v=1:a=0" output.mp4
```

To turn PNG alpha transparent rendered frames into boomerang style videos with two-pass VP9:

```bash
ffmpeg -i %04d.png  -filter_complex "[0]reverse[r];[0][r]concat=n=2:v=1:a=0" -b:v 0 -crf 30 -pass 1 -an -f webm -y /dev/null

ffmpeg -i %04d.png  -filter_complex "[0]reverse[r];[0][r]concat=n=2:v=1:a=0" -b:v 0 -crf 30 -pass 2 output.webm
```

To add a silent audio track:
```bash
ffmpeg -f lavfi -i aevalsrc=0 -i input.mp4  -c:v copy -c:a aac -map 0 -map 1:v -shortest output.mp4
```

To make a single image into a video:
```bash
ffmpeg -loop 1 -i image.png -c:v libx264 -t 15 -pix_fmt yuv420p -vf scale=320:240 out.mp4
```
