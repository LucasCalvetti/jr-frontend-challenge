import { Search } from "./Search";
import type { SearchParams } from "../types";
import { H1 } from "../ui/Text";

interface HeroSectionProps {
    searchParams: SearchParams;
    onSearch: (params: SearchParams) => void;
}

export function HeroSection({ searchParams, onSearch }: HeroSectionProps) {
    return (
        <div className="absolute inset-0 flex h-[110vh] flex-col">
            <div
                className="flex-grow relative bg-cover -top-16 h-full bg-center"
                style={{
                    backgroundImage:
                        "url('https://img.freepik.com/foto-gratis/villa-lujo-piscina-espectacular-diseno-contemporaneo-arte-digital-bienes-raices-hogar-casa-propiedad-ge_1258-150749.jpg?t=st=1734273806~exp=1734277406~hmac=7ef44bc00905ce5f621e8a0868bb4aee9eb7e2aa1b4c39fb2829d6913964ea89&w=1380')",
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
                    <H1 className="text-white mb-6 font-outline-1 ">Encuentra tu hogar ideal</H1>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl">Explora nuestra selección de propiedades en venta y alquiler. Tu próximo hogar está a solo un clic de distancia.</p>
                    <div className="relative w-fit rounded-lg shadow-md bg-white/80 shadow-black/70 border-[1px] border-black/30 p-6">
                        <div className="absolute inset-0 bg-transparent backdrop-blur-sm rounded-lg" />
                        <div className="relative p-6">
                            <Search searchParams={searchParams} onSearch={onSearch} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}