import { Calendar, CheckCircle2, Clock, AlertTriangle, MapPin } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Progress } from '@/app/components/ui/progress';

interface VaccinePageProps {
  currentPet: any;
}

export function VaccinePage({ currentPet }: VaccinePageProps) {
  const vaccineRecords = [
    {
      id: 1,
      name: '狂犬病疫苗',
      date: '2024-08-15',
      nextDate: '2025-08-15',
      status: 'completed',
      daysUntilNext: 180,
      hospital: '宠康动物医院',
    },
    {
      id: 2,
      name: '犬八联疫苗',
      date: '2024-10-20',
      nextDate: '2025-10-20',
      status: 'completed',
      daysUntilNext: 246,
      hospital: '爱宠医疗中心',
    },
    {
      id: 3,
      name: '犬钩端螺旋体疫苗',
      date: null,
      nextDate: '2025-02-10',
      status: 'upcoming',
      daysUntilNext: 25,
      hospital: null,
    },
  ];

  const completedCount = vaccineRecords.filter(v => v.status === 'completed').length;
  const totalCount = vaccineRecords.length;
  const progress = (completedCount / totalCount) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFB] to-white pb-24">
      {/* 顶部进度卡片 */}
      <div className="bg-gradient-to-r from-[#4A90E2] to-[#5AA5F5] px-6 pt-16 pb-8 rounded-b-[32px]">
        <h1 className="text-2xl font-bold text-white mb-6">疫苗中心</h1>
        
        <Card className="bg-white/95 backdrop-blur p-6 rounded-[24px] border-0 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600 text-sm mb-1">免疫完成度</p>
              <p className="text-3xl font-bold text-[#4A90E2]">
                {completedCount}/{totalCount}
              </p>
            </div>
            <div className="w-20 h-20 rounded-full border-8 border-[#4A90E2] flex items-center justify-center">
              <span className="text-xl font-bold text-[#4A90E2]">{Math.round(progress)}%</span>
            </div>
          </div>
          <Progress value={progress} className="h-3 rounded-full" />
        </Card>
      </div>

      {/* 即将到来的疫苗 */}
      <div className="px-6 mt-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-[#FF8C42]" />
          <h2 className="font-bold text-gray-800">即将到来</h2>
        </div>

        {vaccineRecords
          .filter(v => v.status === 'upcoming')
          .map(vaccine => (
            <Card
              key={vaccine.id}
              className="mb-4 p-5 rounded-[24px] border-2 border-[#FF8C42]/30 bg-gradient-to-r from-[#FFF5ED] to-white"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{vaccine.name}</h3>
                  <p className="text-sm text-gray-600">预计接种日期：{vaccine.nextDate}</p>
                </div>
                <Badge className="bg-[#FF8C42] text-white border-0 rounded-full">
                  {vaccine.daysUntilNext}天后
                </Badge>
              </div>

              <div className="bg-white/80 rounded-[16px] p-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <AlertTriangle className="w-4 h-4 text-[#FF8C42]" />
                  <span>请提前预约医院，确保及时接种</span>
                </div>
              </div>

              <Button className="w-full bg-[#FF8C42] hover:bg-[#FF7722] text-white rounded-full h-12">
                立即预约
              </Button>
            </Card>
          ))}
      </div>

      {/* 已完成的疫苗 */}
      <div className="px-6 mt-8">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
          <h2 className="font-bold text-gray-800">已完成</h2>
        </div>

        {vaccineRecords
          .filter(v => v.status === 'completed')
          .map(vaccine => (
            <Card
              key={vaccine.id}
              className="mb-3 p-4 rounded-[20px] border border-gray-100 bg-white"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    <h3 className="font-semibold text-gray-800">{vaccine.name}</h3>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>接种日期：{vaccine.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{vaccine.hospital}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    下次接种：{vaccine.nextDate} ({vaccine.daysUntilNext}天后)
                  </p>
                </div>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
}
