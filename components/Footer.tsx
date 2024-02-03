
export default function Footer() {
    return (
        <footer className="mb-8">
            <div className="w-full border border-dashed border-zinc-300 my-8"></div>
            <div className="container">
                <div className="flex justify-center space-x-8">
                    <img
                        src="/assets/logos/UE-FSE.jpg"
                        className="h-20"
                        alt="Union Européene Fond Social Européen"
                    />
                    <img
                        src="/assets/logos/Region_Nouvelle-Aquitaine_drapeau.jpg"
                        className="h-20"
                        alt="Drapeau region nouvelle aquitaine"
                    />
                </div>
            </div>
        </footer>
    );
}