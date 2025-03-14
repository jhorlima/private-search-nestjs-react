export const uploadJson = <T>(files: FileList | null) => {
  const file = files?.[0];

  if (!file) {
    throw new Error("No file selected");
  }

  return new Promise<T>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result;
        if (typeof content === "string") {
          resolve(JSON.parse(content));
        } else {
          reject(new Error("Invalid file content"));
        }
      } catch (error) {
        reject(error);
      }
    };
    reader.readAsText(file);
  });
};
