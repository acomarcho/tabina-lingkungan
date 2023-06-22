export default function Footer() {
  return (
    <div className="min-w-screen bg-dark-gray">
      <div className="max-w-[1160px] p-[2rem] mx-auto">
        <div className="flex flex-col gap-[1rem]">
          <div className="flex flex-col gap-[0.5rem] items-start">
            <h2 className="font-bold text-white text-[1.25rem]">
              PT Tabina Lingkungan
            </h2>
            <p className="text-white text-[1rem]">
              Jatibening Estate D5 No. 17, Jl. Kenari 1, Bekasi, 17412, Jawa
              Barat
            </p>
            <a className="bg-white font-bold text-black px-[1rem] py-[0.5rem] transition-all hover:opacity-[0.8]" href="https://goo.gl/maps/US22PxFprdm66ZQL8" target="_blank" rel="noreferrer">
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
