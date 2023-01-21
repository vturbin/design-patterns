"use strict";
/** Before */
// class Bitmap {
//     constructor(private filenamePath: string){
//         console.log(`Loading image from {filename}`)
//     }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bitmap = void 0;
//     public show(): void {
//         console.log(`Showing image ${this.filenamePath}`)
//     }
// }
// const showImage = (image: Bitmap): void => {
//     image.show()
// }
// const bitmap = new Bitmap('facepalm.jpg');
// showImage(bitmap)
/** After */
class Bitmap {
    constructor(filenamePath) {
        this.filenamePath = filenamePath;
        console.log(`Loading image from ${this.filenamePath}`);
    }
    show() {
        console.log(`Showing image ${this.filenamePath}`);
    }
}
exports.Bitmap = Bitmap;
class LazyBitmap {
    constructor(filenamePath) {
        this.filenamePath = filenamePath;
    }
    show() {
        if (this.bitmap) {
            return this.bitmap.show();
        }
        this.bitmap = new Bitmap(this.filenamePath);
        this.bitmap.show();
    }
}
const showImage = (image) => {
    image.show();
};
const bitmap = new LazyBitmap('facepalm.jpg');
showImage(bitmap);
