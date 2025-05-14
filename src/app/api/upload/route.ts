import { NextRequest, NextResponse } from 'next/server';
import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const title = data.get('title') as string;
  const price = data.get('price') as string;
  const description = data.get('description') as string;
  const file = data.get('image') as File;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), 'public/uploads');
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

  const filename = `${Date.now()}-${file.name}`;
  const filepath = path.join(uploadDir, filename);

  fs.writeFileSync(filepath, buffer);

  return NextResponse.json({
    title,
    price,
    description,
    image: filename,
  });
}
