import { FaHistory } from "react-icons/fa";

import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

import "./History.css";

function History() {
  return (
    <>
      <PageHeader
        title="Conversion History"
        description="View your recent AI conversions and quickly reopen previous work."
      />

      <Card>
        <div className="history-empty">
          <FaHistory />

          <h2>No History Available</h2>

          <p>
            Your previous conversions will appear here once you start using
            CodeMorph AI.
          </p>

          <Button>Start Converting</Button>
        </div>
      </Card>
    </>
  );
}

export default History;