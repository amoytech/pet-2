import { Video, MessageCircle, Phone, Star, Clock, CheckCircle } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';

export function ConsultPage() {
  const doctors = [
    {
      id: 1,
      name: '张晓宇',
      title: '主任兽医师',
      hospital: '宠康动物医院',
      specialty: '内科 · 传染病',
      rating: 4.9,
      consultCount: 1245,
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop',
      available: true,
      price: 98,
    },
    {
      id: 2,
      name: '李芳',
      title: '副主任兽医师',
      hospital: '爱宠医疗中心',
      specialty: '外科 · 骨科',
      rating: 4.8,
      consultCount: 892,
      avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop',
      available: true,
      price: 88,
    },
    {
      id: 3,
      name: '王建国',
      title: '主治兽医师',
      hospital: '宠物健康诊所',
      specialty: '皮肤科 · 营养学',
      rating: 4.7,
      consultCount: 654,
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop',
      available: false,
      price: 68,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFB] to-white pb-24">
      {/* 顶部标题 */}
      <div className="bg-gradient-to-r from-[#4A90E2] to-[#5AA5F5] px-6 pt-16 pb-8 rounded-b-[32px]">
        <h1 className="text-2xl font-bold text-white mb-2">在线问诊</h1>
        <p className="text-white/80 text-sm">专业兽医，即时解答</p>
      </div>

      {/* 快捷问诊入口 */}
      <div className="px-6 mt-6">
        <Card className="p-5 rounded-[24px] border-0 shadow-lg bg-gradient-to-br from-[#FFF5ED] to-white">
          <h2 className="font-bold text-gray-800 mb-4">快速咨询</h2>
          <div className="grid grid-cols-3 gap-3">
            <QuickActionButton
              icon={<Video className="w-6 h-6" />}
              label="视频问诊"
              color="bg-[#E8F4FD]"
              iconColor="text-[#4A90E2]"
            />
            <QuickActionButton
              icon={<Phone className="w-6 h-6" />}
              label="电话咨询"
              color="bg-[#F0FDF4]"
              iconColor="text-[#10B981]"
            />
            <QuickActionButton
              icon={<MessageCircle className="w-6 h-6" />}
              label="图文问诊"
              color="bg-[#FFF5ED]"
              iconColor="text-[#FF8C42]"
            />
          </div>
        </Card>
      </div>

      {/* 专家列表 */}
      <div className="px-6 mt-8">
        <h2 className="font-bold text-gray-800 mb-4">推荐专家</h2>
        
        {doctors.map(doctor => (
          <Card 
            key={doctor.id}
            className="mb-4 p-5 rounded-[24px] border border-gray-100 bg-white"
          >
            <div className="flex gap-4">
              {/* 医生头像 */}
              <Avatar className="w-16 h-16 border-2 border-[#4A90E2]/20">
                <AvatarImage src={doctor.avatar} alt={doctor.name} />
                <AvatarFallback>{doctor.name[0]}</AvatarFallback>
              </Avatar>

              {/* 医生信息 */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-800 text-lg">{doctor.name}</h3>
                  {doctor.available && (
                    <Badge className="bg-[#10B981] text-white text-xs border-0">
                      在线
                    </Badge>
                  )}
                </div>
                
                <p className="text-sm text-gray-600 mb-1">{doctor.title}</p>
                <p className="text-xs text-gray-500 mb-2">{doctor.hospital}</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {doctor.specialty.split(' · ').map((spec, idx) => (
                    <Badge 
                      key={idx}
                      variant="outline" 
                      className="text-xs border-[#4A90E2]/30 text-[#4A90E2]"
                    >
                      {spec}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#FF8C42] fill-[#FF8C42]" />
                    <span>{doctor.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-[#10B981]" />
                    <span>{doctor.consultCount}次咨询</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 操作按钮 */}
            <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-1 flex-1">
                <span className="text-xs text-gray-500">问诊费用</span>
                <span className="text-xl font-bold text-[#FF8C42]">¥{doctor.price}</span>
              </div>
              <Button
                variant="outline"
                className="flex-1 rounded-full border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white"
                disabled={!doctor.available}
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                图文咨询
              </Button>
              <Button
                className="flex-1 rounded-full bg-[#4A90E2] hover:bg-[#3A7BC8] text-white"
                disabled={!doctor.available}
              >
                <Video className="w-4 h-4 mr-1" />
                视频问诊
              </Button>
            </div>

            {!doctor.available && (
              <div className="mt-3 bg-gray-50 rounded-[12px] p-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-500">医生暂时离线，可预约稍后咨询</span>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* 底部提示 */}
      <div className="px-6 mt-6">
        <Card className="p-4 rounded-[20px] bg-[#E8F4FD] border-[#4A90E2]/20">
          <p className="text-sm text-gray-700">
            💡 <span className="font-semibold">温馨提示：</span>
            问诊前请准备好宠物的症状照片或视频，以便医生更准确地诊断
          </p>
        </Card>
      </div>
    </div>
  );
}

function QuickActionButton({ icon, label, color, iconColor }: any) {
  return (
    <button className="flex flex-col items-center gap-2 p-3 rounded-[16px] hover:scale-105 transition-transform">
      <div className={`${color} ${iconColor} w-12 h-12 rounded-full flex items-center justify-center`}>
        {icon}
      </div>
      <span className="text-xs text-gray-700">{label}</span>
    </button>
  );
}
