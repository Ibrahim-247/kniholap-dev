"use client";
import { motion } from "framer-motion";

const SubscriptionPlanDetails = () => {
    return (
        <div className="w-full mt-4">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col gap-3 justify-start items-center"
            >
                <h1 className="text-2xl font-medium">Kniholap Subscription Plans!</h1>
                <p className="text-center text-gray-600 ">
                    Choose the perfect plan to boost your productivity and grow your business
                </p>
            </motion.div>
        </div>
    );
};
export default SubscriptionPlanDetails;