import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="flex-1 flex flex-col p-4 md:p-8 bg-muted/20">

      {/* Dashboard Top Area */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            삼성전자 <span className="text-lg text-muted-foreground font-medium ml-2">005930</span>
          </h1>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-3xl font-bold text-destructive">61,500</span>
            <div className="flex flex-col text-sm text-destructive font-semibold">
              <span>▼ 1,200</span>
              <span>-1.91%</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">매수</Button>
          <Button variant="outline">매도</Button>
          <Button variant="default">관심종목 추가</Button>
        </div>
      </div>

      {/* 3-Column Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-[600px]">

        {/* Left Sidebar: Watchlist */}
        <Card className="lg:col-span-3 flex flex-col overflow-hidden">
          <CardHeader className="py-4 border-b">
            <CardTitle className="text-sm">관심종목</CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-1 overflow-y-auto">
            <div className="flex flex-col">
              {["삼성전자", "SK하이닉스", "카카오", "NAVER", "현대차"].map((stock, i) => (
                <div key={i} className="flex justify-between items-center p-4 border-b hover:bg-muted/50 cursor-pointer transition-colors">
                  <span className="font-semibold text-sm">{stock}</span>
                  <div className="flex flex-col items-end">
                    <span className="font-medium text-sm">{(60000 + i * 15000).toLocaleString()}</span>
                    <span className="text-xs text-destructive">-{(1.5 - i * 0.2).toFixed(2)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Center: Main Chart Area */}
        <Card className="lg:col-span-6 flex flex-col overflow-hidden">
          <CardContent className="p-0 flex-1 flex flex-col">
            <Tabs defaultValue="chart" className="w-full flex-1 flex flex-col">
              <div className="border-b px-4 py-2">
                <TabsList className="bg-transparent h-auto p-0 space-x-6">
                  <TabsTrigger value="chart" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-2">차트</TabsTrigger>
                  <TabsTrigger value="finance" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-2">재무</TabsTrigger>
                  <TabsTrigger value="news" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-2">뉴스/공시</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="chart" className="flex-1 p-0 m-0 relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground bg-accent/5">
                  <div className="grid grid-cols-6 gap-2 w-full max-w-md h-64 items-end px-4">
                    {[40, 70, 45, 90, 65, 80].map((h, i) => (
                      <div key={i} className="w-full bg-primary/20 rounded-t-sm" style={{ height: `${h}%` }}>
                        <div className="w-full bg-primary/80 h-1/2 rounded-t-sm" />
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 font-medium">인터랙티브 차트 컴포넌트 영역</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Right Panel: Orderbook / Details */}
        <Card className="lg:col-span-3 flex flex-col overflow-hidden">
          <CardHeader className="py-4 border-b">
            <CardTitle className="text-sm">호가</CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-1 overflow-y-auto bg-muted/10">
            <div className="flex flex-col">
              {[80, 45, 20, 65, 30].map((vol, i) => (
                <div key={`sell-${i}`} className="flex justify-between items-center px-4 py-2 border-b border-background bg-blue-500/5">
                  <span className="text-sm text-blue-500 font-medium">{(62000 - i * 100).toLocaleString()}</span>
                  <div className="flex-1 mx-4 h-4 bg-blue-500/10 relative">
                    <div className="absolute right-0 top-0 h-full bg-blue-500/30" style={{ width: `${vol}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground w-12 text-right">{Math.floor(vol * 500)}</span>
                </div>
              ))}
              {[70, 90, 40, 50, 10].map((vol, i) => (
                <div key={`buy-${i}`} className="flex justify-between items-center px-4 py-2 border-b border-background bg-destructive/5">
                  <span className="text-sm text-destructive font-medium">{(61500 - i * 100).toLocaleString()}</span>
                  <div className="flex-1 mx-4 h-4 bg-destructive/10 relative">
                    <div className="absolute left-0 top-0 h-full bg-destructive/30" style={{ width: `${vol}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground w-12 text-right">{Math.floor(vol * 500)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </main>
  );
}
