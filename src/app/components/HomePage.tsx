import { Calendar, Utensils, Stethoscope, FileText, AlertCircle, TrendingUp } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Progress } from '@/app/components/ui/progress';

interface HomePageProps {
  currentPet: any;
  onNavigate: (page: string) => void;
}

export function HomePage({ currentPet, onNavigate }: HomePageProps) {
  const healthScore = currentPet?.healthScore || 85;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFB] to-white pb-24">
      {/* 顶部宠物状态卡片 */}
      <div className="bg-gradient-to-r from-[#4A90E2] to-[#5AA5F5] px-6 pt-12 pb-8 rounded-b-[32px]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
              <img
                src={currentPet?.avatar}
                alt={currentPet?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{currentPet?.name}</h2>
              <p className="text-white/80 text-sm">{currentPet?.breed} · {currentPet?.age}</p>
            </div>
          </div>
          <Badge className="bg-white/20 text-white border-0 px-4 py-2 rounded-full backdrop-blur">
            {currentPet?.gender === 'male' ? '♂ 男孩' : '♀ 女孩'}
          </Badge>
        </div>

        {/* 健康指数 */}
        <Card className="bg-white/95 backdrop-blur p-5 rounded-[24px] border-0 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#4A90E2]" />
              <span className="font-semibold text-gray-800">今日健康指数</span>
            </div>
            <span className="text-2xl font-bold text-[#4A90E2]">{healthScore}</span>
          </div>
          <Progress value={healthScore} className="h-3 rounded-full" />
          <p className="text-xs text-gray-500 mt-2">
            {healthScore >= 80 ? '状态良好，继续保持！' : '需要关注一些健康问题'}
          </p>
        </Card>
      </div>

      {/* 待办提醒 */}
      {currentPet?.nextVaccine && (
        <div className="px-6 mt-6">
          <Card className="bg-gradient-to-r from-[#FFF5ED] to-[#FFE8D6] border-[#FF8C42]/20 p-4 rounded-[24px]">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF8C42] flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800 mb-1">疫苗提醒</p>
                <p className="text-sm text-gray-600">
                  距离下次 {currentPet.nextVaccine.name} 还有 {currentPet.nextVaccine.daysLeft} 天
                </p>
              </div>
              <button
                onClick={() => onNavigate('vaccine')}
                className="text-[#FF8C42] text-sm font-medium whitespace-nowrap"
              >
                查看详情
              </button>
            </div>
          </Card>
        </div>
      )}

      {/* 快捷功能宫格 */}
      <div className="px-6 mt-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">快捷功能</h3>
        <div className="grid grid-cols-2 gap-4">
          <FunctionCard
            icon={<Calendar className="w-8 h-8" />}
            title="疫苗中心"
            subtitle="免疫计划管理"
            color="bg-[#E8F4FD]"
            iconColor="text-[#4A90E2]"
            onClick={() => onNavigate('vaccine')}
          />
          <FunctionCard
            icon={<Utensils className="w-8 h-8" />}
            title="饮食记录"
            subtitle="科学喂养跟踪"
            color="bg-[#FFF5ED]"
            iconColor="text-[#FF8C42]"
            onClick={() => onNavigate('diet')}
          />
          <FunctionCard
            icon={<Stethoscope className="w-8 h-8" />}
            title="在线问诊"
            subtitle="专家实时咨询"
            color="bg-[#F0F9FF]"
            iconColor="text-[#0EA5E9]"
            onClick={() => onNavigate('consult')}
          />
          <FunctionCard
            icon={<FileText className="w-8 h-8" />}
            title="健康报告"
            subtitle="数据可视化分析"
            color="bg-[#F0FDF4]"
            iconColor="text-[#10B981]"
            onClick={() => onNavigate('report')}
          />
        </div>
      </div>

      {/* 今日数据摘要 */}
      <div className="px-6 mt-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">今日数据</h3>
        <div className="grid grid-cols-3 gap-3">
          <DataCard label="步数" value="3,245" unit="步" />
          <DataCard label="饮水" value="450" unit="ml" />
          <DataCard label="体重" value="12.5" unit="kg" />
        </div>
      </div>
    </div>
  );
}

function FunctionCard({ icon, title, subtitle, color, iconColor, onClick }: any) {
  return (
    <Card
      className={`${color} border-0 p-5 rounded-[24px] cursor-pointer hover:scale-105 transition-transform`}
      onClick={onClick}
    >
      <div className={`${iconColor} mb-3`}>{icon}</div>
      <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
      <p className="text-xs text-gray-600">{subtitle}</p>
    </Card>
  );
}

function DataCard({ label, value, unit }: any) {
  return (
    <Card className="bg-white border border-gray-100 p-4 rounded-[20px] text-center">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-xl font-bold text-gray-800">{value}</p>
      <p className="text-xs text-gray-400">{unit}</p>
    </Card>
  );
}
