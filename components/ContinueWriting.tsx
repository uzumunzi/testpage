export default function ContinueWriting() {
  return (
    <section className="w-full">
      <div className="container-responsive py-8 sm:py-10">
        <div className="rounded-xl border border-secondary/60 bg-neutral-100 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-neutral-1000">
            이전 작성 내용을 이어서 작성하시겠습니까?
          </h2>
          <p className="mt-2 text-neutral-1000/70">
            마지막으로 작성하던 내용이 여기에 표시됩니다. 이어서 작성하거나 새로운 문서를 시작할 수 있습니다.
          </p>
          <div className="mt-4">
            <button className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-neutral-100 font-medium hover:opacity-90 transition-colors">
              이어서 작성하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


