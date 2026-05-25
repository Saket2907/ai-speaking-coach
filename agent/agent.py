import logging
from dotenv import load_dotenv
from livekit.agents import AutoSubscribe, JobContext, WorkerOptions, cli
from livekit.agents.voice import AgentSession, Agent
from livekit.agents import inference
from livekit.plugins import silero

load_dotenv()

logger = logging.getLogger("speaking-coach")
logger.setLevel(logging.INFO)

SYSTEM_PROMPT = """You are a friendly AI speaking coach having a real-time voice conversation.

Rules:
- NEVER repeat yourself. If you already said something, do not say it again.
- Give feedback only ONCE per topic. Move on after giving feedback.
- Keep each response to 1-3 sentences maximum.
- Do not re-introduce yourself after the first greeting.
- Do not ask the same question twice.
- If the user hasn't spoken yet, wait — do not prompt repeatedly.

Your job:
- Listen to the user speak and give brief feedback on clarity, pacing, or filler words.
- Be encouraging and specific.
- Engage naturally like a real conversation partner."""


async def entrypoint(ctx: JobContext):
    await ctx.connect(auto_subscribe=AutoSubscribe.AUDIO_ONLY)

    session = AgentSession(
        vad=silero.VAD.load(),
        stt=inference.STT.from_model_string("deepgram/nova-2"),
        llm=inference.LLM.from_model_string("openai/gpt-4o-mini"),
        tts=inference.TTS.from_model_string("cartesia/sonic-2"),
    )

    await session.start(
        room=ctx.room,
        agent=Agent(instructions=SYSTEM_PROMPT),
    )

    await session.say(
        "Hi, I'm your AI speaking coach. What would you like to practice today?",
        allow_interruptions=True,
    )


if __name__ == "__main__":
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint, agent_name="speaking-coach"))