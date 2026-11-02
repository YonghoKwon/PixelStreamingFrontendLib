> **이 저장소는 보관(archive)되었습니다 — 2026-11-02**
>
> 라이브러리 원본은 [YonghoKwon/PixelStreamingInfrastructure](https://github.com/YonghoKwon/PixelStreamingInfrastructure)의 `Frontend/library`로 옮겨졌습니다([PR #12](https://github.com/YonghoKwon/PixelStreamingInfrastructure/pull/12), 이 저장소 `535db96` 기준). 앞으로의 수정·Nexus 배포는 그 폴더에서 진행합니다. 이 저장소의 기록과 태그(`upstream/ue5.3-1.0.9`)는 참고용으로 남겨 둡니다.

## lib-pixelstreamingfrontend

The core library for the browser/client side of Pixel Streaming experiences. **This library contains no UI.**

A good example of using this library (with some custom UI) is the [default Pixel Streaming web player](https://github.com/EpicGamesExt/PixelStreamingInfrastructure/tree/UE5.3/Frontend/implementations/typescript).

### Key features
- Create a websocket connection to communicate with the signalling server.
- Create a WebRTC player that displays the Unreal Engine video and audio.
- Handling of input from the user and transmitting it back to Unreal Engine.
- Opens a datachannel connection for sending and receiving custom data (in addition to input).

### Adding it to your project
`npm i @epicgames-ps/lib-pixelstreamingfrontend-ue5.3`



