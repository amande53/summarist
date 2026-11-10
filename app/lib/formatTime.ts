export function formatTime(totalSeconds: number) {
  const secondsInMinute = 60;
  const minutes = Math.floor(totalSeconds / secondsInMinute);
  const seconds = Math.floor(totalSeconds % secondsInMinute);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function formatTimeWords(totalSeconds: number) {
  const secondsInMinute = 60;
  const minutes = Math.floor(totalSeconds / secondsInMinute);
  const seconds = Math.floor(totalSeconds % secondsInMinute);
  return `${minutes} mins ${seconds} secs`;
}
