import Card from "./Card";

import "./WorkspaceCard.css";

function WorkspaceCard({
    title,
    children,
}){

    return(

        <Card className="workspace-card">

            <h2>{title}</h2>

            {children}

        </Card>

    );

}

export default WorkspaceCard;