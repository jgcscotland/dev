import NowPlayingCard from '../../components/dashboard/NowPlayingCard';

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Spotify Rating Dashboard</h1>
      <NowPlayingCard />
    </div>
  );
}