# VRCX Immich Screenshot Uploader

This is a hacky script to hook into VRCX's screenshot parsing and use the immich cli to upload it to an album titled `VRChat`

## Setup

- Make a copy of node.exe in your nodejs installation folder called launch.exe
- - This is required as the only way of running an external program through VRCX is `AppApi.StartGameFromPath`, which checks for the path ending with launch.exe
- Update the paths in custom.js to your launch.exe and the index.js of this directory
- Copy the custom.js to %AppData%/VRCX/custom.js

If you would like a different album name in immich, edit the `-A VRChat` part of the exec function call to whatever album you would like!