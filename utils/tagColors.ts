// 태그 색상 매핑 유틸리티
export const tagColors = {
  "과학/기술": "bg-[#eaf6fe] text-[#4EA8DE]",
  "사회 이슈": "bg-green-100 text-green-600",
  사회: "bg-green-100 text-green-600",
  문학: "bg-purple-100 text-purple-600",
  "new!": "bg-yellow-100 text-yellow-700",
} as const;

export type TagType = keyof typeof tagColors;

export const getTagColor = (tag: string): string => {
  return tagColors[tag as TagType] || "bg-gray-100 text-gray-600";
};
