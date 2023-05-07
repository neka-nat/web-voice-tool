import React from 'react';
import { useRecorder } from '../hooks/useRecorder';
import { playAudio } from '../utils/playAudio';

export const Recorder: React.FC = () => {
  const [audioBlob, status, startRecording, stopRecording] = useRecorder();

  const handlePlay = () => {
    if (audioBlob) {
      playAudio(audioBlob);
    }
  };

  return (
    <div>
      <button onClick={startRecording} disabled={status === 'recording'}>
        録音開始
      </button>
      <button onClick={stopRecording} disabled={status !== 'recording'}>
        録音停止
      </button>
      <button onClick={handlePlay} disabled={status === 'recording' || status === 'idle'}>
        再生
      </button>
    </div>
  );
};

export default Recorder;
