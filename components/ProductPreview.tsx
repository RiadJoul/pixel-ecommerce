import React, { useEffect } from 'react'
import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { Product, apps } from '@/Types'
import { useLanguage } from '@/context/LanguageContext'
import languages from '../langauges.json'
import { useCart } from '@/context/CartContext'
import { Toggle } from "@/components/ui/toggle"
import { Check } from 'lucide-react'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { v4 as uuidv4 } from 'uuid';


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface Props {
    open: boolean,
    close: any,
    product: Product
}


export default function ProductPreview({ open, close, product }: Props) {
    const { language, toggleLanguage } = useLanguage();
    const currentLanguage = languages[language];
    const [withPanicButton, setWithPanicButton] = useState<boolean>(false);
    const [withUsbWipe, setWithUsbWipe] = useState<boolean>(false);
    const [withVPN, setWithVPN] = useState<boolean>(false);


    const [selectedApps, setSelectedApps] = useState<string[]>([]);
    const { addToCart, cart } = useCart();

    const removeAppFromList = (stringToRemove: string) => {
        const updatedStrings = selectedApps.filter((str) => str !== stringToRemove);

        setSelectedApps(updatedStrings);
    };

    useEffect(() => {
        console.log(cart)
    }, [cart])


    const handleClick = () => {
    
    }

    return (
        open && <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={close}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 hidden bg-black bg-opacity-80 transition-opacity md:block" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            enterTo="opacity-100 translate-y-0 md:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 md:scale-100"
                            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                        >
                            <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                                <div className="relative rounded-lg flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                    <button
                                        type="button"
                                        className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                        onClick={close}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                        <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                            <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
                                        </div>
                                        <div className="sm:col-span-8 lg:col-span-7">
                                            <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.title}</h2>

                                            <section aria-labelledby="information-heading" className="mt-2">
                                                <h3 id="information-heading" className="sr-only">
                                                    Product information
                                                </h3>

                                                <p className="text-2xl text-gray-900">€{product.price}</p>


                                            </section>

                                            <section aria-labelledby="options-heading" className="mt-10">
                                                <h3 id="options-heading" className="sr-only">
                                                    Product options
                                                </h3>

                                                <div>
                                                    {/* Apps */}
                                                    <div>
                                                        <h4 className="text-sm font-medium text-gray-900 pb-2">Apps you would like in this device?</h4>
                                                        <div className="grid grid-cols-2 lg:grid-cols-4 items-start gap-1">
                                                            {
                                                                apps.map((app: string) => (
                                                                    <Toggle key={app} variant="outline" aria-label="Toggle italic" onClick={() => {
                                                                        selectedApps.includes(app) ? removeAppFromList(app) :
                                                                            setSelectedApps([...selectedApps, app])
                                                                    }}>
                                                                        {selectedApps.includes(app) && <Check className='pr-1' />}
                                                                        {app}
                                                                    </Toggle>
                                                                ))
                                                            }


                                                        </div>


                                                    </div>

                                                    {/* Panic */}
                                                    <div className="mt-5">
                                                        <div className="flex items-center justify-between">
                                                            <h4 className="text-sm font-medium text-gray-900">Would you like the panic button in this device?</h4>
                                                            <div className="flex items-center space-x-2">
                                                                <Switch id="panic-button" onClick={() => setWithPanicButton(prev => !prev)} />
                                                                <Label htmlFor="panic-button">{withPanicButton ? 'Yes' : 'No'}</Label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* USB wipe */}
                                                    <div className="mt-5">
                                                        <div className="flex items-center justify-between">
                                                            <h4 className="text-sm font-medium text-gray-900">Would you like USB wipe in this device?</h4>
                                                            <div className="flex items-center space-x-2">
                                                                <Switch id="panic-button" onClick={() => setWithUsbWipe(prev => !prev)} />
                                                                <Label htmlFor="panic-button">{withUsbWipe ? 'Yes' : 'No'}</Label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* VPN */}
                                                    <div className="mt-5">
                                                        <div className="flex items-center justify-between">
                                                            <h4 className="text-sm font-medium text-gray-900">Would you like Mullvad VPN? (valid for 1 year)</h4>
                                                            <div className="flex items-center space-x-2">
                                                                <Switch id="panic-button" onClick={() => setWithVPN(prev => !prev)} />
                                                                <Label htmlFor="panic-button">{withVPN ? 'Yes' : 'No'}</Label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button
                                                        onClick={handleClick}
                                                        className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
                                                    >
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div >
            </Dialog >
        </Transition.Root >
    )
}
