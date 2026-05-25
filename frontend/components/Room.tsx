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
  useTranscriptions,
  useChat,
} from "@livekit/components-react";
import "@livekit/components-styles";
import { Track } from "livekit-client";

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

function RoomUI({ onLeave }: { onLeave: () => void }) {
  const { localParticipant } = useLocalParticipant();
  const remoteParticipants = useRemoteParticipants();
  const agent = remoteParticipants.find((p) => p.identity.startsWith("agent"));

  const [micMuted, setMicMuted] = useState(false);
  const [camOff, setCamOff] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(true);

  const agentSpeaking = useIsSpeaking(agent ?? localParticipant);
  const localSpeaking = useIsSpeaking(localParticipant);
  const transcriptions = useTranscriptions();
  const { chatMessages } = useChat();

  // Debug: log agent identity and chat message senders
  if (process.env.NODE_ENV === "development" || true) {
    if (agent) console.log("Agent identity:", agent.identity);
    if (chatMessages.length > 0) console.log("Last msg from:", chatMessages[chatMessages.length - 1].from?.identity);
  }

  type SubLine = { text: string; isAgent: boolean };
  let lastTwo: SubLine[] = [];
  if (transcriptions.length > 0) {
    lastTwo = transcriptions.slice(-2).map((t) => ({
      text: t.text ?? "",
      isAgent: (t as unknown as { participantIdentity?: string }).participantIdentity?.startsWith("agent") ?? false,
    }));
  } else {
    lastTwo = chatMessages.slice(-2).map((m) => {
      const identity = m.from?.identity ?? "";
      // agent identity is never the local participant
      const isAgent = identity !== localParticipant.identity && identity !== "";
      return { text: m.message, isAgent };
    });
  }

  const localTracks = useTracks([Track.Source.Camera], { onlySubscribed: false });
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
      {/* Video */}
      <div className={"video-container" + (localSpeaking && !micMuted ? " speaking" : "")}>
        {localVideoTrack && !camOff ? (
          <VideoTrack trackRef={localVideoTrack} />
        ) : (
          <div className="video-placeholder">
            <div className="cam-off-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 16v1a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2h2m5.66 0H14a2 2 0 012 2v3.34l1 1L23 7v10"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            </div>
            <p>{camOff ? "Camera off" : "Starting camera..."}</p>
          </div>
        )}

        <div className="participant-label">
          <span className={"status-dot" + (localSpeaking && !micMuted ? " active" : "")} />
          You
          {micMuted && <span className="mic-off-tag">muted</span>}
        </div>

        {/* Subtitles */}
        {showSubtitles && lastTwo.length > 0 && (
          <div className="subtitles-overlay">
            {lastTwo.map((t, i) => (
                <div
                  key={i}
                  className={"subtitle-line" + (t.isAgent ? " subtitle-agent" : " subtitle-you")}
                >
                  <span className="subtitle-speaker">{t.isAgent ? "AI Coach" : "You"}</span>
                  <span className="subtitle-text">{t.text}</span>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Agent card */}
      <div className={"agent-card" + (agent ? " connected" : "")}>
        <div className="agent-avatar">
          <span>🤖</span>
          {agent && (
            <span className={"agent-dot" + (agentSpeaking ? " speaking" : " listening")} />
          )}
        </div>
        <div className="agent-info">
          <p className="agent-name">AI Speaking Coach</p>
          {!agent && <p className="agent-state muted-text">Waiting to join...</p>}
          {agent && !agentSpeaking && <p className="agent-state green-text">● Listening</p>}
          {agent && agentSpeaking && <p className="agent-state purple-text">◆ Speaking</p>}
        </div>
      </div>

      {/* Controls */}
      <div className="control-bar">
        <button
          className={"control-btn" + (micMuted ? " control-btn--off" : "")}
          onClick={toggleMic}
          title={micMuted ? "Unmute" : "Mute"}
        >
          <div className="control-btn__icon">
            {micMuted ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
              </svg>
            )}
          </div>
          <span className="control-btn__label">{micMuted ? "Unmute" : "Mute"}</span>
        </button>

        <button
          className={"control-btn" + (camOff ? " control-btn--off" : "")}
          onClick={toggleCam}
          title={camOff ? "Start Video" : "Stop Video"}
        >
          <div className="control-btn__icon">
            {camOff ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 6.5l-4-4-15 15 4 4 2.5-2.5c.28.08.58.12.88.12 1.66 0 3-1.34 3-3 0-.3-.04-.6-.12-.88L21 6.5zm-9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM3.27 2L2 3.27 4.73 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c.55 0 1.05-.22 1.41-.59l1.32 1.32L23 21.46 3.27 2zM8 18H4V8h.73L8 11.27V18z"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
              </svg>
            )}
          </div>
          <span className="control-btn__label">{camOff ? "Start Video" : "Stop Video"}</span>
        </button>

        <button
          className={"control-btn" + (showSubtitles ? " control-btn--active" : "")}
          onClick={() => setShowSubtitles(!showSubtitles)}
          title="Toggle subtitles"
        >
          <div className="control-btn__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"/>
            </svg>
          </div>
          <span className="control-btn__label">{showSubtitles ? "Hide CC" : "Show CC"}</span>
        </button>

        <button className="control-btn control-btn--leave" onClick={onLeave}>
          <div className="control-btn__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10.9 15.6l1.4 1.4 5-5-5-5-1.4 1.4 2.6 2.6H3v2h10.5l-2.6 2.6zM19 3H5c-1.1 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
            </svg>
          </div>
          <span className="control-btn__label">Leave</span>
        </button>
      </div>
    </div>
  );
}