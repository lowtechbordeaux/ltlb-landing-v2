import { Button } from "./ui/button";

export default function Mailchimp({ className }: { className?: string }) {
    return (
        <div className="flex flex-col items-center py-4 bg-persian-green-700 text-white">
            <form action="https://proton.us12.list-manage.com/subscribe/post?u=1a6dc02d62ba4c7ff0d03c95a&amp;id=8c5f545e7c&amp;f_id=004b4de0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                <div className="flex flex-col items-center space-y-2 w-full max-w-64">
                    <h2 className="mb-2">Rester informé</h2>
                    <input
                        className="border rounded-sm w-full p-2 text-sm text-black"
                        type="email"
                        name="EMAIL"
                        id="mce-EMAIL"
                        placeholder="paul@lowtechlab.org"
                        required
                        minLength={4}
                    />
                    <div aria-hidden="true" className="absolute hidden l-[-5000px]">
                        <input type="text" name="b_1a6dc02d62ba4c7ff0d03c95a_8c5f545e7c" tabIndex={-1} value="" />
                    </div>
                    <Button className="bg-persian-green-900 hover:bg-persian-green-600">S'inscrire à la newsletter</Button>
                </div>
            </form >
        </div >
    );
}
