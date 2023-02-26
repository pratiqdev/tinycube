import ChangeHighlight from 'components/ChangeHighlight';
import Link from 'next/link';
import { useState } from 'react';
import { trpc } from 'utils/trpc';

export default function AboutPage() {
  const [num, setNumber] = useState<number>();
  trpc.randomNumber.useSubscription(undefined, {
    onData(n) {
      setNumber(n);
    },
  });

  return (
    <div style={{ padding: '1rem' }}>
      <ChangeHighlight>
        Here&apos;s a random number from a sub: {num} <br />
      </ChangeHighlight>
      <Link href="/">Index</Link>
    </div>
  );
}
