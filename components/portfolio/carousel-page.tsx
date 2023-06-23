"use client";

interface Props {
  page: {
    title: string;
    image: string;
  };
}

export default function CarouselPage({ page }: Props) {
  return (
    <div
      className="h-[calc(100vh-104px)] mt-[104px] transition-all bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${page.image})`,
      }}
    >
      <div className="h-full w-full bg-transparent-2 p-[1rem] grid place-items-center">
        <h1 className="font-bold text-white text-center text-[2rem] md:text-[2.5rem] pb-[10rem] md:pb-[0rem]">
          {page.title}
        </h1>
      </div>
    </div>
  );
}
