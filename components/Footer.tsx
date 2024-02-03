import Link from "next/link";

export default function Footer() {
    return (
        <footer className="">
            <div className="w-full border border-dashed border-zinc-300 my-8"></div>
            <div className="container mb-8 flex flex-wrap -mx-4 -my-2">
                <div className="mx-4 my-2">
                    <h3 className="text-xl font-medium text-black mb-1">Low-Tech Bordeaux</h3>
                    <div>
                        <p>Au Garage Moderne</p>
                        <p>1, rue des Étrangers</p>
                        <p>33300 Bordeaux</p>
                        <p>FRANCE</p>
                    </div>
                </div>
                <div className="mx-4 my-2">
                    <h3 className="text-lg font-medium text-black mb-1">Mail</h3>
                    <p className="underline">contact at lowtechbordeaux.org</p>
                </div>


                <div className="mx-4 my-2">
                    <h3 className="text-lg font-medium text-black mb-1">
                        Avec le soutien de
                    </h3>
                    <div className="flex gap-8">
                        <img
                            src="./assets/images/UE-FSE.jpg"
                            className="h-20"
                            alt="Union Européene Fond Social Européen"
                        />
                        <img
                            src="./assets/images/Region_Nouvelle-Aquitaine_drapeau.jpg"
                            className="h-20"
                            alt="Drapeau region nouvelle aquitaine"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}