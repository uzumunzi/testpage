import AssignmentCard from "./AssignmentCard";
import { getTagColor } from "../utils/tagColors";

export default function WeeklyAssignments() {
  const cards = [
    {
      title: "친구에게 감사 인사를 담은 문자 작성하기",
      active: true,
      tag: {
        text: "과학/기술",
        color: getTagColor("과학/기술"),
      },
    },
    {
      title: "회사 동료에게 업무 협조 요청 문자 작성하기",
      active: false,
      tag: {
        text: "사회",
        color: getTagColor("사회"),
      },
    },
    {
      title: "가족에게 안부 인사를 담은 문자 작성하기",
      active: false,
      tag: {
        text: "new!",
        color: getTagColor("new!"),
      },
    },
    {
      title: "선생님에게 질문을 담은 문자 작성하기",
      active: false,
      tag: {
        text: "문학",
        color: getTagColor("문학"),
      },
    },
  ];

  return (
    <section className="w-full">
      <div className="container-responsive py-6 sm:py-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-neutral-1000 mb-4">
          이번 주 과제
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {cards.map((card, idx) => (
            <AssignmentCard
              key={idx}
              title={card.title}
              active={card.active}
              tag={card.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
