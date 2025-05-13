## Video Concatenation

Video can be concatenate with follow snippet in window CMD console
    (for %i in (*.mp4) do @echo file '%i') > MergedVideoList.txt
    ffmpeg -f concat -safe 0 -i MergedVideoList.txt -c copy output.mp4


Or it is executed from a batch file
    (for %%i in (*.mp4) do @echo file '%%i') > MergedVideoList.txt
    ffmpeg -f concat -safe 0 -i MergedVideoList.txt -c copy output.mp4


