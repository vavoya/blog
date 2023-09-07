// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    console.log('Received a request:');
    console.log('Method:', request.method);
    console.log('URL:', request.url);
    console.log('Headers:', [...request.headers]);

    // 요청을 그대로 통과시키기 위해 NextResponse.next()를 반환
    return NextResponse.next();
}
