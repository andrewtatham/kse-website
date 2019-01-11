call gource -512x288 --stop-position 1.0 --highlight-all-users --hide-filenames --seconds-per-day 1 --output-framerate 30 --output-ppm-stream output.ppm
call ffmpeg -y -r 30 -f image2pipe -vcodec ppm -i output.ppm  -vcodec mpeg -r 30 -q:a 0 out.mp4
