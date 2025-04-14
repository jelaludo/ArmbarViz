
import ArmbarAnalyzer from '@/components/ArmbarAnalyzer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="text-3xl font-bold mb-6">Armbar Analyzer</h1>
      <ArmbarAnalyzer />
    </main>
  );
}
