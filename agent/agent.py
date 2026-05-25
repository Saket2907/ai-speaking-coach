import logging
from dotenv import load_dotenv
from livekit.agents import AutoSubscribe, JobContext, WorkerOptions, cli
from livekit.agents.voice import AgentSession, Agent
from livekit.agents import inference
from livekit.plugins import silero

load_dotenv()

logger = logging.getLogger("speaking-coach")
logger.setLevel(logging.INFO)

SYSTEM_PROMPT = """You are a friendly and encouraging AI speaking coach.
Your role is to help the user improve their spoken communication skills.

After the user speaks, give brief, constructive feedback on:
- Clarity: Was the message easy to understand?
- Pacing: Was the speech too fast, too slow, or well-paced?
- Filler words: Did you notice excessive use of "um", "uh", "like", "you know"?
- Confidence: Did the delivery sound confident?

Keep responses concise (2-4 sentences). Be encouraging and specific.
If the user is just chatting, engage naturally and gently weave in coaching tips.
Start by greeting the user and asking what they'd like to practice today."""


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
        "Hi! I'm your AI speaking coach. What would you like to practice today?"
    )


if __name__ == "__main__":
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint))