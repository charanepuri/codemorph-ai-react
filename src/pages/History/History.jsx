import { useEffect, useState } from "react";

import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

import {
  clearHistory,
  getHistory,
} from "../../utils/history";

import "./History.css";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  function handleClear() {
    clearHistory();

    setHistory([]);
  }

  return (
    <>
      <PageHeader
        title="Conversion History"
        description="Recently converted code."
      />

      {history.length > 0 && (
        <Button onClick={handleClear}>
          Clear History
        </Button>
      )}

      <div className="history-list">
        {history.length === 0 ? (
          <Card>
            <h3>No history found.</h3>
          </Card>
        ) : (
          history.map((item) => (
            <Card key={item.id}>
              <h3>
                {item.sourceLanguage} →{" "}
                {item.targetLanguage}
              </h3>

              <p>
                {new Date(
                  item.createdAt
                ).toLocaleString()}
              </p>
            </Card>
          ))
        )}
      </div>
    </>
  );
}

export default History;