import Follow from "./Follow"
import Mailchimp from "./Mailchimp";

export default function Footer() {
    return (
        <footer className="">
            <Follow className='bg-persian-green-900 py-8' />
            <Mailchimp />
            <div className="container py-8">
                <div className="flex flex-wrap justify-center">
                    <div
                        className="h-20 w-full sm:w-40 flex items-center px-2">
                        <iframe
                            id="haWidget"
                            allowTransparency
                            src="https://www.helloasso.com/associations/low-tech-bordeaux/adhesions/adhesion-ltb/widget-bouton"
                            className="h-[70px] w-full"
                        />
                    </div>
                    <img
                        src="/assets/logos/UE-FSE.jpg"
                        className="h-20 px-2"
                        alt="Union Européene Fond Social Européen"
                    />
                    <img
                        src="/assets/logos/Region_Nouvelle-Aquitaine_drapeau.jpg"
                        className="h-20 px-2"
                        alt="Drapeau region nouvelle aquitaine"
                    />
                </div>
            </div>
        </footer >
    );
}