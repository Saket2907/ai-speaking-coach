"use client";

import { useState } from "react";
import Room from "@/components/Room";

export default function Home() {
  const [joined, setJoined] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleJoin() {
    setLoading(true);
    setError(null);
    try {
      const roomId = "session-" + Date.now() + "-" + Math.random().toString(36).slice(2, 7);
      const res = await fetch(
        "/api/token?room=" + roomId + "&username=user-" + Date.now()
      );
      if (!res.ok) throw new Error("Failed to get session token");
      const data = await res.json();
      setToken(data.token);
      setJoined(true);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  function handleLeave() {
    setJoined(false);
    setToken(null);
  }

  if (joined && token) {
    return (
      <Room
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL!}
        onLeave={handleLeave}
      />
    );
  }

  return (
    <main className="landing">
      <div className="landing-card">
        <div className="logo">🎤</div>
        <h1>AI Speaking Coach</h1>
        <p>
          Practice your speaking skills with an AI coach. Get real-time
          feedback on clarity, pacing, and filler words.
        </p>
        {error && <p className="error">{error}</p>}
        <button
          className="btn-primary"
          onClick={handleJoin}
          disabled={loading}
        >
          {loading ? "Connecting..." : "Join Session"}
        </button>
      </div>
    </main>
  );
}