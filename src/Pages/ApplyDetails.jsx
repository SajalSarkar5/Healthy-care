import { useParams } from "react-router-dom";


const ApplyDetails = () => {

    const {id} = useParams()

    return (
        <div>
            <h1>details page</h1>
        </div>
    );
};

export default ApplyDetails;