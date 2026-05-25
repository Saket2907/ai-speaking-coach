"use client";

import {
  LiveKitRoom,
  useLocalParticipant,
  useRemoteParticipants,
  VideoTrack,
  useIsSpeaking,
  useTracks,
  RoomAudioRenderer,
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
  const agent = remoteParticipants.find((p) =>
    p.identity.startsWith("agent")
  );

  const agentSpeaking = useIsSpeaking(agent ?? localParticipant);
  const localSpeaking = useIsSpeaking(localParticipant);

  // Get local camera track
  const localTracks = useTracks([Track.Source.Camera], {
    onlySubscribed: false,
  });
  const localVideoTrack = localTracks.find(
    (t) => t.participant.identity === localParticipant.identity
  );

  return (
    <div className="room">
      {/* User video */}
      <div className={`video-container ${localSpeaking ? "speaking" : ""}`}>
        {localVideoTrack ? (
          <VideoTrack trackRef={localVideoTrack} />
        ) : (
          <div className="video-placeholder">
            <span>📷</span>
            <p>Camera loading...</p>
          </div>
        )}
        <div className="participant-label">
          You {localSpeaking && <span className="speaking-dot" />}
        </div>
      </div>

      {/* Agent status */}
      <div className={`agent-status ${agent ? "connected" : "waiting"}`}>
        <div className="agent-icon">🤖</div>
        <div className="agent-info">
          <p className="agent-name">AI Speaking Coach</p>
          {!agent && <p className="agent-state">Waiting for agent to join...</p>}
          {agent && !agentSpeaking && (
            <p className="agent-state listening">Listening...</p>
          )}
          {agent && agentSpeaking && (
            <p className="agent-state speaking">
              <span className="pulse" /> Speaking...
            </p>
          )}
        </div>
      </div>

      <button className="btn-leave" onClick={onLeave}>
        Leave Session
      </button>
    </div>
  );
}
