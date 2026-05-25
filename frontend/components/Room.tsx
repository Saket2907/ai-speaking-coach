"use client";

import { useState, useCallback } from "react";
import {
  LiveKitRoom,
  useLocalParticipant,
  useRemoteParticipants,
  VideoTrack,
  useIsSpeaking,
  useTracks,
  RoomAudioRenderer,
  useTrackTranscription,
  useRemoteParticipant,
} from "@livekit/components-react";
import "@livekit/components-styles";
import { Track, TrackPublication } from "livekit-client";

interface RoomProps {
  token: string;
  serverUrl: string;
  onLeave: () => void;
}

export default function Room({ token, serverUrl, onLeave }: RoomProps) {
  return (
    <LiveKitRoom
      token={token}
      serverUrl={serverUrl}
      connect={true}
      video={true}
      audio={true}
      onDisconnected={onLeave}
    >
      <RoomAudioRenderer />
      <RoomUI onLeave={onLeave} />
    </LiveKitRoom>
  );
}

function AgentTranscript({ agentIdentity }: { agentIdentity: string }) {
  const agentParticipant = useRemoteParticipant(agentIdentity);
  const audioPublication = agentParticipant?.getTrackPublication(
    Track.Source.Microphone
  ) as TrackPublication | undefined;

  const { segments } = useTrackTranscription(
    audioPublication
      ? { participant: agentParticipant!, publication: audioPublication }
      : undefined
  );

  if (!segments || segments.length === 0) return null;
  const latest = segments[segments.length - 1];

  return (
    <div className="transcript-bubble agent-transcript">
      <span className="transcript-label">AI Coach</span>
      <p>{latest.text}</p>
    </div>
  );
}

function UserTranscript() {
  const { localParticipant } = useLocalParticipant();
  const audioPublication = localParticipant?.getTrackPublication(
    Track.Source.Microphone
  ) as TrackPublication | undefined;

  const { segments } = useTrackTranscription(
    audioPublication
      ? { participant: localParticipant, publication: audioPublication }
      : undefined
  );

  if (!segments || segments.length === 0) return null;
  const latest = segments[segments.length - 1];
  if (!latest.text.trim()) return null;

  return (
    <div className="transcript-bubble user-transcript">
      <span className="transcript-label">You</span>
      <p>{latest.text}</p>
    </div>
  );
}

function RoomUI({ onLeave }: { onLeave: () => void }) {
  const { localParticipant } = useLocalParticipant();
  const remoteParticipants = useRemoteParticipants();
  const agent = remoteParticipants.find((p) =>
    p.identity.startsWith("agent")
  );

  const [micMuted, setMicMuted] = useState(false);
  const [camOff, setCamOff] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(true);

  const agentSpeaking = useIsSpeaking(agent ?? localParticipant);
  const localSpeaking = useIsSpeaking(localParticipant);

  const localTracks = useTracks([Track.Source.Camera], {
    onlySubscribed: false,
  });
  const localVideoTrack = localTracks.find(
    (t) => t.participant.identity === localParticipant.identity
  );

  const toggleMic = useCallback(async () => {
    await localParticipant.setMicrophoneEnabled(micMuted);
    setMicMuted(!micMuted);
  }, [localParticipant, micMuted]);

  const toggleCam = useCallback(async () => {
    await localParticipant.setCameraEnabled(camOff);
    setCamOff(!camOff);
  }, [localParticipant, camOff]);

  return (
    <div className="room">
      <div className={`video-container ${localSpeaking && !micMuted ? "speaking" : ""}`}>
        {localVideoTrack && !camOff ? (
          <VideoTrack trackRef={localVideoTrack} />
        ) : (
          <div className="video-placeholder">
            <span>{camOff ? "📵" : "📷"}</span>
            <p>{camOff ? "Camera off" : "Camera loading..."}</p>
          </div>
        )}
        <div className="participant-label">
          You {micMuted && <span className="muted-badge">🔇</span>}
          {localSpeaking && !micMuted && <span className="speaking-dot" />}
        </div>
        {showSubtitles && (
          <div className="subtitles-overlay">
            <UserTranscript />
            {agent && <AgentTranscript agentIdentity={agent.identity} />}
          </div>
        )}
      </div>

      <div className={`agent-status ${agent ? "connected" : "waiting"}`}>
        <div className="agent-icon">🤖</div>
        <div className="agent-info">
          <p className="agent-name">AI Speaking Coach</p>
          {!agent && <p className="agent-state">Waiting for agent to join...</p>}
          {agent && !agentSpeaking && (
            <p className="agent-state listening">● Listening...</p>
          )}
          {agent && agentSpeaking && (
            <p className="agent-state speaking">
              <span className="pulse" /> Speaking...
            </p>
          )}
        </div>
      </div>

      <div className="controls">
        <button className={`ctrl-btn ${micMuted ? "ctrl-off" : ""}`} onClick={toggleMic}>
          {micMuted ? "🔇" : "🎤"}
          <span>{micMuted ? "Unmute" : "Mute"}</span>
        </button>
        <button className={`ctrl-btn ${camOff ? "ctrl-off" : ""}`} onClick={toggleCam}>
          {camOff ? "📵" : "📷"}
          <span>{camOff ? "Cam On" : "Cam Off"}</span>
        </button>
        <button className={`ctrl-btn ${showSubtitles ? "ctrl-active" : ""}`} onClick={() => setShowSubtitles(!showSubtitles)}>
          💬
          <span>{showSubtitles ? "Hide CC" : "Show CC"}</span>
        </button>
        <button className="ctrl-btn ctrl-leave" onClick={onLeave}>
          📵
          <span>Leave</span>
        </button>
      </div>
    </div>
  );
}