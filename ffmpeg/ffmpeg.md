## Video Concatenation

Video can be concatenate with follow snippet in window CMD console
```
(for %i in (*.mp4) do @echo file '%i') > MergedVideoList.txt
ffmpeg -f concat -safe 0 -i MergedVideoList.txt -c copy output.mp4
```

Or it is executed from a batch file
```    
(for %%i in (*.mp4) do @echo file '%%i') > MergedVideoList.txt
ffmpeg -f concat -safe 0 -i MergedVideoList.txt -c copy output.mp4
```

This would be what it looks like `MergedVideoList.txt`. Notice that if no leading zero is applied, the system may sort the video by alphabetical order.
```
file 'video (01).mkv'
file 'video (10).mkv'
file 'video (11).mkv'
file 'video (12).mkv'
file 'video (13).mkv'
file 'video (14).mkv'
file 'video (15).mkv'
file 'video (2).mkv'
file 'video (3).mkv'
file 'video (4).mkv'
file 'video (5).mkv'
file 'video (6).mkv'
file 'video (7).mkv'
```
