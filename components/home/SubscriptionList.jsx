import CommonBtn from "../common/CommonBtn"
import SectionTitle from "../common/SectionTitle"

const SubscriptionList = () => {
    const plans = [
        {
            id: 1,
            name: "Weekly",
            price: 3.99,
            features: [
                'Access all premium eBooks',
                'Offline reading in your library',
                'Join premium-only discussions'
            ],
            is_most_popular: false
        },
        {
            id: 2,
            name: "Monthly",
            price: 3.99,
            features: [
                'Unlimited premium eBooks',
                'Offline reading in your library',
                'Join premium-only discussions'
            ],
            is_most_popular: true
        },
        {
            id: 3,
            name: "Yearly",
            price: 3.99,
            features: [
                'Access all premium eBooks',
                'Offline reading in your library',
                'Join premium-only discussions'
            ],
            is_most_popular: false
        }
    ]
    // main render
    return (
        <section id="subscription" className="xl:py-20 sm:py-10 py-6 border w-full flex flex-col bg-secondary gap-5 md:gap-10 justify-center items-center">
            <div className="container flex flex-col justify-center items-center gap-5 sm:gap-10">
                <div className="flex flex-col items-center text-white gap-2">
                    <SectionTitle text="Choose Your Subscription" />
                    <p className="sm:text-base text-sm text-center">Trade physical books, read premium eBooks, and connect with readers worldwide.</p>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8">
                    {
                        plans.map((plan) => (
                            <div className="w-full bg-white rounded-xl flex flex-col p-3 md:p-4" key={plan.id}>
                                <h1 className="md:text-3xl text-xl font-semibold capitalize">{plan.name} plan - <span className="text-xl font-normal">${plan.price}</span></h1>
                                <ul className="md:mt-4 mt-2 h-full list-disc pl-5">
                                    {
                                        plan.features.map((feature, index) => (
                                            <li key={index} className="sm:my-2 my-1 text-sm sm:text-base">{feature}</li>
                                        ))
                                    }
                                </ul>
                                <div className="shrink-0 w-full flex lg:flex-row flex-col gap-3 lg:gap-6 mt-4 justify-start items-center">
                                    <CommonBtn className={`lg:max-w-[220px]`}>
                                        Start {plan.name} access
                                    </CommonBtn>
                                    {
                                        plan.is_most_popular && (
                                            <span className="text-sm px-5 py-2 md:py-4 bg-primary text-white shrink-0 font-semibold capitalize rounded-xl w-full lg:w-auto min-h-[44px] md:min-h-[56px] flex justify-center items-center">MOST POPULAR</span>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default SubscriptionList