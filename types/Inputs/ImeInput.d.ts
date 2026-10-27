/** Browser-owned IME buffer with committed-text and input-only replacement paths. */
export declare class ImeInput {
    private video;
    private enabled;
    private sendText;
    private releaseKeys;
    readonly element: HTMLTextAreaElement;
    private composing;
    private syncedValue;
    private disposed;
    private readonly cleanups;
    constructor(video: HTMLVideoElement, enabled: () => boolean, sendText: (text: string) => void, releaseKeys: () => void);
    private synchronize;
    private listen;
    ownsFocus(): boolean;
    isComposing(event: KeyboardEvent): boolean;
    noteDelete(down: boolean): void;
    clearBuffer(): void;
    private reset;
    dispose(): void;
}
