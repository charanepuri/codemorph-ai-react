import PageHeader from "../../components/common/PageHeader";
import WorkspaceCard from "../../components/common/WorkspaceCard";

function BugFinder(){

    return(

        <>

        <PageHeader

            title="Bug Finder"

            description="Find syntax, logic and runtime issues."

        />

        <WorkspaceCard title="Bug Analysis">

            <p>

                AI bug detection coming in Phase 8.

            </p>

        </WorkspaceCard>

        </>

    );

}

export default BugFinder;