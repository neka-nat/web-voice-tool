import { useState, useEffect } from 'react';

type RecorderStatus = 'idle' | 'recording' | 'recorded';

export function useRecorder(): [Blob | undefined, RecorderStatus, () => void, () => void] {
  const [recorder, setRecorder] = useState<MediaRecorder | undefined>(undefined);
  const [status, setStatus] = useState<RecorderStatus>('idle');
  const [audioBlob, setAudioBlob] = useState<Blob | undefined>(undefined);

  useEffect(() => {
    async function init() {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const newRecorder = new MediaRecorder(stream);
      setRecorder(newRecorder);
    }
    init();
  }, []);

  const startRecording = () => {
    if (recorder) {
      setStatus('recording');
      recorder.start();
      recorder.addEventListener('dataavailable', (e: BlobEvent) => {
        setAudioBlob(e.data);
      });
    }
  };

  const stopRecording = () => {
    if (recorder && status === 'recording') {
      setStatus('recorded');
      recorder.stop();
    }
  };

  return [audioBlob, status, startRecording, stopRecording];
}
