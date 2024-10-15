export default function useBase64URL(
  extension: string,
  encodedImageString: string
) {
  return `data:image/${extension};base64,${encodedImageString}`;
}
