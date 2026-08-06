import PageHeader from "../../components/common/PageHeader";
import WorkspaceCard from "../../components/common/WorkspaceCard";

function Converter(){

    return(

        <>

        <PageHeader

            title="AI Code Converter"

            description="Convert source code from one programming language to another using artificial intelligence."

        />

        <WorkspaceCard title="Conversion Workspace">

            <p>

                Monaco Editor will be integrated in Phase 3.

            </p>

        </WorkspaceCard>

        </>

    );

}

export default Converter;