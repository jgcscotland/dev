'use client';

export default function NowPlayingCard() {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white dark:bg-zinc-900">
      <h2 className="text-lg font-semibold">Now Playing</h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        Drake — Rich Flex
      </p>
    </div>
  );
}
