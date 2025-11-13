import { Analytics } from '@vercel/analytics/next';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <Analytics />
    </div>
  );
}
