import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { prompt } = await req.json();

  const response = await fetch(
    "https://api-inference.huggingface.co/models/UnfilteredAI/NSFW-gen-v2",
    {
      headers: { Authorization: process.env.HUGGING_FACE_KEY as string },
      method: "POST",
      body: JSON.stringify({ inputs: prompt, width: 300, height: 300 }),
    }
  );

  const result = await response.arrayBuffer(); // Get response as ArrayBuffer

  // Convert ArrayBuffer to base64 string
  const base64Image = Buffer.from(result).toString("base64");

  return NextResponse.json({ result: base64Image }); // Return base64 image
};
