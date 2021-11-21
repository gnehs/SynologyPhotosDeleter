# SynologyPhotosDeleter
Delete screenshots uploaded from your iPhone by analyzing the photo Exif
![image](https://user-images.githubusercontent.com/16719720/142760165-4901782c-98e1-421a-87cb-dfec3e5d950c.png)

# Installation
```
docker pull ghcr.io/gnehs/synologyphotosdeleter:main 
```
- deploy the image to your Synology NAS
    - export port 3001
    - Mount the photos folder to `/app/photos`