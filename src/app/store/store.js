import { create } from 'zustand'

const usePsyStore = create((set) => ({
  state: 0, // 0: start, 1: question, 2: display result, 3: final result
  questionState: 0,
  totalQuestions: 8,
  score: 0,
  updateState: (newState) => set(() => ({ state: newState })),
  updateQuestionState: (newState) => set(() => ({ questionState: newState })),
  updateTotalQuestions: (newState) => set(() => ({ totalQuestions: newState })),
  updateScore: (newScore) => set((state) => ({ score: state.score + newScore })),
}));

const useQuestionStore = create((set) => ({
  questions: {
    "1": {
      title: "當你在團隊中，你通常扮演什麼角色？",
      options: [
        { title: "主導焦點，讓大家目光集中在我身上", value: { Leko: 3, Par: 0, Follow: 0, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "帶動整體氣氛，讓大家都充滿能量", value: { Leko: 0, Par: 3, Follow: 0, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "默默提供支持，讓氣氛更柔和溫暖", value: { Leko: 0, Par: 0, Follow: 3, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "創造夢幻感，讓團隊充滿無限可能", value: { Leko: 0, Par: 0, Follow: 0, Cyc: 3, Flood: 0, Fresnel: 0 } },
      ],
    },
    "2": {
      title: "你在面對挑戰時，最傾向怎麼做？",
      options: [
        { title: "直面問題，聚焦解決方案", value: { Leko: 3, Par: 0, Follow: 0, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "積極調整，適應環境變化", value: { Leko: 0, Par: 3, Follow: 0, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "耐心等待，給自己空間喘息", value: { Leko: 0, Par: 0, Follow: 3, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "尋找靈感，創造新機會", value: { Leko: 0, Par: 0, Follow: 0, Cyc: 3, Flood: 0, Fresnel: 0 } },
      ],
    },
    "3": {
      title: "在派對中，你通常是？",
      options: [
        { title: "成為全場焦點，讓所有人注意", value: { Leko: 3, Par: 0, Follow: 0, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "讓氣氛熱絡，帶動大家一起瘋", value: { Leko: 0, Par: 3, Follow: 0, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "在角落輕鬆聊天，給人溫暖感", value: { Leko: 0, Par: 0, Follow: 3, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "用創意想法，讓派對更有趣", value: { Leko: 0, Par: 0, Follow: 0, Cyc: 3, Flood: 0, Fresnel: 0 } },
      ],
    },
    "4": {
      title: "你最喜歡哪種色調的燈光？",
      options: [
        { title: "白光，乾淨且聚焦", value: { Leko: 3, Par: 0, Follow: 0, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "暖光，充滿活力和熱情", value: { Leko: 0, Par: 3, Follow: 0, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "柔光，營造舒適氛圍", value: { Leko: 0, Par: 0, Follow: 3, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "彩光，充滿變化和夢幻", value: { Leko: 0, Par: 0, Follow: 0, Cyc: 3, Flood: 0, Fresnel: 0 } },
      ],
    },
    "5": {
      title: "你如何形容自己的個性？",
      options: [
        { title: "專注且直接", value: { Leko: 3, Par: 0, Follow: 0, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "熱情且外向", value: { Leko: 0, Par: 3, Follow: 0, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "溫暖且細膩", value: { Leko: 0, Par: 0, Follow: 3, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "富有想像力", value: { Leko: 0, Par: 0, Follow: 0, Cyc: 3, Flood: 0, Fresnel: 0 } },
      ],
    },
    "6": {
      title: "你希望別人怎麼記住你？",
      options: [
        { title: "令人注目的主角", value: { Leko: 3, Par: 0, Follow: 0, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "熱情洋溢的朋友", value: { Leko: 0, Par: 3, Follow: 0, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "溫暖貼心的存在", value: { Leko: 0, Par: 0, Follow: 3, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "神秘又有創意", value: { Leko: 0, Par: 0, Follow: 0, Cyc: 3, Flood: 0, Fresnel: 0 } },
      ],
    },
    "7": {
      title: "你偏好哪種工作環境？",
      options: [
        { title: "有明確目標與挑戰", value: { Leko: 3, Par: 0, Follow: 0, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "充滿活力與合作", value: { Leko: 0, Par: 3, Follow: 0, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "安靜且溫馨", value: { Leko: 0, Par: 0, Follow: 3, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "自由且多變", value: { Leko: 0, Par: 0, Follow: 0, Cyc: 3, Flood: 0, Fresnel: 0 } },
      ],
    },
    "8": {
      title: "在團隊裡，你覺得自己是？",
      options: [
        { title: "指揮官，帶領大家前進", value: { Leko: 3, Par: 0, Follow: 0, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "活力來源，讓氣氛熱烈", value: { Leko: 0, Par: 3, Follow: 0, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "後勤支援，默默守護", value: { Leko: 0, Par: 0, Follow: 3, Cyc: 0, Flood: 0, Fresnel: 0 } },
        { title: "創意靈魂，帶來新想法", value: { Leko: 0, Par: 0, Follow: 0, Cyc: 3, Flood: 0, Fresnel: 0 } },
      ],
    },
  },
}));


export { usePsyStore, useQuestionStore };
