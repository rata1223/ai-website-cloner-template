import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center p-8 pt-24 pb-32">
      <FadeIn direction="up" delay={100} className="max-w-4xl space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
          투자의 새로운 기준,<br />
          <span className="text-primary">알파스퀘어</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          올인원 스마트 트레이딩 플랫폼에서 주식, 가상화폐, 시장 정보까지 한 번에 관리하세요.
        </p>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full font-bold">
            무료로 시작하기
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full font-bold">
            기능 둘러보기
          </Button>
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={300} className="w-full max-w-6xl mt-24">
        <div className="rounded-2xl border bg-card text-card-foreground shadow-2xl p-2 h-[500px] flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-tr from-muted/50 via-background to-primary/5 pointer-events-none" />
           <p className="text-muted-foreground font-medium text-lg relative z-10">
             [ 차트 및 트레이딩 대시보드 UI 스캐폴딩 영역 ]
           </p>
        </div>
      </FadeIn>
    </main>
  );
}
