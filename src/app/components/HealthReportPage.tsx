import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Activity, Heart, Calendar } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

interface HealthReportPageProps {
  currentPet: any;
}

export function HealthReportPage({ currentPet }: HealthReportPageProps) {
  // 体重趋势数据
  const weightData = [
    { date: '12/10', weight: 11.8 },
    { date: '12/17', weight: 12.0 },
    { date: '12/24', weight: 12.2 },
    { date: '12/31', weight: 12.4 },
    { date: '01/07', weight: 12.5 },
    { date: '01/14', weight: 12.5 },
  ];

  // 运动量数据
  const activityData = [
    { day: '周一', steps: 2800 },
    { day: '周二', steps: 3200 },
    { day: '周三', steps: 2600 },
    { day: '周四', steps: 3500 },
    { day: '周五', steps: 3100 },
    { day: '周六', steps: 4200 },
    { day: '周日', steps: 3800 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFB] to-white pb-24">
      {/* 顶部标题 */}
      <div className="bg-gradient-to-r from-[#4A90E2] to-[#5AA5F5] px-6 pt-16 pb-8 rounded-b-[32px]">
        <h1 className="text-2xl font-bold text-white mb-2">健康报告</h1>
        <p className="text-white/80 text-sm">数据驱动的科学养宠</p>
      </div>

      {/* 报告周期选择 */}
      <div className="px-6 mt-6">
        <Tabs defaultValue="week" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-full p-1">
            <TabsTrigger value="week" className="rounded-full">周报</TabsTrigger>
            <TabsTrigger value="month" className="rounded-full">月报</TabsTrigger>
            <TabsTrigger value="year" className="rounded-full">年报</TabsTrigger>
          </TabsList>

          <TabsContent value="week" className="mt-6">
            {/* 健康评分卡 */}
            <Card className="p-6 rounded-[24px] border-0 shadow-lg bg-gradient-to-br from-white to-[#E8F4FD] mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-[#FF8C42]" />
                  <h2 className="font-bold text-gray-800 text-lg">本周健康评分</h2>
                </div>
                <Badge className="bg-[#10B981] text-white border-0 rounded-full px-4 py-1">
                  优秀
                </Badge>
              </div>
              
              <div className="flex items-end gap-2 mb-2">
                <span className="text-5xl font-bold text-[#4A90E2]">87</span>
                <span className="text-gray-500 mb-3">/ 100</span>
              </div>
              
              <p className="text-sm text-gray-600">
                比上周提升了 3 分，继续保持良好的养护习惯！
              </p>
            </Card>

            {/* 体重趋势 */}
            <Card className="p-5 rounded-[24px] border border-gray-100 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-[#4A90E2]" />
                <h3 className="font-bold text-gray-800">体重趋势</h3>
              </div>
              
              <div className="mb-4">
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={weightData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis 
                      dataKey="date" 
                      stroke="#9CA3AF"
                      style={{ fontSize: '12px' }}
                    />
                    <YAxis 
                      domain={[11, 13]}
                      stroke="#9CA3AF"
                      style={{ fontSize: '12px' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: '12px', 
                        border: 'none',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="weight" 
                      stroke="#4A90E2" 
                      strokeWidth={3}
                      dot={{ fill: '#4A90E2', r: 5 }}
                      activeDot={{ r: 7 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#F8FAFB] rounded-[16px] p-3 text-center">
                  <p className="text-xs text-gray-500 mb-1">当前体重</p>
                  <p className="text-lg font-bold text-gray-800">12.5 kg</p>
                </div>
                <div className="bg-[#F8FAFB] rounded-[16px] p-3 text-center">
                  <p className="text-xs text-gray-500 mb-1">标准体重</p>
                  <p className="text-lg font-bold text-gray-800">12.0 kg</p>
                </div>
                <div className="bg-[#F8FAFB] rounded-[16px] p-3 text-center">
                  <p className="text-xs text-gray-500 mb-1">周变化</p>
                  <p className="text-lg font-bold text-[#10B981]">+0.1 kg</p>
                </div>
              </div>
            </Card>

            {/* 运动量统计 */}
            <Card className="p-5 rounded-[24px] border border-gray-100 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-[#FF8C42]" />
                <h3 className="font-bold text-gray-800">每日运动量</h3>
              </div>
              
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis 
                    dataKey="day" 
                    stroke="#9CA3AF"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="#9CA3AF"
                    style={{ fontSize: '12px' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '12px', 
                      border: 'none',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Bar 
                    dataKey="steps" 
                    fill="#FF8C42" 
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>

              <div className="mt-4 bg-[#FFF5ED] rounded-[16px] p-4">
                <p className="text-sm text-gray-700">
                  📊 本周日均步数 <span className="font-bold text-[#FF8C42]">3,314</span> 步，
                  达标率 <span className="font-bold text-[#FF8C42]">86%</span>
                </p>
              </div>
            </Card>

            {/* 健康建议 */}
            <Card className="p-5 rounded-[24px] border-0 bg-gradient-to-br from-[#F0FDF4] to-white">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-[#10B981]" />
                <h3 className="font-bold text-gray-800">AI健康建议</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    体重增长稳定，建议保持当前饮食方案
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    运动量略低于建议值，可适当增加户外活动时间
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    距离下次疫苗接种还有25天，请提前预约
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="month">
            <Card className="p-8 rounded-[24px] border border-gray-100 text-center">
              <p className="text-gray-500">月度报告功能开发中...</p>
            </Card>
          </TabsContent>

          <TabsContent value="year">
            <Card className="p-8 rounded-[24px] border border-gray-100 text-center">
              <p className="text-gray-500">年度报告功能开发中...</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
