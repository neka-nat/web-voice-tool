export function playAudio(audioBlob: Blob): void {
  const audioURL = URL.createObjectURL(audioBlob);
  const audio = new Audio(audioURL);
  audio.play();
}
