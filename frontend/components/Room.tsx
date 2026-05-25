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
} from "@livekit/components-react";
import "@livekit/components-styles";
import { Track } from "livekit-client";
import type { TrackReferenceOrPlaceholder } from "@livekit/components-core";

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

function Transcript({ trackRef, label, className }: {
  trackRef: TrackReferenceOrPlaceholder;
  label: string;
  className: string;
}) {
  const { segments } = useTrackTranscription(trackRef);
  if (!segments || segments.length === 0) return null;
  const latest = segments[segments.length - 1];
  if (!latest?.text?.trim()) return null;

  return (
    <div className={"transcript-bubble " + className}>
      <span className="transcript-label">{label}</span>
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

  const allTracks = useTracks(
    [Track.Source.Camera, Track.Source.Microphone],
    { onlySubscribed: false }
  );

  const localVideoTrack = allTracks.find(
    (t) =>
      t.participant.identity === localParticipant.identity &&
      t.source === Track.Source.Camera
  );

  const localMicTrack = allTracks.find(
    (t) =>
      t.participant.identity === localParticipant.identity &&
      t.source === Track.Source.Microphone
  );

  const agentMicTrack = allTracks.find(
    (t) =>
      agent &&
      t.participant.identity === agent.identity &&
      t.source === Track.Source.Microphone
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
      <div className={"video-container" + (localSpeaking && !micMuted ? " speaking" : "")}>
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
            {localMicTrack && (
              <Transcript
                trackRef={localMicTrack}
                label="You"
                className="user-transcript"
              />
            )}
            {agentMicTrack && (
              <Transcript
                trackRef={agentMicTrack}
                label="AI Coach"
                className="agent-transcript"
              />
            )}
          </div>
        )}
      </div>

      <div className={"agent-status" + (agent ? " connected" : " waiting")}>
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
        <button className={"ctrl-btn" + (micMuted ? " ctrl-off" : "")} onClick={toggleMic}>
          {micMuted ? "🔇" : "🎤"}
          <span>{micMuted ? "Unmute" : "Mute"}</span>
        </button>
        <button className={"ctrl-btn" + (camOff ? " ctrl-off" : "")} onClick={toggleCam}>
          {camOff ? "📵" : "📷"}
          <span>{camOff ? "Cam On" : "Cam Off"}</span>
        </button>
        <button
          className={"ctrl-btn" + (showSubtitles ? " ctrl-active" : "")}
          onClick={() => setShowSubtitles(!showSubtitles)}
        >
          💬
          <span>{showSubtitles ? "Hide CC" : "Show CC"}</span>
        </button>
        <button className="ctrl-btn ctrl-leave" onClick={onLeave}>
          ✖
          <span>Leave</span>
        </button>
      </div>
    </div>
  );
}