export interface HandleUrl {
    handleHyphen(nonHyphenedUrl: string): string
    reversedHandleHyphen(hyphenedUrl: string) : string
}

export class HandleUrlImplementation implements HandleUrl {
    handleHyphen(nonHyphenedUrl: string): string {
        return nonHyphenedUrl.replace(/ /g, '-').toLowerCase();
    }

    reversedHandleHyphen(hyphenedUrl: string): string {
        return hyphenedUrl[0].toUpperCase() + hyphenedUrl.slice(1).replace(/-/g, ' ');
    }

}