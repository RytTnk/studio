import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)]">
      <FileQuestion className="w-24 h-24 text-destructive mb-6" />
      <h1 className="text-5xl font-extrabold text-primary tracking-tight mb-4">404 - ページが見つかりません</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        おっと！お探しのページは存在しません。移動または削除された可能性があります。
      </p>
      <Button asChild size="lg">
        <Link href="/">ホームページに戻る</Link>
      </Button>
    </div>
  );
}
