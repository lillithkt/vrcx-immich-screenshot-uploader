
$app.processScreenshot = async function (path) {
    var newPath = path;
    if ($app.screenshotHelper) {
        var location = $app.parseLocation($app.lastLocation.location);
        var metadata = {
            application: 'VRCX',
            version: 1,
            author: {
                id: $app.API.currentUser.id,
                displayName: $app.API.currentUser.displayName
            },
            world: {
                name: $app.lastLocation.name,
                id: location.worldId,
                instanceId: $app.lastLocation.location
            },
            players: []
        };
        for (var user of $app.lastLocation.playerList.values()) {
            metadata.players.push({
                id: user.userId,
                displayName: user.displayName
            });
        }
        newPath = await AppApi.AddScreenshotMetadata(
            path,
            JSON.stringify(metadata),
            location.worldId,
            $app.screenshotHelperModifyFilename
        );
    }
    if ($app.screenshotHelperCopyToClipboard) {
        await AppApi.CopyImageToClipboard(newPath);
    }
    await AppApi.StartGameFromPath(
        "C:/Program Files/nodejs/launch.exe",
        "C:/Users/lillith/code/vrchat-immich-screenshot-uploader/index.js " + newPath
    );
};