import { AccessToken, RoomServiceClient } from "livekit-server-sdk";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const room = searchParams.get("room") ?? "speaking-coach-room";
  const username = searchParams.get("username") ?? "user";

  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;
  const livekitUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL;

  if (!apiKey || !apiSecret || !livekitUrl) {
    return NextResponse.json(
      { error: "LiveKit credentials not configured" },
      { status: 500 }
    );
  }

  const roomService = new RoomServiceClient(
    livekitUrl.replace("wss://", "https://"),
    apiKey,
    apiSecret
  );

  try {
    await roomService.createRoom({ name: room });
  } catch {
    // Room may already exist, that's fine
  }

  const token = new AccessToken(apiKey, apiSecret, {
    identity: username,
    ttl: "1h",
  });

  token.addGrant({
    roomJoin: true,
    room,
    canPublish: true,
    canSubscribe: true,
  });

  return NextResponse.json({ token: await token.toJwt() });
}