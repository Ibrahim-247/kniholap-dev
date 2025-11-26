import ChangePassword from "./ChangePassword";
import PersonalInfrmationForm from "./PersonalInfrmationForm";

const PersonalInformation = () => {
    return (
        <div className="w-full grid lg:grid-cols-2 gap-6 xl:px-12 pt-10">
            <PersonalInfrmationForm />
            <ChangePassword />
        </div>
    );
};
export default PersonalInformation;