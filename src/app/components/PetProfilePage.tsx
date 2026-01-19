import { Camera, Calendar, Ruler, Weight, Dna, Edit } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

interface PetProfilePageProps {
  currentPet: any;
}

export function PetProfilePage({ currentPet }: PetProfilePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFB] to-white pb-24">
      {/* 顶部宠物头像区域 */}
      <div className="bg-gradient-to-r from-[#4A90E2] to-[#5AA5F5] px-6 pt-16 pb-20 rounded-b-[32px] relative">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={currentPet?.avatar}
                alt={currentPet?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
              <Camera className="w-5 h-5 text-[#4A90E2]" />
            </button>
          </div>
          
          <h1 className="text-2xl font-bold text-white mt-4">{currentPet?.name}</h1>
          <p className="text-white/80 text-sm mt-1">{currentPet?.breed}</p>
        </div>
      </div>

      {/* 基本信息卡片 */}
      <div className="px-6 -mt-12">
        <Card className="p-6 rounded-[24px] border-0 shadow-xl bg-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-800">基本信息</h2>
            <Button variant="ghost" size="sm" className="text-[#4A90E2]">
              <Edit className="w-4 h-4 mr-1" />
              编辑
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <InfoItem
              icon={<Calendar className="w-5 h-5" />}
              label="生日"
              value={currentPet?.birthday}
              color="text-[#4A90E2]"
              bgColor="bg-[#E8F4FD]"
            />
            <InfoItem
              icon={<Ruler className="w-5 h-5" />}
              label="年龄"
              value={currentPet?.age}
              color="text-[#FF8C42]"
              bgColor="bg-[#FFF5ED]"
            />
            <InfoItem
              icon={<Weight className="w-5 h-5" />}
              label="体重"
              value={`${currentPet?.weight} kg`}
              color="text-[#10B981]"
              bgColor="bg-[#F0FDF4]"
            />
            <InfoItem
              icon={<Dna className="w-5 h-5" />}
              label="性别"
              value={currentPet?.gender === 'male' ? '♂ 男孩' : '♀ 女孩'}
              color="text-[#8B5CF6]"
              bgColor="bg-[#F5F3FF]"
            />
          </div>
        </Card>
      </div>

      {/* 生命阶段标识 */}
      <div className="px-6 mt-6">
        <Card className="p-5 rounded-[24px] border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">生命阶段</h3>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1">
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#4A90E2] to-[#FF8C42] rounded-full"
                  style={{ width: '40%' }}
                />
              </div>
            </div>
            <Badge className="bg-[#4A90E2] text-white border-0">成年期</Badge>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>幼年期</span>
            <span>成年期</span>
            <span>老年期</span>
          </div>
        </Card>
      </div>

      {/* 健康档案 */}
      <div className="px-6 mt-6">
        <Card className="p-5 rounded-[24px] border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">健康档案</h3>
          
          <div className="space-y-3">
            <HealthRecordItem
              label="绝育状态"
              value="已绝育"
              date="2023年8月"
              status="completed"
            />
            <HealthRecordItem
              label="芯片编号"
              value="CHN-900123456789"
              date="2022年3月"
              status="completed"
            />
            <HealthRecordItem
              label="过敏史"
              value="无已知过敏"
              date=""
              status="normal"
            />
            <HealthRecordItem
              label="疾病史"
              value="无重大疾病记录"
              date=""
              status="normal"
            />
          </div>
        </Card>
      </div>

      {/* 基因数据卡片 */}
      <div className="px-6 mt-6">
        <Card className="p-5 rounded-[24px] border-0 bg-gradient-to-br from-[#F5F3FF] to-white">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Dna className="w-5 h-5 text-[#8B5CF6]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">基因检测报告</h3>
              <p className="text-xs text-gray-500">了解宠物的遗传特征</p>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full rounded-full border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white"
          >
            上传基因报告
          </Button>
        </Card>
      </div>

      {/* 备注信息 */}
      <div className="px-6 mt-6">
        <Card className="p-5 rounded-[24px] border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-3">备注信息</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {currentPet?.notes || '性格温顺活泼，喜欢户外活动，不挑食，对陌生人友好。平时喜欢玩飞盘和球类玩具。'}
          </p>
        </Card>
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value, color, bgColor }: any) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-[16px] bg-gray-50">
      <div className={`${bgColor} ${color} w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-500">{label}</p>
        <p className="font-semibold text-gray-800 truncate">{value}</p>
      </div>
    </div>
  );
}

function HealthRecordItem({ label, value, date, status }: any) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-[12px]">
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-800">{label}</p>
        <p className="text-xs text-gray-600 mt-0.5">{value}</p>
      </div>
      {date && (
        <p className="text-xs text-gray-500">{date}</p>
      )}
    </div>
  );
}
