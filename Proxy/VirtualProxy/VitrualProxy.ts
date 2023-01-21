/** Before */
// class Bitmap {
//     constructor(private filenamePath: string){
//         console.log(`Loading image from {filename}`)
//     }

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
export class Bitmap {
    constructor(private filenamePath: string){
        console.log(`Loading image from ${this.filenamePath}`);
    }

    public show(): void {
        console.log(`Showing image ${this.filenamePath}`)
    }
}

class LazyBitmap {
    private bitmap: Bitmap;

    constructor(private filenamePath: string){
    }

    public show(): void {
        if (this.bitmap) {
            return this.bitmap.show()
        }
        this.bitmap = new Bitmap(this.filenamePath)
        this.bitmap.show()
    }
}

const showImage = (image: Bitmap | LazyBitmap): void => {
    image.show()
}

const bitmap = new LazyBitmap('facepalm.jpg');
showImage(bitmap)