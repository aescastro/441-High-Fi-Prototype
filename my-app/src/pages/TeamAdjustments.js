import { useLocation } from "react-router-dom";


const TeamAdjustments = () => {
    const location = useLocation();
    const { numberOfTeams, groupType, groupBy } = location.state;

}

export default TeamAdjustments;