import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export class ImageEncoder {
  public static toBase64(image: File) {
    return image.arrayBuffer().then((data) => {
      return Buffer.from(data).toString("base64")
    })
  }

  public static getImageEncodedURL(
    encodedImage: string,
    options: { ext: string }
  ) {
    return `data:image/${options.ext};base64,${encodedImage}`
  }
}
