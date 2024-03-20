import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const loginType = z.object({
  email: z.string().min(1).max(50),
  password: z.string().min(1).max(50),
});

export async function POST(request: NextRequest) {
  try {
    const customHeader = request.headers.get('x-api-key');
    const persistHeader = process.env.NEXT_PUBLIC_API_PROXY_AUTH;

    if (!customHeader || customHeader !== persistHeader) {
      return NextResponse.json({ error: 'Missing proxy authorization' }, { status: 400 });
    }

    const body = await request.json();
    const validation = loginType.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const { email, password } = validation.data;

    return NextResponse.json({
      success: true,
      data: { email, password },
      message: 'User authenticated',
    });
  } catch (error) {
    console.error('Error processing the request:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
