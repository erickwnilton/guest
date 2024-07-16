import { CardBoarding } from "@/components/cardBoarding";

export default function OnBoarding() {
  return (
    <section className="w-screen h-screen flex flex-col bg-gray-100">
      <header className="w-full">
        <div className="m-auto p-2 max-w-[1500px]">
          <h1 className="text-2xl font-medium font-sans tracking-tight text-gray-700">
            Guest 📦
          </h1>
        </div>
      </header>
      <div className="w-full h-full flex items-center justify-center">
        <div className="m-5 w-[500px] h-[300px] bg-white rounded-md shadow-md">
          <CardBoarding />
        </div>
      </div>
    </section>
  );
}
