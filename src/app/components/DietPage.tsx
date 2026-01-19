import { useState } from 'react';
import { Utensils, Plus, Minus, TrendingUp, Droplet } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Slider } from '@/app/components/ui/slider';
import { Progress } from '@/app/components/ui/progress';

interface DietPageProps {
  currentPet: any;
}

export function DietPage({ currentPet }: DietPageProps) {
  const [mainFood, setMainFood] = useState(180);
  const [snacks, setSnacks] = useState(30);
  const [water, setWater] = useState(450);

  const targetCalories = 850; // 目标卡路里
  const currentCalories = mainFood * 3.5 + snacks * 4; // 简化计算
  const calorieProgress = (currentCalories / targetCalories) * 100;

  const targetWater = 600; // 目标饮水量(ml)
  const waterProgress = (water / targetWater) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFB] to-white pb-24">
      {/* 顶部标题 */}
      <div className="bg-gradient-to-r from-[#4A90E2] to-[#5AA5F5] px-6 pt-16 pb-8 rounded-b-[32px]">
        <h1 className="text-2xl font-bold text-white mb-2">智能饮食记录</h1>
        <p className="text-white/80 text-sm">科学喂养，健康成长</p>
      </div>

      {/* 今日摄入总览 */}
      <div className="px-6 mt-6">
        <Card className="p-6 rounded-[24px] border-0 shadow-lg bg-gradient-to-br from-white to-[#F8FAFB]">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#FF8C42]" />
            <h2 className="font-bold text-gray-800">今日热量摄入</h2>
          </div>
          
          <div className="flex items-end gap-3 mb-3">
            <span className="text-4xl font-bold text-[#4A90E2]">{Math.round(currentCalories)}</span>
            <span className="text-gray-500 mb-2">/ {targetCalories} kcal</span>
          </div>
          
          <Progress 
            value={Math.min(calorieProgress, 100)} 
            className="h-4 rounded-full mb-2"
          />
          
          <p className="text-sm text-gray-600">
            {calorieProgress < 100 
              ? `还可摄入 ${Math.round(targetCalories - currentCalories)} kcal`
              : '已达到今日目标热量'}
          </p>
        </Card>
      </div>

      {/* 主食记录 */}
      <div className="px-6 mt-6">
        <h3 className="font-bold text-gray-800 mb-3">主食记录</h3>
        <Card className="p-5 rounded-[24px] border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#E8F4FD] rounded-full flex items-center justify-center">
                <Utensils className="w-6 h-6 text-[#4A90E2]" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">干粮</p>
                <p className="text-sm text-gray-500">{mainFood}g · {Math.round(mainFood * 3.5)}kcal</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                className="w-10 h-10 rounded-full"
                onClick={() => setMainFood(Math.max(0, mainFood - 10))}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="w-10 h-10 rounded-full"
                onClick={() => setMainFood(mainFood + 10)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <Slider
            value={[mainFood]}
            onValueChange={(value) => setMainFood(value[0])}
            max={300}
            step={10}
            className="mb-2"
          />
          <p className="text-xs text-gray-500 text-center">滑动调整分量</p>
        </Card>
      </div>

      {/* 零食记录 */}
      <div className="px-6 mt-4">
        <Card className="p-5 rounded-[24px] border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FFF5ED] rounded-full flex items-center justify-center">
                <Utensils className="w-6 h-6 text-[#FF8C42]" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">零食</p>
                <p className="text-sm text-gray-500">{snacks}g · {Math.round(snacks * 4)}kcal</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                className="w-10 h-10 rounded-full"
                onClick={() => setSnacks(Math.max(0, snacks - 5))}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="w-10 h-10 rounded-full"
                onClick={() => setSnacks(snacks + 5)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <Slider
            value={[snacks]}
            onValueChange={(value) => setSnacks(value[0])}
            max={100}
            step={5}
            className="mb-2"
          />
          <p className="text-xs text-gray-500 text-center">滑动调整分量</p>
        </Card>
      </div>

      {/* 饮水记录 */}
      <div className="px-6 mt-6">
        <h3 className="font-bold text-gray-800 mb-3">饮水记录</h3>
        <Card className="p-5 rounded-[24px] border-0 bg-gradient-to-br from-[#E0F2FE] to-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Droplet className="w-6 h-6 text-[#0EA5E9]" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">今日饮水</p>
                <p className="text-sm text-gray-600">{water}ml / {targetWater}ml</p>
              </div>
            </div>
          </div>
          
          <Progress 
            value={Math.min(waterProgress, 100)} 
            className="h-4 rounded-full mb-2"
          />
          
          <div className="flex gap-2 mt-4">
            <Button
              variant="outline"
              className="flex-1 rounded-full"
              onClick={() => setWater(water + 50)}
            >
              +50ml
            </Button>
            <Button
              variant="outline"
              className="flex-1 rounded-full"
              onClick={() => setWater(water + 100)}
            >
              +100ml
            </Button>
            <Button
              variant="outline"
              className="flex-1 rounded-full"
              onClick={() => setWater(water + 200)}
            >
              +200ml
            </Button>
          </div>
        </Card>
      </div>

      {/* 营养分析提示 */}
      <div className="px-6 mt-6">
        <Card className="p-4 rounded-[20px] bg-[#F0FDF4] border-[#10B981]/20">
          <p className="text-sm text-gray-700">
            💡 <span className="font-semibold">营养建议：</span>
            {calorieProgress < 80 
              ? '今日摄入偏低，建议适当增加主食分量'
              : calorieProgress > 120
              ? '今日摄入偏高，注意控制零食量'
              : '营养摄入均衡，继续保持！'}
          </p>
        </Card>
      </div>
    </div>
  );
}
