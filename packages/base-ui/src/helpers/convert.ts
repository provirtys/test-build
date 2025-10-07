export const fileToUint8Array = async (file: File) => {
  const buff = await file.arrayBuffer();
  return new Uint8Array(buff);
};

export const uint8ArrayToFile = (data: Uint8Array, fileName: string, mimeType = 'application/octet-stream'): File => {
  const blob = new Blob([data], { type: mimeType });
  return new File([blob], fileName, { type: mimeType });
};

export const fileToBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(`data:image/png;base64,${(reader.result as string).split(',')[1]}`);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

export const base64ToUint8Array = (str: string): Uint8Array => {
  const binaryString = atob(str);
  const length = binaryString.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};
