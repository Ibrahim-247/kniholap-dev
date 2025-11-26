// app/not-found.tsx   (Next.js 13+ App Router) 
// OR pages/404.tsx if you're using Pages Router

import { Result } from "antd";
const NotFound = () => {
    return (
        <div className="container flex flex-col items-center justify-center">
            <Result
                status="404"
                title="404: Not Found"
                subTitle="Sorry, the  book you visited does not exist."
            />
            {/* Optional cute illustration or extra message */}
            <div className="mt-16 opacity-70">
                <p className="text-gray-500 italic">
                    &ldquo;Not all who wander are lost... but this page definitely is.&#34;
                </p>
            </div>
        </div>
    );
};

export default NotFound;