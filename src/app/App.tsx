import { useState } from 'react';
import { SplashScreen } from '@/app/components/SplashScreen';
import { HomePage } from '@/app/components/HomePage';
import { VaccinePage } from '@/app/components/VaccinePage';
import { DietPage } from '@/app/components/DietPage';
import { HealthReportPage } from '@/app/components/HealthReportPage';
import { ConsultPage } from '@/app/components/ConsultPage';
import { PetProfilePage } from '@/app/components/PetProfilePage';
import { BottomNav } from '@/app/components/BottomNav';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  // 宠物数据
  const currentPet = {
    id: 1,
    name: '豆豆',
    breed: '金毛寻回犬',
    age: '2岁3个月',
    birthday: '2022年10月15日',
    gender: 'male',
    weight: 12.5,
    avatar: 'https://images.unsplash.com/photo-1650458766256-e438ef846ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwZG9nJTIwcGV0fGVufDF8fHx8MTc2ODUwOTYwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    healthScore: 87,
    nextVaccine: {
      name: '犬钩端螺旋体疫苗',
      daysLeft: 25,
    },
    notes: '性格温顺活泼，喜欢户外活动，不挑食，对陌生人友好。平时喜欢玩飞盘和球类玩具。',
  };

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="relative w-full min-h-screen bg-white max-w-lg mx-auto shadow-2xl">
      {/* 页面内容区域 */}
      <div className="w-full">
        {currentPage === 'home' && (
          <HomePage currentPet={currentPet} onNavigate={setCurrentPage} />
        )}
        {currentPage === 'vaccine' && <VaccinePage currentPet={currentPet} />}
        {currentPage === 'diet' && <DietPage currentPet={currentPet} />}
        {currentPage === 'report' && <HealthReportPage currentPet={currentPet} />}
        {currentPage === 'consult' && <ConsultPage />}
        {currentPage === 'profile' && <PetProfilePage currentPet={currentPet} />}
      </div>

      {/* 底部导航栏 */}
      <BottomNav currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
}
