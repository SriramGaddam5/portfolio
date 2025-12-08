// Calculate reading time in minutes based on word count
// Average reading speed: 200 words per minute
export const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
};

export const formatReadingTime = (minutes: number): string => {
  return `${minutes} min read`;
};
